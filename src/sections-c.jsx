/* Белый стан — sections C: Kitchen, Blini, Rules, FindUs, Final, Footer */

const MENU = [
  ["coffee", "Каша с местными ягодами", "на завтрак, включён"],
  ["fish", "Уха из форели", "главное блюдо дня"],
  ["soup", "Домашние супы", "сытно и просто"],
  ["wheat", "Горячие блюда", "русская деревенская кухня"],
  ["utensils", "Блины со сметаной и вареньем", "фирменные"],
];

function Kitchen() {
  return (
    <section className="section cream" id="kitchen">
      <TornEdge position="top" fill="var(--bs-cream)" variant="a" />
      <div className="container">
        <div className="kitchen">
          <Reveal className="copy">
            <span className="eyebrow">Кухня «Белого стана»</span>
            <h2 className="title">Натуральная. Домашняя. Настоящая.</h2>
            <p className="body lg">Традиционная кухня русской деревни — простая, сытная и понятная. Без вычурности, но с тем самым вкусом, ради которого вспоминают поездку.</p>
            <p className="body">Еда здесь не ресторанный спектакль. Она согревает после прогулки, собирает за столом и делает отдых завершённым. Завтрак входит в стоимость проживания.</p>
            <ul className="menu-list">
              {MENU.map(([ic, t, d], i) => (
                <li key={i}><Icon name={ic} style={{ width: 19, height: 19, color: "var(--bs-sage-deep)", flex: "none" }} /><b>{t}</b><span className="dots"></span><span>{d}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="collage" delay={120} style={{ minHeight: "480px" }}>
            <div className="tape t1"></div>
            <div className="ph a" style={pbg("kitchen-1.webp", "kitchen-house.webp")}></div>
            <div className="ph b" style={pbg("kitchen-2.webp", "dish-fish.webp")}></div>
            <div className="ph c" style={pbg("kitchen-3.webp", "breakfast.webp")}></div>
            <span className="cap-pill" style={{ left: "4%", bottom: "-14px" }}>Домашняя кухня</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Blini() {
  return (
    <section className="section band-gold blini" id="blini">
      <TornEdge position="top" fill="var(--bs-gold)" variant="b" />
      <div className="container">
        <div className="blini-grid">
          <Reveal className="photowrap" delay={0}>
            <div className="tape"></div>
            <div className="ph" style={pbg("blini.webp", "breakfast.webp")}></div>
          </Reveal>
          <Reveal className="copy">
            <span className="eyebrow">Фирменные блины</span>
            <h2 className="title">Вот это блины!</h2>
            <p className="body">Блины в «Белом стане» — отдельная причина приехать. Горячие, мягкие, с деревенской сметаной и вареньем из местной жимолости.</p>
            <p className="story">«Бывали случаи, когда гости приезжали за 300 километров только ради этих блинов: ели, пили чай, смотрели на озеро и отправлялись обратно».</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const RULES = [
  ["volumeX", "Тишина у воды", "Без шумных вечеринок и громкой музыки — спокойствие здесь главное."],
  ["paw", "Без домашних животных", "Рядом заповедная зона, поэтому гостей с питомцами мы не размещаем."],
  ["smokeOff", "Не курим в домах", "Курение на территории базы и в домах недопустимо."],
  ["leaf", "С уважением к природе", "К воде, птицам и тишине — так это место остаётся собой."],
];

function Rules() {
  return (
    <section className="section band-sage" id="rules">
      <TornEdge position="top" fill="var(--bs-sage)" variant="a" />
      <div className="container">
        <SectionHead onDark eyebrow="Правила тишины" title="Немного важных правил"
          sub="Отдых здесь устроен бережно — по отношению к природе, гостям и самому месту. Это не запреты, а способ сохранить тишину." />
        <div className="rules">
          {RULES.map(([ic, t, d], i) => (
            <Reveal as="div" key={i} className="rule-card" delay={i * 70}>
              <span className="ri"><Icon name={ic} /></span>
              <div><b>{t}</b><span>{d}</span></div>
            </Reveal>
          ))}
        </div>
        <p className="rules-foot body" style={{ maxWidth: "62ch" }}>
          Мы оставляем за собой право вежливо отказать в размещении, если формат поездки не подходит месту. Не каждый гость подходит каждому пространству — и в этом есть зрелость.
        </p>
      </div>
    </section>
  );
}

const ADDRESS = "Алтайский край, Советский район, посёлок Семилетка, улица Чапаева, 29";
const PHONE_DISPLAY = "+7 906 944-07-62";
const PHONE_TEL = "+79069440762";

function FindUs() {
  const q = encodeURIComponent(ADDRESS);
  const lat = "52.2942930", lon = "85.6344893";
  const ll = lon + "%2C" + lat; // yandex order: lon,lat
  return (
    <section className="section paper" id="find">
      <TornEdge position="top" fill="var(--bs-paper)" variant="b" />
      <div className="container">
        <SectionHead eyebrow="Как добраться" title="Несколько километров после Семилетки"
          sub="«Белый стан» — по пути к туристической точке «Лебединое озеро»." />
        <div className="find">
          <Reveal as="div" className="findcard">
            <span className="eyebrow plain">Адрес</span>
            <p className="addr">Алтайский край, Советский&nbsp;район,<br />посёлок Семилетка, ул.&nbsp;Чапаева,&nbsp;29</p>
            <ul className="steps">
              <li><span className="n">1</span>После села Советское двигайтесь по указателям до «Семилетки».</li>
              <li><span className="n">2</span>Сразу после указателя поверните направо на просёлочную улицу.</li>
              <li><span className="n">3</span>Через несколько километров дорога приведёт к «Белому стану».</li>
            </ul>
            <div className="contact">
              <Icon name="phone" /><a href={"tel:" + PHONE_TEL}>{PHONE_DISPLAY}</a>
            </div>
            <div className="nav-btns">
              <Button variant="dark" size="sm" icon="navigation" href={"https://yandex.ru/maps/?pt=" + ll + "&z=16&l=map&rtext=~" + lat + "%2C" + lon}
                className="" >Яндекс.Навигатор</Button>
              <Button variant="ghost" size="sm" icon="mapPin" href={"https://2gis.ru/geo/" + lon + "%2C" + lat}
                className="ink">Открыть в 2ГИС</Button>
            </div>
          </Reveal>
          <Reveal as="div" className="mapwrap" delay={100}>
            <span className="maplabel"><Icon name="mapPin" />Белый стан · Семилетка</span>
            <iframe
              title="Карта — Белый стан"
              loading="lazy"
              src={"https://yandex.ru/map-widget/v1/?ll=" + ll + "&z=15&pt=" + ll + "%2Cpm2rdm&l=map"}
              allowFullScreen></iframe>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onBook }) {
  return (
    <section className="section band-forest final" id="book">
      <TornEdge position="top" fill="var(--bs-forest)" variant="a" />
      <div className="container narrow">
        <SectionHead onDark eyebrow="Бронирование" title="Какой Белый стан — ваш?"
          sub="Летом — озеро, сап-борды, рыбалка, костёр и закаты. Зимой — лебеди, баня, сани, ледяная горка и незамерзающая вода." />
        <div className="recap">
          <Reveal as="div" className="rc summer">
            <span className="stag">Лето · июнь — сентябрь</span>
            <p>Тёплая вода, тихие берега и закаты, ради которых остаются ещё на ночь.</p>
            <Button variant="gold" icon="phone" href="tel:+79069440762">Забронировать летний отдых</Button>
          </Reveal>
          <Reveal as="div" className="rc winter" delay={90}>
            <span className="stag">Зима · ноябрь — апрель</span>
            <p>Белые лебеди у незамерзающей воды, жаркая баня и настоящая русская зима.</p>
            <Button variant="ghost" icon="phone" href="tel:+79069440762">Забронировать зимний отдых</Button>
          </Reveal>
        </div>
        <div className="phone-row">
          <span className="eyebrow on-dark" style={{ justifyContent: "center" }}>или просто позвоните</span>
          <a className="ph-num" href={"tel:" + PHONE_TEL}>{PHONE_DISPLAY}</a>
        </div>
      </div>
    </section>
  );
}

function Footer({ onBook }) {
  const go = (sel) => (e) => { e.preventDefault(); document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div>
            <div className="brand">Белый&nbsp;стан</div>
            <p className="tagline">Тихое место у живого озера, где лето и зима становятся частью отдыха.</p>
          </div>
          <div>
            <h5>Разделы</h5>
            <a href="#seasons" onClick={go("#seasons")}>Два сезона</a>
            <a href="#lodging" onClick={go("#lodging")}>Проживание</a>
            <a href="#territory" onClick={go("#territory")}>Территория</a>
            <a href="#kitchen" onClick={go("#kitchen")}>Кухня</a>
            <a href="#find" onClick={go("#find")}>Как добраться</a>
          </div>
          <div>
            <h5>Контакты</h5>
            <a href={"tel:" + PHONE_TEL}>{PHONE_DISPLAY}</a>
            <a href="#find" onClick={go("#find")}>п. Семилетка, ул. Чапаева, 29</a>
            <a>Алтайский край, Советский р-н</a>
          </div>
        </div>
        <div className="bottom">
          <span>© 2025 Белый стан</span>
          <span>Тишина · природа · два сезона у воды</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Kitchen, Blini, Rules, FindUs, FinalCTA, Footer, ADDRESS, PHONE_DISPLAY, PHONE_TEL });
