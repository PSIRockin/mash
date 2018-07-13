function gethome (input){
    let extra = input
        if (input == undefined){
        extra = ("(Insert House Here)")
    }
    const index = Math.floor(Math.random() * 5);
    const home = ["Mansion", "Apartment", "Shack", "House", extra];

    return home[index];
}

function getChildrenCount (chance){
   const random = Math.floor(Math.random() * 100);
   const halfnhalf = Math.floor(Math.random() * 100);
   

   
   if (halfnhalf < 33){
    if (chance == undefined){
    return "(Insert Number Here)"
   }else{
    }return chance
 } else {
     return random
 }

  
}

function getCar (input){
    let extra = input
    if (input == undefined){
    extra = ("(Insert Car Here)")
}
    const index = Math.floor(Math.random() * 5);
    const car = ["Lamborghini", "Box with Wheels", "Patty Wagon", "Tire", extra];
    return car[index];
}

function career (input){
    let extra = input
    if (input == undefined){
    extra = ("(Insert Career Here)")
}
    const index = Math.floor(Math.random() * 5);
    const job = ["CS", "teaching", "janitorial services (YOU are the janitor)", "memes", extra];
    return job[index];
}

function death (chance){
    const random = Math.floor((Math.random() * 150) + 18);
    const halfnhalf = Math.floor(Math.random() * 100);
    
    if (halfnhalf < 33){
     if (chance == undefined){
     return "(Insert Number Here)"
    }else{
     }return chance
  } else {
      return random
  }
 
   
 }



function mash() {
    console.log("You will live in a " + gethome(process.argv[2]) + ", and you will have " + getChildrenCount(process.argv[3]) + " kid(s)!" + '\n', "You will drive a " + getCar(process.argv[4]) + " and have a career in " + career(process.argv[5]) + "." + '\n', "You will die at the age of " + death(process.argv[6]) + ".");
}

mash ();




