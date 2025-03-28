document.addEventListener("DOMContentLoaded", function () {
    include("header", "templates/header.html");
    include("footer", "templates/footer.html");
  
    // Also attach menu toggle logic once header loads
    setTimeout(() => {
      const toggleBtn = document.getElementById("menuToggle");
      const menuIcon = document.getElementById("menuIcon");
      const mobileMenu = document.getElementById("mobileMenu");
  
      let menuOpen = false;
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          menuOpen = !menuOpen;
          if (menuOpen) {
            mobileMenu.classList.remove("hide", "hidden");
            mobileMenu.classList.add("show");
            menuIcon.classList.replace("fa-bars", "fa-times");
          } else {
            mobileMenu.classList.remove("show");
            mobileMenu.classList.add("hide");
            menuIcon.classList.replace("fa-times", "fa-bars");
            setTimeout(() => mobileMenu.classList.add("hidden"), 300);
          }
        });
      }
    }, 100);
  });
  
  function include(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  }
  