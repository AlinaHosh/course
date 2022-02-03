export let calculateRentalCost=function(countOfDays){
  const costRent=40;
  const offFor7Days=50;
  const offFor3Days=20;
 if(!isNaN(countOfDays) && Math.sign(countOfDays)){
    const rentTheCar=costRent*countOfDays;
    if(countOfDays<3 && countOfDays>0)
      return rentTheCar;
      if(3<=countOfDays && countOfDays<7)
        return rentTheCar-offFor3Days;
      if(7<=countOfDays)
        return rentTheCar-offFor7Days;
 }
};