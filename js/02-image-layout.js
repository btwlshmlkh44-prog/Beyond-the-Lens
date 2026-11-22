(function () {
  const rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
    W = () => innerWidth;
  // fill images
  document
    .querySelectorAll("[data-fill]")
    .forEach((e) => e.style.setProperty("--im", `url(${U[e.dataset.fill]})`));
  document.querySelectorAll(".fill").forEach((e) => {
    if (!e.dataset.fill && e.id !== "ln") {
    }
  });
  // fit text
  function fit() {
    document.querySelectorAll("[data-fit]").forEach((e) => {
      e.style.fontSize = "100px";
      const t = e.querySelector("span") || e;
      const w = t.getBoundingClientRect().width || t.scrollWidth;
      if (w) e.style.fontSize = (100 * W() * (+e.dataset.fit / 100)) / w + "px";
    });
  }
  // horizontal pins
  const hz = [...document.querySelectorAll(".hz")];
  function hsz() {
    hz.forEach((s) => {
      const t = s.querySelector(".trk");
      s._w = t.scrollWidth;
      s.style.height = Math.max(innerHeight, s._w - W() + innerHeight) + "px";
    });
  }
  // reveal
  const rv = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          rv.unobserve(e.target);
        }
      }),
    { threshold: 0.2 },
  );
  document.querySelectorAll(".rv").forEach((e) => rv.observe(e));
  requestAnimationFrame(() => setTimeout(() => $("#original-top").classList.add("go"), 80));
  // menu/lightbox
  const m = $("#menu"),
    mb = $("#mb");
  const tm = (o) => {
    m.classList.toggle("o", o);
    mb.setAttribute("aria-expanded", o);
    document.body.style.overflow = o ? "hidden" : "";
  };
  mb.onclick = () => tm(true);
  $("#x").onclick = () => tm(false);
  m.addEventListener("click", (e) => {
    if (e.target.closest("a")) tm(false);
  });
  const lb = $("#lb");
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      tm(false);
      lb.classList.remove("o");
    }
  });
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-zoom]");
    if (t && t.tagName === "IMG") {
      lb.querySelector("img").src = t.src;
      lb.querySelector("img").alt = t.alt;
      lb.classList.add("o");
    } else if (e.target.closest("#lb")) lb.classList.remove("o");
  });
  // rail state
  const sec = [...document.querySelectorAll("section[data-n]")];
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          document
            .querySelectorAll("#rail a")
            .forEach((a) => a.classList.toggle("on", a.dataset.id === e.target.id));
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sec.forEach((s) => io.observe(s));
  // process crop
  const crop = $("#crop");
  const po = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) crop.style.backgroundPosition = e.target.dataset.bp;
      }),
    { rootMargin: "-40% 0px -40% 0px" },
  );
  document.querySelectorAll(".st").forEach((s) => po.observe(s));
  // scroll
  const P = [...document.querySelectorAll("[data-p]")];
  let t = 0;
  function f() {
    t = 0;
    const h = innerHeight,
      y = scrollY;
    hz.forEach((s) => {
      const r = s.getBoundingClientRect(),
        tot = s.offsetHeight - h,
        p = Math.min(1, Math.max(0, -r.top / tot));
      s.querySelector(".trk").style.transform = `translateX(${-p * (s._w - W())}px)`;
    });
    if (rm) return;
    P.forEach((el) => {
      const b = el.getBoundingClientRect();
      if (b.bottom < -300 || b.top > h + 300) return;
      el.style.transform = `translateY(${(b.top + b.height / 2 - h / 2) * +el.dataset.p}px)`;
    });
    document.querySelectorAll(".fp.land img,.bp.full>img.bgi").forEach(() => {});
  }
  function all() {
    fit();
    hsz();
    f();
  }
  addEventListener(
    "scroll",
    () => {
      if (!t) t = requestAnimationFrame(f);
    },
    { passive: true },
  );
  addEventListener("resize", all);
  addEventListener("load", () => {
    all();
    setTimeout(all, 600);
  });
  all();
  if (document.fonts) document.fonts.ready.then(all);
})();
