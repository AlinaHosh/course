export const openOrSenior=pairs=>{
  const person=[];
  const agePerson=40;
  const ageSkill=15;

  pairs.forEach((pair)=>{
    if(pair[0]>=agePerson && pair[1]>=ageSkill){
      person.push('Senior');
    }else{
      person.push('Open');
    }
  });

  return person;
};