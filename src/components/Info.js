import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Info.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="submit-container">
        <Button 
          className="submit"
          onClick={() => navigate('/')}
        >
          ← Go Back to Prediction
        </Button>
      </div>
      <h1 className="text-center">Blood Sugar Levels and Diabetes Detection</h1>
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Biological Ref Interval</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
            BMI (Body Mass Index)<br />
            <a 
                href="https://www.medicinenet.com/how_do_i_calculate_my_bmi/article.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to calculate
              </a>    
        </td>
            <td>
                &lt; 18.5 - Underweight<br />
                18.5 - 24.9 - Normal weight<br />
                25 - 29.9 - Overweight<br />
                &ge; 30 - Obesity
            </td>
            <td>kg/m^2</td>
            </tr>
            <tr>
            <td>Glucose (for diabetes)</td>
            <td>
                &lt; 100 - Non diabetic<br />
                100-125 - Prediabetic<br />
                &ge; 126 - Suggestive of Diabetes mellitus<br />
                80-130 - Glycemic target in known diabetic
            </td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>AST (aspartate transaminase)</td>
            <td>10 - 40</td>
            <td>U/L</td>
          </tr>
          <tr>
          <td>ALT (alanine transaminase)</td>
            <td>7 - 56</td>
            <td>U/L</td>
          </tr>
          <tr>
            <td>Platelet Count</td>
            <td>150 - 410</td>
            <td>10^9/L</td>
          </tr>
          <tr>
            <td>Albumin</td>
            <td>3.5 - 5.1</td>
            <td>gms/dL</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default About;
