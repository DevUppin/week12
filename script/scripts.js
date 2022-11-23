const clickMeButton  = document.querySelector(".clickMe")
// console.log(clickMeButton);
function clickhandler () {
    alert("You clicked me");
    // clickMeButton.removeEventListener('click', clickhandler)
}
function changeBackgroundColour () {
    document.body.style.backgroundColor = 'pink';


}
function changetextButton () {
    if (clickMeButton.textContent === "Click me") {
        clickMeButton.textContent = "clicked";
        
        }
    else if (clickMeButton.textContent === "clicked") {
        clickMeButton.textContent = "Click me"
    }

}
function updateImage (ev) {
    console.log(ev)
    const image = document.querySelector('#shoppingcart');
    image.src = 'images/263142.png';
    image.width =100;
    image.height = 100;
    image.alt = 'shoppin cart'
}
const buttonContainer  = document.querySelector(".button-container")
function changeBGgreen (event) {
    if (event.target.TagName === "BUTTON") {
        event.target.style.backgroundColor = 'green'
    }
    // document.body.style.backgroundColor = "green";
    console.log(event)
}
function changetextColour (e) {
    e.target.textContent.style.changetextColour = 'white'
}
buttonContainer.addEventListener('mouseover', changeBGgreen)
    
clickMeButton.addEventListener('click', clickhandler, {once:true})
clickMeButton.addEventListener('click', changeBackgroundColour)
clickMeButton.addEventListener('click', changetextButton)
clickMeButton.addEventListener('click', updateImage)
