// 텍스트 타이핑 효과 구현
// 즉시실행함수
(function(){
    const spanEl = document.querySelector("main h2 span"); // span 요소 노드 가져오기
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer']  // 작성할 문구 배열에 저장
    let index = 0;
    let currentTxt = txtArr[index].split("");  // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    console.log(currentTxt)
    
    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    
    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
            console.log(index);
        }
    }
    writeTxt();

})()


// 수직 스크롤 발생하면 header 태그에 active 클래스 추가 및 삭제
const headerEl = document.querySelector("header"); // 헤더 태그의 문서 노드
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
}); //윈도우에서 스크롤 발생시 scrollCheck 함수 실행
function scrollCheck(){
    const browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY>0){
        headerEl.classList.add('active');
    }else{
        headerEl.classList.remove('active');
    }
    console.log('scroll')
}

// 애니메이션 스크롤
const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browerScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browerScrollY;
    window.scrollTo({top: targetScrollY, behavior:'smooth'});
    console.log(target);
}

const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
console.log(scrollMoveE1);
for(let i=0; i<scrollMoveE1.length; i++){
    scrollMoveE1[i].addEventListener("click", function(e){
        animationMove(this.dataset.target);
    })
}