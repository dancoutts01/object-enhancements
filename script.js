function createInstructor() {
    return {
        firstName,
        lastName
    }
  }

const favNumber = 42
var instructor = {
    firstName: "Colt", 
    [favNumber]: "That is my favorite!"
}

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }


var instructor = {
    firstName: "Colt", 
    sayHi() {
        return "Hi"
    },
    sayBye() {
        return this.firstName + "says bye!"
    }
}

function createAnimal(species, verb, noise) {
    return {
        species, 
        [verb]() {
            return noise;
        }
    }
}
