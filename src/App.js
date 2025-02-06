import { Routes, Route } from 'react-router';
import './App.css';
import Container from './Component/Container';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Resume from './Component/Resume';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="/AboutMe" element={<Resume/>}/>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
