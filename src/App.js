import Header from './Component/Header';
import Footer from './Component/Footer';
import SelectMainContents from './Component/SelectMainContents';

import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <SelectMainContents></SelectMainContents>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
