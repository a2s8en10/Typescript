// Using typeof

function check(name: string | number) {
  if (typeof name === "string") {
    console.log(`Name is String : ${name}`);
  } else {
    console.log(`Name is number : ${name}`);
  }
}

check(23);

// Instanceof

class Dogesh {
  bark() {
    console.log("Dogesh hai");
  }
}

class Cat {
  meow() {
    console.log("Cat hai");
  }
}

function FindPet(pet: Dogesh | Cat): void {
  if (pet instanceof Dogesh) {
    console.log(pet.bark());
  } else {
    console.log(pet.meow());
  }
}

// Custom type Guard

function isString(value: any): value is string {
  {
    return typeof value === "string";
  }
}

function checkType (value: string | number) {
  if(isString(value)) {
    console.log("string hai");
  }else{
    console.log("number hai");
  }
}

checkType(23);
