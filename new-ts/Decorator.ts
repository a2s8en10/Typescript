// Class Decorator

function Pride(constructor: Function) {
  console.log(`Decorator is ${constructor.name}`);
}

@Pride
class userDeco {
  constructor(public name: string) {}
}

const Deco = new userDeco("Anurag");
console.log(Deco.name);

// Method Decorator

function Logged(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const orgmethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`method call ${propertyKey}`);
    return orgmethod.apply(this, args);
  };
}

class ClacMAth {
  @Logged
  add(a: number, b: number): number {
    return a + b;
  }
}

const userMath = new ClacMAth();
console.log(userMath.add(12, 92));

// Accessor & property

function Readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class yesCar {
  private brandName: string = "TATA";
  @Readonly
  set brand(value: string) {
    this.brandName = value;
  }
  get brand(): string {
    return this.brandName;
  }
}
const userCar = new yesCar();
console.log(userCar.brand);

// Parameter

    function LogParameter(target: object, propertyKey: string, parameterIndex : number) {
  console.log(`ye parameter hai ${propertyKey},index number ${parameterIndex}`);
}

class userParam12 {
  createUser(
    @LogParameter name: string,
    @LogParameter email: string)
    {
    console.log(`user name : ${name}, user Email : ${email}`);
  }
}

const userParams1 = new userParam12();
userParams1.createUser("Arjun", "das");
