import StudyContent from './StudyContent';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState} from 'react';

function StudyContents({coursename}){
    const [Paragraphs, setParagraphs] = useState([{"title": "There is no Data", "contents": []}]);
    const [searchParams] = useSearchParams();
    let title = 0;
    if (searchParams.has("title")){
        title = searchParams.get("title");
    }

    useEffect(() => {
        const url = `/${coursename}/ko/제목 ${Number(title)+1}/contents.json`;

        const GetJsonData = async (url) => {
            const res = await fetch(url);

            const htmlText = await res.text();
            let jsonData = [{"title": "There is no Data", "contents": []}]
            try{
                jsonData = JSON.parse(htmlText);
                setParagraphs(jsonData);
            }catch(err){
                console.log("Can't load content..");
            }
        }

        GetJsonData(url);
    }, [title, coursename]);

    return(
        Paragraphs.map((paragraph,i) => (
            <StudyContent key={i} paragraph={paragraph}></StudyContent>
        ))
    );
}

export default StudyContents;