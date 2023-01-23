import React from "react";
import Image from "next/image";
import eventStyles from "./card-styles.module.scss";
import ashesi from "../../utils/images/ashesi.png";
const Card = () => {
  return (
    <div className={eventStyles.card}>
      <Image src={ashesi} width="200" height="200" alt="event-image" />
      <h3>Ashesi Parliament</h3>
      <p>
        Voting for the deserving student to lead the student body in the JEC
      </p>
    </div>
  );
};

export default Card;
