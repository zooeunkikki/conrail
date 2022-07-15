//새로고침시 상단으로 이동
// history.scrollRestoration = "manual"
// header scroll event
let Hd = document.querySelector('.logobox');
let logoColor = document.querySelector('.logobox>h2>a')
let spanColor = document.querySelectorAll('.buger span');
let Buger = document.querySelector('.buger');

//scroll 실행
function scrollFun() {
    window.addEventListener('scroll', function (e) {
        //console.log(e)
        let maxScrollValue = document.body.offsetHeight - window.innerHeight;
        const scrollPer = (pageYOffset / maxScrollValue) * 100;
        // console.log(maxScrollValue) -> 전체 사이트 길이
        // console.log(scrollPer) -> 현재 스크롤값

        ifFun(scrollPer)
        MainScroll(scrollPer, maxScrollValue)
    });
};

//IF문 담는 곳
function ifFun(scrollPer) {


    //BG 색상 변경
    if (scrollPer >= 1) {
        Hd.classList.add('bg');
        logoColor.classList.remove('aColor');

    } else {
        Hd.classList.remove('bg');
        logoColor.classList.add('aColor');
    }

    spanColor.forEach(function (span, k) {
        if (scrollPer >= 1) {
            spanColor[k].classList.remove('spanColor');
        } else {
            spanColor[k].classList.add('spanColor');
        }
    });

};

//클릭시 네비 열리기
function clickFun() {
    let menuBox = document.querySelector('.menubox');
    let Buger = document.querySelector('.buger');
    let Ani;    
    Ani = setTimeout(function(){
    Buger.addEventListener('click', function () {
        // console.log(100);
        Hd.classList.remove('bg');
        if (!Buger.classList.contains('active')) {
            spanColor.forEach(function (s, k) {
                spanColor[k].classList.remove('spanColor');
            });
            document.documentElement.style = 'overflow:hidden';
            menuBox.classList.remove('out');
            
        }else{
            document.documentElement.style = 'overflow:auto';
            menuBox.classList.toggle('out');
        }
        
        Buger.classList.toggle('active');
        menuBox.classList.toggle('active');
        logoColor.classList.remove('aColor');
        TxtAni();
    });
    },300);
};

//네비 애니메이션
function TxtAni(){
    //txt-ani
    let menuBox = document.querySelector('.menubox');
    let svgBg1 = document.querySelector('.svg-bg svg path');
    let bugerTxt1 = document.querySelectorAll('.menubox ul li h2');
    let bugerTxt2 = document.querySelectorAll('.h2-sub p');
    let bugerTxt3 = document.querySelectorAll('.hd-contact p');
    let bugerTxt4 = document.querySelectorAll('.hd-contact a');
        
            if(menuBox.classList.contains('active')){
                svgBg1.classList.remove('out');

                //remove
                bugerTxt1.forEach(function(b,i){
                    bugerTxt1[i].classList.remove('out');
                });
                bugerTxt2.forEach(function(b,i){
                    bugerTxt2[i].classList.remove('out');
                });
                bugerTxt3.forEach(function(b,i){
                    bugerTxt3[i].classList.remove('out');
                });
                bugerTxt4.forEach(function(b,i){
                    bugerTxt4[i].classList.remove('out');
                });
                


                
            }else{
                svgBg1.classList.toggle('out');

                bugerTxt1.forEach(function(b,i){
                    bugerTxt1[i].classList.toggle('out');
                });
                bugerTxt2.forEach(function(b,i){
                    bugerTxt2[i].classList.toggle('out');
                });
                bugerTxt3.forEach(function(b,i){
                    bugerTxt3[i].classList.toggle('out');
                });
                bugerTxt4.forEach(function(b,i){
                    bugerTxt4[i].classList.toggle('out');
                });
            }
        
        svgBg1.classList.toggle('active');

        //txt-ani
        bugerTxt1.forEach(function(b,i){
            bugerTxt1[i].classList.toggle('active');
        });
        bugerTxt2.forEach(function(b,i){
            bugerTxt2[i].classList.toggle('active');
        });
        bugerTxt3.forEach(function(b,i){
            bugerTxt3[i].classList.toggle('active');
        });
        bugerTxt4.forEach(function(b,i){
            bugerTxt4[i].classList.toggle('active');
        });
        
};

//txt 나누기
function MainTxtSplit(){
    function movebox1(){
        let moveBoxh = document.querySelector('.movebox1 h2');
        const txtH2 = moveBoxh.textContent.split(" ");
        // console.log(txtH2)
        let txtBox1 =[];
        let txtDiv = [];
        
        txtH2.forEach(function(h2,k){
            // txtH2[k]
            txtBox1 += `<span>${txtH2[k]}</span>`;
        });
        const divH2 = txtBox1.split("%");
        console.log(divH2)
        txtDiv += `<div>${divH2}</div>`;
        
        // moveBoxh.innerHTML = txtBox1;
            moveBoxh.innerHTML = txtDiv;
        
        
    }
        
        function movebox2(){
            let moveBoxp = document.querySelector('.movebox2 p');
            const txtP = moveBoxp.textContent.split("%");
            let txtPbox = [];
    
            txtP.forEach(function(v,k){
                txtP[k]
                txtPbox += `<span>${txtP[k]}</span>`;
            });
    
            moveBoxp.innerHTML = txtPbox;
        }
        
        movebox1();
        movebox2();
};    


function MainScroll(scrollPer, maxScrollValue){
    
    function txt1(){
        let txt1 = document.querySelector('.company h4');
        let el = txt1.offsetHeight;
        // console.log(el)
        // console.log(el-maxScrollValue <maxScrollValue);
        if(el-maxScrollValue <= maxScrollValue){
            txt1.classList.add('ani');
        }
    }

    function txt2(){
        let txt2 = document.querySelectorAll('main span');
        
        txt2.forEach(function(v,k){
            let el = '';
            el = txt2[k].offsetHeight;
            // el += txt2.offsetHeight;
            // console.log(el)
            // console.log(el-maxScrollValue <= maxScrollValue)

            if(el-maxScrollValue <= maxScrollValue){
                txt2[k].classList.add('ani2');    
                txt2[k].style = `animation-delay: 0.${k}s;`;
            }
        
        // console.log(el-maxScrollValue <maxScrollValue);
        // txt2.forEach(function(v,k){
        //     if(el-maxScrollValue <= maxScrollValue){
        //         txt2[k].classList.add('ani2');
        //     }
        // })
    });
    }
    
    txt1();
    txt2();
};


function activeAni(){

}

//함수 실행
function init(){
scrollFun();
ifFun();
clickFun();
MainTxtSplit();
MainScroll();
}
window.addEventListener('load',init);


// 스크롤이벤트 발생 막는거
 // menuBox.addEventListener('scroll',function(){
    //     event.preventDefault();
    //     event.stopImmediatePropagation();
    //     event.stopPropagation();
    // });