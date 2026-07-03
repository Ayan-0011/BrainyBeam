import React from "react";

const stats = [
  { value: "50+", label: "Heroes" },
  { value: "30+", label: "Movies" },
  { value: "10+", label: "Teams" },
  { value: "80+", label: "Years" },
];

const State = () => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 relative z-10">
        {stats.map((stat, i) => (
          <div key={i}className="group relative bg-zinc-900/80 backdrop-blur p-8 rounded-2xl text-center border border-white/5 hover:border-red-600/50 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-transparent transition-all duration-300"></div>

            <h2 className="relative text-4xl md:text-5xl font-extrabold text-red-600 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300">
              {stat.value}
            </h2>
            <p className="relative text-gray-300 mt-2 tracking-wide uppercase text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;