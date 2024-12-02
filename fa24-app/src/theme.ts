// theme.ts
import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: "#4A628A" },
          200: { value: "#7AB2D3" },
          300: { value: "#B9E5E8" },
          400: { value: "#DFF2EB" },
          500: { value: "#E5E1DA" },
          600: { value: "#F1F0E8" },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "white",
      color: "brand.100",
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
