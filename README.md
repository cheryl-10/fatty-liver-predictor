# Fatty Liver Predictor

A full-stack machine learning web application that predicts the likelihood of fatty liver disease using key clinical indicators. This project integrates a **Flask-based backend** with a trained ML model and a **React frontend** for an intuitive user experience.

---

## Overview

Fatty liver disease is a growing health concern worldwide. This application allows users (or healthcare practitioners) to enter medical information like BMI, liver enzymes, and diabetes status to receive a prediction: **Fatty Liver** or **No Fatty Liver**.

- 🔍 Built for **early screening**
- 🤖 Powered by **Random Forest Classifier**
- 🌐 Full-stack implementation using **React** + **Flask**
- 🔄 Real-time prediction via API
- 🧪 Trained on real-world clinical dataset

---

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React, React Router, Axios, Bootstrap |
| Backend    | Flask, Scikit-learn, Pandas |
| ML Model   | RandomForestClassifier      |
| Communication | REST API + CORS          |

---

## Project Structure

```

fatty-liver-predictor/
├── backend/
│   ├── app.py               # Flask API with ML model
│   ├── data.csv             # Clinical dataset for training
│   └── requirements.txt     # Backend dependencies
└── frontend/
├── src/
│   ├── components/
│   │   ├── Form.js      # Input form for patient data
│   │   ├── Result.js    # Display prediction result
│   │   └── Info.js      # Health info about fatty liver
│   ├── App.js           # Routing and API logic
│   └── index.js
├── public/
└── package.json         # Frontend dependencies

````

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/cheryl-10/fatty-liver-predictor.git
cd fatty-liver-predictor
````

---

### 2. Run the Flask Backend

#### Step into the backend folder:

```bash
cd backend
```

#### Install dependencies:

```bash
pip install -r requirements.txt
```

#### Make sure `data.csv` is present and formatted with columns:

`age`, `bmi`, `diabetes`, `ast`, `alt`, `platelet`, `albumin`, `fatty_liver`

#### Start the backend server:

```bash
python app.py
```

> Server will run on `http://localhost:5000`

---

### 3. Run the React Frontend

#### Open a new terminal and go to the frontend:

```bash
cd frontend
```

#### Install React dependencies:

```bash
npm install
```

#### Start the development server:

```bash
npm start
```

> App will open on `http://localhost:3000`

---

## API Details

### `POST /predict` (Flask Backend)

**Endpoint**: `http://localhost:5000/predict`

**Input JSON Format**:

```json
{
  "age": 50,
  "bmi": 24.5,
  "diabetes": 1,
  "ast": 30,
  "alt": 40,
  "platelet": 250,
  "albumin": 3.8
}
```

**Response**:

```json
{
  "result": "FATTY LIVER\n"
}
```

---

## 🎯 Key Features

* 🔄 Seamless integration between React and Flask
* 🧠 Machine learning predictions using clinical features
* 📱 Responsive design using Bootstrap
* 🧪 Local testing and real-time API response
* 🧰 CORS-enabled backend for secure frontend communication

---

## 🧠 Machine Learning

* **Model**: `RandomForestClassifier`
* **Preprocessing**: `StandardScaler`
* **Train/Test Split**: 80/20
* **Evaluation**: Optimized on accuracy and generalization

---

## 👩‍💻 Developed By

**Cheryl Chaudhari**
