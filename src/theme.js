import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Accordion: {
      baseStyle: {
        container: {
          border: '1px solid',
          borderColor: 'gray.200',
          borderRadius: 'md',
          boxShadow: 'md',
        },
      },
    },
  },
});

export default theme;
