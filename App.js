import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import {ThemeProvider} from "styled-components";
import GlobalStyle from './GlobalStyle';
import Hp from './Component/Hp';
import Dell from './Component/Dell';
import Lenovo from './Component/Lenovo';
import Error from './Error';
function App() {
  const theme = {
    colors : {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgb(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 ,144, 255) 0%, rgb(98 189 252)100%)",
      shadow:
        "rgb(0 ,0 ,0, 0 ,0.2) 0px 1px 3px  0 , rgb(27 , 31 ,35 , 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgb(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media:{mobile: "768px" , tab: "998px"},
    };
  return (
<>
<ThemeProvider theme={theme}>
<GlobalStyle/>
<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/hp' element={<Hp/>}/>
    <Route path='/dell' element={<Dell/>}/>
    <Route path='/lenovo' element={<Lenovo/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
</ThemeProvider>
</>
    );
}

export default App;
