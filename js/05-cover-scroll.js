(() => {
  const syncCoverNav = () =>
    document.body.classList.toggle("cover-at-top", window.scrollY < window.innerHeight * 0.72);
  syncCoverNav();
  window.addEventListener("scroll", syncCoverNav, { passive: true });
})();
