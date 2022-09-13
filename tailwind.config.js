/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        mainFont: ["Roboto"],
      },
      fontSize: {
        //11px
        xxs: "0.688rem",
        //12px
        xs: "0.75rem",
        //14px
        sm: "0.875rem",
        //16px
        base: "1rem",
        // 18px
        lg: "1.125rem",
        //20px
        xl: "1.25rem",
        //24px
        "2xl": "1.5rem",
        //32px
        "3xl": "2rem",
        //45px
        "4xl": "2.813rem",
        //64px
        "5xl": "4rem",
        //84px
        "6xl": "5.25rem",
      },
      colors: {
        primary: "#43B6FA",
        secondary: "#1B2767",
        secondaryDark: "#182151",
        primaryDark: "#4A7EF6",
        subtitle: "#6E7CA7",
        orange: "#FB896B",
        gold: "#E0BE68",
        lightBlue: "#43B5F9",
        gray: "#FAFAFA",
        grayLight: "#F6F6F6",
        grayBg: "#CECECE",
        green: "#14804A",
      },
      boxShadow: {
        medium: "0px 4px 15px rgba(0, 0, 0, 0.05)",
        large: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        setup: "url('/images/home/setup-bg.svg')",
        "setup-mb": "url('/images/home/setup-bg-mb.svg')",
        shopify: "url('/images/home/shopify-bg.svg')",
        "shopify-mb": "url('/images/home/shopify-bg-mb.svg')",
        dots: "url('/images/home/dots-bg.svg')",
        "dots-mb": "url('/images/home/dots-bg-mb.svg')",
        "dot-square": "url('/images/general/dot-square.svg')",
        about: "url('/images/about/about-bg.svg')",
        "about-banner-bg": "url('/images/about/about-oval-bg.svg')",
        "about-body-bg": "url('/images/about/about-body-bg.svg')",
      },
    },
  },
  plugins: [],
};
