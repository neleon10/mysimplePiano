

const pianoKeys = document.querySelectorAll(".key");
const numbers = ['02', '04', '06', '09', '11', '14', '16', '18', '21', '23', '01', '03', '05', '07', '08', '10', '12', '13', '15', '17', '19', '20', '22', '24']


function playKey(url){
    //console.log('dentro de la funcion',url);
    new Audio(url).play()
}

//24-piano-keys/key05.mp3  --> this is an example of a path, so we have to change the number. 
// all paths are the same except for the number. 

pianoKeys.forEach((key,i)=> {
    //const number = i < 9 ? '0'+(i+1) : (i + 1) //--> i + 1 because we don't have a 00 key. 
    //the code above doesn't work correctly. 
    const url = `24-piano-keys/key${numbers[i]}.mp3`;
    //console.log('que hay en url',url);
    key.addEventListener('click',()=> playKey(url)) 
})


//choose colours

function changeColour(col){
    if(col === 'Rainbow'){
        //console.log('entra en rainbow');
        pianoContainer.classList.add('rainbow');
        //pianoContainer.style.backgroundColor = "orange";
    }else {
        pianoContainer.classList.remove('rainbow');
        pianoContainer.style.backgroundColor = col;
    }
}

const colourArray = document.querySelectorAll('.colour')
const pianoContainer = document.querySelector('#piano')

//each colour
colourArray.forEach(col => {
    
    col.addEventListener('click',()=> changeColour(col.innerHTML))
})
//red.addEventListener('click',()=> changeColour('red'))

//console.log('este es el inner text',red.innerHTML)
// ojo que se puede hacer un map con los botones con las mismas clases. 

