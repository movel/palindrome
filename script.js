// browser-sync start --server './'  --files './'

'use strict'

const palindrome = str => {
    if(str.length < 2) return true;

    str = str.toLowerCase();
    str = str.match(/[^_\W]+/g).join(' ');

    let i=0;
    let j=str.length-1;
    while(i<j) {
        // remove space
        if(str[i] === ' ') i++;
        if(str[j] === ' ') j--;

        // main loop
        if(str[i] !== str[j]) {
            return false;
        } 
        i++;
        j--;
    }

    return true;
}

const answerStyleClassPrimary = (ans) => {
    if(ans) return 'column subtitle is-11 is-offset-1 notification is-success is-light answer_palindrome';
    else return 'column subtitle is-11 is-offset-1 notification is-danger is-light answer_palindrome';
}

const CheckClick = () => {
    let textPal = inputPal.value;
    let ansPal = document.getElementsByClassName('answer_palindrome')[0];
    if(palindrome(textPal)) {
        ansPal.innerHTML = 'this is a palindrome';
        ansPal.className = answerStyleClassPrimary(true);
    } else {
        ansPal.innerHTML = 'this is not a palindrome'
        ansPal.className = answerStyleClassPrimary(false);
    }
}

let inputPal = document.getElementsByClassName('input_palindrome')[0];
inputPal.value = '"A man, a plan, a canal, Panama!"';
CheckClick();
inputPal.oninput = CheckClick;