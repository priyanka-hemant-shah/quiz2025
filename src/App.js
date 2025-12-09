import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>QuizMania</div>
      <h1 className="App-heading1">Welcome to <span className='heading1-thin secondary-color'>Quiz</span><span className='secondary-color'>Mania</span></h1>

      <div className="formBox">
        <div className="form-group">
          <label>Full name</label>
          <input type="text" placeholder="Full name" className="theme-input" />
        </div>
      </div>

      <div className="formBox">
        <div className="form-group">
          <label>Please select topic to continue</label>
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="topic" value="Javascript Basic" className="theme-input" />
              <span>Javascript Basic</span>
            </label>
            <label className="radio-item">
              <input type="radio" name="topic" value="Angular Basic" className="theme-input" />
              <span>Angular Basic</span>
            </label>
          </div>
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="topic" value="React.js Advance" className="theme-input" />
              <span>React.js Advance</span>
            </label>
            <label className="radio-item">
              <input type="radio" name="topic" value="Flutter" className="theme-input" />
              <span>Flutter</span>
            </label>
          </div>

          <button className="theme-button primary-button">Start Quiz</button>
        </div>
      </div>

    </div>
  );
}

export default App;
