import { useSearchParams } from 'react-router-dom';

import RepoList from './RepoList';
import Resume from './Resume';

import RepoData from '../Data/RepoList.json';
import Container from './Container';

function CheckSearchParams(){
    const [searchParams] = useSearchParams();

    if(!searchParams.has("menu")){
        return (
            <RepoList RepoData={RepoData}></RepoList>
        );
    }
    else{
        const menu = searchParams.get("menu");
        console.log(menu);
        if(menu ==="AboutMe"){
            return (
                <Resume></Resume>
            );
        }
        else{
            console.log(menu);
            return (
                <Container RepoData={RepoData} coursename={menu}/>
            );
        }
    }
    
}

export default CheckSearchParams;