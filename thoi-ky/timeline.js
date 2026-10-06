(() => {
  "use strict";
  const { chapters, milestones, sources } = window.HCM_JOURNEY;
  const images = window.HCM_JOURNEY_IMAGES;
  const filters = document.getElementById("chapterFilters");
  const list = document.getElementById("milestoneList");
  const detail = document.getElementById("milestoneDetail");
  const counter = document.getElementById("tlCounter");
  const previous = document.getElementById("tlPrev");
  const next = document.getElementById("tlNext");
  const all = document.getElementById("showAll");
  let chapter = null;
  let selected = milestones[0].id;
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  const visibleMilestones = () =>
    milestones.filter((m) => !chapter || m.chapter === chapter);
  const sourceLink = (id) =>
    `<a href="${escape(sources[id].url)}" target="_blank" rel="noopener noreferrer">${escape(sources[id].publisher)} — ${escape(sources[id].title)} ↗</a>`;

  filters.innerHTML = chapters
    .map(
      (c, i) =>
        `<button type="button" class="chapter-button" data-chapter="${c.id}" aria-pressed="false" title="${escape(c.description)}"><span class="chapter-years">0${i + 1} / ${c.years}</span><span class="chapter-title">${c.title}</span></button>`,
    )
    .join("");
  document.getElementById("sourceList").innerHTML = Object.entries(sources)
    .map(
      ([id, s]) =>
        `<li>${sourceLink(id)}<span>${escape(new URL(s.url).hostname)}</span></li>`,
    )
    .join("");

  function renderList() {
    list.innerHTML = visibleMilestones()
      .map(
        (m) =>
          `<li><button class="milestone-button" type="button" data-milestone="${m.id}" aria-controls="milestoneDetail"${m.id === selected ? ' aria-current="step"' : ""}><span>${escape(m.date)}</span>${escape(m.title)}</button></li>`,
      )
      .join("");
    filters
      .querySelectorAll("button")
      .forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.chapter === chapter)),
      );
    all.setAttribute("aria-pressed", String(chapter === null));
    document.getElementById("listHeading").textContent = chapter
      ? chapters.find((c) => c.id === chapter).title
      : "Tất cả dấu mốc";
  }

  function select(id, { updateHistory = true } = {}) {
    const milestone = milestones.find((m) => m.id === id);
    if (!milestone) return;
    selected = id;
    if (chapter && milestone.chapter !== chapter) {
      chapter = null;
      renderList();
    }
    list.querySelectorAll("button").forEach((b) => {
      if (b.dataset.milestone === id) b.setAttribute("aria-current", "step");
      else b.removeAttribute("aria-current");
    });
    const visible = visibleMilestones();
    const position = visible.findIndex((m) => m.id === id);
    previous.disabled = position === 0;
    next.disabled = position === visible.length - 1;
    counter.textContent = `Mốc ${position + 1} / ${visible.length}${chapter ? " trong chặng" : ""}`;
    const photo = images[milestone.image];
    const chapterInfo = chapters.find((c) => c.id === milestone.chapter);
    detail.innerHTML = `<header class="detail-header"><div class="detail-meta"><span class="detail-date">${escape(milestone.date)}</span><span aria-hidden="true">·</span><span>${escape(chapterInfo.title)}</span></div><h2 class="detail-title" id="detailTitle">${escape(milestone.title)}</h2><p class="detail-location">${escape(milestone.location)}</p></header>
      <figure class="detail-image-wrap"><a class="photo-link" href="../img/hanh-trinh-hcm/${escape(photo.file)}" target="_blank" rel="noopener" aria-label="Mở ảnh: ${escape(photo.caption)}"><img class="detail-image" src="../img/hanh-trinh-hcm/${escape(photo.file)}" alt="${escape(photo.caption)}" width="${photo.width}" height="${photo.height}" decoding="async" /></a><p class="image-error" hidden>Ảnh chưa tải được. Bạn có thể xem tại nguồn ảnh bên dưới.</p><figcaption>${escape(photo.caption)}<a class="image-credit" href="${escape(photo.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escape(photo.credit)} · Xem nguồn ảnh ↗</a></figcaption></figure>
      <div class="detail-body">${milestone.text.map((p) => `<p>${escape(p)}</p>`).join("")}<aside class="meaning"><strong>Ý nghĩa của dấu mốc</strong>${escape(milestone.meaning)}</aside><div class="milestone-sources"><strong>Tư liệu đối chiếu</strong>${milestone.sources.map(sourceLink).join("")}</div></div>`;
    detail.querySelector("img").addEventListener(
      "error",
      (event) => {
        event.target.hidden = true;
        detail.querySelector(".image-error").hidden = false;
      },
      { once: true },
    );
    if (updateHistory && location.hash !== `#${id}`)
      history.pushState(null, "", `#${id}`);
    const activeButton = list.querySelector('[aria-current="step"]');
    if (activeButton) {
      const nav = list.parentElement;
      const top =
        activeButton.getBoundingClientRect().top -
        nav.getBoundingClientRect().top +
        nav.scrollTop;
      if (
        top < nav.scrollTop ||
        top + activeButton.offsetHeight > nav.scrollTop + nav.clientHeight
      )
        nav.scrollTop = Math.max(0, top - nav.clientHeight / 2);
    }
  }
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chapter]");
    if (!button) return;
    chapter = button.dataset.chapter;
    if (milestones.find((m) => m.id === selected).chapter !== chapter)
      selected = visibleMilestones()[0].id;
    renderList();
    select(selected);
  });
  all.addEventListener("click", () => {
    chapter = null;
    renderList();
    select(selected);
  });
  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-milestone]");
    if (button) select(button.dataset.milestone);
  });
  function step(direction) {
    const visible = visibleMilestones();
    const target =
      visible[visible.findIndex((m) => m.id === selected) + direction];
    if (target) select(target.id);
  }
  previous.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));
  list.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const visible = visibleMilestones();
    const focusedIndex = visible.findIndex(
      (m) => m.id === event.target.dataset.milestone,
    );
    const index =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? visible.length - 1
          : Math.max(
              0,
              Math.min(
                visible.length - 1,
                focusedIndex + (event.key === "ArrowDown" ? 1 : -1),
              ),
            );
    select(visible[index].id);
    list.querySelector('[aria-current="step"]').focus({ preventScroll: true });
  });
  function readHash() {
    const id = location.hash.slice(1);
    if (milestones.some((m) => m.id === id))
      select(id, { updateHistory: false });
  }
  window.addEventListener("hashchange", readHash);
  renderList();
  select(selected, { updateHistory: false });
  readHash();
})();
