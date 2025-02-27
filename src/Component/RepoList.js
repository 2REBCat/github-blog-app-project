import { Link } from "react-router";

import './RepoList.css';

function RepoList({RepoData}){

  const courses = [...RepoData];
  
  return(
      <div className="course-list-container">
      {courses.map((course) => (
        <Link key={course.id} to={"/?menu="+course.link} className="course-item">
          <div className="course-text">
            <p className="course-name-ko">{course.nameKo}</p>
          </div>
          <span className="arrow">{">"}</span>
        </Link>
      ))}
    </div>
  );
}

export default RepoList;