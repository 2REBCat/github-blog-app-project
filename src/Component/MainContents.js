import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import RepoList from './RepoList';
import Resume from './Resume';
import Container from './Container';

import RepoData from '../Data/RepoList.json';

function MainContents(){
    const [searchParams] = useSearchParams();
    const menu = searchParams.get("menu");

    const navigate = useNavigate();
    useEffect(() =>{
        if(!RepoData.some(course => ((menu === course.link) || (menu === "AboutMe")))){
            navigate("/");
        }
    }, [navigate, menu]);

    if(!searchParams.has("menu")){
        return (
            <RepoList RepoData={RepoData}></RepoList>
        );
    }
    else{
        if(menu ==="AboutMe"){
            return (
                <Resume></Resume>
            );
        }
        else{
            let title = "0";
            if(searchParams.has("title")){
                title = searchParams.get("title");
            }
            return (
                <Container coursename={menu} title={title}/>
            );
        }
    }
    
}

export default MainContents;