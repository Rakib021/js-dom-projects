//steps
//step-1 --Create Onload Handler
window.onload = ()=>{
    main();
}
function main(){
const root = document.getElementById("root");
const btn = document.getElementById("change-btn");

btn.addEventListener('click',function(){
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
})
}
 //step2-- Random color generate
 function generateRGBColor(){
//rgb(0,0,0) ,rgb(255,255,255)
const red = Math.floor(Math.random() *255);
const green = Math.floor(Math.random() *255);
const blue = Math.floor(Math.random() *255);

return `rgb(${red},${green},${blue})`

}

//step3---collect all necessary references