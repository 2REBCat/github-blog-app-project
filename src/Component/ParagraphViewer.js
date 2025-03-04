import './ParagraphViewer.css';

function ParagraphViewer({content}){
    const text = content.text;
    const imgLink = content.img;
    return(
        <>
            <div className="text">{text}</div>
            <br></br>
            <img className='img' src={imgLink} alt="img"/>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default ParagraphViewer;