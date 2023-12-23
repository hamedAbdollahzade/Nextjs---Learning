class Customer {
  //   name: string;
  //   public name: string;
  //   email: string;
  //   private email: string;
  //   readonly phone: string;
  readonly country: string = "Iran";
  constructor(name: string, private email: string, phone: string) {
    // this.name = name;
    // this.email = email;
    // this.phone = phone;
  }
}

class CustomerManager extends Customer {
  panelAccess: boolean = true;
}

const customer1 = new Customer("HAMED", "t@test.com", "+23313132165");
console.log(customer1.email);
console.log(`phone = ${customer1.phone}`);
// customer1.phone = "+1823132";
console.log(`phone = ${customer1.phone}`);
