let string = ""
const operators=['+', '-', '*', '/']
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                string = "";
                document.querySelector('input').value = "Expression Error";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '&lt;') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == '%') {
            try {
                if (string === "" || isNaN(parseFloat(string))) {
                    throw new Error("Invalid input for percentage");
                }
                string = (parseFloat(string) / 100).toString();
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }
            else {
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
    })    
});
