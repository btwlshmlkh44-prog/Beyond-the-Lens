(() => {
  const canHover = matchMedia("(pointer:fine) and (prefers-reduced-motion: no-preference)");
  if (!canHover.matches) return;
  const root = document.documentElement;
  let tx = innerWidth * 0.5,
    ty = innerHeight * 0.4,
    x = tx,
    y = ty,
    raf = 0;
  const tick = () => {
    x += (tx - x) * 0.14;
    y += (ty - y) * 0.14;
    root.style.setProperty("--cursor-x", ((x / innerWidth) * 100).toFixed(2) + "%");
    root.style.setProperty("--cursor-y", ((y / innerHeight) * 100).toFixed(2) + "%");
    root.style.setProperty("--cursor-px", ((x - innerWidth / 2) * -0.006).toFixed(2) + "px");
    root.style.setProperty("--cursor-py", ((y - innerHeight / 2) * -0.006).toFixed(2) + "px");
    if (Math.abs(tx - x) + Math.abs(ty - y) > 0.35) raf = requestAnimationFrame(tick);
    else raf = 0;
  };
  addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: true },
  );
  addEventListener(
    "resize",
    () => {
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: true },
  );
})();
