var userName="Laura";
var userHobby="gardening";
var userAddress="Planet Earth";
var favoriteColor="Turquoise";
var petName="Magic";
var x="Because I said so.";
var y="bedtime";
var bedtime="8 PM";
var word1="alphabet";
var word2="jungle";
var word3="boogie";
var farmAnimal1="chickens";
var farmAnimal2="ducks";
var farmAnimal3="milk cow";
var farmAnimal4="donkeys";
var total="homestead";
var land="10 acres";
var aspirations="hobby farm owner and software developer";
var riddle="How much wood could a wood chuck chuck if a wood chuck could chuck wood?";
var end="It is finally here!";

document.write(`Hi! My name is ${userName} and my favorite thing to do is ${userHobby} at ${userAddress}. I love my ${favoriteColor} cat named ${petName}. When my toddler asks what time ${y} is and I tell him ${bedtime}, he asks "why" and I say ${x}! Then we sing the ${word1} ${word2} ${word3}. What do you get when you add up ${farmAnimal1}, ${farmAnimal2}, ${farmAnimal3}, and ${farmAnimal4}? You get a ${total} on ${land}! The ultimate aspiration is to be a ${aspirations}. Time for a riddle: ${riddle} What comes next? The END! ${end}`);

for(var i=0;i<=100;i+=2){
    document.writeln(i);
}

var animals=10

if(animals>=9){
    document.write("If you build it, they will come!");
}
