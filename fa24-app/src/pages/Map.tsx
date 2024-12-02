import React, { useEffect, useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";

const Map = () => {
  const vizRef = useRef(null);
  let viz = null;

  useEffect(() => {
    const vizUrl = "https://public.tableau.com/views/VIP_Fall24_Test/MapMenu?:embed=true";
    const options = {
      hideTabs: true,
      width: "100%",
      height: "800px",
    };

    if (viz) {
      viz.dispose();
    }

    viz = new window.tableau.Viz(vizRef.current, vizUrl, options);

    return () => {
      if (viz) {
        viz.dispose();
      }
    };
  }, []);

  return (
    <Box p={4}>
      <Box ref={vizRef}></Box>
    </Box>
  );
};

export default Map;