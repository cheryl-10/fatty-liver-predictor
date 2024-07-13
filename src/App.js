import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Info from './components/Info';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (data) => {
    axios.post('http://localhost:5000/predict', data)
      .then(response => {
        setResult(response.data.result);
      })
      .catch(error => {
        console.error('Error making the request:', error);
        setError('There was an error making the request.');
      });
  };

  const handlePredictAgain = () => {
    setResult(null); // Clear the previous result
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form onSubmit={handleSubmit} />} />
          <Route path="/result" element={<Result result={result} onPredictAgain={handlePredictAgain} />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        {error && <p>{error}</p>}
      </div>
    </Router>
  );
}

export default App;
