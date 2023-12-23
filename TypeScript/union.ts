let uVar1: string | number;
uVar1 = "hamed";
uVar1 = 92;
uVar1 = false;

let uArr1: (string | number | boolean)[] = ["a", "b", 2, false];

function applyNewUserDiscount(price: number | string): number {
  // Narrowing
  if (typeof price === "string") {
    price = parseInt(price);
  }
  return price - price * 0.3;
}

let company: "Google";
company = "Google";

let size: "S" | "L" | "XL";
size = "S";

type z = string | number;

type admin = { email: string; id: number; canModify: true };
type member = { email: string; id: number; canModify: false };
type manager = admin | member;

