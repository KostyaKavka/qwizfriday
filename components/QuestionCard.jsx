const React = require('react');

function QuestionCard({ question, category }) {
  return (
    <div className='question-item'> 
    <div className='cards' > 
<img className='question-img' src={question.img} alt="картинка" />
<p className='question-title'> 
{question.question}
</p>
<form className='form-answer'>
  <input className='answer' name='answer' type="text" placeholder='введите ответ'/>
  <button type='submit' className='btn-answer'> Ответить </button>
</form>
<a  className='btn-next' href={`/ques/${question.id + 1}`}> Next </a>
    </div>
    </div>
  );
  }
module.exports = QuestionCard;

// href={`/category/${category.id}/ques/${question.id + 1}`}>