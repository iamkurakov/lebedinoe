/* Белый стан — sections A: Header, Hero, SeasonFeature */

function Header({ solid, season, setSeason, onBook, menuOpen, setMenuOpen }) {
  const go = (sel) => (e) => {
    e.preventDefault(); setMenuOpen(false);
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header className={"hdr" + (solid ? " solid" : "")}>
      <a href="#top" className="brand" onClick={go("#top")}>Белый&nbsp;стан</a>
      <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Меню">
        <Icon name={menuOpen ? "x" : "menu"} />
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <a onClick={go("#seasons")}>Сезоны</a>
        <a onClick={go("#lodging")}>Проживание</a>
        <a onClick={go("#territory")}>Территория</a>
        <a onClick={go("#kitchen")}>Кухня</a>
        <a onClick={go("#find")}>Как добраться</a>
        <div className="seasontoggle" role="group" aria-label="Сезон">
          <button className={season === "summer" ? "active" : ""} onClick={() => setSeason("summer")}>
            <Icon name="sun" />Лето
          </button>
          <button className={season === "winter" ? "active" : ""} onClick={() => setSeason("winter")}>
            <Icon name="snow" />Зима
          </button>
        </div>
        <a className="navcta" href="tel:+79069440762" onClick={() => setMenuOpen(false)}>Забронировать</a>
      </nav>
    </header>
  );
}

function Hero({ season, onBook }) {
  return (
    <section className="hero" id="top">
      <div className="bg summer" style={sbg("hero", "summer")}></div>
      <div className="bg winter" style={sbg("hero", "winter")}></div>
      <div className="scrim"></div>
      <div className="center container">
        <h1 className="wordmark">Белый&nbsp;стан<small>Гостевой дом у живого озера</small></h1>
        <p className="sub">Тихое место у воды, где лето и зима становятся двумя причинами приехать</p>
        <div className="cues">
          <Button variant="accent" icon="phone" href="tel:+79069440762">Забронировать дом</Button>
          <Button variant="ghost" iconRight="chevronDown" href="#seasons">Посмотреть сезоны</Button>
        </div>
        <div className="seasonline">
          {season === "summer" ? (
            <span><b>Лето</b> — сап-борды, рыбалка, костёр, закаты и прохлада озера</span>
          ) : (
            <span><b>Зима</b> — лебеди, баня, сани, ледяная горка и незамерзающая вода</span>
          )}
        </div>
      </div>
      <button className="scrolldown" aria-label="Листать вниз"
        onClick={() => document.querySelector("#seasons")?.scrollIntoView({ behavior: "smooth" })}>
        <Icon name="chevronDown" />
      </button>
    </section>
  );
}

const SEASON_FEATURE = {
  summer: {
    eyebrow: "Лето · тёплый сезон",
    title: "Лето у озера — медленное и тёплое",
    body1: "Летом «Белый стан» — это вода, воздух и зелёные берега. День можно провести на сап-борде, с удочкой у мостков или просто в беседке, ничего не планируя.",
    body2: "А вечером всё сходится у костра и заканчивается закатом над озером — тем самым, ради которого хочется остаться ещё на одну ночь.",
    feats: [
      ["waves", "Прогулки на сап-бордах", "Скользить по тихой воде утром, пока озеро гладкое."],
      ["fish", "Рыбалка на тихой воде", "Удочка, берег и время, которое никуда не торопится."],
      ["flame", "Вечера у костра", "Костровая зона, мангал и долгие разговоры до темноты."],
      ["sunset", "Закаты над озером", "Главное событие дня: небо розовеет, вода темнеет."],
      ["droplets", "Купание и прохлада", "Озёрная вода и тень деревьев в самый жаркий день."],
    ],
    cta: "Забронировать летний отдых",
    cap: "Рассвет на воде",
    photos: [["feat-summer-1.webp", "pier-summer.webp"], ["feat-summer-2.webp", "river-summer.webp"], ["feat-summer-3.webp", "river-golden.webp"]],
  },
  winter: {
    eyebrow: "Зима · холодный сезон",
    title: "Зима у незамерзающего озера",
    body1: "Зимой вода у «Белого стана» не замерзает — и на неё прилетают дикие лебеди. Снежные берега, туман над водой, мягкий зимний свет и белые птицы прямо у окна.",
    body2: "А рядом — настоящая русская зима: жаркая баня с купелью, сани с лошадьми и ледяная горка. Тепло и холод в один день.",
    feats: [
      ["bird", "Лебеди у незамерзающего озера", "Лебеди-кликуны прилетают с ноября и держатся до апреля."],
      ["binoculars", "Голоса лебедей и наблюдение", "Крики белых птиц — звук, который остаётся в памяти."],
      ["bath", "Русская баня с купелью", "Горячий пар, ледяная купель и снег за окном."],
      ["sleigh", "Сани с лошадьми", "Прогулка по снегу в настоящих санях."],
      ["mountainSnow", "Ледяная русская горка", "Длинный накат и детский восторг для всех возрастов."],
    ],
    cta: "Забронировать зимний отдых",
    cap: "Лебеди-кликуны",
    photos: [["feat-winter-1.webp", "swans-winter.webp"], ["feat-winter-2.webp", "window-swans.webp"], ["feat-winter-3.webp", "cover-winter.webp"]],
  },
};

function SeasonFeature({ season, setSeason, onBook }) {
  const f = SEASON_FEATURE[season];
  const dark = season === "winter";
  const other = season === "summer" ? "winter" : "summer";
  return (
    <section className={"section seasonfeat " + (dark ? "band-pine" : "paper")} id="seasons">
      <TornEdge position="top" fill={dark ? "var(--bs-pine)" : "var(--bs-paper)"} variant="a" />
      <div className="container">
        <SectionHead onDark={dark}
          eyebrow="Лето и зима у воды"
          title="Два состояния покоя у одного места"
          sub="Одно место — два совершенно разных отдыха. Переключите сезон и посмотрите, каким «Белый стан» бывает летом и зимой." />

        <div className="season-switch" role="group" aria-label="Сезон">
          <button className={season === "summer" ? "active" : ""} onClick={() => setSeason("summer")}><Icon name="sun" />Летом</button>
          <button className={season === "winter" ? "active" : ""} onClick={() => setSeason("winter")}><Icon name="snow" />Зимой</button>
        </div>

        <div className={"feature" + (dark ? "" : " flip")} key={season}>
          <div className="copy season-swap">
            <span className={"eyebrow" + (dark ? " on-dark" : "")}>{f.eyebrow}</span>
            <h3 className="title feat-title">{f.title}</h3>
            <p className="body lg">{f.body1}</p>
            <p className="body">{f.body2}</p>
            <ul className="featlist">
              {f.feats.map(([ic, t, d], i) => (
                <li key={i}><span className="ic"><Icon name={ic} /></span><span><b>{t}</b><span>{d}</span></span></li>
              ))}
            </ul>
            <Button variant="accent" icon="phone" href="tel:+79069440762">{f.cta}</Button>
          </div>
          <div className="collage season-swap">
            <div className="tape t1"></div>
            <div className="ph a" style={pbg(f.photos[0][0], f.photos[0][1])}></div>
            <div className="ph c" style={pbg(f.photos[2][0], f.photos[2][1])}></div>
            <div className="ph b" style={pbg(f.photos[1][0], f.photos[1][1])}></div>
            <div className="tape t2"></div>
            <span className="cap-pill" style={dark ? { left: "2%", bottom: "-14px" } : { right: "0", bottom: "-14px" }}>{f.cap}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, SeasonFeature });
