/* Белый стан — app shell: season state, booking modal, composition */

function BookingModal({ open, initHouse, initSeason, season, onClose }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", inDate: "", outDate: "", house: "std", season: season });

  React.useEffect(() => {
    if (open) {
      setSubmitted(false);
      setForm((f) => ({ ...f, house: initHouse || "std", season: initSeason || season }));
    }
  }, [open, initHouse, initSeason]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className={"overlay" + (open ? " open" : "")} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Бронирование">
        <button className="close" onClick={onClose} aria-label="Закрыть"><Icon name="x" /></button>
        {submitted ? (
          <div className="success">
            <div className="ok"><Icon name="checkCircle" /></div>
            <h3 className="serif">Заявка принята</h3>
            <p className="lead-sm" style={{ marginBottom: 18 }}>
              {form.name ? form.name + ", спасибо!" : "Спасибо!"} Мы свяжемся с вами, чтобы подтвердить даты и ответить на вопросы — в том числе про сезон лебедей.
            </p>
            <Button variant="primary" className="submit" onClick={onClose}>Хорошо</Button>
            <p className="or-call">Нужно срочно? Позвоните: <a href={"tel:" + PHONE_TEL}>{PHONE_DISPLAY}</a></p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <span className="eyebrow">Бронирование</span>
            <h3>Забронировать дом</h3>
            <p className="lead-sm">Оставьте контакты — уточним свободные даты и условия. Это заявка, а не оплата.</p>
            <div className="field">
              <label>Ваше имя</label>
              <input type="text" value={form.name} onChange={set("name")} placeholder="Как к вам обращаться" required />
            </div>
            <div className="field">
              <label>Телефон</label>
              <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+7 ___ ___-__-__" required />
            </div>
            <div className="field two">
              <div>
                <label>Заезд</label>
                <input type="date" value={form.inDate} onChange={set("inDate")} />
              </div>
              <div>
                <label>Выезд</label>
                <input type="date" value={form.outDate} onChange={set("outDate")} />
              </div>
            </div>
            <div className="field">
              <label>Дом</label>
              <select value={form.house} onChange={set("house")}>
                <option value="fisher">Дом рыбака · от 3 500 ₽</option>
                <option value="std">Дом «Стандарт» · от 7 000 ₽</option>
                <option value="lux">Гостевой дом «Люкс» · от 10 000 ₽</option>
              </select>
            </div>
            <div className="field">
              <label>Сезон</label>
              <div className="seg">
                <button type="button" className={form.season === "summer" ? "active" : ""} onClick={() => setForm((f) => ({ ...f, season: "summer" }))}><Icon name="sun" />Лето</button>
                <button type="button" className={form.season === "winter" ? "active" : ""} onClick={() => setForm((f) => ({ ...f, season: "winter" }))}><Icon name="snow" />Зима</button>
              </div>
            </div>
            <Button variant="primary" className="submit"><span>Отправить заявку</span></Button>
            <p className="fineprint">Завтрак входит в стоимость · Предоплата 2 000 ₽ при подтверждении</p>
            <p className="or-call">или позвоните: <a href={"tel:" + PHONE_TEL}>{PHONE_DISPLAY}</a></p>
          </form>
        )}
      </div>
    </div>
  );
}

function App() {
  const [season, setSeason] = React.useState("summer");
  const [solid, setSolid] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [booking, setBooking] = React.useState({ open: false, house: null, season: null });

  React.useEffect(() => { document.documentElement.setAttribute("data-season", season); }, [season]);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openBook = (house = null, seasonPref = null) => setBooking({ open: true, house, season: seasonPref });
  const closeBook = () => setBooking((b) => ({ ...b, open: false }));

  return (
    <>
      <Header solid={solid} season={season} setSeason={setSeason} onBook={() => openBook()} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero season={season} onBook={openBook} />
        <SeasonFeature season={season} setSeason={setSeason} onBook={openBook} />
        <Audience />
        <DogNote />
        <Lodging onBook={openBook} />
        <Territory />
        <Gallery season={season} />
        <Kitchen />
        <Blini />
        <Rules />
        <FindUs />
        <FinalCTA onBook={openBook} />
      </main>
      <Footer onBook={openBook} />
      <BookingModal open={booking.open} initHouse={booking.house} initSeason={booking.season} season={season} onClose={closeBook} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
