import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import StudyList from './StudyList';
import Resume from './Resume';
import Container from './Container';

import RepoData from '../Data/RepoList.json';

function SelectMainContents(){
    const [searchParams] = useSearchParams();
    const menu = searchParams.get("menu");

    const [Language, setLanguage] = useState("en");
    useEffect(() => {
        const userLang = navigator.language.split("-")[0];
        if (userLang === "ko"){
            setLanguage("ko");
        }
    }, []);


    const navigate = useNavigate();
    useEffect(() =>{
        if(!RepoData.some(course => ((menu === course.link) || (menu === "AboutMe")))){
            navigate("/");
        }
    }, [navigate, menu]);

    if(!searchParams.has("menu")){
        return (
            <StudyList RepoData={RepoData} Lang={Language}></StudyList>
        );
    }
    else{
        if(menu ==="AboutMe"){
            return (
                <Resume Lang={Language}></Resume>
            );
        }
        else{
            let title = 1;
            if(searchParams.has("title")){
                title = searchParams.get("title");
            }
            return (
                <Container coursename={menu} title={title} Lang={Language}/>
            );
        }
    }
    
}

export default SelectMainContents;