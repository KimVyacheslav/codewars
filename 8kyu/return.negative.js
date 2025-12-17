// ❓Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// ОПИСАНИЕ:
// В этом простом задании вам дается число, которое нужно сделать отрицательным. Но может быть, это число и так уже отрицательное?

// 🔵 // Notes;
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Примечания:
// Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.

// 🐣TESTS
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


// ✅Solution:
function makeNegative(i) {
  if (i <= 0) {
    return i
  } else {
    return -i
  }
}
const a = makeNegative(-5)
const b = makeNegative(1)
const c = makeNegative(0)
const d = makeNegative(0.12)
console.log(a)
console.log(b)
console.log(c)
console.log(d)


