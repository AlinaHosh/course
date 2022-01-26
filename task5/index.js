export function getTime(str){
    let regexp=/\d+/g;
    let matches=str.match(regexp);
    if(matches!=null){
        if(matches.length%2==0){
            for(let i=0;i<matches.length;i++){
                let hour=matches[i];
                let minute=matches[i+1];
                if(hour<24 && minute<60){
                    return hour+':'+minute;
                }
            }
        }
        else return 'no time'
    }
    else return 'no time'
}