import {styled,createGlobalStyle} from 'styled-components'

import HeaderAndInput from "./components/headerAndInput";
import Datas from './components/datas'
import AppProvider from './context/provider';

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
      overflow-y: hidden;
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
  return (
    <AppProvider>
      <GlobalStyle/>
      <HeaderAndInput></HeaderAndInput>
      <Datas></Datas>
    </AppProvider>
  );
}

export default App;
