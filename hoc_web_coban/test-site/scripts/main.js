const myImage = document.querySelector('img');

myImage.onmouseover = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/con ho du.jpg') {
    myImage.setAttribute('src','images/hổ siberia.png');
  } else if ( mySrc === 'images/hổ siberia.png') {
    myImage.setAttribute('src','images/con-ho-18081253.jpg');
  } else {
    myImage.setAttribute ('Src','images/con ho du.jpg');
  }
} 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setTitle() {
  if (!localStorage.getItem('tenHo')){
    let tenHo = prompt('Hay nhap ten loai ho:');
    if(!tenHo){

      setTitle();
 
    } else{
         localStorage.setItem('tenHo' , tenHo);
         myHeading.textContent = `Ho ${tenHo}` ;
    }
  } else{
       let tenHo = localStorage.getItem('tenHo');
       myHeading.textContent = `Ho ${tenHo}`;
  }
}


myButton.onclick = () => {
  setTitle();
}
