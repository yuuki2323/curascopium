/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "bg-black": "#00020E",
        title: "#EFCF78",
        contact: "#11114d",
      },
      backgroundImage: {
        bg: "url('/bg/starlight.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme) => ({
        white: {
          css: [
            {
              maxWidth: "100%",

              a: {
                color: theme("colors.yellow.400"),
                "&:hover": {
                  color: theme("colors.yellow.600"),
                },
              },
              strong: {
                color: "var(--tw-prose-bold)",
                fontWeight: "900",
              },
            },
            {
              "--tw-prose-body": theme("colors.slate[50]"),
              "--tw-prose-headings": theme("colors.slate[50]"),
              "--tw-prose-lead": theme("colors.slate[50]"),
              "--tw-prose-links": theme("colors.slate[50]"),
              "--tw-prose-bold": theme("colors.slate[50]"),
              "--tw-prose-counters": theme("colors.slate[50]"),
              "--tw-prose-bullets": theme("colors.slate[50]"),
              "--tw-prose-hr": theme("colors.slate[50]"),
              "--tw-prose-quotes": theme("colors.slate[50]"),
              "--tw-prose-quote-borders": theme("colors.slate[50]"),
              "--tw-prose-captions": theme("colors.slate[50]"),
              "--tw-prose-kbd": theme("colors.slate[50]"),
              "--tw-prose-code": theme("colors.slate[50]"),
              "--tw-prose-pre-code": theme("colors.slate[50]"),
              "--tw-prose-pre-bg": theme("colors.slate[800]"),
              "--tw-prose-th-borders": theme("colors.slate[50]"),
              "--tw-prose-td-borders": theme("colors.slate[50]"),
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
