document.querySelectorAll(".day").forEach(day => {
  day.addEventListener("click", () => {
    const url = day.getAttribute("data-link");
    if (url) {
      window.location.href = url;
    }
  });
});
