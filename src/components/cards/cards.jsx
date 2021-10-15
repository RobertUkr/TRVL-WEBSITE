import CardItem from "../cardItem/cardItem";
import "./cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destitnations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../assets/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../../assets/images/img-2.jpg"
              text="Travel throught the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../../assets/images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="../../assets/images/img-4.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../../assets/images/img-8.jpg"
              text="Ride throught the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
