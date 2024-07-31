let orderCount = 0;
let btns = document.querySelectorAll(".btn");
btns.forEach(button =>{
    button.addEventListener("click",()=>{
    orderCount++;
    let notification =document.getElementById("notification");
    notification.textContent=orderCount;
    notification.style.display="block";
});
});