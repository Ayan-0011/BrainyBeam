import { ArrowRight,ShoppingBag, Smartphone, Shirt, Watch, Truck, ShieldCheck,
   RefreshCcw, BadgeCheck, Store, Laptop, Headphones, Gem,
} from "lucide-react";

const categories = [
  {
    title: "Fashion",
    icon: <Shirt size={40} />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Electronics",
    icon: <Smartphone size={40} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Accessories",
    icon: <Watch size={40} />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Luxury",
    icon: <Gem size={40} />,
    color: "from-purple-500 to-indigo-500",
  },
];

const brands = [
  {
    name: "Fashion",
    icon: <ShoppingBag size={35} />,
  },
  {
    name: "Electronics",
    icon: <Laptop size={35} />,
  },
  {
    name: "Audio",
    icon: <Headphones size={35} />,
  },
  {
    name: "Store",
    icon: <Store size={35} />,
  },
];

const features = [
  {
    title: "Free Shipping",
    desc: "Free delivery on orders above ₹999.",
    icon: <Truck size={35} />,
  },
  {
    title: "Secure Payment",
    desc: "100% secure and encrypted checkout.",
    icon: <ShieldCheck size={35} />,
  },
  {
    title: "Easy Returns",
    desc: "7-day hassle-free return policy.",
    icon: <RefreshCcw size={35} />,
  },
  {
    title: "Premium Quality",
    desc: "Handpicked premium products.",
    icon: <BadgeCheck size={35} />,
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50">

  

      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">

        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

 

          <div>

            <span className="bg-white/20 px-5 py-2 rounded-full inline-block mb-6 text-sm backdrop-blur">
              New Collection 2026
            </span>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              Upgrade Your
              <span className="block text-yellow-300">
                Lifestyle Today
              </span>
            </h1>

            <p className="mt-6 text-lg text-red-100 max-w-lg">
              Explore premium fashion, electronics, accessories,
              and luxury collections with exclusive offers.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <button className="bg-white text-red-600 px-7 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Shop Now
                <ArrowRight size={20} />
              </button>

              <button className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300">
                Explore
              </button>

            </div>

          </div>
       

          <div>

            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900"  alt="" className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500" />

          </div>

        </div>

      </section>


      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-gray-500 uppercase tracking-[5px]">
            Trusted Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">

            {brands.map((brand) => (

              <div key={brand.name}
                className="bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center" >

                <div className="text-red-600">
                  {brand.icon}
                </div>

                <h3 className="mt-4 font-bold">
                  {brand.name}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h2 className="text-4xl font-bold">
                Shop By Category
              </h2>

              <p className="text-gray-500 mt-2">
                Browse products by your favorite category.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {categories.map((item) => (

              <div key={item.title}
                className="group rounded-3xl overflow-hidden bg-white shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" >

                <div className={`bg-gradient-to-r ${item.color} p-10 text-white flex justify-center`} >
                  {item.icon}
                </div>

                <div className="p-6 text-center">

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <button className="mt-5 text-red-600 font-semibold group-hover:gap-3 flex items-center justify-center mx-auto gap-2 transition-all">
                    Explore
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Why Choose Us
            </h2>

            <p className="text-gray-500 mt-3">
              Experience shopping with confidence.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {features.map((item) => (

              <div key={item.title}
                className="rounded-3xl bg-gray-50 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" >

                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;