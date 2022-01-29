export function getTime(str){
    if(str!=null){
        const regexp=/\d\d\:\d\d/g;
        const matches=str.match(regexp);       
        if(matches!=null){
            for(let i=0;i<matches.length;i++){
                let hour=matches[i].slice(0,2);
                let minute=matches[i].slice(3);
                let hourInNum=Number(hour);
                let minuteInNum=Number(minute);
                if(hourInNum<24 && minuteInNum<60){
                   return hour+':'+minute;
                }
            }
        }
    }
}