import './Resume.css';

function Resume({Lang}){
    return(
        (Lang === "ko") ?
        <div className="intro">
            <div className="intro_content">
                <div className="card">
                    <h1 className="intro_title">Introduction</h1>
                    <h3 className="intro_detail">두 눈이 빨개질 때까지! 고양이처럼 호기심을 탐구하는 2RebCat 한성필입니다!</h3>
                </div>

                <div className="card">
                    <h2>EDUCATION</h2>
                    <ul className="info">
                        <li><strong>학교:</strong> 상명대학교 학사</li>
                        <li><strong>전공:</strong> 컴퓨터과학과 정보보안전공</li>
                        <li><strong>졸업 연도:</strong> 2019년 2월</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>CERTIFICATES</h2>
                    <ul className="info">
                        <li><strong>정보보안기사</strong> 한국인터넷진흥원</li>
                        <li><strong>정보처리기사</strong> 한국산업인력공단</li>
                        <li><strong>개인정보관리사(CPPG)</strong> 한국CPO포럼</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>BRIEF WORK Experience</h2>
                    <ul className="info">
                        <li><strong>회사:</strong> SK 쉴더스</li>
                        <li><strong>부서:</strong> EQST Lab팀</li>
                        <li><strong>직급:</strong> 책임</li>
                        <li><strong>근무 기간:</strong> 2021년 ~ 현재</li>
                        <li><strong>주요 업무:</strong> 정보보안 교육 시스템 개발 및 최신 해킹 기술 트랜드 연구</li>
                    </ul>
                    <br></br>
                    <ul className="info">
                        <li><strong>회사:</strong> The Korea Times LA 본사</li>
                        <li><strong>부서:</strong> New Media Dept.</li>
                        <li><strong>직급:</strong> Assistant</li>
                        <li><strong>근무 기간:</strong> 2019년 ~ 2020년</li>
                        <li><strong>주요 업무:</strong> 전자 신문 서비스 유지보수 및 서버 관리</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>CONTACT</h2>
                    <ul className="info">
                        <li><strong>이메일:</strong> 2rebcat@gmail.com</li>
                        {
                            // 나중에 SNS 추가하기
                            // <li><strong>LinkedIn:</strong> <a href="[링크]" target="_blank">[링크]</a></li>
                        }
                    </ul>
                </div>
            </div>
        </div> :
            // 영문 이력서
        <div className="intro">
        <div className="intro_content">
            <div className="card">
                <h1 className="intro_title">Introduction</h1>
                <h3 className="intro_detail">"Study until my eyes turn red!<br/>
                    &ensp;I'm Sung-Pil Han, the 2RebCat who explores curiosity like a cat!" 😼🔥
                </h3>
            </div>

            <div className="card">
                <h2>EDUCATION</h2>
                <ul className="info">
                    <li><strong>University:</strong> Sangmyung University (Bachelor's Degree)</li>
                    <li><strong>Major:</strong> Computer Science with a specialization in Information Security</li>
                    <li><strong>Graduation Year:</strong> February 2019</li>
                </ul>
            </div>
{
            // <div className="card">
            //     <h2>CERTIFICATES</h2>
            //     <ul className="info">
            //         <li><strong>정보보안기사</strong> 한국인터넷진흥원</li>
            //         <li><strong>정보처리기사</strong> 한국산업인력공단</li>
            //         <li><strong>개인정보관리사(CPPG)</strong> 한국CPO포럼</li>
            //     </ul>
            // </div>
}
            <div className="card">
                <h2>BRIEF WORK Experience</h2>
                <ul className="info">
                    <li><strong>Company:</strong> SK Shieldus</li>
                    <li><strong>Department:</strong> EQST Lab Team</li>
                    <li><strong>Position:</strong> Senior Researcher</li>
                    <li><strong>Period:</strong> 2021 – Present</li>
                    <li><strong>Key Responsibilities:</strong><br></br>
                    &emsp;&emsp;1. Development of cybersecurity education systems<br></br>
                    &emsp;&emsp;2. Research on emerging hacking techniques and trends
                    </li>
                </ul>
                <br></br>
                <ul className="info">
                    <li><strong>Company:</strong> The Korea Times LA 본사</li>
                    <li><strong>Department:</strong> New Media Dept.</li>
                    <li><strong>Position:</strong> Assistant</li>
                    <li><strong>Period:</strong> 2019 - 2020</li>
                    <li><strong>Key Responsibilities:</strong><br></br>
                    &emsp;&emsp;1. Maintenance and management of the electronic newspaper service and servers
                    </li>
                </ul>
            </div>

            <div className="card">
                <h2>CONTACT</h2>
                <ul className="info">
                    <li><strong>Email:</strong> 2rebcat@gmail.com</li>
                    {
                        // 나중에 SNS 추가하기
                        // <li><strong>LinkedIn:</strong> <a href="[링크]" target="_blank">[링크]</a></li>
                    }
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Resume;