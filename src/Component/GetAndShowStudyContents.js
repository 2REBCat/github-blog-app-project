import StudyContents from './StudyContents';
import useGetJson from '../Hooks/useGetJson';

function GetAndShowStudyContents({coursename, title, Lang}){
    const Paragraphs = useGetJson(
        [{"title": "There is no Data", "contents": []}],
        `/${coursename}/${Lang}/${title}/contents.json`,
        "Can't load content.."
    )

    return(
        Paragraphs.map((paragraph,i) => (
            <StudyContents key={i} paragraph={paragraph}></StudyContents>
        ))
    );
}

export default GetAndShowStudyContents;