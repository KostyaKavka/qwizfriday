const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <div className='container-registration'>
        <h2>Введите данные для регистрации:</h2>
        <form className='sign-up'>
          <input type='text' name='name' placeholder='name' />
          <input type='email' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password' />
          <input type='password' name='cpassword' placeholder='cpassword' />
          <button>Зарегистрироваться</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;