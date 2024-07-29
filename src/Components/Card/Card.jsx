//import PropTypes from "prop-types";
import "./Card.css";

function Card() {
  return (
    <div className="container">
      <h2 className="subtitle">New</h2>
      <h4 className="title-one">Hydrogen VS Electric Cars</h4>
      <p className="text-one">
        Will hydrogen-fueled cars ever catch up to EVs?
      </p>
      <h4 className="title-two">The Downsides of AI Artistry</h4>
      <p className="text-two">
        What are the possible adverse effects of on-demand AI image generation?
      </p>
      <h4 className="title-three">Is VC Funding Drying Up?</h4>
      <p className="text-three">
        Private funding by VC firms is down 50% YOY. We take a look at what that
        means.
      </p>
    </div>
  );
}

export default Card;
