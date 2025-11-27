document.getElementById('sumForm').addEventListener('submit',function(event){
    event.preventDefault();
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let opedor = document.getElementById('operador').value;
     switch
(opedor){
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = 'Error: División por cero';
            }
            break;
        default:
            resultado = 'Operador no válido';
    }

   
    document.getElementById('resultado').innerHTML= `El reultado es : ${resultado}`;
});