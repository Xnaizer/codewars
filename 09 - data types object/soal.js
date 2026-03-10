function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: "dog", legs: 4, color: "white" }));
console.log(animal({ name: "cock", legs: 2, color: "red" }));
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }));
