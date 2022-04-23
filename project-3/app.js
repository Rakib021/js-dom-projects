/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */
window.onload =()=>{
    main();
}

function main(){
    const changeBtn = document.getElementById("change-btn");
    const root = document.getElementById("root");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copy-btn");
   changeBtn.addEventListener('click',function(){
    const bgColor = generateHexColor();
    root.style.backgroundColor= bgColor;
    output.value =bgColor;
   });
   copyBtn.addEventListener('click',function(){
       navigator.clipboard.writeText(output.value);
       alert('successFully You copied the Hex code color');
   })
}



const generateHexColor =()=>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}