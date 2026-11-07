document.addEventListener("DOMContentLoaded", () => {
  // Material Matrix Tab Switching
  const tabBtns = document.querySelectorAll(".mat-tab-btn");
  const panes = document.querySelectorAll(".mat-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });

  // Material "Get Quote" button auto-select link
  const selectMatBtns = document.querySelectorAll(".select-material-btn");
  selectMatBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const materialName = btn.getAttribute("data-material");
      const materialSelect = document.getElementById("materialSelect");
      if (materialSelect && materialName) {
        for (let option of materialSelect.options) {
          if (option.text.includes(materialName)) {
            materialSelect.value = option.value;
            break;
          }
        }
      }
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
      if (navMenu.style.display === "flex") {
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "70px";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.background = "#12161a";
        navMenu.style.padding = "1.5rem";
        navMenu.style.borderBottom = "1px solid #2d333b";
      }
    });
  }
});