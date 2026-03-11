function grabDoll(dolls){
  let bag=[];

  for(let i = 0; i < dolls.length; i++) {
    if(!(dolls[i] === "Hello Kitty" || dolls[i] ===  "Barbie doll"  )) continue;
    bag.push(dolls[i])
    if(bag.length >= 3) break;
  }
  
  return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]));
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]));
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]));
console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]));
