// ❓Description:
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// ОПИСАНИЕ:
// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

// 🔵 // Notes;
// Примечания:

// 🐣TESTS

// ✅Solution:
function combat(health, damage) {
  let dead = 0
  let afterDamage = health - damage
  if (afterDamage < dead) {
    return dead
  } else {
    return afterDamage
  }
}

