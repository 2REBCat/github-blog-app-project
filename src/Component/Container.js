import './Container.css';
import LocalNav from './LocalNav';
import StudyContents from './StudyContents';
import useGetJson from '../Hooks/useGetJson';

function Container({coursename, title}){
    const NavData = useGetJson(
        {"ko": ["아직 공부 중 입니다.."], "en": ["I'm still studying it.."]},
        `/${coursename}/index.json`,
        coursename,
        "Can't load index.."
    )

    return(
        <div className="container">
          <div className="nav">
              <LocalNav coursename={coursename} NavData={NavData.ko}></LocalNav>
          </div>
          <div className="content">
              <StudyContents coursename={coursename} title={title}></StudyContents>
          </div>
        </div>
    );
}

export default Container;