export function openOrSenior(pairs){
  let person=[]
  const pairsToStr=pairs.join(' ')
  const regexp=/\d+\,\d+/g
  const matches=pairsToStr.match(regexp)
  for(let i=0;i<matches.length;i++){
    const age=matches[i].slice(0,2)
    const skill=matches[i].slice(3)
    const ageNumber=Number(age)
    const skillNumber=Number(skill) 
    if(ageNumber>=50  && skillNumber>=15){
      person.push("Senior")
    }
    person.push("Open")
  }
  return person
 }
