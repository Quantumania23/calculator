let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
         else if(e.target.innerHTML == 'sin') {
            var x = input.value;
            x = x * Math.PI / 180;
            input.value = Math.sin(x);
            inputValue = input.value
         }

         else if(e.target.innerHTML == 'log') {
            var x = input.value;
            x = x * Math.PI / 180;
            input.value = Math.log(x);
            inputValue = input.value
        }

        else if(e.target.innerHTML == 'cos') {
            var x = input.value;
            x = x * Math.PI / 180;
            input.value = Math.cos(x);
            inputValue = input.value
        }

        else if(e.target.innerHTML == 'tan') {
            var x = input.value;
            x = x * Math.PI / 180;
            input.value = Math.tan(x);
            inputValue = input.value
        }

        else if(e.target.innerHTML == 'sqrt') {
            var x = input.value;
            x = x * Math.PI / 180;
            input.value = Math.sqrt(x);
            inputValue = input.value
        }
 
        else {
            string += e.target.innerHTML;
            input.value =string;
        }

    })
})