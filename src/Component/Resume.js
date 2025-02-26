import './Resume.css';

function Resume(){
    return(
        <div class="intro">
            <div class="intro_content">
                <div class="card">
                    <h1 class="title">Introduction</h1>
                    <h3 class="intro">두 눈이 빨개질 때까지 밤낮으로 새로움을 찾아 배우는 2RebCat 한성필입니다!</h3>
                </div>

                <div class="card">
                    <h2>EDUCATION</h2>
                    <ul class="info">
                        <li><strong>대학교:</strong> 상명대학교 학사</li>
                        <li><strong>전공:</strong> 컴퓨터과학과 정보보안전공</li>
                        <li><strong>졸업 연도:</strong> 2019년 2월</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>CERTIFICATES</h2>
                    <ul class="info">
                        <li><strong>정보보안기사</strong> 한국인터넷진흥원</li>
                        <li><strong>정보처리기사</strong> 한국산업인력공단</li>
                        <li><strong>개인정보관리사(CPPG)</strong> 한국CPO포럼</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>BRIEF WORK HISTORTY</h2>
                    <ul class="info">
                        <li><strong>회사:</strong> SK 쉴더스</li>
                        <li><strong>부서:</strong> EQST Lab팀</li>
                        <li><strong>직급:</strong> 책임</li>
                        <li><strong>근무 기간:</strong> 2021년 ~ 현재</li>
                        <li><strong>주요 업무:</strong> 정보보안 교육 시스템 개발 및 최신 해킹 기술 트랜드 연구</li>
                    </ul>
                    <br></br>
                    <ul class="info">
                        <li><strong>회사:</strong> The Korea Times LA 본사</li>
                        <li><strong>부서:</strong> New Media Dept.</li>
                        <li><strong>직급:</strong> Assistant</li>
                        <li><strong>근무 기간:</strong> 2019년 ~ 2020년</li>
                        <li><strong>주요 업무:</strong> 전자 신문 서비스 유지보수 및 서버 관리</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>CONTACT</h2>
                    <ul class="info">
                        <li><strong>이메일:</strong> 2rebcat@gmail.com</li>
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