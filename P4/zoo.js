//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

function Animal(name, legs){
  this.legs = legs;
  this.name = name;
}

Animal.prototype.identify = function(){
  var return_value = "I am a " + this.name + " with " + this.legs + " legs.";
  return return_value;
};

function Placewhereanimalslive(animals){
  this.bipeds_list = [];
  this.quadrupeds_list = [];
  this.animals = animals;
  var biped_counter = 0;
  var quadruped_counter = 0;
  for(i=0; i < animals.length; i++)
  {
    if (animals[i].legs == 2)
    {
      this.bipeds_list[biped_counter] = animals[i];
      biped_counter++;
    }
    else if (animals[i].legs == 4)
    {
      this.quadrupeds_list[quadruped_counter] = animals[i];
      quadruped_counter++;
    }
  }
}

Placewhereanimalslive.prototype.bipeds = function(){
  return this.bipeds_list;
};

Placewhereanimalslive.prototype.quadrupeds = function(){
  return this.quadrupeds_list;
};

var Zoo = new Placewhereanimalslive(animals);

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);
