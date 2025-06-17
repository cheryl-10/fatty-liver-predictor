# Fatty Liver Predictor

A machine learning-based web application that predicts the likelihood of fatty liver disease using basic health parameters. This tool assists early screening and risk assessment, making it useful for both healthcare professionals and individuals.

## Features

* Predicts fatty liver risk using trained ML models
* Interactive web interface with user input form
* Real-time prediction output
* Lightweight and easy to deploy locally or on cloud platforms

## Repository Structure

```
fatty-liver-predictor/
├── app.py                  # Main app file (e.g., for Streamlit or Flask)
├── model.pkl               # Trained ML model
├── liver_data.csv          # Dataset used for training
├── requirements.txt        # Required Python libraries
├── README.md               # This file
└── utils.py                # Preprocessing and utility functions (if any)
```

## Dataset

The project uses the dummy dataset which includes features like:

* Age
* Gender
* Total Bilirubin
* Direct Bilirubin
* Alkaline Phosphatase
* SGPT, SGOT
* Total Proteins
* Albumin and A/G Ratio
