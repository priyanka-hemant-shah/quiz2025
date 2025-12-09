import './App.css';
import { useState, useEffect } from 'react';
import Results from './Results';

function Question({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState([]);
  const [isFinished, setFinished] = useState(false);

  // timer logic
  useEffect(() => {
    setTimer(questions.questions[currentQuestion].timeLimit);
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          handleNext();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestion]);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
  }, [timer]);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    const q = questions.questions[currentQuestion];
    const userAnswer = selectedAnswers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;

    setResults((prev) => [
      ...prev,
      {
        questionId: q.id,
        question: q.question,
        userAnswer: userAnswer || 'Not answered',
        correctAnswer: q.correctAnswer,
        isCorrect: isCorrect
      }
    ]);

    if (currentQuestion < questions.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="App">
      {questions?.questions?.length > 0 ? (
        <div>
          {isFinished ? (
            <Results results={results} />
          ) : (
           <div>
             <div>Time Left: {timer} seconds</div>
             {(() => {
               const q = questions.questions[currentQuestion];
               const index = currentQuestion;
               return (
                 <div key={q.id} className="formBox" style={{marginBottom: 30}}>
                   <div className="form-group">
                     <label>{`${index + 1}. ${q.question}`}</label>
                     <div className="radio-group question-options">
                       {q.options.map((option, idx) => (
                         <label key={idx} className="radio-item">
                           <input
                             type="radio"
                             name={q.id}
                             value={option.charAt(0)}
                             className="theme-input"
                             checked={selectedAnswers[q.id] === option.charAt(0)}
                             onChange={() => handleAnswerChange(q.id, option.charAt(0))}
                           />
                           <span>{option}</span>
                         </label>
                       ))}
                     </div>
                   </div>
                   <button
                     type="button"
                     className="theme-button primary-button"
                     onClick={handleNext}
                     disabled={currentQuestion === questions.questions.length - 1}
                     style={{ marginTop: 20 }}
                   >
                     {currentQuestion === questions.questions.length - 1 ? 'Finish' : 'Next'}
                   </button>
                 </div>
               );
             })()}
           </div>
          )}
         </div>
       ) : (
         <div>No questions available.</div>
       )}
 
     </div>
   );
 }
 
 export default Question;
