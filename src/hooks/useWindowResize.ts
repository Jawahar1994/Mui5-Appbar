import React from "react";

export const useWindowResize = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return {
    isMobile,
  };
};
