var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Michael",
    age: 30,
    hobbies: ["Sports", "cookings"],
    role: [2, "author"]
};
person.role.push("hello");
var favoriteActivities;
var test = { a: 1, b: 2 };
test = { b: 4, c: 2 };
console.log(person.name);
