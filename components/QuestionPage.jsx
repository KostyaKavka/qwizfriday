const React = require('react');
const QuestionCard = require('./QuestionCard');
const Layout = require('./Layout');



function QuestionPage({ title, question }) {
  console.log(question);
  return (
    <Layout title={title} >

    <div className="question-page">
    <QuestionCard question={question}/>
    </div>
      
      </Layout>
  );
  }
module.exports = QuestionPage;