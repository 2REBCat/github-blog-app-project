import ContentViewer from "./ContentViewer";

function StudyContent({paragraph}){
    const contents = [...paragraph.contents];
    return(
        <>
            <h1>{paragraph.title}</h1>
            {
                contents.map((content, i) => (
                    <ContentViewer key={i} content={content}></ContentViewer>
                ))
            }
        </>
    );
}

export default StudyContent;