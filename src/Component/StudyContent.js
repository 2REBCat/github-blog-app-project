import ContentViewer from "./ContentViewer";

function StudyContent({paragraph}){
    const contents = [...paragraph.contents];
    return(
        <>
            <h1>{paragraph.title}</h1>
            <br></br>
            <br></br>
            <br></br>
            {
                contents.map((content, i) => (
                    <ContentViewer key={i} content={content}></ContentViewer>
                ))
            }
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default StudyContent;