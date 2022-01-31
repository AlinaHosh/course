export function calculateRentalCost(countOfDays){
 if(!isNaN(countOfDays) && Math.sign(countOfDays)){
    const rentTheCar=40*countOfDays;
    if(countOfDays<3 && countOfDays>0)
      return rentTheCar;
      if(3<=countOfDays && countOfDays<7)
        return rentTheCar-20;
      if(7<=countOfDays)
        return rentTheCar-50;
 }
}