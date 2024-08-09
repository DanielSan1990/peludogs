document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll('.modal-open');
    const closeModalButtons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.bg-smoke-light');
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = button.getAttribute('data-modal-id');
        document.getElementById(modalId).classList.remove('modal-hidden');
      });
    });
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.bg-smoke-light').classList.add('modal-hidden');
      });
    });
  
    modals.forEach(modal => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.add('modal-hidden');
        }
      });
    });
  });
  