import { useState } from "react";
import { Sparkles, Lightbulb, Hammer, Heart, Star, ChevronDown } from "lucide-react";
import WhatsAppButton, { buildWhatsAppUrl } from "@/components/landing/WhatsAppButton";
import heroLamp from "@/assets/hero-lamp.jpg";
import lamp1 from "@/assets/lamp-1.jpg";
import lamp2 from "@/assets/lamp-2.jpg";
import lamp3 from "@/assets/lamp-3.jpg";
import lamp4 from "@/assets/lamp-4.jpg";
import lamp5 from "@/assets/lamp-5.jpg";
import lamp6 from "@/assets/lamp-6.jpg";

const gallery = [
  { src: lamp1, alt: "Lámpara 3D iluminada sobre una mesita de noche" },
  { src: lamp4, alt: "Lámpara 3D con textura de olas proyectando patrones" },
  { src: lamp2, alt: "Lámpara 3D geométrica en un acogedor salón" },
  { src: lamp3, alt: "Detalle de la textura de una lámpara 3D" },
  { src: heroLamp, alt: "Detalle de la textura de una lámpara 3D" }
  
];

const features = [
  { icon: Sparkles, title: "Diseño original", desc: "Cada pieza es creada desde cero, con una forma y estética que no encontrarás en productos convencionales." },
  { icon: Hammer, title: "Hecha a medida", desc: "Diseñada en secciones que encajan con exactitud, logrando una pieza sólida, equilibrada y visualmente limpia.." },
  { icon: Lightbulb, title: "Luz cálida envolvente", desc: "Un brillo ámbar suave que transforma cualquier rincón." },
  { icon: Heart, title: "Cuidado en cada detalle", desc: "Materiales seleccionados y acabados pensados para ofrecer una experiencia estética que se percibe desde el primer momento." },
];

const testimonials = [
  { name: "Lucía M.", text: "Sin duda, una de las mejores decisiones para mi espacio. La luz crea un ambiente completamente distinto.", rating: 5 },
  { name: "Karim B.", text: "No es solo una lámpara, es una pieza que llama la atención. Siempre me preguntan por ella.", rating: 5 },
  { name: "Sofía R.", text: "En persona se ve incluso mejor. Se nota el nivel de detalle y el cuidado en el diseño.", rating: 5 },
];

const faqs = [
  { q: "¿Cómo hago el pedido?", a: "Solo pulsa cualquier botón de WhatsApp en esta página. Te guiamos paso a paso para confirmar tu pedido y coordinar el envío de forma rápida y sencilla." },
  { q: "¿Cuánto tarda el envío?", a: "Cada pieza se prepara bajo pedido. El tiempo de entrega es de 3 a 5 días de preparación, más el envío según tu ubicación (normalmente entre 2 y 7 días)." },
  { q: "¿Qué incluye?", a: "Tu EpoLum lista para usar: lámpara, bombilla LED cálida, cable y un empaque cuidado, ideal incluso para regalo." },
  { q: "¿Está disponible siempre?", a: "Trabajamos con producción limitada para cuidar cada detalle. La disponibilidad puede variar según la demanda." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 sm:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold tracking-wide">
            Epo<span className="text-gradient-warm">L</span>um
          </a>
          <WhatsAppButton size="default" className="hidden sm:inline-flex">Pedir ahora</WhatsAppButton>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-6 pt-28 pb-56 sm:px-10">
        <div className="absolute inset-0 z-0">
          <img
            src={lamp4}
            alt="3D printed night lamp glowing warm in a dark bedroom"
            className="h-full w-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-glow animate-glow-pulse" />
        </div>

        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Diseño original · Producción limitada
          </span>

          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Donde la luz se convierte en <span className="text-gradient-warm italic">diseño</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Una pieza creada a partir de geometría y forma orgánica para aportar carácter, atmósfera y estilo a cualquier rincón
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton size="xl" className="w-full sm:w-auto">Pedir por WhatsApp</WhatsAppButton>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-4 text-base font-medium backdrop-blur transition-smooth hover:bg-card/80"
            >
              Ver las lámparas
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <span>Más de 1.200 hogares enamorados</span>
          </div>
        </div>

        <ChevronDown className="absolute bottom-6 left-1/2 h-6 w-6 -translate-x-1/2 text-muted-foreground animate-float" aria-hidden />
      </section>

      {/* PRESENTATION */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-glow blur-2xl" />
            <img
              src={lamp4}
              alt="Wave-shaped 3D printed lamp glowing warm light"
              className="w-full rounded-2xl shadow-soft animate-float"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-primary">La pieza</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Una luz que se siente <span className="text-gradient-warm italic">viva</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              EpoLum no es solo iluminación. Es una pieza de diseño creada desde cero para aportar carácter, calma y presencia a cualquier entorno.

Su forma y textura generan una luz cálida envolvente que no solo ilumina, sino que construye atmósferas.

Diseñada en partes que se integran con precisión para lograr una estética limpia y equilibrada.

            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Colócala en tu espacio y nota cómo cambia todo, sin necesidad de decir una palabra.
            </p>
            <div className="mt-8">
              <WhatsAppButton>Consigue la tuya</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-background px-6 py-20 sm:px-10 sm:py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-4xl font-medium sm:text-5xl">
        Por qué destaca
      </h2>
      <p className="mt-4 text-muted-foreground">
        Diseñada para marcar la diferencia
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="flex flex-col h-full rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6 stroke-[1.5]" />
          </div>

          <h3 className="mt-5 font-display text-xl font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* GALLERY */}
      <section id="gallery" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-primary">Ambientes</span>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">Cómo se ve en tu espacio</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton size="xl">Pide la tuya por WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card/30 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Experiencias reales con EpoLum en su espacio</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-background/40 p-6 backdrop-blur">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-5 text-sm font-medium text-muted-foreground">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-4xl font-medium sm:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-glow animate-glow-pulse" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-6xl">
            Haz que tu <span className="text-gradient-warm italic">espacio</span> deje de ser común
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            EpoLum está disponible en unidades limitadas. Reserva la tuya en minutos por WhatsApp.
          </p>
          <div className="mt-9">
            <WhatsAppButton size="xl">Quiero mi EpoLum</WhatsAppButton>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Te respondemos rápido y te ayudamos sin </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-xl">Epo<span className="text-gradient-warm">L</span>um</span>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EpoLum. Diseño original.</p>
        </div>
      </footer>

      {/* STICKY MOBILE WHATSAPP */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition-smooth hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        aria-label="Pedir por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
