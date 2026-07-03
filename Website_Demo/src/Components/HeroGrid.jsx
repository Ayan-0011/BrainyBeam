import HeroCard from "./HeroCard";


const HeroGrid = ({ heroes }) => {
  return (
    <section className="bg-black py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

export default HeroGrid;