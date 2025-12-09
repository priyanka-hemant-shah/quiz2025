import './App.css';

function Results({ results }) {
  const correctCount = results.filter((r) => r.isCorrect).length;
  const incorrectCount = results.length - correctCount;
  const percentage = ((correctCount / results.length) * 100).toFixed(2);

  return (
    <div className="App">
      <div className='App-header'>QuizMania</div>
      <h1 className="App-heading1">Quiz <span className='secondary-color'>Completed!</span></h1>

      <div className="formBox" style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="form-group">
          <label style={{ fontSize: '20px', fontWeight: 'bold' }}>Summary</label>
          <div style={{ marginTop: 15, fontSize: '18px' }}>
            <p>Questions: <span style={{ color: '#B92B5D', fontWeight: 'bold' }}>{results.length}</span></p>
            <p>Correct: <span style={{ color: '#28a745', fontWeight: 'bold' }}>{correctCount}</span></p>
            <p>Incorrect: <span style={{ color: '#dc3545', fontWeight: 'bold' }}>{incorrectCount}</span></p>
            <p>Score: <span style={{ color: '#B92B5D', fontWeight: 'bold' }}>{percentage}%</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
