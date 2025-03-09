import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";

import './LocalNav.css';

function LocalNav({coursename, NavData}){
    const NavList = [...NavData];

    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 601);
        };

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const detailsRef = useRef(null);
    const handleClickInside = () =>{
        if (window.innerWidth < 601){
            setIsOpen(false);
        }
    }

    return(
        <div className="nav-container">
            <details className="nav-dropdown" ref={detailsRef} open={isOpen} onToggle={() => setIsOpen(detailsRef.current?.open)}>
                <summary className="nav-header">Contents</summary>
                <div className="nav-list">
                    {NavList.map((item, i) => (
                        <Link key={i} to={"/?menu="+coursename+"&title="+(i+1)} className="nav-atag" onClick={handleClickInside}>
                            <p key={i} className="nav-item">{item}</p>
                        </Link>
                    ))}
                </div>
            </details>
        </div>
    );
}

export default LocalNav;