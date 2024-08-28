'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.keyCode === 27) {
    closeModal();
  }
});

// close modal when click outside the modal
overlay.addEventListener('click', closeModal);
