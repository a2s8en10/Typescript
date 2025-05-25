// import { home, AddNum, calculator} from "./ex-modules";
import * as anu from "./ex-modules";
import { calculator as Calc} from "./ex-modules";

const myHome : anu.home = {houseId: 3, houseName: "Anurag",}
console.log(myHome);

console.log(anu.AddNum(2,3));

Calc("Add",23,7);
Calc("Divide",4,2);
Calc("Multi",5,2);
Calc("Subtract",6,2);

