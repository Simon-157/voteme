import React from "react";

export type Props = {
  onClick: React.MouseEventHandler<SVGSVGElement>;
};

export type Event = {
  isActive: boolean;
  eventImg: string;
  eventTitle: string;
  eventDesc: string;
};


export type IsOpen = {
  show: boolean;
}