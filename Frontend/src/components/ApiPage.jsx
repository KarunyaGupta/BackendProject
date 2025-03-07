import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ApiPage = () => {
  const { type } = useParams();
  const [result, setResult] = useState(null);

  const generateResult = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/${type}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getTitle = () => {
    const titles = {
      'random-code': 'Random Code Generator',
      'random-color': 'Random Color Generator',
      'random-quote': 'Random Quote Generator',
      'random-joke': 'Random Joke Generator',
      'random-recipe': 'Random Recipe Generator',
      'random-movie': 'Random Movie Generator',
      'random-book': 'Random Book Generator',
      'random-fact': 'Random Fact Generator',
      'random-activity': 'Random Activity Generator',
      'random-name': 'Random Name Generator'
    };
    return titles[type] || 'API Generator';
  };

  const renderResult = () => {
    if (!result) return null;

    if (type === 'random-color') {
      return (
        <div 
          style={{ 
            backgroundColor: result.color,
            width: '200px',
            height: '200px',
            margin: '0 auto',
            borderRadius: '8px'
          }}
        />
      );
    }

    if (type === 'random-recipe') {
      return (
        <div className="text-start">
          <h3>{result.name}</h3>
          <p><strong>Category:</strong> {result.category}</p>
          <p><strong>Time:</strong> {result.time} minutes</p>
          <p><strong>Difficulty:</strong> {result.difficulty}</p>
        </div>
      );
    }

    if (type === 'random-movie' || type === 'random-book') {
      return (
        <div className="text-start">
          <h3>{result.title}</h3>
          <p><strong>Genre:</strong> {result.genre}</p>
          <p><strong>Year:</strong> {result.year}</p>
          <p>{result.description}</p>
        </div>
      );
    }

    return <h3>{result.code || result.quote || result.joke || result.fact || result.activity || result.name}</h3>;
  };

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-primary mb-4">← Back to Home</Link>
      <h1 className="text-center mb-4">{getTitle()}</h1>
      <div className="text-center">
        <button onClick={generateResult} className="btn btn-primary btn-lg mb-4">
          Generate
        </button>
        {result && (
          <div className="result-card">
            {renderResult()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiPage;
