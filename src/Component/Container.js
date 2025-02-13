import './Container.css';
import LocalNav from './LocalNav';
import StudyContents from './StudyContents';

import NavList from '../Data/LocalNav.json';
import studyData from '../Data/ContentTest.json';

function Container(){
    return(
        <div className="container">
          <div className="nav">
              <LocalNav NavList={NavList}></LocalNav>
          </div>
          <div className="content">
              <StudyContents studyData={studyData}></StudyContents>
          </div>
        </div>
    );
}

export default Container;