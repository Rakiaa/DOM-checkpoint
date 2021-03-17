let likes = document.querySelectorAll('.like');
console.log(likes)

// btn.addEventlistener('click',function() {
//     var i=document.querySelectorAll('i');
//     if(i.classList.contains('fas')){
//     i.classList.remove('fas');
//     i.classList.add('fas-clicked')
// }})
// var del=document.get
for(let i=0;i<likes.length;i++){
    console.log(likes)
    likes[i].addEventListener('click',function(){
        if(likes[i].style.color=="aqua"){
            likes[i].style.color=  "pink"   
        }else{
            likes[i].style.color="aqua"
        }
    })
}
let minus=document.getElementsByClassName("qt-minus")
for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",function(){
        if(minus[i].nextElementSibling.innerText>0)
       { minus[i].nextElementSibling.innerText--}
    })
}
let plus=document.getElementsByClassName("qt-plus")
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
         plus[i].previousElementSibling.innerText++}
    )}



    let rmvBtn=document.getElementsByClassName("remove")
for(let i=0; i<rmvBtn.length;i++){
    rmvBtn[i].addEventListener('click',function(){
        rmvBtn[i].parentElement.parentElement.remove()
 
    })}