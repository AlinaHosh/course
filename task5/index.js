export function getTime(str){
    if(str!=null){
        const regexp=/\d\d\:\d\d/g;
        const matches=str.match(regexp);       
        if(matches!=null){
            for(let i=0;i<matches.length;i++){
                const hour=matches[i].slice(0,2);
                const minute=matches[i].slice(3);
                const hourInNum=Number(hour);
                const minuteInNum=Number(minute);
                if(hourInNum<24 && minuteInNum<60){
                   return hour+':'+minute;
                }
            }
        }
    }
}
