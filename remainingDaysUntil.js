function remainingDaysUntil(date){
    var today = new Date().getTime();   //in milliseconds
    var end = Date.parse(date);         //to milliseconds
    var remaining = (end - today) / (1000*60*60*24);   //converting milliseconds to days
    console.log(Math.floor(remaining) + ' days left until ' + date);
  }
  
remainingDaysUntil('Sep 1, 2019');
remainingDaysUntil('septermber 10 2019');