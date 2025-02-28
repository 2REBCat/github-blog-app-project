import './Container.css';
import LocalNav from './LocalNav';
import GetAndShowStudyContents from './GetAndShowStudyContents';
import useGetJson from '../Hooks/useGetJson';

function Container({coursename, title}){
    const NavData = useGetJson(
        {"ko": ["아직 공부 중 입니다.."], "en": ["I'm still studying it.."]},
        `/${coursename}/index.json`,
        "Can't load index.."
    )

    return(
        <div className="container">
          <div className="nav">
              <LocalNav coursename={coursename} NavData={NavData.ko}></LocalNav>
          </div>
          <div className="content">
              <GetAndShowStudyContents coursename={coursename} title={title}></GetAndShowStudyContents>
          </div>
        </div>
    );
}

export default Container;