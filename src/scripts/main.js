'use strict';

// write your code here
const logo = document.querySelector('.logo');

function success(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
}

function error(message) {
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = message;
  document.body.appendChild(div);
}

const advicePromise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

advicePromise1.then((reason) => success(reason));

const advicePromise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
});

advicePromise2.catch((reason) => error(reason));
