import { Routes, Route } from 'react-router';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Container from './Component/Container';
import Resume from './Component/Resume';
import RepoList from './Component/RepoList';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<RepoList/>}/>
          <Route path=':course' element={<Container/>}/>
          <Route path="/AboutMe" element={<Resume/>}/>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
