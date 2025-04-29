const API_URL = 'http://localhost:3000';

export const analyzeCode = async (code) => {
  try {
    const response = await fetch(`${API_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ss: code }),
    });
    const data = await response.json();
    return data.msg;
  } catch (error) {
    console.error('Error analyzing code:', error);
    throw error;
  }
};
