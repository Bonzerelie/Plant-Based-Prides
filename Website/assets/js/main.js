/* ==========================================================================
   Plant-Based Prides — shared site behaviour
   Mobile nav toggle + "Take Action" dropdown menu.
   Include this file on every page (loaded at the end of <body>).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navList = document.querySelector(".main-nav > ul");

  // Layout is "mobile" either below the 760px CSS breakpoint, or whenever
  // main.js has had to force it on (see checkNavWrap below) because the
  // items would otherwise wrap onto a second line.
  const isMobileLayout = () =>
    window.innerWidth <= 760 || (siteHeader && siteHeader.classList.contains("force-mobile-nav"));

  // --- Mobile nav toggle ---
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // --- Dropdown menu(s) ---
  const dropdowns = document.querySelectorAll(".has-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      // On the regular (non-collapsed) nav, a toggle that's a real link
      // (e.g. "Take Action" pointing at take-action.html) should just
      // navigate normally — hovering already reveals its dropdown there.
      if (!isMobileLayout() && toggle.tagName === "A" && toggle.hasAttribute("href")) {
        return;
      }

      // Collapsed/mobile layout (or a toggle with no href of its own):
      // intercept the click and open/close the submenu instead.
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
      dropdowns.forEach((d) => d.classList.remove("open"));
      if (!isOpen) {
        dropdown.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      } else {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Close dropdowns / mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    dropdowns.forEach((d) => {
      if (!d.contains(e.target)) d.classList.remove("open");
    });
    if (mainNav && mainNav.classList.contains("open") && !mainNav.contains(e.target) && e.target !== navToggle && !navToggle.contains(e.target)) {
      mainNav.classList.remove("open");
    }
  });

  // Close dropdowns on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach((d) => d.classList.remove("open"));
      if (mainNav) mainNav.classList.remove("open");
    }
  });

  // Highlight current page in nav
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) link.classList.add("active");
  });

  // --- Auto-switch to the mobile nav dropdown if items would wrap ---
  // Below 760px wide the CSS media query already forces the hamburger menu.
  // Above that, this checks whether the nav items (including the "Sign the
  // Petition" button) still fit on one line — e.g. a long page title pushing
  // things, or a browser window sized just above the breakpoint — and if
  // not, adds "force-mobile-nav" to .site-header so the same collapsed
  // layout kicks in there too. See the ".force-mobile-nav" rules in
  // style.css, which mirror the @media (max-width: 760px) nav rules.
  function checkNavWrap() {
    if (!siteHeader || !navList) return;

    if (window.innerWidth <= 760) {
      // The CSS breakpoint already handles this width; no need to force it.
      siteHeader.classList.remove("force-mobile-nav");
      return;
    }

    // Measure the nav in its normal (un-forced) layout first, so we're
    // checking against its natural width rather than the collapsed one.
    siteHeader.classList.remove("force-mobile-nav");

    const items = Array.from(navList.children);
    if (items.length < 2) return;

    const firstTop = items[0].offsetTop;
    const wraps = items.some((item) => item.offsetTop > firstTop + 2);

    if (wraps) {
      siteHeader.classList.add("force-mobile-nav");
    }
  }

  checkNavWrap();
  window.addEventListener("resize", debounce(checkNavWrap, 120));

  // Re-check once web fonts have finished loading — swapping from the
  // fallback font to Poppins/Inter can change label widths enough to
  // change whether the nav wraps.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(checkNavWrap).catch(() => {});
  }

  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
});
