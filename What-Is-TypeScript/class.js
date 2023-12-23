var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(name, email, phone) {
        this.email = email;
        //   name: string;
        //   public name: string;
        //   email: string;
        //   private email: string;
        //   readonly phone: string;
        this.country = "Iran";
        // this.name = name;
        // this.email = email;
        // this.phone = phone;
    }
    return Customer;
}());
var CustomerManager = /** @class */ (function (_super) {
    __extends(CustomerManager, _super);
    function CustomerManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panelAccess = true;
        return _this;
    }
    return CustomerManager;
}(Customer));
var customer1 = new Customer("HAMED", "t@test.com", "+23313132165");
console.log(customer1.email);
console.log("phone = ".concat(customer1.phone));
// customer1.phone = "+1823132";
console.log("phone = ".concat(customer1.phone));
