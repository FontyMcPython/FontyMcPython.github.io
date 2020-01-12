// ROOT DATA LISTS
var races = ["Human", "Dwarf", "Elf", "Witcher"];
var classes = ["Craftsman", "Bard", "Witcher", "Criminal", "Doctor", "Man at arms", "Wizard", "Trader", "Priest"];
var origins = ["Northern Kingdoms", "Nilfgaard", "Elder Lands"];
var nilfgaard_origins = [["Nilfgaard Core", "+1 to deception"], ["Vicovaro","+1 to culture"], ["Angren","+1 to survival"], ["Nazair","+1 to brawling"], ["Mettina","+1 to riding"], ["Mag Turga","+1 to resistance"], ["Gheso","+1 to sneaking"], ["Ebbing","+1 to deduction"], ["Maecht","+1 to Charisma"], ["Gemmeria","+1 to Intimidation"], ["Etolia","+1 to courage"]];
var northern_lands_origins = [["Redania", "+1 to culture"], ["Kaedwen", "+1 to resistance"], ["Temeria", "+1 to charisma"], ["Aedirn", "+1 to crafting"], ["Lyria and Rivia", "+1 to resist coaction"], ["Kovir and Poviss", "+1 to barter"], ["Skellige", "+1 to courage"], ["Cidaris", "+1 to sailing"], ["Verden", "+1 to survival"],["Cintra", "+1 to human perceprion"]];
var elder_lands_origins = [["Mahakam", "+1 to crafting"], ["Dol Blathana", "+1 to etiquette"]];
var familys = ["A part of your family is alive and well.", "Something happened to your family."];
var parentss = ["Your parents are alive.", "Something happened to your parents."];
var family_fates = [
  ["The war dispersed your family and you have no clue of where they are", "Your family was incarcerated and only you escaped", "Your home was cursed.", "With wars, your family lost its livelihood.", "Your family is in debt.", "Your family is in a fight with another family.", "Your family is hated in your town.", "A group of bandits attacked your family. You are on your own.", "Your family has a dark secret.", "The members of your family hate each other."],
  ["Your family was sent to forced labour.", "Your family was exiled to the desert of Korath.", "Your family died to a rebel wizard.", "One day, your family disappeared.", "Your family was executed.", "Your familiar titles were removed.", "Your family name got tainted because of a wizard relative", "You dishonored your family in the eyes of the empire", "Your family has a dark secret", "Your family was murdered."],
  ["Your family was marked as human symphathysers.", "Your family was marginated because of their different opinions.", "Your family died during the wars of the north.", "Your family has been in a fight for centuries.", "Your familiar titles were revoked.", "When you were young, your family started attacking humans to survive.", "Your home is cursed.", "Your family is divided over an interracial marriage.", "Your family murdered humans that took them for scoia'tael. They were murdered or hanged.", "You are a descendant of an infamous traitor."]
]
var parents_fates = [
  ["One of your parents died in the war.", "One of your parents left you into the wild to survive", "One of your parents was cursed by a wizard."],
  ["Your father died in the war", "One of your parents was poisoned"],
  ["One of your parents was accused of being Scoia'Tael"]
];
var which_parents = ["father", "mother", "parents"];
var family_statuss = [
  [
    ["Aristocracia", "Documento nobiliario, +2 de reputación"],
    ["Adoptado por un mago", "Crónica, +1 a cultura"]
  ],
  [
    ["Aristocracia", "Documento nobiliario, +2 de reputación"],
    ["Alto clero", "Símbolo sagrado, +1 a coraje"]
  ],
  [
    ["Aristocracia", "Documento nobiliario, +2 de reputación"],
    ["Guerrero noble", "Heráldica personal, +1 a reputación"]
  ]
];
var influential_friends = [
  [
    ["A church", "Sacred text"],
    ["A craftsman", "A trinket you made"]
  ],
  [
    ["Aristocracia", "Documento nobiliario, +2 de reputación"],
    ["Alto clero", "Símbolo sagrado, +1 a coraje"]
  ],
  [
    ["Aristocracia", "Documento nobiliario, +2 de reputación"],
    ["Guerrero noble", "Heráldica personal, +1 a reputación"]
  ]
];


// CHARACTER OBJECT
function Pj(name, clase, race, age){
  this.name = name;
  this.clase = clase;
  this.race = race;
  this.age = age;
  this.toString = function(){
    var bio = "TODO";
    return bio
  }
}

// TREE OF LIFE FUNCTIONS
// ----------------------
// ----------------------
// Region Roll
function region(pj, roll) {
  var destination = "Unknown";
  if(pj.race == 0){
    if (roll % 2 == 0){
      destination = "nilfgaard_origin";
      pj.origin = 1;
    }
    if (roll % 2 == 1){
      destination = "northern_lands_origin";
      pj.origin = 0;
    }
  }
  else {
    destination = "elder_lands_origin";
    pj.origin = 2;
  }
  return destination;
}
// Nilfgaard Origins
function nilfgaard_origin(pj, roll) {
  var destination = "Unknown"
  if (roll <= 3) {
    pj.region = 0;
    destination = "family";
  }
  else {
    destination = "nilfgaard_vassal";
  }
  return destination;
}

// Nilfgaard vassal
function nilfgaard_vassal(pj, roll) {
  var destination = "family";
  pj.region = roll;
  return destination;
}

// Northern Lands Origins
function northern_lands_origin(pj, roll) {
  var destination = "family"
  pj.region = roll - 1;
  return destination;
}

// Elder lands origins
function elder_lands_origin(pj) {
  var destination = "family";
  if( pj.race == 1) {
    pj.region = 0;
  }
  else if( pj.race == 2) {
    pj.region = 1;
  }
  else {
    destination = "Unknown";
  }
  return destination;
}

// Family
function family(pj, roll) {
  destination = "Unknown";
  if ( roll % 2 == 0) {
    pj.family = 0;
    destination = "parents";
  }
  else if ( roll % 2 == 1) {
    pj.family = 1;
    destination = "family_fate";
  }
  return destination;
}

// Parents
function parents(pj, roll) {
  destination = "Unknown";
  if ( roll % 2 == 0) {
    pj.parents = 0;
    destination = "family_status";
  }
  if ( roll % 2 == 1) {
    pj.parents = 1;
    destination = "parents_fate";
  }
  return destination;
}

// Family fate
function family_fate(pj, roll) {
  var destination = "parents_fate";
  pj.family_fate = roll - 1;
  return destination;
}

// Parents fate
function parents_fate(pj, roll, roll2) {
  var destination = "family_status";
  pj.parents_fate = roll - 1;
  if(pj.origin == 0 && pj.parents_fate == 0) pj.which_parent = roll2 % 2;
  if(pj.origin == 1 && pj.parents_fate == 0) {
    if(roll2 <= 4) pj.which_parent = 0;
    else if (roll2 > 4 && roll2 <= 8) pj.which_parent = 1;
    else pj.which_parent = 1;;
  }
  return destination;
}

// Family status
function family_status(pj, roll) {
  var destination = "influential_friend";
  pj.family_status = roll;
  return destination;
}

// Influential friend
function influential_friend(pj, roll) {
  var destination = "siblings";
  pj.influential_friend = roll - 1;
  return destination;
}

// Siblings
function siblings(pj, roll) {
  var destination = "siblings_generation";
  if (pj.origin == 0) {
    if (roll <= 8) pj.siblings = roll;
    else pj.siblings = 0;
  }
  if (pj.origin == 1) {
    if (roll <= 5) pj.siblings = roll;
    else pj.siblings = 0;
  }
  if (pj.origin == 2) {
    if (pj.race == 2) {
      if (roll <= 2) pj.siblings = 1;
      if (roll > 2 && roll <= 8) pj.siblings = 0;
      if (roll > 8) pj.siblings = 2;
    }
    else if (pj.race == 1) {
      if (roll <= 5) pj.siblings = roll;
      else pj.siblings = 0;
    }
  }
  return destination;
}

// Siblings generation
function siblings_generation(pj, roll, roll2, roll3, roll4) {
  var destination = "Unknown"
  if(typeof pj.siblings_list === 'undefined') pj.siblings_list = [];
  if (pj.siblings_list.length >= pj.siblings) destination = "life_events";
  else {
    destination = "siblings_generation";
    var sibl = [];
    sibl.push(1 - (roll % 2));
    if (roll2 <= 5) sibl.push(0);
    else if (roll2 <= 9) sibl.push(1);
    else sibl.push(2);
    if (roll3 <= 3) sibl.push(roll3 - 1);
    else if (roll3 <= 7) sibl.push(3);
    else sibl.push(roll3 - 4);
    sibl.push(roll4 - 1);
    pj.siblings_list.push(sibl);
  }
  return destination;
}
// Exception Function
function def_destination() {
  return "Finished";
}

// Roll dice
function roll(sides) {
  return Math.ceil(Math.random() * sides);
}

// Complete random gnrtr
function random_generate(pj) {
  var dest = "region";
  while (dest!=="Finished") {
    if(dest=="region") {
      dest = region(pj, roll(10));
    }
    else if (dest==="nilfgaard_origin") {
      dest = nilfgaard_origin(pj, roll(10));
    }
    else if (dest==="nilfgaard_vassal") {
      dest = nilfgaard_vassal(pj, roll(10));
    }
    else if (dest==="northern_lands_origin") {
      dest = northern_lands_origin(pj, roll(10));
    }
    else if (dest==="elder_lands_origin") {
      dest = elder_lands_origin(pj);
    }
    else if (dest==="family") {
      dest = family(pj, roll(10));
    }
    else if (dest==="parents") {
      dest = parents(pj, roll(10));
    }
    else if (dest==="family_fate") {
      dest = family_fate(pj, roll(10));
    }
    else if (dest==="parents_fate") {
      dest = parents_fate(pj, roll(10), roll(10));
    }
    else if (dest==="family_status") {
      dest = family_status(pj, roll(10));
    }
    else if (dest==="influential_friend") {
      dest = influential_friend(pj, roll(10));
    }
    else if (dest==="siblings") {
      dest = siblings(pj, roll(10));
    }
    else if (dest==="siblings_generation") {
      dest = siblings_generation(pj, roll(10), roll(10), roll(10), roll(10));
    }
    else if (dest==="Unknown") {
      console.log("Something went wrong!");
      dest = "Finished";
    }
    else {
      dest = def_destination();
    }
  }
}

var pj = new Pj("Teofanes", 8, 0, 52);
random_generate(pj)
console.log(pj.toString());
console.log(pj);
var pj2 = new Pj("Aeothas", 0, 2, 94);
random_generate(pj2);
console.log(pj2.toString());
console.log(pj2);
