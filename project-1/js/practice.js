
    // console.log(root);
    const btn =document.getElementById("change-btn").addEventListener('click',function(){
    const root = document.getElementById("root");
    console.log('clicked');
    root.style.backgroundColor = generateRgbColor();
})


 const generateRgbColor =()=>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`; 
}