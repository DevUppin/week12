const clickMeButton  = document.querySelector(".clickMe")
// console.log(clickMeButton);
function clickhandler () {
    alert("You clicked me");
    // clickMeButton.removeEventListener('click', clickhandler)
}
clickMeButton.addEventListener('click', clickhandler, {once:true})
