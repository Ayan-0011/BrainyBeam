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

const Testomonials =()=> {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500 mt-3">
            Trusted by thousands of passengers across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6" >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.city}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Testomonials