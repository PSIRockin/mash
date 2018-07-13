

mash ();

function gethome (input){
    const extra = input
    const index = Math.floor(Math.random() * 5);
    const home = ["Mansion", "Apartment", "Shack", "House", extra];
    return home[index];
}

function getChildrenCount (chance){
   const random = Math.floor(Math.random() * 100);
   const halfnhalf = Math.floor(Math.random() * 100);
   if (halfnhalf < 50){
   return chance
 } else {
     return random
 }
}

function mash() {
    console.log("You will live in a " + gethome(process.argv[2]) + ", and you will have " + getChildrenCount(process.argv[3]) + " kids!");
}
