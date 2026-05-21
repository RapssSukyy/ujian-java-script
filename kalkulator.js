        let number1 = document.getElementById('number1');
        let number2 = document.getElementById('number2');
        let result = document.getElementById('result');
        function calculate() {
            let num1 = parseFloat(number1.value);
            let num2 = parseFloat(number2.value);
            let operation = event.target.innerText;

            if (operation === 'multiply') {
                result.textContent = `Hasil: ${num1 * num2}`;
            } else if (operation === 'divide') {
                if (num2 !== 0) {
                    result.textContent = `hasil: ${num1 / num2}`;
                } else {
                    result.textContent = 'error: tidak bisa dibagi dengan nol';
                }
            }
        }