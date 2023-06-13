const refs = {
  openModalBtnHeader: document.querySelector('[data-modal-open-1]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtnHeader.addEventListener('click', toggleModal);
refs.openModalBtnOffer.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
