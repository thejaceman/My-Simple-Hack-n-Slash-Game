// create the user input command box
document.getElementById('submit-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  document.getElementById('game-output').textContent += `
  <p>You entered: ${userInput}</p>
  `;
  document.getElementById('user-input').value = ''; // Clear the input field
});


// our character creation options
document.getElementById('create-character-btn').addEventListener('click', function() {
  const race = document.getElementById('race').value;
  const profession = document.getElementById('class').value; // 'class' is a reserved word in JavaScript, so I chose the variable 'profession'
  const gender = document.getElementById('gender').value;

  const character = {
    race: race,
    class: profession,
    gender: gender,
    stats: calculateInitialStats(race, profession),
    // .. future character properties will go here
  };

  // output the character object to the console
  console.log(character);

  // Update the character stats based on player selections
  document.getElementById('stat-strength').textContent = character.stats.strength;
  document.getElementById('stat-dexterity').textContent = character.stats.dexterity;
  document.getElementById('stat-agility').textContent = character.stats.agility;
  document.getElementById('stat-constitution').textContent = character.stats.constitution;
});

// race stat modifiers
const raceModifiers = {
  human: { strength: 1, dexterity: 1, agility: 1, constitution: 1 },
  elf: { strength: -2, dexterity: 4, agility: 3, constitution: -1 },
  dwarf: { strength: 2, dexterity: -1, agility: -1, constitution: 4 }
};

// our class stat modifiers
const classModifiers = {
  fighter: { strength: 3, dexterity: 1, agility: 1, constitution: 2 },
  mage: { strength: -1, dexterity: 5, agility: 5, constitution: -2 },
  thief: { strength: 0, dexterity: 5, agility: 3, constitution: -1 }
};

function calculateInitialStats(race, profession) {
  // Base stats for all characters
  const baseStats = {
    strength: 5,
    dexterity: 5,
    agility: 5,
    constitution: 5
  };

  // Retrieve modifiers for race and class
  const raceMod = raceModifiers[race];
  const classMod = classModifiers[profession];

  // calculate the character's final stats
  const finalStats = {
    strength: baseStats.strength + raceMod.strength + classMod.strength,
    dexterity: baseStats.dexterity + raceMod.dexterity + classMod.dexterity,
    agility: baseStats.agility + raceMod.agility + classMod.agility,
    constitution: baseStats.constitution + raceMod.constitution + classMod.constitution
  };

  return finalStats;
}