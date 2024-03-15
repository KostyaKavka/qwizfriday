const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <div className='container-auth'>
        <h2>Заполните форму регистрации:</h2>
        <form className='sign-up'>
          <input className='registration__form-input' type='text' name='name' placeholder='name' />
          <input className='registration__form-input' type='email' name='email' placeholder='email' />
          <input className='registration__form-input' type='password' name='password' placeholder='password' />
          <input className='registration__form-input' type='password' name='cpassword' placeholder='repeat password' />
          <button className='form__input-button'>Registration</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;