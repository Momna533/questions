/*const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const item = e.currentTarget.parentElement.parentElement
        item.classList.toggle("show_text")
    })
})*/

/*
const questions = document.querySelectorAll(".questions");

questions.forEach(function(question){
    const btn = question.querySelector(".btn")
    btn.addEventListener("click" , ()=>{

        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove("show_text")
            }
            
        })
        question.classList.toggle("show_text")
    })
})
*/
const btns = document.querySelectorAll(".btn");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const item = e.currentTarget.parentElement.parentElement;
        item.classList.toggle("show_text")
    })
})



