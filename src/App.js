import { Routes, Route } from 'react-router';

import Header from './Component/Header';
import Footer from './Component/Footer';

import RepoList from './Component/RepoList';
import Container from './Component/Container';
import Resume from './Component/Resume';

import './App.css';

import RepoData from './Data/RepoList.json';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<RepoList RepoData={RepoData}/>}/>
          <Route path=':coursename' element={<Container RepoData={RepoData}/>}/>
          <Route path="/AboutMe" element={<Resume/>}/>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
