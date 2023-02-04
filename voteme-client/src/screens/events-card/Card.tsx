import React from "react";
import Image from "next/image";
import eventStyles from "./card-styles.module.scss";
import active from "../../utils/images/active.png";
import { Vertical } from "@/components/svg-icons/icons";

type Prop = {
  ImageUrl: any;
  title?: string;
  desc?: string;
  imgw?: number | undefined;
  imgh?: number | undefined;
  imgAlt: string;
  styles?: React.CSSProperties;
  isActive?: boolean;
};

const Card = ({
  ImageUrl,
  title,
  desc,
  imgw,
  imgh,
  imgAlt,
  styles,
  isActive,
}: Prop) => {
  return (
    <div className={eventStyles.card} style={styles}>
      {ImageUrl ? (
        <Image src={ImageUrl} width={imgw} height={imgh} alt={imgAlt} />
      ) : null}
      <div>
        {isActive ? (
          <Image src={active} alt="active" height="20" width="20" />
        ) : null}
        <Vertical />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
