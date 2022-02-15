export const calculateRentalCost=countOfDays=>{
  const costRentEveryDay=40;
  const off3=20;
  const off7=50;

  if(!isNaN(countOfDays) && Math.sign(countOfDays)){
    const rentTheCar=costRentEveryDay*countOfDays;

    if(countOfDays<3 && countOfDays>0){
      return rentTheCar;
    }
       
    if(3<=countOfDays && countOfDays<7){
      return rentTheCar-off3;
    }
    
    if(7<=countOfDays){
      return rentTheCar-off7;
    }
  }
};