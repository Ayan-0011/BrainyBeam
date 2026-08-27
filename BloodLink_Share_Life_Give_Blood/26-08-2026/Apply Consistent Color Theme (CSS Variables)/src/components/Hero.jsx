import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO MY WEBSITE</p>

        <h1>
          Build Something
          <span> Amazing </span>
        </h1>

        <p className="hero-description">
          Create beautiful and modern websites using React and
          reusable CSS components.
        </p>

        <button className="hero-btn">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;