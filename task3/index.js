export function getTime(str){
    let regexp=/\d+/g;
     let matches=str.match(regexp);
     matches=Array.from(matches);
    for(let i=0;i<matches.length;i++){
    let separator=matches[i].indexOf(':');
    let hour=matches[i].slice(0);
    let minute=matches[i].slice(separator);
    if(hour<24 && minute<60){
        return hour+':'+minute;
    }
    }
   
}