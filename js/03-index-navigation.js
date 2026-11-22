(() => {
  const items = [
    ["Cover", "top"],
    ["About me", "about"],
  ];
  const menu = document.getElementById("ml");
  const rail = document.getElementById("rail");
  for (const [label, id] of [...items].reverse()) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = label;
    li.appendChild(link);
    menu.prepend(li);
    const navLink = document.createElement("a");
    navLink.href = "#" + id;
    navLink.dataset.id = id;
    navLink.setAttribute("aria-label", label);
    const span = document.createElement("span");
    span.textContent = label;
    navLink.appendChild(span);
    rail.prepend(navLink);
  }
})();
