import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle`
:root{
  /* colors */
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;

  /* others */
    --header-height: 50px;
}
html{
  font-size: 10px;
}
body{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  font-family: 'Poppins', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
ul, li{
  list-style: none;
}
.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
img, svg{
  width: 100%;
  height: 100%;
}
.custom-header {
  background-color: #000;
  color: #fff;
  padding: 20px;
}
.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
    padding: 100px;
}
.main-body{
  padding:50px 0px;
}
.cBWznK {
    display: inline-block;
    background: #212529;
    padding: 1.5rem 3rem;
    color: var(--white);
    font-size: 1.6rem;
    text-transform: capitalize;
    border-radius: 8px;
    font-weight: 500;
    border: none;
    border-radius: 0px;
}
@media (max-width: 768px) {
  .card-body {
    padding: 20px;
  }
}
`;

export default GlobalStyles;
