const React = require('react');

function QuestionPage({ children }) {
  return (
    <div className="question-page">
      {/* Ячейка для размещения QuestionCard */}
      <div className="question-card-container">
        {children}
      </div>
    </div>
  )
  }
module.exports = QuestionPage;