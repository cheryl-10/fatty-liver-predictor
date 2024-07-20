from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import traceback

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

# Load and preprocess the dataset
data = pd.read_csv('data.csv')
X = data[['age', 'bmi', 'diabetes', 'ast', 'alt', 'platelet', 'albumin']]
y = data['fatty_liver']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
model = RandomForestClassifier()
model.fit(X_train_scaled, y_train)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json()
        print(f"Received input data: {input_data}")

        # Validate and preprocess input data
        input_df = pd.DataFrame([input_data])
        input_scaled = scaler.transform(input_df)
        prediction = model.predict(input_scaled)
        result = 'FATTY LIVER\n' if prediction[0] == 1 else 'NO FATTY LIVER\n'
        return jsonify({'result': result})
    except Exception as e:
        print(f"Error during prediction: {e}")
        print(traceback.format_exc())
        return jsonify({'error': str(e)}), 500

@app.route('/test', methods=['GET'])
def test():
    return "Server is running", 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
