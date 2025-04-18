let currentInput = '';
    let currentInput_1 = '';
    let op = '';
    let num1 = document.getElementById("num1");

    function showNumber(number) {
        if (op === '')
           {currentInput = currentInput + number;
            num1.value = currentInput;}
 
        else 
            {
            currentInput_1 = currentInput_1 + number;
            num1.value = currentInput_1 ;
            
            
            }

        }

    function  clickOperator(oper){
        if(currentInput !== '')
          { op = oper;
            // num1.value = currentInput + op;
          }
    }

    function decimal(point){     

        if(!currentInput.includes('.') && currentInput !== '')
           {num1.value=currentInput + point;
            currentInput = currentInput + point;
            console.log("if block");
            
        }
        else
        { console.log(!currentInput.includes('.'));
            
            if(!currentInput_1.includes('.') && currentInput_1 !== '') {
            num1.value = currentInput_1 + point;
            currentInput_1 = currentInput_1 + point;
            console.log("else block");}
           }
    }

    function clearDisplay() {
        currentInput = '';
        currentInput_1 = '';
        op = '';
        num1.value = 0;
    }

    function calculate() {
        if ( currentInput != '' && currentInput_1 != ''){
           let num_1 = parseFloat(currentInput);
           let num_2 = parseFloat(currentInput_1);
           
            let result ;

           switch (op) {
                case '+':
                  result = num_1 + num_2 ;
                  num1.value = result;
                  break;
                case '-':
                   result= num_1 - num_2 ;
                   num1.value = result;
                   break;
                case '*':
                   result = num_1 * num_2 ;
                   num1.value = result;
                   break;
                case '/':
                   result = num_1 / num_2 ;
                   num1.value = result.toFixed(2);
                   break;
                default:
                   result = 'error';
                   console.log("hhhhh");
                   break;
           }           
        }
    
    
    }