const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title }) {
  return (
    <Layout title={title}>
      <div className='container'>
        <h2>Введите данные учетной записи</h2>
        <form className='sign-in'>
          <input type='email' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password' />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = AuthorizationPage;