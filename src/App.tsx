import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './components/Main/Main';
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
