import ParagraphViewer from "./ParagraphViewer";

function StudyContents({paragraph}){
    const contents = [...paragraph.contents];
    return(
        <>
            <h1>{paragraph.title}</h1>
            <br></br>
            <br></br>
            <br></br>
            {
                contents.map((content, i) => (
                    <ParagraphViewer key={i} content={content}></ParagraphViewer>
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

export default StudyContents;