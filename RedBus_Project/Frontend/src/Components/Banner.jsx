import train from "../assets/img/newtrain.svg";

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="banner-heading">
                <div>
                    <img src={train} alt="Train" />
                </div>
                <div>
                    <h2>Book trains for festivals</h2>
                    <p>Book now to get confirmed ticket</p>
                </div>

            </div>

            <div className="festival-banner">
                <div className="festival-left">
                    <h3>
                        Get ₹100 off using code
                        <span> FESTIVE</span>
                    </h3>

                    <div className="festival-cards">
                        <div className="festival-card independence">
                            <h4>Aug</h4>
                            <p>Independence Day</p>
                        </div>
                        <div className="festival-card janmashtami">
                            <h4>Sep</h4>
                            <p>Janmashtami</p>
                        </div>
                    </div>

                </div>

                <div className="festival-right">
                    <button>
                        Book trains now
                    </button>
                    <p>
                        Authorised IRCTC partner
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;