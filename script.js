let solutionScreen = document.getElementById("solution-screen")
function display(val) {
    solutionScreen.value += val;
    return val
}

function calculate(){
   let x = solutionScreen.value
   let y = eval(x)
   solutionScreen.value = y
   return y
}

function Clear() {
    solutionScreen.value = " "
}

function del() {
    solutionScreen.value = solutionScreen.value.slice(0, -1);
}