import React, { useState } from 'react';
import CustomNavbar from './Navbar';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    diabetes: '',
    ast: '',
    alt: '',
    platelet: '',
    albumin: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/result');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CustomNavbar />
        <div className='contain'>
          <div className='containers'>
            <div className='header'>
              <div className='text'>NAFLD (Non-Alcoholic Fatty Liver Disease)</div>
            </div>
            <div className='inputs'>
              <div className='group'>
                <div className='input'>
                  <label>Age:</label>
                  <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    required 
                    min="0" 
                  />
                </div>
                <div className='input'>
                  <label>BMI:</label>
                  <input 
                    type="number" 
                    name="bmi" 
                    value={formData.bmi} 
                    onChange={handleChange} 
                    required 
                    step="0.1" 
                    min="0"
                  />
                </div>
                <div className='input'>
                  <label>Diabetes Yes:1, No:0</label>
                  <input 
                    type="number" 
                    name="diabetes" 
                    value={formData.diabetes} 
                    onChange={handleChange} 
                    required 
                    min="0" 
                  />
                </div>
                <div className='input'>
                  <label>AST:</label>
                  <input 
                    type="number" 
                    name="ast" 
                    value={formData.ast} 
                    onChange={handleChange} 
                    required 
                    min="0" 
                  />
                </div>
                <div className='input'>
                  <label>ALT:</label>
                  <input 
                    type="number" 
                    name="alt" 
                    value={formData.alt} 
                    onChange={handleChange} 
                    required 
                    min="0" 
                  />
                </div>
                <div className='input'>
                  <label>Platelet Count:</label>
                  <input 
                    type="number" 
                    name="platelet" 
                    value={formData.platelet} 
                    onChange={handleChange} 
                    required 
                    min="0" 
                  />
                </div>
                <div className='input'>
                  <label>Albumin:</label>
                  <input 
                    type="number" 
                    name="albumin" 
                    value={formData.albumin} 
                    onChange={handleChange} 
                    required 
                    step="0.1" 
                    min="0" 
                  />
                </div>
              </div>
            </div>
            <div className='submit-container'>
              <button type="submit" className='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
