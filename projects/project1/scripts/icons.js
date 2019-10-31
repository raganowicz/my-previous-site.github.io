const iconsArr = [...document.getElementsByClassName('clicker')];
for(let i=0;i<iconsArr.length;i++){
    const clickIcon = () => console.log(`You clicked an icon ${i+1}!`);
    iconsArr[i].addEventListener('click',clickIcon)
}