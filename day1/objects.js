const arrayOfObjects = [
  { name: "name1", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name2", dept: "Developer", salary: 30000, yearsExp: 2 },
  { name: "name3", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name4", dept: "Developer", salary: 30000, yearsExp: 2 },
  { name: "name5", dept: "Engineering", salary: 20000, yearsExp: 2 },
  { name: "name6", dept: "Engineering", salary: 60000, yearsExp: 2 },
  { name: "name7", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name8", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name9", dept: "Engineering", salary: 50000, yearsExp: 2 },
  { name: "name10", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name11", dept: "Developer", salary: 70050, yearsExp: 2 },
  { name: "name12", dept: "Engineering", salary: 10000, yearsExp: 2 },
  { name: "name13", dept: "Developer", salary: 200000, yearsExp: 2 },
  { name: "name14", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name15", dept: "Engineering", salary: 70000, yearsExp: 2 },
  { name: "name16", dept: "Developer", salary: 60000, yearsExp: 2 },
  { name: "name17", dept: "Engineering", salary: 90000, yearsExp: 2 },
  { name: "name18", dept: "Developer", salary: 70000, yearsExp: 2 },
  { name: "name19", dept: "Engineering", salary: 80000, yearsExp: 4 },
  { name: "name20", dept: "Developer", salary: 2000, yearsExp: 3 },
];
console.log(
  arrayOfObjects
    .filter((employee) => employee.dept === "Engineering")
    .filter((employee) => employee.salary > 70000)
    .map((employee) => {
      return { name: employee.name, salary: employee.salary };
    })
    .sort((employee1, employee2) => employee1.salary - employee2.salary),
);
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
const {
  id,
  displayName,
  fullName: { lastName },
  fullName: { firstName },
} = user;
console.log(id);
console.log(displayName);
console.log(firstName);
console.log(lastName);
const address = {
  city: "wayanad",
  state: "kerala",
  country: "india",
};
const mergedObject = { ...user, ...address };
console.log(mergedObject);
console.log("merged objects entries:");
console.log(Object.entries(mergedObject));
console.log("object keys:");
console.log(Object.keys(mergedObject));
console.log("values of the object");
console.log(Object.values(mergedObject));
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
        //it can work only in flat object if deepClone function call is removed
        clone[key]=deepClone(obj[key]);
    }
  }
  return clone;
}
const mergedObjectClone = deepClone(mergedObject);
mergedObjectClone.fullName.firstName = "kozhikode";
console.log(mergedObject);
console.log(mergedObjectClone);
