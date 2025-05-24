interface anyPerson {
  name: string;
  id: number;
  email: string;
}

type personKey = keyof anyPerson;
let keys: personKey = "email";

interface stu {
  name: string;
  class: number;
  roll: number;
}

type stukey = keyof stu;
let h: stukey = "class";
