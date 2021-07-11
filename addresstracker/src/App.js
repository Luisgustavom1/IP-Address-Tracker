import {styled,createGlobalStyle} from 'styled-components'

import HeaderAndInput from "./components/headerAndInput";
import Datas from './components/datas'
import Map from './components/map'
import AppProvider from './context/provider';

import HeaderBg from './images/pattern-bg.png'


const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
    }
    body{
        background: url(${HeaderBg}) no-repeat;
        background-size: cover;
    }
    a, li, ul, ol{
      text-decoration: none;
    }
    button, input, textarea{
      border: none;
      outline: none;
    }
`;

function App() {
  const colors = {
    veryDarkGray: 'hsl(0, 0%, 17%)',
    darkGray: 'hsl(0, 0%, 59%)'
  }
  return (
    <AppProvider>
      <GlobalStyle/>
      <HeaderAndInput theme={colors}></HeaderAndInput>
      <Datas theme={colors}></Datas>
      <Map></Map>
    </AppProvider>
  );
}

export default App;
