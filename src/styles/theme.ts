import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

export const theme = extendTheme({
  breakpoints,
  colors: {
    purple: {
      500: "#8615df",
      600: "#570e91",
      800: "#38085c",
      900: "#190429",
    },
    gray: {
      50: "#f6f6f7",
      100: "#eee",
      200: "#d4d4d4",
      300: "#9e9ea7",
      400: "#666665",
      900: "#111",
    },
    red: {
      600: "#df1545",
    },
    green: {
      600: "#168821",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSises: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.900",
      },
    },
  },
  components: {
    Button: {
      variants: {
        default: {
          bg: "red.500",
          border: "2px solid",
          borderColor: "red.600",
          color: "gray.800",
          _hover: {
            bg: "red.700",
            color: "gray.100",
            borderColor: "red.300",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        disabled: {
          bg: "gray.500",
          border: "2px solid",
          borderColor: "gray.900",
          color: "gray.50",
          _hover: {
            bg: "gray.700",
          },
        },
        error: {
          bg: "red.600",
          border: "2px solid",
          borderColor: "red.700",
          color: "gray.50",
          _hover: {
            bg: "red.700",
          },
        },
        sucess: {
          bg: "green.600",
          border: "2px solid",
          borderColor: "green.700",
          color: "gray.50",
          _hover: {
            bg: "green.700",
          },
        },
        link: {
          bg: "none",
          border: "none",
          borderColor: "none",
          color: "gray.50",
          _hover: {
            color: "white",
          },
        },
        violet: {
          bg: "#6b1885",
          border: "2px solid",
          borderColor: "#b02be5",
          color: "gray.200",
          _hover: {
            bg: "#b02be5",
            color: "gray.800",
            borderColor: "#6b1885",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        close: {
          size: "lg",
          bg: "red.600",
          border: "2px solid",
          borderColor: "red.700",
          borderRadius: "full",
          color: "gray.200",
          p: "0px",
          _hover: {
            bg: "red.700",
          },
        },
      },
    },
  },
});
