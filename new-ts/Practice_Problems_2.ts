/*
question - 1 
Bank Account Class


*/

class Account {
  //   accountNumber: String;
  //   private balance: number;

  constructor(public AccountNum: string, public balance: number) {
    // this.accountNumber = AccountNum;
    // this.balance = balance;
  }
  deposit(addAmount: number): void {
    let num = this.balance + addAmount;
    console.log("Your Total Amount is : " + num);
    this.balance = num;
  }
  withDraw(withDrawAmount: number): void {
    if (this.balance < withDrawAmount) {
      throw new Error("Insufficient Balance");
    }
    let drawAmount = this.balance - withDrawAmount;
    console.log("Your Remaining Balance : " + drawAmount);
    this.balance = drawAmount;
  }
  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new Account("24K2B29D92ALL", 30000);
myAccount.deposit(20000);
myAccount.getBalance();
myAccount.withDraw(5000);
myAccount.getBalance();

// question 2

class Employee {
  _name: string;
  _salary: number;

  constructor(name: string, salary: number) {
    this._name = name;
    this._salary = salary;
  }

  getDetails(): string {
    return `Employee name : ${this._name}, salary : ${this._salary}`;
  }
}

class Manager extends Employee {
  constructor(public name: string, public department: string, salary: number) {
    super(name, salary);
  }
  getDetails(): string {
    return `Employee name : ${this._name}, department : ${this.department}, salary : ${this._salary} `;
  }
}

const Emp1 = new Employee("Anurag Sahu", 35000);
const Emp2 = new Manager("Anurag Sahu", "Admin", 40000);
console.log(Emp2.getDetails());
console.log(Emp1.getDetails());
