//Generic Function

function GenericId<T>(num: T): T {
  return num;
}

console.log(GenericId<number>(100));
console.log(GenericId<string>("Anurag"));

// Generic interface

interface NameRoll<T, U> {
  name: T;
  roll: U;
}

let newStudent : NameRoll<string, number>={
    name: "Anurag",
    roll: 24
}
console.log(newStudent);

// Generic Constraints
function getLength <T extends {length : number}> (num : T):number
{
    return num.length;
}

console.log(getLength("four"));
console.log(getLength([1,2,3,6,4,6,3,4]));

// Generic Class

class box <T> {
    content : T
    constructor (value : T) {
        this.content = value;
    }

   getContent () : T {
    return this.content;
   }
}

const numberBox = new box(100);
const strBox = new box("Anurag");

console.log(numberBox.getContent());
console.log(strBox.getContent());

class stack <T>{
    private item : T[] = [];

    push (item : T):void {
        this.item.push(item);
    }

    pop () :T|undefined {
        return this.item.pop();
    }

    getStack () :T[] {
        return this.item;
    }
}

const numberStack = new stack();
numberStack.push(100);
numberStack.push(200);
numberStack.push(300);
console.log(numberStack.getStack());
numberStack.pop();
console.log(numberStack.getStack());

const stringStack = new stack();
stringStack.push("anu");
stringStack.push("relax");
stringStack.push("pride");
stringStack.push("anurag");
stringStack.push("sahu");
console.log(stringStack.getStack());
stringStack.pop();
console.log(stringStack.getStack());




