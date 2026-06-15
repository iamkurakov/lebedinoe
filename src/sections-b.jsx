/* Белый стан — sections B: Compare, Audience, Lodging, Territory */

const COMPARE = {
  summer: ["Тишина у воды", "Сап-борды", "Рыбалка", "Вечера у костра", "Закаты над озером", "Прохлада озера", "Медленный отдых"],
  winter: ["Лебеди и дикие птицы", "Незамерзающее озеро", "Русская баня с купелью", "Сани с лошадьми", "Ледяная горка", "Голоса лебедей", "Атмосфера настоящей зимы"],
};

function Compare() {
  return (
    <section className="section band-sage" id="compare">
      <TornEdge position="top" fill="var(--bs-sage)" variant="a" />
      <div className="container">
        <SectionHead onDark eyebrow="Сравнение сезонов" title="Когда ехать в Белый стан"
          sub="Оба сезона сильны по-своему. Выбирайте по настроению — за тёплой водой или за зимними птицами." />
        <div className="compare">
          <Reveal as="div" className="col summer">
            <div className="ch">
              <span className="ci"><Icon name="sun" /></span>
              <div><h3 className="serif">Лето</h3><span className="season-when">Июнь — сентябрь</span></div>
            </div>
            <ul>{COMPARE.summer.map((c, i) => <li key={i}><Icon name="check" />{c}</li>)}</ul>
          </Reveal>
          <Reveal as="div" className="col winter" delay={90}>
            <div className="ch">
              <span className="ci"><Icon name="snow" /></span>
              <div><h3 className="serif">Зима</h3><span className="season-when">Ноябрь — апрель</span></div>
            </div>
            <ul>{COMPARE.winter.map((c, i) => <li key={i}><Icon name="check" />{c}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const AUD_YES = [
  "Парам и семьям с детьми",
  "Небольшим спокойным компаниям",
  "Гостям, которые едут к Лебединому озеру",
  "Тем, кому важны тишина и природа",
  "Любителям простой домашней кухни",
];
const AUD_NO = [
  "Шумным вечеринкам и громкой музыке",
  "Большим громким компаниям",
  "Отдыху с домашними животными",
  "Тем, кому нужна плотная программа развлечений",
  "Тем, кто едет за ночной жизнью",
];

function Audience() {
  return (
    <section className="section cream" id="audience">
      <TornEdge position="top" fill="var(--bs-cream)" variant="b" />
      <div className="container">
        <SectionHead eyebrow="Кому подходит место"
          title="Место не для всех — и это честно"
          sub="«Белый стан» рядом с заповедным озером. Чтобы сохранить тишину, мы выбираем спокойный формат отдыха." />
        <div className="audience">
          <Reveal as="div" className="audcol yes">
            <div className="ah"><span className="badge"><Icon name="heart" /></span><h3 className="serif">Здесь будет хорошо</h3></div>
            <p className="sub">Если вы едете замедлиться и побыть рядом с водой.</p>
            <ul>{AUD_YES.map((c, i) => <li key={i}><Icon name="check" />{c}</li>)}</ul>
          </Reveal>
          <Reveal as="div" className="audcol no" delay={90}>
            <div className="ah"><span className="badge"><Icon name="ban" /></span><h3 className="serif">Наше место не подходит</h3></div>
            <p className="sub">Это не шумная база отдыха и не развлекательный комплекс.</p>
            <ul>{AUD_NO.map((c, i) => <li key={i}><Icon name="x" />{c}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const HOUSES = [
  {
    id: "fisher", name: "Дом рыбака", forwhom: "Для рыбака или двоих, кто встаёт с рассветом",
    photos: ["fisher-house.webp", "fisher-interior.webp"],
    chips: ["Бревенчатый сруб", "2 места", "У самой воды", "Завтрак включён"],
    feats: ["Две односпальные кровати", "Сруб ручной работы", "Тёплый пол", "Окно на территорию", "Скамья у входа", "В шаге от мостков и воды"],
    week: "3 500 ₽", end: "4 000 ₽",
  },
  {
    id: "std", name: "Дом «Стандарт»", forwhom: "Для пары или семьи с ребёнком",
    photos: ["std-1.webp", "std-2.webp", "std-3.webp", "std-4.webp", "std-5.webp", "std-6.webp", "std-7.webp"],
    chips: ["24 м²", "2 + 1 места", "Студия", "Завтрак включён"],
    feats: ["Двухместный диван", "Кресло-кровать", "Кухонный уголок", "Холодильник и СВЧ", "Чайник и посуда", "Душ и туалет"],
    week: "7 000 ₽", end: "8 000 ₽",
  },
  {
    id: "lux", name: "Гостевой дом «Люкс»", forwhom: "Для семьи или небольшой компании",
    photos: ["lux-1.webp", "lux-2.webp", "lux-3.webp", "lux-4.webp", "lux-5.webp", "lux-6.webp", "lux-7.webp"],
    chips: ["70 м²", "4 + 2 места", "2 спальни", "Завтрак включён"],
    feats: ["Две отдельные спальни", "Гостиная с диваном", "Smart TV", "Кухонный уголок", "Холодильник и СВЧ", "Душ и туалет отдельно"],
    week: "10 000 ₽", end: "12 000 ₽",
  },
];

function LCarousel({ photos, alt }) {
  const [i, setI] = React.useState(0);
  const n = photos.length;
  const startX = React.useRef(null);
  const go = (d) => setI((p) => (p + d + n) % n);
  const onDown = (e) => { startX.current = e.clientX; };
  const onUp = (e) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };
  return (
    <div className="lcar" onPointerDown={onDown} onPointerUp={onUp}>
      <div className="lcar-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {photos.map((p, k) => (
          <div className="lcar-slide" key={k} style={pbg(p, p)} role="img" aria-label={alt + " — фото " + (k + 1)}></div>
        ))}
      </div>
      {n > 1 && (
        <React.Fragment>
          <button className="lcar-arrow prev" onClick={() => go(-1)} aria-label="Предыдущее фото"><Icon name="chevronRight" style={{ transform: "rotate(180deg)" }} /></button>
          <button className="lcar-arrow next" onClick={() => go(1)} aria-label="Следующее фото"><Icon name="chevronRight" /></button>
          <div className="lcar-dots">
            {photos.map((_, k) => (
              <button key={k} className={"dot" + (k === i ? " on" : "")} onClick={() => setI(k)} aria-label={"Фото " + (k + 1)}></button>
            ))}
          </div>
          <span className="lcar-count">{i + 1} / {n}</span>
        </React.Fragment>
      )}
    </div>
  );
}

function Lodging({ onBook }) {
  return (
    <section className="section paper" id="lodging">
      <div className="container">
        <div className="lodge-intro">
          <SectionHead eyebrow="Проживание у озера" title="Выберите свой дом"
            sub="Вы уже знаете, зачем ехать. Осталось выбрать, где проснуться: камерный сруб у воды, компактная студия или просторный дом. Завтрак входит в стоимость." />
        </div>
        <div className="lodging">
          {HOUSES.map((h, idx) => (
            <Reveal as="article" key={h.id} className="lcard" delay={idx * 90}>
              <div className="img">
                {h.photos && h.photos.length ? (
                  <LCarousel photos={h.photos} alt={h.name} />
                ) : (
                  <div className="lph" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", color: "var(--bs-muted)", background: "var(--bs-sand)" }}>
                    <Icon name="mountainSnow" style={{ width: 30, height: 30, opacity: .6 }} />
                    <span style={{ font: "700 12px/1.4 var(--bs-sans)", letterSpacing: ".12em", textTransform: "uppercase" }}>Фото дома «Люкс»</span>
                  </div>
                )}
                <span className="tagprice">от {h.week} / ночь</span>
              </div>
              <div className="b">
                <h3>{h.name}</h3>
                <p className="for">{h.forwhom}</p>
                <div className="chips">{h.chips.map((c, i) => <span className="chip" key={i}>{c}</span>)}</div>
                <ul className="feats">{h.feats.map((f, i) => <li key={i}>{f}</li>)}</ul>
                <div className="foot">
                  <span className="price">{h.week}<small><span className="wk">будни</span> · {h.end} выходные</small></span>
                  <Button variant="primary" icon="phone" href="tel:+79069440762">Забронировать</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="lodge-note">Заезд с 14:00, выезд до 12:00 · Предоплата при бронировании — 2 000 ₽ · Завтрак входит в стоимость проживания.</p>
      </div>
    </section>
  );
}

const AMENITIES = [
  ["waves", "Озеро", null],
  ["bath", "Баня", null],
  ["droplets", "Купель", null],
  ["tent", "Беседка", null],
  ["flame", "Мангальная зона", null],
  ["sparkle", "Костровая зона", null],
  ["navigation", "Сап-борды", "s"],
  ["mountainSnow", "Русская горка", "w"],
  ["sleigh", "Сани с лошадьми", "w"],
  ["binoculars", "Наблюдение за птицами", null],
];

function Territory() {
  return (
    <section className="section band-forest" id="territory">
      <TornEdge position="top" fill="var(--bs-forest)" variant="b" />
      <div className="container">
        <SectionHead onDark eyebrow="Территория и удобства" title="Территория для спокойного отдыха"
          sub="Не перегружена активностями. Она создана для тихого отдыха, прогулок, бани, еды на свежем воздухе и наблюдения за природой." />
        <Reveal as="div" className="amen">
          {AMENITIES.map(([ic, l, s], i) => (
            <div className="atile" key={i}>
              <Icon name={ic} />
              <span className="lab">{l}</span>
              {s && <span className={"season " + s}>{s === "s" ? "Лето" : "Зима"}</span>}
            </div>
          ))}
        </Reveal>
        <div className="terr-note">
          <span className="pillnote"><b>Беседка и мангал</b> — бесплатно для гостей</span>
          <span className="pillnote"><b>Баня</b> — 1 500 ₽/час, минимум 2 часа</span>
        </div>
      </div>
    </section>
  );
}

function DogNote() {
  return (
    <section className="section paper dognote-sec">
      <div className="container">
        <Reveal as="div" className="dognote">
          <span className="dognote-ic"><Icon name="dog" /></span>
          <div className="dognote-body">
            <h3 className="serif">Про собак — честно</h3>
            <p>Мы любим домашних животных. Стан расположен на особой территории, и по закону мы не можем принимать гостей с собаками любых пород.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Compare, Audience, DogNote, Lodging, Territory, HOUSES });
