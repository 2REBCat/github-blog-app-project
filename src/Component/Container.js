import './Container.css';
import LocalNav from './LocalNav';
import StudyContents from './StudyContents';

import studyData from '../Data/ContentTest.json';
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

        const url = `/${coursename}/index.json`

        const GetJsonData = async (url) => {
            const res = await fetch(url);

            const htmlText = await res.text();
            const jsonData = JSON.parse(htmlText);
            console.log(jsonData);
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
              <StudyContents studyData={studyData}></StudyContents>
          </div>
        </div>
    );
}

export default Container;