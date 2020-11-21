
//generate random color

const almaColors = ["FFC700", "0FA958", "5551FF", "F24E1E", "A259FF", "4a459c", "ff2281", "FDF200", "00FECA", "13CA91"]
let randomNumber = Math.floor(Math.random() * 10); 
let randomColor = "#" + almaColors[randomNumber]

// let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

module.exports = {
  colors: {
    primary: "#000000",
    secondary: "#FFF4D9",
    tertiary: "#F2F2F2",
    text: "#000000",
    background: "#ffffff",
    random: randomColor,
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  fonts: {
    // primary: "Roboto, Arial, sans-serif",
    primary: "'Raleway', sans-serif",
    secondary: "'Open Sans', sans-serif",
    logo: "mostra-nuova, sans-serif",
  },
  borderRadius: "1rem",
  pageWidth: "62.5rem",
  headerHeight: "6.25rem",
  footerHeight: "7.5rem",
}
