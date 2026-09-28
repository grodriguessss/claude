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

  /* ---------- revelação com failsafe ---------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    doc.classList.add("reveal-failsafe");
  } else {
    // escalonamento dentro de cada seção
    document.querySelectorAll("section, footer").forEach((s) => {
      s.querySelectorAll(".reveal").forEach((el, i) => el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`));
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
    // se algo travar, a página aparece de qualquer jeito
    setTimeout(() => {
      document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-in"));
    }, 900);
    setTimeout(() => {
      reveals.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in"); });
    }, 2500);
  }

  /* ---------- tratamentos: imagem que segue o cursor ---------- */
  const list = document.querySelector("[data-treat]");
  const peek = document.querySelector(".treat__peek");
  const peekImg = document.querySelector("[data-peek]");
  if (list && peek && window.matchMedia("(hover: hover)").matches) {
    const wrap = list.parentElement;
    let raf = null, tx = 0, ty = 0, x = 0, y = 0;
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      peek.style.transform = `translate(${x}px, ${y}px)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(loop) : null;
    };
    list.querySelectorAll(".treat__row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        if (peekImg.getAttribute("src") !== row.dataset.img) peekImg.src = row.dataset.img;
        peek.classList.add("is-on");
      });
    });
    list.addEventListener("mouseleave", () => peek.classList.remove("is-on"));
    list.addEventListener("mousemove", (e) => {
      const r = wrap.getBoundingClientRect();
      tx = e.clientX - r.left + 28; ty = e.clientY - r.top - 170;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  }

  /* ---------- sinais no modelo 3D ---------- */
  const signs = [
    { t: "Início de cárie.", b: "Quando pega cedo, resolve com uma restauração pequena, no tom do dente, em uma consulta." },
    { t: "Gengiva inflamada.", b: "Costuma ser tártaro acumulado. Uma limpeza profissional e ajustes na escovação resolvem a maioria dos casos." },
    { t: "Mancha ou alteração interna.", b: "Pode ser só pigmento ou sinal de que o dente precisa de tratamento. A avaliação diz qual é, e o caminho certo." },
  ];
  const signBtns = document.querySelectorAll("[data-sign]");
  const sTitle = document.querySelector("[data-sign-title]");
  const sBody = document.querySelector("[data-sign-body]");
  const setSign = (i) => {
    signBtns.forEach((b) => b.classList.toggle("is-active", b.dataset.sign === String(i)));
    sTitle.textContent = signs[i].t;
    sBody.textContent = signs[i].b;
  };
  signBtns.forEach((b) => b.addEventListener("click", () => setSign(+b.dataset.sign)));

  /* ---------- dicionário ---------- */
  const dict = [
    ["Lente de contato dental", "Uma lâmina muito fina de porcelana colada na frente do dente. Muda cor e formato quase sem desgastar o que é seu."],
    ["Faceta", "Parecida com a lente, só que um pouco mais espessa. Entra quando o dente precisa de mais correção de cor ou de forma."],
    ["Implante", "Um pino de titânio que faz o papel da raiz. Em cima dele vai a coroa, que é a parte que aparece quando você sorri."],
    ["Carga imediata", "Quando o dente provisório é colocado logo depois do implante, sem você ficar dias sem dente. Depende de cada caso."],
    ["Enxerto ósseo", "Um reforço no osso quando ele não tem volume suficiente para segurar o implante com firmeza."],
    ["Tártaro", "Placa bacteriana que endureceu. A escova não tira mais. Só sai na limpeza feita no consultório."],
    ["Gengivoplastia", "Um ajuste no contorno da gengiva, para o sorriso mostrar mais dente e menos gengiva."],
  ];
  const terms = document.querySelectorAll("[data-term]");
  const dWord = document.querySelector("[data-dict-word]");
  const dMean = document.querySelector("[data-dict-meaning]");
  const dAsk = document.querySelector("[data-wa-dict]");
  const setTerm = (i) => {
    terms.forEach((t) => {
      const on = t.dataset.term === String(i);
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
    dWord.textContent = dict[i][0];
    dMean.textContent = dict[i][1];
    [dWord, dMean].forEach((el) => { el.classList.remove("is-swap"); void el.offsetWidth; el.classList.add("is-swap"); });
    dAsk.href = waUrl(`${base} e fiquei com uma dúvida sobre ${dict[i][0].toLowerCase()}.`);
  };
  dAsk.target = "_blank"; dAsk.rel = "noopener";
  terms.forEach((t) => {
    t.addEventListener("click", () => setTerm(+t.dataset.term));
    t.addEventListener("keydown", (e) => {
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(e.key)) return;
      e.preventDefault();
      const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
      const n = (+t.dataset.term + dir + dict.length) % dict.length;
      setTerm(n); terms[n].focus();
    });
  });
  setTerm(0);

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
