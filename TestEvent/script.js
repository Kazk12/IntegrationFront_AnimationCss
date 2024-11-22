

const Click = document.querySelector(".caption>a");

Click.addEventListener("click", handleClickRemove);

function handleClickRemove(event){
    console.log(event.target)
    const item = document.querySelector(".item");
    const rightSide = document.querySelector(".right-side");
    item.classList.add("hidden");
    rightSide.classList.remove("hidden");
    

}