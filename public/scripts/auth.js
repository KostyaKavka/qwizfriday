const regForm = document.querySelector('.sign-up');
const authForm = document.querySelector('.sign-in')

if (regForm) {
  // повесили слушатель событий по кнопке
  regForm.addEventListener('submit', async (e) => {
    // останавливаем дефолтное поведение
    e.preventDefault();

    // в цель события попадают форма в виде объекта,
    // где ключ - name, значение - value
    const {
      email, name, password, cpassword,
    } = e.target;
    if (email.value.trim() === '' || name.value.trim() === '' || password.value.trim() === '' || cpassword.value.trim() === '') {
      alert('Заполните все поля!');
    } else {
      if (password.value === cpassword.value) {
        const user = {
          email: email.value,
          name: name.value,
          password: password.value,
        };

        // отправили информацию с userom на сервер
        const res = await fetch('/api/auth/registration', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(user),
        });

        const data = await res.json();

        if (data.message === 'success') {
          window.location.assign('/');
          return;
        }
      }
      console.log('пароли не совпадают');
    }
  });
}

if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}