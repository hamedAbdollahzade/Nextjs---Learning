type User = {
  name: string;
  age: number;
  isVerified: boolean;
  //   githubID: String;
};

// ! interface VS Alias
// ? تایپ رو نمیتونیم تغییر بدیم
// ? ولی اینترفیس رو میتونیم تغییر بدیم
// ? میتونیم تو اینتر فیس ارث بری رو انجام بدیم
// ? قابلیت readonly در اینتر فیس و تایپ هم وجود دارد

interface Users {
  name: string;
  age: number;
  isVerified: boolean;
  readonly googleID: string;
  //   startTrial : () => string
  startTrial(): string;
}
interface Users {
  githubID: String;
}

interface UserAdmin extends Users {
  deleteRole: boolean;
}

let userX: Users = {
  name: "hamed",
  age: 28,
  googleID: "googleIDXXDE",
  startTrial() {
    return "X";
  },
  isVerified: true,
  githubID: "ssssssss",
};

userX.googleID = "asdjhasgd"; // error
userX.age = 23;
