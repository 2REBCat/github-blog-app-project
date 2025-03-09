import './ParagraphViewer.css';

function ParagraphViewer({content}){
    const text = content.text;
    const imgLink = content.img;
    return(
        <>
            {
                text ? <div className="text">{text}</div> : ""
            }
            <br></br>
            {
                imgLink ? <img className='img' src={imgLink} alt="img"/> : ""
            }
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default ParagraphViewer;