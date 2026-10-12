document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#last-bid-modal");

  if (!modal) return;

  const closeButtons = modal.querySelectorAll("[data-close-modal]");
  const formHeading = document.querySelector("#form-title");

  const closeModal = () => {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  };

  closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (button.tagName === "A") event.preventDefault();
      closeModal();

      if (button.tagName === "A" && formHeading) {
        formHeading.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "true");
  }
});
