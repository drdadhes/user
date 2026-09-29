import {
  CalendarDays,
  Eye,
  HeartPulse,
  Leaf,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";
import SEO from "../../components/SEO";
import {
  dropsOffering,
  sacredEvents,
  swarnaPrashanaStory,
} from "./events.data";
import "./Events.css";

const Events = () => (
  <main className="events-page">
    <SEO
      title="Sacred Events | Dr Dadhe's Ayur & Nature Cure"
      description="Learn about Swarna Bindu Prashana, Pournami Prasadam and Amavasya Theertham at Dr Dadhe's Ayur & Nature Cure."
      path="/events"
    />

    <header className="events-hero">
      <div className="events-hero__aura" aria-hidden="true" />
      <div className="events-shell events-hero__stage">
        <div className="events-hero__heading">
          <p className="events-kicker">Our belief &amp; tradition</p>
          <h1>
            Sacred occasions,
            <span>offered with devotion</span>
          </h1>
          <div className="events-hero__introduction">
            <p>
              At Dr Dadhe’s Ayur &amp; Nature Cure, we believe that Surya—the
              Sun—and Chandra—the Moon—are deeply revered forces in our
              traditional way of life. Their rhythms have been respected in
              Ayurveda and Indian spiritual traditions for generations.
            </p>
            <p>
              Through traditional pooja, prayers and Homam, we honour these
              occasions while seeking blessings for health, harmony,
              purification and the wellbeing of all who participate.
            </p>
          </div>

          <nav className="events-hero__event-links" aria-label="Our three monthly offerings">
            {sacredEvents.map((event, index) => (
              <a href={`#${event.id}`} key={event.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <small>{event.schedule}</small>
                  <strong>{event.title}</strong>
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div
          className="events-hero__calendar"
          aria-label="A celestial calendar representing Pushyami, Pournami and Amavasya"
          role="img"
        >
          <div className="celestial-calendar__orbit celestial-calendar__orbit--outer" aria-hidden="true" />
          <div className="celestial-calendar__orbit celestial-calendar__orbit--middle" aria-hidden="true" />
          <div className="celestial-calendar__orbit celestial-calendar__orbit--inner" aria-hidden="true" />

          <div className="celestial-calendar__node celestial-calendar__node--pushyami" aria-hidden="true">
            <i>✦</i>
            <span>Pushyami</span>
          </div>
          <div className="celestial-calendar__node celestial-calendar__node--pournami" aria-hidden="true">
            <i />
            <span>Pournami</span>
          </div>
          <div className="celestial-calendar__node celestial-calendar__node--amavasya" aria-hidden="true">
            <i />
            <span>Amavasya</span>
          </div>

          <div className="celestial-calendar__centre" aria-hidden="true">
            <div className="celestial-calendar__lotus">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>Sacred calendar</small>
            <strong>Care in rhythm<br />with tradition</strong>
          </div>
        </div>
      </div>

      <div className="events-hero__principles" aria-label="Our principles">
        <span>Tradition</span>
        <i aria-hidden="true" />
        <span>Ayurveda</span>
        <i aria-hidden="true" />
        <span>Compassionate care</span>
      </div>
    </header>

    <section className="events-calendar" aria-labelledby="events-calendar-title">
      <div className="events-shell events-calendar__heading">
        <p className="events-kicker">Three monthly offerings</p>
        <h2 id="events-calendar-title">A sacred calendar of care.</h2>
        <p>
          Three occasions, each held with its own intention and prepared with
          reverence for the people we serve.
        </p>
      </div>

      <div className="events-calendar__chapters">
        {sacredEvents.map((event, index) => (
          <article
            className={`event-ritual event-ritual--${index + 1}`}
            id={event.id}
            key={event.id}
          >
            <div className="events-shell event-ritual__layout">
              <figure className="event-ritual__visual">
                <div className="event-ritual__image-frame">
                  <img src={event.image} alt={event.imageAlt} />
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <figcaption>{event.eyebrow}</figcaption>
              </figure>

              <div className="event-ritual__content">
                <p className="event-ritual__schedule">
                  <CalendarDays size={16} strokeWidth={1.6} aria-hidden="true" />
                  {event.schedule}
                </p>
                <h2>{event.title}</h2>
                <p className="event-ritual__summary">{event.summary}</p>
                <p className="event-ritual__description">{event.description}</p>

                <div className="event-ritual__audience">
                  <Users size={20} strokeWidth={1.4} aria-hidden="true" />
                  <span>
                    <small>Who may participate</small>
                    <strong>{event.audience}</strong>
                  </span>
                </div>

                <div className="event-ritual__offering">
                  <p>{event.offeringLabel}</p>
                  <h3>{event.offeringTitle}</h3>
                  <span>{event.offeringText}</span>
                </div>

                <ol className="event-ritual__highlights">
                  {event.highlights.map((highlight, highlightIndex) => (
                    <li key={highlight}>
                      <span>{String(highlightIndex + 1).padStart(2, "0")}</span>
                      <p>{highlight}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="swarna-legacy" aria-labelledby="swarna-legacy-title">
      <div className="events-shell swarna-legacy__layout">
        <header className="swarna-legacy__intro">
          <p className="events-kicker">{swarnaPrashanaStory.eyebrow}</p>
          <h2 id="swarna-legacy-title">{swarnaPrashanaStory.title}</h2>
          <p className="swarna-legacy__subtitle">{swarnaPrashanaStory.subtitle}</p>
          <blockquote>“{swarnaPrashanaStory.quote}”</blockquote>
        </header>

        <div className="swarna-legacy__timeline">
          {swarnaPrashanaStory.history.map((chapter, index) => (
            <article key={chapter.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="swarna-ceremony" aria-labelledby="swarna-ceremony-title">
      <div className="events-shell">
        <div className="swarna-ceremony__plaque">
          <div className="swarna-ceremony__identity">
            <span className="swarna-ceremony__lotus" aria-hidden="true">✦</span>
            <p className="events-kicker">{swarnaPrashanaStory.dhanvantari.name}</p>
            <h3>{swarnaPrashanaStory.dhanvantari.title}</h3>
            <strong>{swarnaPrashanaStory.dhanvantari.organisation}</strong>
            <small>{swarnaPrashanaStory.dhanvantari.motto}</small>
            <blockquote>“{swarnaPrashanaStory.dhanvantari.quote}”</blockquote>
          </div>

          <div className="swarna-ceremony__programme">
            <p className="events-kicker">{swarnaPrashanaStory.programme.schedule}</p>
            <h2 id="swarna-ceremony-title">{swarnaPrashanaStory.programme.title}</h2>
            <strong>{swarnaPrashanaStory.programme.value}</strong>
            <span>{swarnaPrashanaStory.programme.location}</span>
            <p>{swarnaPrashanaStory.programme.promise}</p>
          </div>
        </div>

        <div className="swarna-ceremony__facts">
          {swarnaPrashanaStory.facts.map((fact, index) => (
            <p key={fact}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {fact}
            </p>
          ))}
        </div>
      </div>
    </section>

    <section className="swarna-benefits" aria-labelledby="swarna-benefits-title">
      <div className="events-shell">
        <header className="swarna-benefits__heading">
          <div>
            <p className="events-kicker">{swarnaPrashanaStory.programme.title}</p>
            <h2 id="swarna-benefits-title">Benefits and supportive care</h2>
          </div>
          <p>{swarnaPrashanaStory.programme.promise}</p>
        </header>

        <div className="swarna-benefits__grid" aria-label="Swarna Bindu Prashana benefits">
          {swarnaPrashanaStory.benefits.map((benefit, index) => (
            <article key={benefit.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="swarna-benefits__offer">
          <div>
            <p>{swarnaPrashanaStory.offerIntro}</p>
            <strong>{swarnaPrashanaStory.offer}</strong>
            <p>{swarnaPrashanaStory.offerClosing}</p>
          </div>
          <footer>
            <h3>{swarnaPrashanaStory.closing}</h3>
            <p>{swarnaPrashanaStory.values}</p>
          </footer>
        </div>
      </div>
    </section>

    <section className="drops-ritual" aria-labelledby="drops-title">
      <div className="events-shell drops-ritual__layout">
        <div className="drops-ritual__intro">
          <div className="drops-ritual__emblem" aria-hidden="true">
            <Eye size={30} strokeWidth={1.2} />
          </div>
          <p className="events-kicker">{dropsOffering.availability}</p>
          <h2 id="drops-title">{dropsOffering.title}</h2>
          <p>{dropsOffering.description}</p>
          <div className="drops-ritual__eligibility">
            <Users size={18} strokeWidth={1.5} aria-hidden="true" />
            {dropsOffering.eligibility}
          </div>
        </div>

        <div className="drops-ritual__benefits">
          {dropsOffering.highlights.map((highlight, index) => {
            const Icon = [Sparkles, Wind, HeartPulse][index];
            return (
              <article key={highlight}>
                <div><Icon size={23} strokeWidth={1.35} aria-hidden="true" /></div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{highlight}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="events-closing">
      <div className="events-closing__rings" aria-hidden="true" />
      <div className="events-shell events-closing__content">
        <Leaf size={34} strokeWidth={1.15} aria-hidden="true" />
        <p className="events-kicker">Our intention is simple</p>
        <h2>
          Honour ancient traditions, serve with devotion, and work towards
          healthier, happier generations.
        </h2>
        <p>
          Our sacred offerings and Ayurvedic services bring together
          tradition, prayer and compassionate community care.
        </p>
        <div className="events-closing__actions">
          <a href="tel:+919966426060">Call for event details</a>
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
          vary. These offerings do not replace medical diagnosis or prescribed
          treatment.
        </small>
      </div>
    </section>
  </main>
);

export default Events;
