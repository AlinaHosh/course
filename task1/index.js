export function sum(a,b){
    return a+b;
    }
    export function minus(a,b){
        return a-b;
    }
   export function multiply(a,b){
        return a*b;
    }  
   export function divide(a,b){
        return a/b;
    }
export function calculate(symbol,a,b){
    switch(symbol){
        case '+':
            sum(a,b);
        case '-':
            minus(a,b);
        case '*':
            multiply(a,b);
        case '/':
            divide(a,b);
        default:
            return 0;     

    }
}
