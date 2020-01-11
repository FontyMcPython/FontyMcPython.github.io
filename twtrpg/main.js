// ROOT DATA LISTS
var races = ["Human", "Dwarf", "Elf", "Witcher"];
var classes = ["Craftsman", "Bard", "Witcher", "Criminal", "Doctor", "Man at arms", "Wizard", "Trader", "Priest"];
var origins = ["Northern Kingdoms", "Nilfgaard", "Elder Lands"];
var nilfgaard_origins = [["Nilfgaard Core", "+1 to deception"], ["Vicovaro","+1 to culture"], ["Angren","+1 to survival"], ["Nazair","+1 to brawling"], ["Mettina","+1 to riding"], ["Mag Turga","+1 to resistance"], ["Gheso","+1 to sneaking"], ["Ebbing","+1 to deduction"], ["Maecht","+1 to Charisma"], ["Gemmeria","+1 to Intimidation"], ["Etolia","+1 to courage"]];
var northern_lands_origins = [["Redania", "+1 to culture"], ["Kaedwen", "+1 to resistance"], ["Temeria", "+1 to charisma"], ["Aedirn", "+1 to crafting"], ["Lyria and Rivia", "+1 to resist coaction"], ["Kovir and Poviss", "+1 to barter"], ["Skellige", "+1 to courage"], ["Cidaris", "+1 to sailing"], ["Verden", "+1 to survival"],["Cintra", "+1 to human perceprion"]];
var elder_lands_origins = [["Mahakam", "+1 to crafting"], ["Dol Blathana", "+1 to etiquette"]];
var family_fates = [
  ["The war dispersed your family and you have no clue of where they are", "Your family was incarcerated and only you escaped", "Your home was cursed.", "With wars, your family lost its livelihood.", "Your family is in debt.", "Your family is in a fight with another family.", "Your family is hated in your town.", "A group of bandits attacked your family. You are on your own.", "Your family has a dark secret.", "The members of your family hate each other."],
  ["Your family was sent to forced labour.", "Your family was exiled to the desert of Korath.", "Your family died to a rebel wizard.", "One day, your family disappeared.", "Your family was executed.", "Your familiar titles were removed.", "Your family name got tainted because of a wizard relative", "You dishonored your family in the eyes of the empire", "Your family has a dark secret", "Your family was murdered."],
  ["Your family was marked as human symphathysers.", "Your family was marginated because of their different opinions.", "Your family died during the wars of the north.", "Your family has been in a fight for centuries.", "Your familiar titles were revoked.", "When you were young, your family started attacking humans to survive.", "Your home is cursed.", "Your family is divided over an interracial marriage.", "Your family murdered humans that took them for scoia'tael. They were murdered or hanged.", "You are a descendant of an infamous traitor."]
]


// CHARACTER OBJECT
function Pj(name, clase, race){
  this.name = name;
  this.clase = clase;
  this.race = race;
  this.toString = function(){
    var bio = this.name + ", a " + races[this.race].toLowerCase() + " " + classes[this.clase].toLowerCase();
    if (this.region !== 'undefined') {
      bio = bio + " from ";
      if(this.origin == 0) {
        bio = bio + northern_lands_origins[this.region][0];
      }
      else if(this.origin == 1) {
        bio = bio + nilfgaard_origins[this.region][0];
      }
      else if(this.origin == 2) {
        bio = bio + elder_lands_origins[this.region][0];
      }
    }
    bio = bio + ".\n";
    if (this.family_fate) {
      bio = bio + family_fates[this.origin][this.family_fate];
    }
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
    pj.family = "Part of your family is alive and well.";
    destination = "parents";
  }
  else if ( roll % 2 == 1) {
    pj.family = "Something happened to your family.";
    destination = "family_fate";
  }
  return destination;
}

// Parents
function parents(pj, roll) {
  destination = "Unknown";
  if ( roll % 2 == 0) {
    pj.parents = "Your parents are alive.";
    destination = "family_status";
  }
  if ( roll % 2 == 1) {
    pj.parents = "Something happened to your parents.";
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
    else if (dest==="Unknown") {
      console.log("Something went wrong!");
      dest = "Finished";
    }
    else {
      dest = def_destination();
    }
  }
}

var pj = new Pj("Teofanes", 8, 0);
random_generate(pj)
console.log(pj.toString());
console.log(pj);
var pj2 = new Pj("Aeothas", 0, 2);
random_generate(pj2);
console.log(pj2.toString());
console.log(pj2);
