(() => {
  const cover = document.getElementById("top");
  const nav = document.querySelector(".nav");
  const menu = document.getElementById("ml");
  if (!cover || !nav || !menu) return;

  // Turn the existing section index into a compact pill while the cover is visible.
  const shortcuts = document.createElement("div");
  shortcuts.className = "nav-shortcuts";
  menu.querySelectorAll("a").forEach((item) => {
    const link = document.createElement("a");
    link.href = item.getAttribute("href");
    const label = item.cloneNode(true);
    label.querySelector("span")?.remove();
    link.textContent = label.textContent.trim();
    shortcuts.appendChild(link);
  });
  nav.appendChild(shortcuts);

  const observer = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle(
        "cover-at-top",
        entry.isIntersecting && entry.intersectionRatio >= 0.45,
      );
    },
    { threshold: [0, 0.45, 0.65] },
  );
  observer.observe(cover);

  // Subtle mouse parallax on the existing camera/lens artwork.
  cover.addEventListener("pointermove", (event) => {
    const rect = cover.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cover.style.setProperty("--mx", x.toFixed(3));
    cover.style.setProperty("--my", y.toFixed(3));
  });
  cover.addEventListener("pointerleave", () => {
    cover.style.setProperty("--mx", "0");
    cover.style.setProperty("--my", "0");
  });
})();
