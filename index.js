/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */

print('What do you want to say to Grandma!!');
let noofbye = 0;
const flag = 1;
while (flag) {
  const speaker = prompt();
  if (!isUppercase(speaker)) {
    print('HUH?! SPEAK UP, SONNY!');
  } else if (speaker === 'BYE') {
    noofbye += 1;
    if (noofbye >= 3) {
      break;
    }
    const listener = `NO, NOT SINCE ${getRandomValue(1930, 1950)}`;
    print(listener);
  } else {
    const listener = `NO, NOT SINCE ${getRandomValue(1930, 1950)}`;
    print(listener);
  }
}
