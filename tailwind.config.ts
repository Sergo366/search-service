const config: {
  plugins: any[];
  theme: {
    colors: {
      green: string;
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'green': '#00c3a5',
    },
  },
  plugins: [],
};
export default config;
