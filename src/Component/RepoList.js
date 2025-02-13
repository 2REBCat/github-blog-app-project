import { Link } from "react-router";

import './RepoList.css';

function RepoList({RepoData}){

  const courses = [...RepoData];
  
  return(
      <div className="course-list-container">
      {courses.map((course) => (
        <Link key={course.id} to={course.link} className="course-item">
          <div className="course-text">
            <p className="course-name-ko">{course.nameKo}</p>
            <p className="course-name-en">{course.nameEn}</p>
          </div>
          <span className="arrow">{">"}</span>
        </Link>
      ))}
    </div>
  );
}

export default RepoList;