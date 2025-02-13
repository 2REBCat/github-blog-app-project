import StudyContent from './StudyContent';

function StudyContents({studyData}){
    const paragraphs = [...studyData]
    return(
        paragraphs.map((paragraph,i) => (
            <StudyContent key={i} paragraph={paragraph}></StudyContent>
        ))
    );
}

export default StudyContents;