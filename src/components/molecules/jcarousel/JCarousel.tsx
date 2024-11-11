import React from "react";

export enum CaptionPosition {
  Left = "left",
  Right = "right",
}

export type CarouselData = {
  title?: string;
  subTitle?: string;
  description?: string;
  buttons?: React.ReactNode;
  image: string;
  captionPosition?: CaptionPosition;
};

type JCarouselProps = {
  slides: CarouselData[];
  autoPlay?: boolean;
  interval?: number;
};

const JCarousel: React.FC<JCarouselProps> = (props) => {
  console.log("autoPlay", props.autoPlay);

  return <div>JCarousel</div>;
};

export default JCarousel;
