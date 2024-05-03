"use strict";



let name = "Brenda Kaye";



function indexOf(name) {
  let firstName = name.substring(0, 6);
  let lastName = name.substring(7, 11);

  let message1 = " Name: " + name;
  let message2 = " First Name: " + firstName;
  let message3 = " Last Name: " + lastName;

  console.log(message1);
  console.log(message2);
  console.log(message3);

  let nameDigitString = firstName + lastName;
  return nameDigitString;
}

let nameWithoutSpace = indexOf(name);
console.log(nameWithoutSpace);



function parseAndDisplayName() {
  

  let firstName = name.substring(0, 6);
  let lastName = name.substring(7, 11);

  let nameDigitString = firstName + lastName;
  return nameDigitString;
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

let showNameAndNumber = parseAndDisplayName()
console.log(showNameAndNumber)