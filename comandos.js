 const form = document.getElementById("signupForm");
    const popup = document.getElementById("successPopup");
    const closePopup = document.getElementById("closePopup");
    const essenceItems = document.querySelectorAll(".essence-item");
    const root = document.documentElement;

    function updateTheme(item) {
      root.style.setProperty("--mana-width", item.dataset.mana);
      root.style.setProperty("--hp-width", item.dataset.hp);
      root.style.setProperty("--bar-color", item.dataset.color);
      root.style.setProperty("--button-gradient", item.dataset.button);
      root.style.setProperty("--orb-core", item.dataset.orbCore);
      root.style.setProperty("--orb-mid", item.dataset.orbMid);
      root.style.setProperty("--essence-ring", item.dataset.ring);
      root.style.setProperty("--essence-bg", item.dataset.essencebg);
      root.style.setProperty("--essence-icon", item.dataset.icon);
    }

    essenceItems.forEach((item) => {
      item.addEventListener("click", () => {
        essenceItems.forEach((essence) => essence.classList.remove("active"));
        item.classList.add("active");
        updateTheme(item);
      });
    });

    const activeEssence = document.querySelector(".essence-item.active");
    if (activeEssence) {
      updateTheme(activeEssence);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.classList.add("show");
    });

    closePopup.addEventListener("click", function () {
      popup.classList.remove("show");
    });

    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    });