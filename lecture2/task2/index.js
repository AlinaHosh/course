export let openOrSenior=function(pairs){
  const person=[];
  const pairsToStr=pairs.join(' ');
  const regexp=/\d+[,]\d+/g;
  const matches=pairsToStr.match(regexp);
  for(let i=0;i<matches.length;i++){
    const matches1=matches[i].split(',');  
      if(matches1[0]>=40 && matches1[1]>=15){
        person.push("Senior");
      }
      person.push("Open");
    }
 return person;
 };