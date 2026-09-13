import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  HeartHandshake,
  Leaf,
  Play,
  Quote,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import founderPortrait from "../../assets/venkat_anna.png";
import brandMark from "../../assets/logo.png";
import "./About.css";

const careAreas = [
  { name: "Paralysis", detail: "Movement, daily function and rehabilitation support" },
  { name: "Autism & ADHD", detail: "Individual care with continuing family guidance" },
  { name: "Chronic kidney disease", detail: "Responsible support alongside essential medical monitoring" },
  { name: "Cancer supportive care", detail: "Wellbeing-focused complementary care during a difficult journey" },
  { name: "Migraine", detail: "Care for recurring discomfort and its individual triggers" },
  { name: "PCOD", detail: "Personalised support for women’s long-term wellbeing" },
  { name: "AVN & joint conditions", detail: "Mobility, comfort and quality-of-life focused care" },
  { name: "Chronic health concerns", detail: "A considered approach to complex, long-standing conditions" },
];

const carePath = [
  {
    number: "01",
    title: "We listen completely",
    text: "The patient’s history, previous treatment, present condition and everyday challenges are understood before care begins.",
  },
  {
    number: "02",
    title: "We look beyond the diagnosis",
    text: "Every person is different. Care is planned around the individual—not applied as the same routine for everyone.",
  },
  {
    number: "03",
    title: "We stay with the journey",
    text: "Chronic care needs patience. Progress is observed over time and guidance is refined with responsibility.",
  },
];

const servicePillars = [
  {
    icon: <Utensils size={24} strokeWidth={1.5} aria-hidden="true" />,
    title: "Annadanam",
    text: "Sharing food with people who need support is part of the service at our ashram.",
  },
  {
    icon: <BedDouble size={24} strokeWidth={1.5} aria-hidden="true" />,
    title: "A place to stay",
    text: "Accommodation is extended to those who need a supportive place during their care journey.",
  },
  {
    icon: <HeartHandshake size={24} strokeWidth={1.5} aria-hidden="true" />,
    title: "Community care",
    text: "Free wellness initiatives carry our purpose beyond the consultation room and into the community.",
  },
];

const About = () => (
  <>
    <SEO
      title="About Dr. Dadhe’s | Specialised Chronic Care & Natural Healing"
      description="Discover Dr. Dadhe’s Ayur & Nature Cure—specialised support for difficult chronic health journeys, guided by Ayurveda, Nature Cure and a mission of service."
      path="/about"
    />

    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__aura" aria-hidden="true" />
        <div className="about-hero__grain" aria-hidden="true" />

        <div className="about-shell about-hero__grid">
          <div className="about-hero__copy">
            <div className="about-eyebrow about-rise about-rise--one">
              <span />
              Specialised chronic care
            </div>

            <h1 id="about-title" className="about-hero__title about-rise about-rise--two">
              Where difficult health journeys find
              <em>renewed hope.</em>
            </h1>

            <p className="about-hero__lead about-rise about-rise--three">
              Many people reach Dr. Dadhe’s after living with illness for months
              or years. We meet those journeys with personalised Ayurveda,
              Nature Cure, thoughtful therapies and the patience to care for the
              person—not only the condition.
            </p>

            <div className="about-hero__actions about-rise about-rise--four">
              <Link hidden className="about-button about-button--gold" to="/book-appointment">
                Begin your journey
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a className="about-button about-button--quiet" href="#renewed-hope">
                Our approach
                <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="about-hero__principles about-rise about-rise--four" aria-label="Our principles">
              <span>Ayurveda</span><i />
              <span>Nature Cure</span><i />
              <span>Seva</span>
            </div>
          </div>

          <div className="about-hero__portrait-wrap about-rise about-rise--three">
            <div className="about-hero__portrait-frame">
              <img
                src={founderPortrait}
                alt="Vaidya Sri Venkat Rao, founder of Dr. Dadhe’s Ayur and Nature Cure"
              />
              <div className="about-hero__portrait-shade" aria-hidden="true" />
            </div>
            <div className="about-hero__founder-card">
              <img src={brandMark} alt="" aria-hidden="true" />
              <div>
                <small>Founder &amp; CEO</small>
                <strong>Vaidya Sri Venkat Rao</strong>
              </div>
            </div>
            <div className="about-hero__promise">
              <span>Our purpose</span>
              <p>A healthier, fuller life for every person we serve.</p>
            </div>
          </div>
        </div>

        <a className="about-scroll" href="#our-purpose" aria-label="Continue to our purpose">
          <span>Discover our purpose</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section id="our-purpose" className="about-section about-purpose">
        <div className="about-shell about-purpose__grid">
          <div className="about-purpose__index" aria-hidden="true">01</div>
          <div>
            <p className="about-kicker">More than a clinic</p>
            <h2>Chronic care is at the heart of our work.</h2>
          </div>
          <div className="about-purpose__copy">
            <p className="about-purpose__lead">
              Dr. Dadhe’s was created for people who need more than a brief
              consultation—for families searching for a thoughtful path through
              a long, difficult or complicated condition.
            </p>
            <p>
              We study the complete journey: what the patient has experienced,
              what has already been tried, how the condition affects daily life
              and what meaningful progress would look like for that person.
            </p>
          </div>
        </div>
      </section>

      <section id="renewed-hope" className="about-section about-hope">
        <div className="about-hope__glow" aria-hidden="true" />
        <div className="about-shell">
          <div className="about-hope__heading">
            <p className="about-kicker">A place for renewed hope</p>
            <h2>When families are told there is little hope, we begin by listening.</h2>
          </div>

          <div className="about-hope__story">
            <Quote size={30} strokeWidth={1.25} aria-hidden="true" />
            <div>
              <p>
                Some families come to us carrying words they never wanted to
                hear—that their loved one may not recover, may not regain
                independence or may have very limited possibilities ahead.
              </p>
              <p>
                At Dr. Dadhe’s, many such families have found a new reason to
                hope. With dedicated care, patient guidance and consistent
                support, we have helped people move towards better health,
                greater comfort and meaningful improvements in daily life.
              </p>
              <p>
                Their progress—sometimes after years of struggle—is what gives
                our work its purpose and encourages us to keep helping every
                person with the same commitment.
              </p>
            </div>
          </div>

          <div className="about-hope__path">
            {carePath.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-care" aria-labelledby="care-title">
        <div className="about-shell">
          <div className="about-heading-row">
            <div>
              <p className="about-kicker">Our area of focus</p>
              <h2 id="care-title">Care for complex, long-standing conditions.</h2>
            </div>
            <p>
              Patient and family experiences across these health journeys have
              shown us what patient, personalised care can make possible.
            </p>
          </div>

          <div className="about-care__grid">
            {careAreas.map((area, index) => (
              <article className="about-care-card" key={area.name}>
                <span>0{index + 1}</span>
                <h3>{area.name}</h3>
                <p>{area.detail}</p>
              </article>
            ))}
          </div>

          <p className="about-clinical-note">
            Individual outcomes vary. Serious conditions require appropriate
            medical assessment and specialist supervision; our care does not
            replace emergency, oncology, dialysis or other medically necessary treatment.
          </p>
        </div>
      </section>

      <section className="about-section about-founder" aria-labelledby="founder-title">
        <div className="about-shell about-founder__grid">
          <div className="about-founder__visual">
            <img src={founderPortrait} alt="Vaidya Sri Venkat Rao" />
            <div className="about-founder__seal">
              <img src={brandMark} alt="Dr. Dadhe’s brand mark" />
              <span>सेवा · स्वास्थ्य · दीर्घायु</span>
            </div>
          </div>

          <div className="about-founder__content">
            <p className="about-kicker">The person behind the purpose</p>
            <h2 id="founder-title">A vision shaped by service.</h2>
            <p className="about-founder__lead">
              Vaidya Sri Venkat Rao founded Dr. Dadhe’s with a deeply human
              purpose: to help people live healthier, fuller and more meaningful lives.
            </p>
            <p>
              His simplicity in life, personal attention to difficult cases and
              close involvement in the preparation of traditional formulations
              continue to shape the institution. Medicines are prepared with
              observation, discipline and the time each process requires.
            </p>
            <blockquote>
              “Our vision is not simply to add years to life, but to bring
              health, dignity and purpose to those years.”
            </blockquote>
            <div className="about-founder__signature">
              <span>Vaidya Sri</span>
              <strong>Venkat Rao</strong>
              <small>Founder &amp; CEO · Dr. Dadhe’s Ayur &amp; Nature Cure</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-longevity" aria-labelledby="longevity-title">
        <div className="about-longevity__rings" aria-hidden="true" />
        <div className="about-shell about-longevity__grid">
          <div className="about-longevity__mark">
            <span>100</span>
            <small>years of healthy life—our guiding aspiration</small>
          </div>
          <div>
            <p className="about-kicker">The healthy-longevity philosophy</p>
            <h2 id="longevity-title">Not merely a longer life. A healthier life.</h2>
            <p>
              Ayurveda sees longevity as more than a number. It means preserving
              strength, clarity, independence and purpose for as long as
              possible. Our founder’s aspiration of a hundred-year healthy life
              expresses this philosophy: helping people protect vitality and
              live every stage of life more fully.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-service" aria-labelledby="service-title">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-kicker">Seva, made visible</p>
            <h2 id="service-title">Care that continues beyond treatment.</h2>
            <p>
              Our purpose is expressed not only through consultation and
              medicine, but through practical support offered with dignity.
            </p>
          </div>

          <div className="about-service__grid">
            {servicePillars.map(({ icon, title, text }) => (
              <article key={title}>
                <div>{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-proof" aria-labelledby="proof-title">
        <div className="about-shell about-proof__grid">
          <div className="about-proof__symbol" aria-hidden="true">
            <Leaf size={46} strokeWidth={1.1} />
            <Sparkles size={23} strokeWidth={1.2} />
          </div>
          <div>
            <p className="about-kicker">Real patient journeys</p>
            <h2 id="proof-title">Progress that once felt out of reach.</h2>
            <p>
              Every recovery journey is personal. With patient consent, we share
              selected experiences so families can hear directly from people
              who have walked through difficult conditions and found meaningful progress.
            </p>
          </div>
          <div className="about-proof__actions">
            <Link className="about-button about-button--gold" to="/videos">
              <Play size={16} fill="currentColor" aria-hidden="true" />
              Watch patient journeys
            </Link>
            <a
              className="about-social-link"
              href="https://www.instagram.com/drdadhes/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow our work on Instagram
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta__aura" aria-hidden="true" />
        <div className="about-shell about-cta__inner">
          <img src={brandMark} alt="" aria-hidden="true" />
          <p className="about-kicker">Dr. Dadhe’s Ayur &amp; Nature Cure</p>
          <h2 id="about-cta-title">No health journey should be left unheard.</h2>
          <p>
            If you or someone in your family is living with a difficult or
            long-standing condition, begin with a careful consultation.
          </p>
          <div className="about-cta__actions">
            <Link hidden className="about-button about-button--gold" to="/book-appointment">
              Book an OP visit
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a className="about-button about-button--quiet" href="tel:+919966426060">
              Call 99664 26060
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default About;
