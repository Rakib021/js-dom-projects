/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */



document.getElementById("change-btn").addEventListener('click',function(){
    const root = document.getElementById("root");
const bgColor = generateHexColor();
    root.style.backgroundColor =bgColor;
    const output = document.getElementById("output");
    output.value =bgColor;
})

function generateHexColor (){
    // #000000 #ffffff
	// 255, 255, 255 -> #FFFFFF
   const red = Math.floor(Math.random()*255);
   const green = Math.floor(Math.random()*255);
   const blue = Math.floor(Math.random()*255);

   return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;


}
