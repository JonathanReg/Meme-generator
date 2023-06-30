const formElement = document.querySelector('#Memes');
const container = document.querySelector(".generator");
const add = document.querySelector('.image');
const topText = document.querySelector('.topText')
const bottomText = document.querySelector('.bottomText')
const text = document.querySelectorAll('input[type="text"]')
// new box
const space = document.querySelector('.space');


// function noText(){
//     for(texts of text){
//          texts.value = ''};
//     }
// function words(){
//     const topDiv = document.createElement('div');
//     const bottomDiv = document.createElement('div');
//     // topDiv.classList.add('top')
//     // bottomDiv.classList.add('bottom')
//     topDiv.innerText = topText.value;
//     bottomDiv.innerText = bottomText.value;
//     newMeme.append('topDiv');
//     newMeme.append('bottomDiv');
//     return topDiv;
// }
// function noMeme(){
//     const removes = document.createElement('button');
//     removes.innerText = 'Remove';
//     divs.append(removes);
//     return removes;
// }

// function addAMeme(){
//     const divs = document.createElement('div')
//     const newMeme = document.createElement('img');
//     newMeme.setAttribute('src',add.value);
//     newMeme.classList.add('spread')
//     divs.classList.add('memeContainer')
//     divs.append(newMeme);
//     container.append(divs);
//     const topDiv = document.createElement('div');
//     const bottomDiv = document.createElement('div');
//     topDiv.classList.add('top')
//     bottomDiv.classList.add('bottom')
//     topDiv.innerText = topText.value;
//     bottomDiv.innerText = bottomText.value;
//     divs.append(topDiv);
//     divs.append(bottomDiv);
    
//     const removes = document.createElement('button');
//     removes.classList.add('seperate')
//     removes.innerText = 'Delete';
//     divs.append(removes);
//     return divs;
// }
function addAMeme(){
    const divs = document.createElement('div')
    const newMeme = document.createElement('img');
    newMeme.setAttribute('src',add.value);
    newMeme.classList.add('spread')
    divs.classList.add('memeContainer')
    divs.append(newMeme);
    space.append(divs);
    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    topDiv.classList.add('top')
    bottomDiv.classList.add('bottom')
    topDiv.innerText = topText.value;
    bottomDiv.innerText = bottomText.value;
    divs.append(topDiv);
    divs.append(bottomDiv);
    
    const removes = document.createElement('button');
    removes.classList.add('seperate')
    removes.innerText = 'Delete';
    divs.append(removes);
    return divs;
}
    formElement.addEventListener("submit",function(e){
        e.preventDefault();
        addAMeme();
        formElement.reset()
     
    })
     container.addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        };
    })
    
    