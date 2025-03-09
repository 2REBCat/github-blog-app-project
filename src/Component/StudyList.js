import { Link } from "react-router";

import './StudyList.css';

function StudyList({RepoData, Lang}){

  const courses = [...RepoData];
  
  return(
      <div className="course-list-container">
      {courses.map((course) => (
        <Link key={course.id} to={"/?menu="+course.link} className="course-item">
          <div className="course-text">
              <p className="course-name">{(Lang === "ko") ? course.nameKo : course.nameEn }</p>
          </div>
          <span className="arrow">{">"}</span>
        </Link>
      ))}
    </div>
  );
}

export default StudyList;