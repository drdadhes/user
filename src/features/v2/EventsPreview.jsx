import { ArrowRight, CalendarDays, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { sacredEvents } from "./events.data";
import "./EventsPreview.css";

const EventsPreview = () => (
  <section className="events-preview" aria-labelledby="events-preview-title">
    <div className="events-preview__glow" aria-hidden="true" />
    <div className="events-preview__shell">
      <header className="events-preview__heading">
        <div>
          <p className="events-preview__kicker">Our sacred monthly offerings</p>
          <h2 id="events-preview-title">Tradition in service of wellbeing.</h2>
        </div>
        <p>
          Three occasions rooted in Ayurveda, prayer and compassionate care—
          observed with devotion for healthier, happier generations.
        </p>
      </header>

      <div className="events-preview__grid">
        {sacredEvents.map((event, index) => (
          <article className="event-card" key={event.id}>
            <div className="event-card__image">
              <img src={event.image} alt={event.imageAlt} />
              <div className="event-card__shade" aria-hidden="true" />
              <span className="event-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="event-card__content">
              <p className="event-card__schedule">
                <CalendarDays size={15} strokeWidth={1.7} aria-hidden="true" />
                {event.schedule}
              </p>
              <h3>{event.title}</h3>
              <p className="event-card__summary">{event.summary}</p>
              <p className="event-card__audience">
                <Users size={17} strokeWidth={1.6} aria-hidden="true" />
                <span>{event.audience}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="events-preview__footer">
        <p>Discover the meaning, offerings and care behind every occasion.</p>
        <Link to="/events">
          Explore all events
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default EventsPreview;
