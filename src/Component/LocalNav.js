import { Link } from "react-router";

import './LocalNav.css';

function LocalNav({coursename, NavData}){
    const NavList = [...NavData];
    return(
        <div className="nav-container">
            <details className="nav-dropdown" open>
                <summary className="nav-header">Contents</summary>
                <div className="nav-list">
                    {NavList.map((item, i) => (
                        <Link key={i} to={"/?menu="+coursename+"&title="+(i+1)} className="nav-atag">
                            <p key={i} className="nav-item">{item}</p>
                        </Link>
                    ))}
                </div>
            </details>
        </div>
    );
}

export default LocalNav;