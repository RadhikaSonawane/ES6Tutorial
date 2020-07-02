const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['python', 'php', 'javascript', 'c++', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'sql'];

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    //console.log(ranNum);
    let neTempSwords = sWords[ranNum];
    return neTempSwords;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        scrambleWord();
        }
})