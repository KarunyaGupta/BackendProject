import { useState } from 'react';

const CodeEditor = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="editor-textarea"
        rows={15}
      />
      <button onClick={handleSubmit} className="submit-btn">
        Analyze Code
      </button>
    </div>
  );
};

export default CodeEditor;
