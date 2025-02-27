import StudyContent from './StudyContent';
import useGetJson from '../Hooks/useGetJson';

function StudyContents({coursename, title}){
    const Paragraphs = useGetJson(
        [{"title": "There is no Data", "contents": []}],
        `/${coursename}/ko/제목 ${Number(title)+1}/contents.json`,
        coursename,
        "Can't load content.."
    )

    return(
        Paragraphs.map((paragraph,i) => (
            <StudyContent key={i} paragraph={paragraph}></StudyContent>
        ))
    );
}

export default StudyContents;