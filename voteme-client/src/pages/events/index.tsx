import Card from "@/screens/events-card/Card";
import { EventsDummy } from "@/utils/data/events";
import eventStyles from "./events-styles.module.scss";
import vote from "../../utils/images/vote.png";

const Events = () => {
  // const style: React.CSSProperties = {
  //   width: "10rem",
  //   height: "10rem",
  // };


// .card {
//   margin: 1rem;
//   color: #f1f1f1;
//   box-shadow: 0 4px 8px 0 rgba(248, 239, 239, 0.39);
//   transition: 0.3s;
//   width: 300px;
//   padding: 20px;
//   border-radius: 10px;
//   background-color: #1a36614f;
// }


  const style: React.CSSProperties = {
    width: "300px",
    // height: "10rem",
    fontSize: "0.2rem",
    padding: "10px",
    display:"flex"
  };

  return (
    <div className={eventStyles.container}>
      {EventsDummy?.map((event, index) => {
        return (
          <Card
            key={index}
            ImageUrl={vote}
            imgAlt={""}
            imgw={40}
            imgh={40}
            desc={event.eventDesc}
            title={event.eventTitle}
            styles={style}
          />
        );
      })}
    </div>
  );
};

export default Events;
