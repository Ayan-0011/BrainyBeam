import FilterBar from "../Components/FilterBar";
import HeroBanner from "../components/HeroBanner";
import HeroGrid from "../Components/HeroGrid";
import SearchBar from "../Components/SerchBar";
import { heroes } from "../Data/Heros";


const Heroes = () => {
  return (
    <div className="bg-black min-h-screen">
      <HeroBanner/>
      <SearchBar/>
      <FilterBar/>
      <HeroGrid heroes={heroes}/>
    </div> 
  );
};

export default Heroes;