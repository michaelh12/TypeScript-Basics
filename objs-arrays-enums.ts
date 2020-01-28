enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Michael",
  age: 30,
  hobbies: ["Sports", "cookings"],
  role: Role.ADMIN
};
// person.role.push("hello");
let favoriteActivities: string[];
favoriteActivities = ["1", "2", "etc"];

let randomObj: {} = { a: 1, b: 2 };

let test = { a: 1, b: 2 };

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);
