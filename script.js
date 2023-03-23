// Hide buttons onload
const arrButtons = document.querySelector('#arrayButtons');
const stringButtons = document.querySelector('#stringButtons');
const newstringBtn = document.querySelector('#newString');


document.addEventListener('DOMContentLoaded', function(){
    arrButtons.style.display = 'none';
    stringButtons.style.display = 'none';
    newstringBtn.style.display = 'none';
    viewArrLength.disabled = true;
});

// Variables for the Array Playground
// Array Field
const arrField = document.querySelector('#arrField');
// Buttons for Array Playground
const insertArr = document.querySelector('#insertArr');
const viewArrLength = document.querySelector('#viewArrLength');
const insertAtBeginning = document.querySelector('#insertAtBeginning');
const insertAtEnd = document.querySelector('#insertAtEnd');
const removeAtBeginning = document.querySelector('#removeAtBeginning');
const removeAtEnd = document.querySelector('#removeAtEnd');
const changeValue = document.querySelector('#changeValue');

// Buttons for string playground
// Textbox for the string
const stringTextBx = document.querySelector('#stringTextBx');
// Buttons for the playground
const insertString = document.querySelector('#acceptString');
// Buttons to manipulate the playground
const toUpper = document.querySelector('#toUpperCase');
const toLower = document.querySelector('#toLowerCase');
const viewStringLenth = document.querySelector('#stringLength');
const viewNthLetter = document.querySelector('#nthLetter');
const findLetter = document.querySelector('#findLetter');
const changeNthLetter = document.querySelector('#changeNthLetter');
const reverseString = document.querySelector('#reverseString');
const maskString = document.querySelector('#maskString');



var userArr = new Array();

//function to update view array
function showArr(){
    arrField.innerText = userArr;
}

//instantiate the array
insertArr.addEventListener('click',()=>{
    var userarrlength = window.prompt("Please enter your array length");

    if (userarrlength <= 0 || userarrlength == ''){
        window.alert("please enter a valid value");
    }else{
        for(var i = 0;i <= userarrlength-1; i++){
            userArr[i] = window.prompt("Enter element "+ i +":");
        }
        window.alert("Array is complete\nThank You");
    
        var text = "";
        for (i=0;i<userArr.length;i++){
            text += userArr[i] + "\n";
        }
        window.alert(text);
        viewArrLength.disabled = false;
        arrButtons.style.display = 'block';
        stringButtons.style.display = 'none'
    }
    
    showArr();
});

//View Length of the Array
viewArrLength.addEventListener('click',()=>{
    if(userArr == 0){
        window.alert("Array is empty");
    }else{
        let length = userArr.length;
        window.alert("Array length is " + length);
    }
});


//Add new element at the beginning of the array
insertAtBeginning.addEventListener('click',()=>{
    var insert = window.prompt("Enter your element");
    
    userArr.unshift(insert);
    showArr();
});

//Add new element at the end of the array
insertAtEnd.addEventListener('click',()=>{
    var insert = window.prompt("Enter your element");
    
    userArr.push(insert);
    showArr();
});


//Remove element at the beginning of the array
removeAtBeginning.addEventListener('click',()=>{
    var removed = userArr.shift();
    showArr();

    window.alert("You have removed "+ removed);
});


//Remove element at the end of the array
removeAtEnd.addEventListener('click',()=>{
    var removed = userArr.pop();
    showArr();

    window.alert("You have removed "+ removed);
});

//Change A value at a certain point
changeValue.addEventListener('click',()=>{
    if(userArr == 0){
        window.alert("Array is empty");
    }else{
        var indexVal = window.prompt("Enter position of value you want to change");

        var newVal = window.prompt("Enter the new value");
        userArr[indexVal-1] = newVal;
    }

    showArr();
});


// String Playground functions
insertString.addEventListener('click',()=>{
    if(stringTextBx.value === '' || stringTextBx.value == ' '){
        alert("String is empty\nPlease try again");
    }else{
        alert('String confirmed as: ' + stringTextBx.value);
        stringTextBx.disabled = true;
        stringTextBx.style.color = '#000';
        insertString.style.display = 'none';

        arrButtons.style.display = 'none';
        stringButtons.style.display = 'block';
        insertString.style.display = 'none';
        newstringBtn.style.display = 'inline';
        viewArrLength.disabled = true;
    }
});

newstringBtn.addEventListener('click',()=>{
    stringTextBx.value = '';
    newstringBtn.style.display ='none';
    insertString.style.display = 'inline';
    stringTextBx.disabled = false;
})

toUpper.addEventListener('click',()=>{
    stringTextBx.style.textTransform = 'uppercase';
});

toLower.addEventListener('click',()=>{
    stringTextBx.style.textTransform = 'lowercase';
});

viewStringLenth.addEventListener('click',()=>{
    let newStr = stringTextBx.value;
    alert("The string length is: " + newStr.length);
});

viewNthLetter.addEventListener('click',()=>{
    let num = prompt('Which position is the letter');
    if(num>stringTextBx.value.length){
        alert("You are out of range");
    }else{
        alert("The letter at position " + num + " is: "+ stringTextBx.value[num-1]);
    }
});

findLetter.addEventListener('click',()=>{
    let letter = prompt('Which letter are you looking for:\nPlease be advised this search is case sensitive');

    for(let i=0;i<stringTextBx.value.length; i++){
        if(stringTextBx.value[i] === letter){
            alert('The letter is found at position: ' + (i+1));
        }
    }
});

changeNthLetter.addEventListener('click',()=>{
    let nthLetter = prompt('Enter postion of the letter you want to change?')
    let newStr = [];
    newStr =stringTextBx.value.split('');
    let alter = prompt('What do you want to change the value with?');
    newStr.splice(nthLetter-1,1,alter);

    
    stringTextBx.value = newStr.join('');

});

reverseString.addEventListener('click',()=>{
    let newStr = '';
  
    //Get length of string then concatenate to new String
    for(let i = stringTextBx.value.length-1;i>=0;i--){
        newStr += stringTextBx.value[i];
    }
    stringTextBx.value = newStr;
});

maskString.addEventListener('click',()=>{
    const result = confirm("If you mask the string you won't be able to unmask\nAre you sure you want to continue?");

    if (result === true) {
        if(stringTextBx.value.length>=4){
            let newStr = '';
            let lastTwo = stringTextBx.value.slice(-3);
            for(let i=1;i<=stringTextBx.value.length-3;i++){
                newStr += '#';
            }
            stringTextBx.value = newStr + lastTwo;

            stringButtons.style.display = 'none';
            
        }else{
            alert('String is to short to mask')
        }
      } else {
        alert("You clicked Cancel.");
      }
    
});