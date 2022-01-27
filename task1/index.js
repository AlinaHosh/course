export function calculate(symbol,a,b){
    switch(symbol){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
             return 0;
    }
}