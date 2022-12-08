var userArr =  new Array();

//function to update view array
function showArr(){
    arrayDisplay = document.getElementById("input"); 
    arrayDisplay.innerHTML = userArr;
}

//instantiate the array
function instantiate(){
    var userarrlength = window.prompt("Please enter your array length");

    if (userarrlength <= 0){
        window.alert("please enter a valid value")
    }
    for(var i = 0;i <= userarrlength-1; i++){
        userArr[i] = window.prompt("Enter element "+ i +":");
    }
    window.alert("Array is complete\nThank You");

    var text = "";
    for (i=0;i<userArr.length;i++){
        text += userArr[i] + "\n";
    }
    window.alert(text);
    showArr();
}

//View array length
function viewLength(){
    if(userArr == 0){
        window.alert("Array is empty");
    }else{
        let length = userArr.length;
        window.alert("Array length is " + length);
    }

}

   
//Add new element at the beginning of the array
function addElementBegin(){
    var insert = window.prompt("Enter your element");
    
    userArr.unshift(insert);
    showArr();
}

//Add new element at the end of the array
function addElementEnd(){
    var insert = window.prompt("Enter your element");
    
    userArr.push(insert);
    showArr();
}

//Remove element at the beginning of the array
function removeElementBegin(){
    var removed = userArr.shift();
    showArr();

    window.alert("You have removed "+ removed);
}

//Remove element at the end of the array
function removeElementEnd(){
    var removed = userArr.pop();
    showArr();

    window.alert("You have removed "+ removed);
}

function changeValue(){
    if(userArr == 0){
        window.alert("Array is empty");
    }else{
        var indexVal = window.prompt("Enter position of value you want to change");

        var newVal = window.prompt("Enter the new value");
        userArr[indexVal-1] = newVal;
    }

    showArr();
}

function arrFromString(){
    var stringArr = window.prompt("Please enter a sentence");

    var words = stringArr.split(" ");
    for(var i = 0;i<words.length; i++){
        console.log("Word " + i + "= " + words[i]);
    }
}
