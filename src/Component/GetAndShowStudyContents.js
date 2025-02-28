import StudyContents from './StudyContents';
import useGetJson from '../Hooks/useGetJson';

function GetAndShowStudyContents({coursename, title}){
    const Paragraphs = useGetJson(
        [{"title": "There is no Data", "contents": []}],
        `/${coursename}/ko/제목 ${Number(title)+1}/contents.json`,
        coursename,
        "Can't load content.."
    )

    return(
        Paragraphs.map((paragraph,i) => (
            <StudyContents key={i} paragraph={paragraph}></StudyContents>
        ))
    );
}

export default GetAndShowStudyContents;