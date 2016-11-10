/**
 * Created by Ivaylo on 06-Nov-16.
 */
let a = true;
let b = false;
console.log('a && b = ' + (a && b)); // false
console.log('a || b = ' + (a || b)); // true
console.log('a ^ b = ' + (a ^ b)); // 1	  !!!!!!
console.log('!b = ' + !b); // true
console.log('b || true = ' + (b || true)); // true
console.log('b && true = ' + (b && true)); // false
console.log('a || true = ' + (a || true)); // true
console.log('a && true = ' + (a && true)); // true
console.log('!a = ' + !a); // false
console.log('(5 > 7) ^ (a == b) = ' + ((5 > 7) ^ (a === b))); // 0	  