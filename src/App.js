import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [topic, setTopic] = useState('');
  const [questionsData, setQuestionsData] = useState(null);
  const questions = {
    "categories": [
      {
        "id": "js_basics",
        "name": "JavaScript Basics",
        "questions": [
          {
            "id": "q1",
            "question": "What is the correct syntax for referring to an external script called 'script.js'?",
            "options": [
              "A. <script name='script.js'>",
              "B. <script href='script.js'>",
              "C. <script src='script.js'>",
              "D. <script file='script.js'>"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "q2",
            "question": "Which company developed JavaScript?",
            "options": [
              "A. Microsoft",
              "B. Netscape",
              "C. Google",
              "D. Mozilla"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          }
        ]
      }
    ]
  }

  useEffect(() => {
    // console.log("Selected topic:", topic);
    if (topic) {
      setQuestionsData(questions.categories.find(cat => cat.name === topic));
    }
  }, [topic]);

  return (
    <div className="App">
      <div className='App-header'>QuizMania</div>
      {isQuizStarted ?
        <Question
          questions={questionsData} />
        :
        <>
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
                  <input type="radio" name="topic" value="JavaScript Basics" className="theme-input" onChange={(e) => setTopic(e.target.value)} />
                  <span>Javascript Basic</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="topic" value="Angular Basic" className="theme-input" onChange={(e) => setTopic(e.target.value)} />
                  <span>Angular Basic</span>
                </label>
              </div>
              <div className="radio-group">
                <label className="radio-item">
                  <input type="radio" name="topic" value="React.js Advance" className="theme-input" onChange={(e) => setTopic(e.target.value)} />
                  <span>React.js Advance</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="topic" value="Flutter" className="theme-input" onChange={(e) => setTopic(e.target.value)} />
                  <span>Flutter</span>
                </label>
              </div>

              <button className="theme-button primary-button" style={{ marginTop: 20 }}
                onClick={() => setIsQuizStarted(true)}>Start Quiz</button>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
