import React from "react";
import JCarousel, {
  CaptionPosition,
  CarouselData,
} from "../../molecules/jcarousel/JCarousel";
import { Box } from "@mui/material";

const Main: React.FC = () => {
  const carouselData: CarouselData[] = [
    {
      title: "Top tips in our blog",
      subTitle: "Ideas & Inspiration",
      description: "The latest kitchen tools and gadgets",
      buttons: "",
      image: "",
      captionPosition: CaptionPosition.Left,
    },
  ];

  return (
    <Box data-testid="main-box-container">
      <JCarousel slides={carouselData} autoPlay interval={300} />
    </Box>
  );
};

export default Main;
