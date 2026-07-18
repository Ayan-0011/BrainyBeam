const testimonials = [
  {
    id: 1,
    name: "Rahul",
    city: "Ahmedabad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPvxQDwxy1ym_nyL3RI3bhRUcmc3WdbheIDBEqE1sdw&s=10",
    review:
      "Booking my bus ticket was super easy. The seats were comfortable and the journey was smooth. Highly recommended!",
  },
  {
    id: 2,
    name: "Farman",
    city: "Surat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPvxQDwxy1ym_nyL3RI3bhRUcmc3WdbheIDBEqE1sdw&s=10",
    review:
      "I loved the real-time bus tracking feature. Everything was on time and customer support was excellent.",
  },
  {
    id: 3,
    name: "Aman",
    city: "Vadodara",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPvxQDwxy1ym_nyL3RI3bhRUcmc3WdbheIDBEqE1sdw&s=10",
    review:
      "The booking process took less than two minutes. Secure payment and instant ticket confirmation made my trip stress-free.",
  },
];

const Testomonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        <div className="testimonial-header">
          <h2>What Our Travelers Say</h2>
          <p>Trusted by thousands of passengers across India.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">

              <div className="testimonial-user">

                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-image"
                />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.city}</p>
                </div>

              </div>

              <p className="testimonial-review">
                "{item.review}"
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testomonials;