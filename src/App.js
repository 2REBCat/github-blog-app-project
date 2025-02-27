import Header from './Component/Header';
import Footer from './Component/Footer';
import CheckSearchParams from './Component/CheckSearchParams';

import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CheckSearchParams></CheckSearchParams>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
