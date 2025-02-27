import Header from './Component/Header';
import Footer from './Component/Footer';
import MainContents from './Component/MainContents';

import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <MainContents></MainContents>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
