function _id(id) {
    let idElem= document.getElementById(id)
    return idElem;
}
function _queryAll (queryAll){
    let queryAllElem=document.querySelectorAll(queryAll)
    return queryAllElem
}
let profImg=_id("profile-img")
let homeSec=_id("home-sec")
let sendEmailBtn=_id("send-email-btn")
let homeSosialMedias=_queryAll(".sosial-media-item")
let sections=_queryAll("section")
console.log(sections);
let progress=_id("progress")
let progressValue=_id("progress-value")
let pos;
let calcHeight;
let scrollValue
setTimeout( ()=>{
    profImg.style.translate="0"
    setTimeout(()=>{
        profImg.style.opacity="100%"

    },200)
} , 1000 );

homeSosialMedias.forEach(homeSosialMediasHandler);
function homeSosialMediasHandler(event)
{
    event.addEventListener("mouseenter",function(){
    event.firstChild.firstChild.classList.add("fa-bounce")
 
    })
    event.addEventListener("mouseleave",function(i){
        event.firstChild.firstChild.classList.remove("fa-bounce")
        
    })
}

homeSec.addEventListener("mousemove",(e)=>{
    const xPosition = e.offsetX;
    const yPosition = e.offsetY;
    const spanElement = document.createElement("span");
     spanElement.style.left = xPosition + "px";
     spanElement.style.top = yPosition + "px";
     const size = Math.random()*100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    spanElement.classList.add("star")
    homeSec.appendChild(spanElement);
    setTimeout(()=>{
        spanElement.remove();
    }, 5000);
})
sendEmailBtn.addEventListener("click",sendEmail)
function sendEmail(){
    let params={
        name:_id("floating-name").value,
        email:_id("floating-email").value,
        message:_id("floating-message").value
    }
    const serviceId="service_dne503c";
    const templateId="template_40o16el";
    emailjs.send(serviceId,templateId,params)
    .then(
        res=>{
             _id("floating-name").value=""
             _id("floating-email").value=""
             _id("floating-message").value=""
            alert("ایمیل شما با موفقیت ارسال شد")
        }
    ).catch((err)=>console.log(err))
}


let scrollPercentage=()=>{
    pos=document.documentElement.scrollTop;
    calcHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    scrollValue=Math.round(pos*100/calcHeight);
    progress.style.background=`conic-gradient(#f8c17e ${scrollValue}%,#0a101e  ${scrollValue}% )`;
    progressValue.textContent=`${scrollValue}%`
sections.forEach(sec=>{
    let top =window.scrollY;
    let offset =sec.offsetTop-400;
    let height=sec.offsetHeight;
    if(top >= offset && top < offset+height){
        sec.classList.add("show-scroll-animate")
     
        if(sec.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nodeName=="H1"){
            let h1Title=sec.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
        let h2Title= sec.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
        h1Title.classList.add("animate__animated");
        h1Title.classList.add("animate__fadeInUp");
        h2Title.classList.add("animate__animated");
        h2Title.classList.add("animate__slideInUp");
        h1Title.style.opacity="100%"
        h2Title.style.opacity="100%"
        }
    }
 
})
        }
    window.onscroll=scrollPercentage;
