const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');


let n=3;

function changeSlide(){
     for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
     }
img[3].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length - 1;
    }
    changeSlide();
})
