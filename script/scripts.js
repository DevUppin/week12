const clickMeButton  = document.querySelector(".clickMe")
// console.log(clickMeButton);
function clickhandler () {
    alert("You clicked me");
}
clickMeButton.addEventListener('click', clickhandler)
