const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title }) {
  return (
    <Layout title={title}>
      <div className='container-auth'>
        <h2>Введите данные учетной записи:</h2>
        <form className='sign-in'>
          <input className='registration__form-input' type='email' name='email' placeholder='email' />
          <input className='registration__form-input' type='password' name='password' placeholder='password' />
          <button className='form__input-button'>Log-in</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = AuthorizationPage;