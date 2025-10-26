// === Responsive Additions (v3) ===
(function () {
  function matchesActionEl(el) {
    const text = (el.textContent || "").toLowerCase();
    const idCls = (el.id + " " + el.className).toLowerCase();
    const isHire = /hire\s*me/.test(text) || /hire/.test(idCls);
    const isTheme = /(theme|dark|light|mode|day|night)/.test(idCls) || /(day|night)/.test(text);
    return isHire || isTheme;
  }

  function enhanceNav(nav) {
    if (!nav || nav.dataset.enhanced === "true") return;
    nav.dataset.enhanced = "true";
    nav.classList.add("auto-responsive-nav");

    const brand = nav.querySelector(".brand, .logo, .site-title, a[rel='home'], .navbar-brand") || nav.firstElementChild;
    let menuList = nav.querySelector("ul, .nav, .menu");
    if (!menuList) {
      const links = [...nav.querySelectorAll("a")].filter(a => a.closest("nav") === nav);
      if (links.length) {
        menuList = document.createElement("ul");
        links.forEach(a => {
          const li = document.createElement("li"); li.appendChild(a.cloneNode(true)); menuList.appendChild(li);
        });
      }
    }
    if (!menuList) return;
    brand && brand.classList.add("brand");
    menuList.classList.add("menu");

    // Build hamburger (three lines)
    const btn = document.createElement("button");
    btn.id = "auto-hamburger";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Toggle navigation");
    const mid = document.createElement("span");
    btn.appendChild(mid);

    // Mobile panel skeleton
    const panel = document.createElement("div");
    panel.className = "menu-panel";
    const panelInner = document.createElement("div");
    panelInner.className = "menu-panel-inner";
    const panelList = menuList.cloneNode(true);
    const panelActions = document.createElement("div");
    panelActions.className = "actions";
    panelInner.appendChild(panelList);
    panelInner.appendChild(panelActions);
    panel.appendChild(panelInner);

    // Layout wrap
    const spacer = document.createElement("div"); spacer.style.flex = "1";
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.justifyContent = "space-between";
    wrap.style.gap = "1rem";
    wrap.style.width = "100%";

    // Capture possible action buttons (hire me / theme toggle)
    const possibleActions = [...nav.querySelectorAll("a, button")].filter(el => el.closest("nav") === nav && matchesActionEl(el));

    // Remember original positions to restore on desktop
    const originalSlots = new Map();
    possibleActions.forEach(el => {
      originalSlots.set(el, { parent: el.parentElement, next: el.nextSibling });
      // hide on mobile once moved
      el.classList.add("hide-on-mobile");
    });

    // Build tree
    nav.innerHTML = "";
    if (brand) wrap.appendChild(brand);
    wrap.appendChild(spacer);
    wrap.appendChild(menuList);
    wrap.appendChild(btn);
    nav.appendChild(wrap);
    nav.appendChild(panel);

    function closeMenu() { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
    function openMenu() { nav.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); }
    btn.addEventListener("click", () => { nav.classList.contains("is-open") ? closeMenu() : openMenu(); });
    document.addEventListener("click", (e) => { if (!nav.contains(e.target)) closeMenu(); });

    // Responsive behavior: move actions into panel on mobile, back on desktop
    const mq = window.matchMedia("(max-width: 768px)");
    function handleMQ(e) {
      if (e.matches) {
        // mobile: move actions to panelActions
        possibleActions.forEach(el => { if (!panelActions.contains(el)) panelActions.appendChild(el); });
      } else {
        // desktop: restore actions
        possibleActions.forEach(el => {
          const slot = originalSlots.get(el);
          if (slot && slot.parent) {
            slot.parent.insertBefore(el, slot.next);
          }
        });
        closeMenu();
      }
    }
    handleMQ(mq);
    mq.addEventListener ? mq.addEventListener("change", handleMQ) : mq.addListener(handleMQ);

    window.addEventListener("resize", () => { if (window.innerWidth > 768) closeMenu(); });

    // Keyboard accessibility
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const navs = document.querySelectorAll("nav");
    if (navs.length === 0) return;
    enhanceNav(navs[0]);
  });
})();
