enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Michael",
  age: 30,
  hobbies: ["Sports", "cookings"],
  role: [2, "author"]
};
person.role.push("hello");
let favoriteActivities: string[];

let test = { a: 1, b: 2 };
test = { b: 4, c: 2 };

console.log(person.name);
