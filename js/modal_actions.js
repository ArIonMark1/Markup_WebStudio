const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector(".backdrop"),
};
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hiden");
}
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    toggleModal();
  }
}
