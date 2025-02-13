function ContentViewer({content}){
    const text = content.text;
    const imgLink = content.img;
    return(
        <>
            <div>{text}</div>
            <img src={imgLink} alt="img"/>
            <br></br>
            <br></br>
        </>
    );
}

export default ContentViewer;