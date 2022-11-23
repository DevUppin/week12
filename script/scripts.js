const clickMeButton  = document.querySelector(".clickMe")
// console.log(clickMeButton);
function clickhandler () {
    alert("You clicked me");
    // clickMeButton.removeEventListener('click', clickhandler)
}
function changeBackgroundColour () {
    document.body.style.backgroundColor = 'pink';
    
    
    
    
}
clickMeButton.addEventListener('click', clickhandler, {once:true})
clickMeButton.addEventListener('click', changeBackgroundColour)