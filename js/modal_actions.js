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
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (!document.body.classList.contains("modal-open")) {
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.paddingRight = `0px`;
  }
  document.body.classList.toggle("modal-open");
  refs.backdrop.classList.toggle("is-hidden");
}
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    toggleModal();
  }
}
