(() => {
  const PHONE = "5516981599186";
  const doc = document.documentElement;

  /* ---------- WhatsApp: mensagem pronta por origem ---------- */
  const base = "Olá, Dra. Pietra e Dr. Guilherme! Vim pelo site";
  const msgFor = (src) => {
    const topics = ["Lentes e facetas", "Implantes", "Clareamento", "Restaurações em resina", "Limpeza e prevenção"];
    if (topics.includes(src)) return `${base} e gostaria de saber mais sobre ${src.toLowerCase()}.`;
    if (src === "duvida") return `${base} e tenho uma dúvida: `;
    return `${base} e gostaria de agendar uma avaliação.`;
  };
  const waUrl = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waUrl(msgFor(a.dataset.wa));
    a.target = "_blank";
    a.rel = "noopener";
    a.addEventListener("click", () => {
      // gancho de medição: GA4 / Meta Pixel entram aqui
      if (window.gtag) window.gtag("event", "whatsapp_click", { origem: a.dataset.wa });
      if (window.fbq) window.fbq("track", "Contact", { origem: a.dataset.wa });
    });
  });

  /* ---------- nav sólida + barra mobile ---------- */
  const nav = document.querySelector("[data-nav]");
  const sticky = document.querySelector("[data-sticky]");
  const hero = document.querySelector(".hero");
  const final = document.querySelector(".final");
  let finalVisible = false;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-solid", y > 24);
    const pastHero = hero ? y > hero.offsetHeight * 0.7 : y > 400;
    sticky.classList.toggle("is-shown", pastHero && !finalVisible);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  if ("IntersectionObserver" in window && final) {
    new IntersectionObserver(([e]) => { finalVisible = e.isIntersecting; onScroll(); }, { threshold: 0.1 }).observe(final);
  }
  onScroll();

  /* ---------- quebra de texto para animação ---------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- smooth scroll: só com mouse, nunca no toque nem com reduced-motion ---------- */
  // o script só é baixado aqui: celular e reduced-motion nunca pagam por ele
  const startLenis = () => {
    const lenis = new window.Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    const loop = (t) => { lenis.raf(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      a.addEventListener("click", (e) => {
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -88, duration: 1.4 });
      });
    });
  };
  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    const tag = document.createElement("script");
    tag.src = "https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js";
    tag.async = true;
    tag.onload = () => window.Lenis && startLenis();
    document.head.appendChild(tag);
  }
  const splitWords = (el, cls = "w") => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const sp = document.createElement("span");
            sp.className = cls; sp.style.setProperty("--i", i++); sp.textContent = part;
            frag.appendChild(sp);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains("pill-img")) walk(n);
      });
    };
    walk(el);
    return i;
  };

  // hero: título linha a linha, depois da fonte carregar (só desktop; no celular o texto pinta direto)
  const animOn = doc.classList.contains("anim");
  const splitHero = () => document.querySelectorAll("[data-split]:not(.is-split)").forEach((h) => {
    h.classList.add("is-split");
    if (reduce || !animOn) return;
    splitWords(h, "sw");
    const words = [...h.querySelectorAll(".sw")];
    const lines = [];
    words.forEach((w) => {
      const top = w.offsetTop;
      let line = lines.find((l) => Math.abs(l.top - top) < 8);
      if (!line) { line = { top, words: [] }; lines.push(line); }
      line.words.push(w);
    });
    h.innerHTML = lines.map((l, i) =>
      `<span class="ln"><span style="--i:${i}">${l.words.map((w) => w.parentElement.tagName === "EM" ? `<em>${w.textContent}</em>` : w.textContent).join(" ")}</span></span>`
    ).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => h.classList.add("is-in")));
  });
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(splitHero);
  setTimeout(splitHero, 2500);

  /* ---------- hero: fundo e recorte aparecem juntos ---------- */
  document.querySelectorAll("[data-pop]").forEach((pop) => {
    const show = () => pop.classList.add("is-ready");
    const imgs = [...pop.querySelectorAll("img")].map((im) =>
      im.decode ? im.decode().catch(() => {}) : new Promise((r) => (im.complete ? r() : im.addEventListener("load", r, { once: true })))
    );
    Promise.all(imgs).then(show);
    setTimeout(show, 2500);
  });

  /* ---------- revelação com failsafe ---------- */
  const reveals = document.querySelectorAll(".reveal, .img-reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    doc.classList.add("reveal-failsafe");
    reveals.forEach((el) => el.classList.add("is-in"));
  } else {
    document.querySelectorAll("section, footer").forEach((s) => {
      s.querySelectorAll(".reveal").forEach((el, i) => el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`));
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
    setTimeout(() => document.querySelectorAll(".hero .reveal, .hero .img-reveal").forEach((el) => el.classList.add("is-in")), 700);
    setTimeout(() => reveals.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in"); }), 2500);
  }

  /* ---------- parallax leve + linha do tempo ---------- */
  const px = reduce ? [] : [...document.querySelectorAll("[data-parallax]")];
  const tl = document.querySelector("[data-tl]");
  const tlSteps = tl ? [...tl.querySelectorAll(".tl__step")] : [];
  let ticking = false;
  const onFrame = () => {
    ticking = false;
    const vh = window.innerHeight;
    px.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax);
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
    if (tl) {
      const r = tl.getBoundingClientRect();
      const mark = vh * 0.6;
      const fill = reduce ? 1 : Math.min(Math.max((mark - r.top) / r.height, 0), 1);
      tl.style.setProperty("--fill", fill.toFixed(3));
      tlSteps.forEach((st) => st.classList.toggle("is-on", reduce || st.getBoundingClientRect().top + 12 < mark));
    }
  };
  const requestFrame = () => { if (!ticking) { ticking = true; requestAnimationFrame(onFrame); } };
  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("resize", requestFrame);
  onFrame();

  /* ---------- tratamentos: palco fixo que troca de foto ---------- */
  const txItems = [...document.querySelectorAll("[data-tx]")];
  const txFrames = [...document.querySelectorAll("[data-frame]")];
  const txCount = document.querySelector("[data-tx-count]");
  const txCap = document.querySelector("[data-tx-caption]");
  let txActive = -1;
  const setTx = (i) => {
    if (i === txActive) return;
    txFrames.forEach((f, k) => {
      f.classList.toggle("was-on", k === txActive);
      f.classList.toggle("is-on", k === i);
      if (k !== i && k !== txActive) f.classList.remove("was-on");
    });
    txItems.forEach((it, k) => it.classList.toggle("is-active", k === i));
    txActive = i;
    if (txCount) txCount.textContent = String(i + 1).padStart(2, "0");
    if (txCap) txCap.textContent = txItems[i].querySelector(".tx__title").textContent;
  };
  if (txItems.length && "IntersectionObserver" in window) {
    const txIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setTx(txItems.indexOf(e.target)); });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    txItems.forEach((it) => txIo.observe(it));
  }
  if (txItems.length) setTx(0);

  /* ---------- sinais no modelo 3D ---------- */
  const signs = [
    { t: "Início de cárie.", b: "Quando pega cedo, resolve com uma restauração pequena, no tom do dente, em uma consulta." },
    { t: "Gengiva inflamada.", b: "Costuma ser tártaro acumulado. Uma limpeza profissional e ajustes na escovação resolvem a maioria dos casos." },
    { t: "Mancha ou alteração interna.", b: "Pode ser só pigmento ou sinal de que o dente precisa de tratamento. A avaliação diz qual é, e o caminho certo." },
  ];
  const signBtns = document.querySelectorAll("[data-sign]");
  const sTitle = document.querySelector("[data-sign-title]");
  const sBody = document.querySelector("[data-sign-body]");
  const zoom = document.querySelector("[data-zoom]");
  const spot = (i) => {
    const h = document.querySelector(`.hotspot[data-sign="${i}"]`);
    return h ? [parseFloat(h.style.getPropertyValue("--x")) / 100, parseFloat(h.style.getPropertyValue("--y")) / 100] : [0.5, 0.5];
  };
  const setSign = (i) => {
    signBtns.forEach((b) => b.classList.toggle("is-active", b.dataset.sign === String(i)));
    sTitle.textContent = signs[i].t;
    sBody.textContent = signs[i].b;
    if (zoom) {
      // centraliza o ponto do problema dentro da lupa (fundo em 520%)
      const z = 5.2, [fx, fy] = spot(i);
      const pos = (f) => `${(((0.5 - f * z) / (1 - z)) * 100).toFixed(2)}%`;
      zoom.style.backgroundPosition = `${pos(fx)} ${pos(fy)}`;
    }
  };
  signBtns.forEach((b) => b.addEventListener("click", () => setSign(+b.dataset.sign)));
  setSign(0);

  /* ---------- tradutor: dentista diz → a gente traduz ---------- */
  const dict = [
    ["Carga imediata", "subst. fem. · implantodontia",
     "O caso permite carga imediata, com instalação do provisório na mesma sessão cirúrgica.",
     "O dente provisório entra logo depois do implante, sem você ficar dias sem dente. Depende de cada caso."],
    ["Enxerto ósseo", "subst. masc. · cirurgia",
     "Há reabsorção do rebordo alveolar. Precisamos de enxerto ósseo antes do implante.",
     "Um reforço no osso quando ele não tem volume suficiente para segurar o implante com firmeza."],
    ["Faceta", "subst. fem. · estética",
     "Vamos fazer facetas em resina composta ou cerâmica, com leve redução de esmalte.",
     "Parecida com a lente, só que um pouco mais espessa. Entra quando o dente precisa de mais correção de cor ou de forma."],
    ["Gengivoplastia", "subst. fem. · periodontia",
     "Para o sorriso gengival, indico gengivoplastia com recontorno do zênite.",
     "Um ajuste no contorno da gengiva, para o sorriso mostrar mais dente e menos gengiva."],
    ["Implante", "subst. masc. · implantodontia",
     "Será instalado um implante osseointegrável de titânio, com coroa protética sobre implante.",
     "Um pino de titânio que faz o papel da raiz. Em cima dele vai a coroa, que é a parte que aparece quando você sorri."],
    ["Lente de contato dental", "subst. fem. · estética",
     "Indicamos laminados cerâmicos ultrafinos, com preparo minimamente invasivo.",
     "Uma lâmina muito fina de porcelana colada na frente do dente. Muda cor e formato quase sem desgastar o que é seu."],
    ["Tártaro", "subst. masc. · prevenção",
     "Observa-se presença de cálculo dentário supragengival na região anteroinferior.",
     "Placa bacteriana que endureceu atrás dos dentes de baixo. A escova não tira mais. Só sai na limpeza do consultório."],
  ];
  const trRoot = document.querySelector("[data-tr]");
  if (trRoot) {
    const chips = [...trRoot.querySelectorAll("[data-term]")];
    const stage = trRoot.querySelector(".book__page");
    const metaEl = trRoot.querySelector("[data-tr-meta]");
    const folio = trRoot.querySelector("[data-tr-folio]");
    const jEl = trRoot.querySelector("[data-tr-jargon]");
    const wEl = trRoot.querySelector("[data-tr-word]");
    const mEl = trRoot.querySelector("[data-tr-meaning]");
    const ask = trRoot.querySelector("[data-wa-dict]");
    ask.target = "_blank"; ask.rel = "noopener";
    const DUR = 7500;
    let cur = 0, t0 = 0, timers = [], auto = !reduce, visible = false, paused = false, raf = null;

    const play = (i) => {
      timers.forEach(clearTimeout); timers = [];
      cur = i; t0 = performance.now();
      chips.forEach((c, k) => {
        const on = k === i;
        c.classList.toggle("is-active", on); c.setAttribute("aria-selected", on); c.tabIndex = on ? 0 : -1;
        c.style.setProperty("--p", on && !auto ? 1 : 0);
      });
      const [word, meta, said, plain] = dict[i];
      metaEl.textContent = meta;
      folio.textContent = `p. ${String(i + 1).padStart(2, "0")}`;
      jEl.innerHTML = `“<span class="strike">${said}</span>”`;
      mEl.textContent = plain;
      wEl.textContent = word;
      ask.href = waUrl(`${base} e fiquei com uma dúvida sobre ${word.toLowerCase()}.`);
      if (reduce) { jEl.classList.add("is-in", "is-struck"); mEl.classList.add("is-in"); return; }
      splitWords(jEl.querySelector(".strike")); splitWords(mEl);
      [jEl, mEl].forEach((el) => el.classList.remove("is-in", "is-struck"));
      timers.push(setTimeout(() => jEl.classList.add("is-in"), 60));
      timers.push(setTimeout(() => jEl.classList.add("is-struck"), 1400));
      timers.push(setTimeout(() => mEl.classList.add("is-in"), 2100));
    };
    const tick = (now) => {
      raf = null;
      if (!auto || !visible) return;
      if (paused) { t0 = now - (chips[cur].style.getPropertyValue("--p") || 0) * DUR; raf = requestAnimationFrame(tick); return; }
      const p = Math.min((now - t0) / DUR, 1);
      chips[cur].style.setProperty("--p", p.toFixed(3));
      if (p >= 1) play((cur + 1) % dict.length);
      raf = requestAnimationFrame(tick);
    };
    const stopAuto = () => { auto = false; chips.forEach((c, k) => c.style.setProperty("--p", k === cur ? 1 : 0)); };
    chips.forEach((c) => {
      c.addEventListener("click", () => { stopAuto(); play(+c.dataset.term); if (window.innerWidth < 900) c.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" }); });
      c.addEventListener("keydown", (e) => {
        if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
        e.preventDefault(); stopAuto();
        const n = (cur + (e.key === "ArrowRight" ? 1 : -1) + dict.length) % dict.length;
        play(n); chips[n].focus();
      });
    });
    stage.addEventListener("mouseenter", () => { paused = true; });
    stage.addEventListener("mouseleave", () => { paused = false; });
    ask.addEventListener("focus", () => { paused = true; });
    ask.addEventListener("blur", () => { paused = false; });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !raf) { t0 = performance.now() - parseFloat(chips[cur].style.getPropertyValue("--p") || 0) * DUR; raf = requestAnimationFrame(tick); }
      }, { threshold: 0.35 }).observe(trRoot);
    }
    play(0);
  }

  /* ---------- antes e depois ---------- */
  document.querySelectorAll("[data-compare]").forEach((c) => {
    const range = c.querySelector("input");
    const set = (v) => c.style.setProperty("--pos", `${v}%`);
    range.addEventListener("input", () => set(range.value));
    // convite ao gesto quando entra na tela
    if (!reduce && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let t0 = null;
        const anim = (ts) => {
          if (t0 === null) t0 = ts;
          const p = Math.min((ts - t0) / 1600, 1);
          const v = 50 + Math.sin(p * Math.PI * 2) * 18 * (1 - p);
          set(v); range.value = v;
          if (p < 1) requestAnimationFrame(anim);
        };
        requestAnimationFrame(anim);
      }, { threshold: 0.6 });
      io.observe(c);
    }
  });
})();
