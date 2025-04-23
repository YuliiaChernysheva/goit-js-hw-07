const form = document.querySelector('.login-form');
const ulElem = document.querySelector('.label-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    userEmail: email,
    userPassword: password,
  };

  console.log(data);

  const markup = commentTemplate(data);
  ulElem.insertAdjacentHTML('afterbegin', markup);

  form.reset();
});

function commentTemplate(data) {
  return `
    <li>
      <p>Email: ${data.userEmail}</p>
      <p>Password: ${data.userPassword}</p>
    </li>`;
}
