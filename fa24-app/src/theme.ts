// theme.ts
import { createSystem, defineConfig, defaultBaseConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    100: { value: '#4A628A' },
                    200: { value: '#7AB2D3' },
                    300: { value: '#B9E5E8' },
                    400: { value: '#DFF2EB' },
                },
            },
        },

    },
    globalCss: {
        body: {
            bg: 'brand.400',
            color: 'brand.100',
        },
    }
});

const system = createSystem(defaultBaseConfig, customConfig);

export default system;
