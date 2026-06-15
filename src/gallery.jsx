/* Белый стан — Gallery: justified rows (mixed portrait/landscape, even edges) */

/* [filename, caption] — all real brand photography, mixed orientations. */
const GALLERY = [
  ["gallery-1.webp",  "Лебедь расправляет крылья"],
  ["gallery-16.webp", "Лебеди-кликуны"],
  ["gallery-2.webp",  "Двое на рассвете"],
  ["gallery-4.webp",  "Закат над озером"],
  ["gallery-18.webp", "Лебеди в морозном тумане"],
  ["gallery-13.webp", "Сапы на берегу"],
  ["gallery-3.webp",  "Беседка у дома"],
  ["gallery-17.webp", "Ледяная горка"],
  ["gallery-5.webp",  "На мостках у воды"],
  ["gallery-9.webp",  "Озеро на закате"],
  ["gallery-19.webp", "Зимний закат у воды"],
  ["gallery-6.webp",  "Территория «Белого стана»"],
  ["gallery-15.webp", "Закатные мостки"],
  ["gallery-7.webp",  "Мангал на берегу"],
  ["gallery-8.webp",  "Кормушка у воды"],
  ["gallery-10.webp", "Живая река"],
  ["gallery-11.webp", "Дом у запруды"],
];

function GTile({ file, cap }) {
  // Detect the real aspect ratio so the justified row can size it correctly.
  const [ar, setAr] = React.useState(1.5);
  React.useEffect(() => {
    const img = new Image();
    img.onload = () => { if (img.naturalHeight) setAr(img.naturalWidth / img.naturalHeight); };
    img.src = IMG(photo(file, file));
  }, [file]);
  return (
    <figure className="gtile" style={{ "--ar": ar }}>
      <span className="gimg" style={pbg(file, file)}></span>
      <figcaption className="gcap">{cap}</figcaption>
    </figure>
  );
}

function Gallery() {
  return (
    <section className="section cream" id="gallery">
      <TornEdge position="top" fill="var(--bs-cream)" variant="a" />
      <div className="container">
        <SectionHead eyebrow="Галерея" title="Как это выглядит вживую"
          sub="Несколько кадров обоих сезонов — тишина у воды, лебеди, дома и домашняя еда." />
        <Reveal as="div" className="gallery-grid">
          {GALLERY.map(([f, cap], i) => (
            <GTile key={i} file={f} cap={cap} />
          ))}
          {/* keeps the last row left-aligned instead of stretching */}
          <i className="grow-filler" aria-hidden="true"></i>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Gallery, GALLERY, GTile });
