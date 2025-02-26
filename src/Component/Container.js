import './Container.css';
import LocalNav from './LocalNav';
import StudyContents from './StudyContents';

import { useNavigate, useParams } from 'react-router';
import { useEffect, useState} from 'react';

function Container({RepoData}){

    const [NavData, setNavData] = useState({"ko": [], "en": []});

    const navigate = useNavigate();
    const {coursename} = useParams();

    useEffect(() => {
        const courses = [...RepoData];
        if(!courses.some(course => course.link === coursename)){
            navigate("/");
        }

        const url = `/${coursename}/index.json`;

        const GetJsonData = async (url) => {
            const res = await fetch(url);

            const htmlText = await res.text();
            let jsonData = {"ko": ["아직 공부 중 입니다.."], "en": ["I'm still studying it.."]}
            try{
                jsonData = JSON.parse(htmlText);
            }catch(err){
                console.log("Can't load index..");
            }

            setNavData(jsonData);
        }

        GetJsonData(url);
    }, [navigate, coursename, RepoData]);
    return(
        <div className="container">
          <div className="nav">
              <LocalNav NavData={NavData.ko}></LocalNav>
          </div>
          <div className="content">
              <StudyContents coursename={coursename}></StudyContents>
          </div>
        </div>
    );
}

export default Container;