import './Resume.css';

function Resume(){
    return(
        <div class="container">
            <div class="content">
                <div class="card">
                    <h1 class="title">포트폴리오</h1>
                    <h3 class="intro">두 눈이 빨개질 때까지 밤낮으로 새로운 것을 찾는 2rebcat 한성필입니다!</h3>
                </div>

                <div class="card">
                    <h2>학위</h2>
                    <ul class="info">
                        <li><strong>학교:</strong> [대학교 이름]</li>
                        <li><strong>전공:</strong> [전공명]</li>
                        <li><strong>졸업 연도:</strong> [졸업 연도]</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>경력</h2>
                    <ul class="info">
                        <li><strong>회사:</strong> [회사명]</li>
                        <li><strong>직책:</strong> [직책]</li>
                        <li><strong>근무 기간:</strong> [기간]</li>
                        <li><strong>주요 업무:</strong> [주요 업무 내용]</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>연락처</h2>
                    <ul class="info">
                        <li><strong>이메일:</strong> [이메일 주소]</li>
                        <li><strong>LinkedIn:</strong> <a href="[링크]" target="_blank">[링크]</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;