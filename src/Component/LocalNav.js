import './LocalNav.css';

function LocalNav({NavList}){
    const {ko} = NavList;
    return(
        <div className="nav-container">
            <details className="nav-dropdown" open>
                <summary className="nav-header">Contents</summary>
                <div className="nav-list">
                    {ko.map((item, i) => (
                        <p key={i} className="nav-item">{item}</p>
                    ))}
                </div>
            </details>
        </div>
    );
}

export default LocalNav;