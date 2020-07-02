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
    //console.log(newTempSwords.split(""))
    return neTempSwords;
}

const scrambleWord = (arr) =>{
    for(let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        console.log(temp)
        let j = Math.floor(Math.random()*(i+1));
        console.log(i);
        console.log(j);

        arr[i]= arr[j];
        arr[j]= temp;
    }
    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        randWords = scrambleWord(newWords.split(""));
        console.log(randWords.join(""));
        msg.innerHTML = `Guess the word ${randWords}`;
        
        } else{
            let tempWord =  guess.value;
            if(tempWord === newWords){
                //console.log('correct');
                play = false;
                msg.innerHTML = `Awesome it's correct. it is ${newWords}`;
                btn.innerHTML = "Start again";
                guess.classList.toggle('hidden');
                guess.value = "";
            }else {
                //console.log('inncorrect');
                msg.innerHTML = `Sorry it's inncorrect. Please try again ${randWords}`;
            
            }
        }
})