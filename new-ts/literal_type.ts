// String Literal

type reply = "hello" | "hii" | "hey";
let Reply: reply = "hello";
console.log(Reply);

// Number literal

type total = 12 | 13 | 14;
let Total: total = 12;
console.log(Total);

// Boolean literal

type isavailable = true | false;
let IsAvailable: isavailable = true;
console.log(IsAvailable);

// Where are the use literal

type action = "Add" | "Update" | "Delete";
function TakeAction(Action: action) {
  switch (Action) {
    case "Add":
      console.log("Add");
      break;

    case "Update":
      console.log("Update");
      break;

    case "Delete":
      console.log("Delete");
      break;
  }
}

TakeAction("Add");

function CurrentStatus(status:"Success"|"Error"|"Loading"):void{
    console.log(`Current Status is ${status}`);
}

CurrentStatus("Error");

// InterFace

interface student {
    name : "Anurag"|"Relax"|"Pride";
    Class : 12|11|10
}

const Student: student = {
    name: "Anurag",
    Class : 12
}
console.log(Student);





