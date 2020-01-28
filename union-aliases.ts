type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  // runtime type check
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = Number(input1) + Number(input2);
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const convertToNumber = "2";
console.log(convertToNumber as unknown);
// const number = convertToNumber as number
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Michael", "Yehuda", "as-text");
console.log(combinedNames);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
