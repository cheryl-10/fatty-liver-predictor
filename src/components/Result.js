import React from 'react';
import { useNavigate } from 'react-router-dom';
import './result.css';

const Result = ({ result, onPredictAgain }) => {
  const navigate = useNavigate();

  const handlePredictAgain = () => {
    onPredictAgain();
    navigate('/');
  };

  return (
    <div className="result-container">
      <h2 className="result-title">Prediction Result</h2>
      <p className="result-content">{result}</p>
      <button className="result-button" onClick={handlePredictAgain}>Predict Again</button>
    </div>
  );
};

export default Result;
