type animal = string;
type appID = number;
type joinDate = Date;
type bool = boolean;

type User = {
  name: string;
  age: number;
  isVerified: boolean;
};

let c: bool = false;
let x: number = 12;

let user1: User = {
  name: "hamed",
  age: 28,
  isVerified: true,
};

function updateUser(user: User): User {
  user.isVerified = true;
  return user;
}
