import {
  Baby,
  Brain,
  ChevronDown,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
} from "lucide-react";
import { useState } from "react";
import swarnaBinduVisual from "../../assets/swarna-bindu-pushyam1.png";
import "./SwarnaBinduSection.css";

const benefits = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.45} aria-hidden="true" />,
    title: "Immunity & strength",
    text: "Traditionally associated with Bala—strength and natural resilience.",
  },
  {
    icon: <Sprout size={22} strokeWidth={1.45} aria-hidden="true" />,
    title: "Digestion",
    text: "Linked in Ayurvedic tradition with supporting Agni and nourishment.",
  },
  {
    icon: <Brain size={22} strokeWidth={1.45} aria-hidden="true" />,
    title: "Intellect & focus",
    text: "Traditionally associated with Medha—learning, memory and intellect.",
  },
  {
    icon: <Leaf size={22} strokeWidth={1.45} aria-hidden="true" />,
    title: "Vitality & growth",
    text: "A traditional practice centred on healthy childhood development.",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.45} aria-hidden="true" />,
    title: "Rejuvenation",
    text: "Associated with vitality and overall wellbeing in Ayurvedic practice.",
  },
  {
    icon: <HeartHandshake size={22} strokeWidth={1.45} aria-hidden="true" />,
    title: "Supportive care",
    text: "Offered with compassion alongside a child’s continuing medical care.",
  },
];

const SwarnaBinduSection = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <section className="swarna-section" aria-labelledby="swarna-title">
    <div className="swarna-section__halo" aria-hidden="true" />
    <div className="swarna-shell">
      <header className="swarna-heading">
        <div>
          <p className="swarna-kicker">
            <Star size={14} fill="currentColor" aria-hidden="true" />
            Every Pushyami Nakshatra
          </p>
          <h2 id="swarna-title">Swarna Bindu Prashana</h2>
        </div>
        <p>
          An ancient Ayurvedic tradition carried forward with care for the
          health and wellbeing of the younger generation. Swarna Bindu
          Prashana is held on every Pushyami. For upcoming dates, please call
          or reach out to us.
        </p>
      </header>

      <div className="swarna-feature">
        <div className="swarna-feature__image">
          <img
            src={swarnaBinduVisual}
            alt="Traditional Swarna Bindu Prashana offering for a child"
          />
          <div className="swarna-feature__shade" aria-hidden="true" />
          <div className="swarna-feature__age">
            <Baby size={21} strokeWidth={1.5} aria-hidden="true" />
            <span>For children from</span>
            <strong>15 days to 16 years</strong>
          </div>
        </div>

        <div className="swarna-feature__content">
          <p className="swarna-feature__eyebrow">Ancient wisdom for brighter generations</p>
          <h3>A special monthly offering for children’s wellbeing.</h3>
          <p>
            Traditionally associated with Pushyami Nakshatra, Swarna Prashana
            has long formed part of Ayurvedic childhood care. Considerable
            attention, quality ingredients, traditional preparation and
            resources go into every dose.
          </p>

          <div className="swarna-free-card">
            <span>Charitable service</span>
            <strong>Completely free</strong>
            <p>
              This monthly programme collectively represents an Ayurvedic
              offering worth lakhs—provided free to children and families.
            </p>
          </div>

          <div className="swarna-feature__facts">
            <div><span>01</span><p>Pushyami Nakshatra programme</p></div>
            <div><span>02</span><p>Traditional Ayurvedic preparation</p></div>
            <div><span>03</span><p>Prepared and offered with care</p></div>
          </div>
        </div>
      </div>

      <div className="swarna-details">
        <div className="swarna-details__heading">
          <p className="swarna-kicker">Discover the tradition</p>
          <h3>Learn more about this monthly offering.</h3>
          <p>Select a chapter to explore its meaning, care and history.</p>
        </div>

        <div className="swarna-accordion">
          <article className={openPanel === "benefits" ? "is-open" : ""}>
            <button
              type="button"
              aria-expanded={openPanel === "benefits"}
              aria-controls="swarna-benefits-panel"
              onClick={() => togglePanel("benefits")}
            >
              <span className="swarna-accordion__number">01</span>
              <span>
                <small>In Ayurvedic tradition</small>
                <strong>Benefits associated with overall wellbeing</strong>
              </span>
              <ChevronDown size={22} aria-hidden="true" />
            </button>
            <div
              id="swarna-benefits-panel"
              className="swarna-accordion__panel"
              hidden={openPanel !== "benefits"}
            >
              <div className="swarna-benefits">
                <div className="swarna-benefits__intro">
                  <h3>Care associated with the child’s overall wellbeing.</h3>
                  <p>
                    Classical Ayurvedic descriptions of Swarna Prashana connect
                    the practice with Medha, Bala and Agni—intellect, strength
                    and digestion.
                  </p>
                </div>
                <div className="swarna-benefits__grid">
                  {benefits.map(({ icon, title, text }) => (
                    <article key={title}>
                      <div>{icon}</div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className={openPanel === "support" ? "is-open" : ""}>
            <button
              type="button"
              aria-expanded={openPanel === "support"}
              aria-controls="swarna-support-panel"
              onClick={() => togglePanel("support")}
            >
              <span className="swarna-accordion__number">02</span>
              <span>
                <small>Compassionate supportive care</small>
                <strong>Welcoming children with different care needs</strong>
              </span>
              <ChevronDown size={22} aria-hidden="true" />
            </button>
            <div
              id="swarna-support-panel"
              className="swarna-accordion__panel"
              hidden={openPanel !== "support"}
            >
              <div className="swarna-support">
                <div className="swarna-support__symbol" aria-hidden="true">
                  <HeartHandshake size={35} strokeWidth={1.2} />
                </div>
                <div>
                  <p className="swarna-kicker">Support that respects continuing care</p>
                  <h3>Care offered with compassion and responsibility.</h3>
                </div>
                <p>
                  The programme is also offered as supportive Ayurvedic care for
                  children including those living with ADHD, Autism, Cerebral
                  Palsy, Muscular Dystrophy and various genetic
                  conditions—alongside their prescribed treatments and medical supervision.
                </p>
              </div>
            </div>
          </article>

          <article className={openPanel === "history" ? "is-open" : ""}>
            <button
              type="button"
              aria-expanded={openPanel === "history"}
              aria-controls="swarna-history-panel"
              onClick={() => togglePanel("history")}
            >
              <span className="swarna-accordion__number">03</span>
              <span>
                <small>The history of Swarna Prashana</small>
                <strong>Rooted in the tradition of Kaumarabhritya</strong>
              </span>
              <ChevronDown size={22} aria-hidden="true" />
            </button>
            <div
              id="swarna-history-panel"
              className="swarna-accordion__panel"
              hidden={openPanel !== "history"}
            >
              <div className="swarna-history">
                <div>
                  <p className="swarna-kicker">An ancient childhood-care tradition</p>
                  <h3>Rooted in the tradition of Kaumarabhritya.</h3>
                </div>
                <div className="swarna-history__copy">
                  <p>
                    Swarna Prashana is prominently described by Acharya Kashyapa,
                    one of the foremost authorities of Ayurvedic paediatrics. It
                    was traditionally given to infants and children as part of
                    Lehana—a method of administering a specially prepared
                    substance in a small, lickable form.
                  </p>
                  <p>
                    Over time, Pushyami Nakshatra became especially associated
                    with its administration. Today, Dr. Dadhe’s continues this
                    tradition as a special monthly occasion dedicated to
                    children’s health and wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="swarna-closing">
        <div className="swarna-closing__lotus" aria-hidden="true">
          <Leaf size={33} strokeWidth={1.25} />
        </div>
        <p className="swarna-kicker">Tradition · Compassion · Holistic wellbeing</p>
        <h3>A small offering from us, with a heartfelt intention for every child.</h3>
        <p>
          Join us at Dr. Dadhe’s Ayur &amp; Nature Cure during our monthly
          Pushyami Nakshatra programme.
        </p>
        <div className="swarna-closing__actions">
          <a href="tel:+919966426060">Call for programme details</a>
          <a
            href="https://wa.me/919966426060"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask us on WhatsApp
          </a>
        </div>
        <small>
          Traditional supportive Ayurvedic care; individual needs and outcomes
          vary. This programme does not replace medical diagnosis or prescribed treatment.
        </small>
      </div>
    </div>
    </section>
  );
};

export default SwarnaBinduSection;
