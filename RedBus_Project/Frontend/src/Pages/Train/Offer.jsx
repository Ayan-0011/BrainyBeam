import "../../style/Offer.css";
import { Tag, ChevronRight } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Get Rs 350 off on train tickets",
    expiry: "Valid till 27 Sep",
    code: "GANPATI",
    image: "https://s3.rdbuz.com/GANPATIThumbnail.png",
    bg: "#FFD58A",
  },
  {
    id: 2,
    title: "Get flat Rs 300 off on AC ticket bookings",
    expiry: "Valid till 31 Mar",
    code: "ACRAIL",
    image: "https://s3.rdbuz.com/RailDefaultImage.png",
    bg: "#FEE4E4",
  },
  {
    id: 3,
    title: "Get Rs 150 off on train tickets",
    expiry: "Valid till 30 Aug",
    code: "ONAM",
    image: "https://s3.rdbuz.com/OnamThumbnail.png",
    bg: "#FFF3B0",
  },
  {
    id: 4,
    title: "Get Rs 300 off on train tickets",
    expiry: "Valid till 30 Aug",
    code: "RAKHI",
    image: "https://s3.rdbuz.com/RAKHIThumbnail.png",
    bg: "#F6ECE8",
  },
];

const Offers = () => {
  return (
    <div className="offers-container">
      <div className="offers-header">
        <h2>Offers</h2>
      </div>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div  key={offer.id} className="offer-card"
            style={{ background: offer.bg }} >
            <span className="offer-badge">
              Additional offers
            </span>

            <h3>{offer.title}</h3>

            <p>{offer.expiry}</p>

            <div className="coupon">
              <Tag size={18} />
              <span>{offer.code}</span>
            </div>

            <img src={offer.image}  alt="" className="offer-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;