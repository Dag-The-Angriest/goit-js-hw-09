const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', e => {
  //   loadFromLS(formData.email);
  const loaded = loadFromLS('formData');
  //   console.log(loaded);
  formData.email = loaded.email;
  formData.message = loaded.message;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
  //   console.log(formData);
});

const formData = {
  email: '',
  message: '',
};

form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.clear();
  form.reset();
});
form.addEventListener('input', e => {
  const formInput = new FormData(form);
  const email = formInput.get('email');
  const message = formInput.get('message');
  formData.email = email.trim();
  formData.message = message.trim();
  saveToLS('formData', formData);
  //   console.log(formData);
});

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
function loadFromLS(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch {
    return jsonData ?? defaultValue;
  }
}
