// ROOT DATA LISTS
var races = ["human", "dwarf", "elf", "witcher"];
var classes = ["craftsman", "bard", "witcher", "criminal", "doctor", "man at arms", "wizard", "trader", "priest"];
var origins = ["Northern Kingdoms", "Nilfgaard", "Elderlands"];
var nilfgaard_origins = [["The heart of Nilfgaard", "+1 to Deceit"], ["Vicovaro","+1 to Education"], ["Angren","+1 to Wilderness Survival"], ["Nazair","+1 to Brawling"], ["Mettina","+1 to Ride"], ["Mag Turga","+1 to Endurance"], ["Gheso","+1 to Stealth"], ["Ebbing","+1 to Deduction"], ["Maecht","+1 to Charisma"], ["Gemmeria","+1 to Intimidation"], ["Etolia","+1 to Courage"]];
var northern_lands_origins = [["Redania", "+1 to Education"], ["Kaedwen", "+1 to Endurance"], ["Temeria", "+1 to Charisma"], ["Aedirn", "+1 to Crafting"], ["Lyria and Rivia", "+1 to Resist Coercion"], ["Kovir and Poviss", "+1 to Business"], ["Skellige", "+1 to Courage"], ["Cidaris", "+1 to Sailing"], ["Verden", "+1 to Wilderness Survival"],["Cintra", "+1 to Human Perception"]];
var elder_lands_origins = [["Mahakam", "+1 to Crafting"], ["Dol Blathana", "+1 to Social Etiquette"]];
var familys = ["A part of your family is alive and together", "Something happened to your family"];
var parentss = ["Your parents are alive", "Something happened to your parents"];
var family_fates = [
  ["Your family was scattered to the winds by the wars and you have no idea where most of them are",
   "Your family was imprisoned for crimes or on trumped-up charges. You were the only one to escape. You may want to free them...or maybe not",
   "Your family house was cursed and now either crops won't grow or specters roam the halls. It became too dangerous for you to stay in this home",
   "With so many wars your family's livelihood was destroyed. Your family turned to crime to survive",
   "Your family accumulated a huge debt through gambling or favors from others. You need money desperately",
   "Your family has fallen into a feud with another family. You may not even remember why this feud started in the first place",
   "Due to some action or inaction your family has become hated in your home town and now no one there wants to have anything to do with them",
   "One day everything you had was ripped away by a bandit mob. Your family was massacred, leaving you entirely alone",
   "Your family has a deep, dark secret that if discovered would ruin you all completely. You can decide what this secret is, or the Game Master can decide",
   "Your family has come to despise each other. No one you grew up with will talk with each other any more and you're lucky to get a passing hello from your siblings"],
  ["Your family was indentured for crimes against the Empire or on trumped-up charges. Only you escaped",
   "Your family was exiled to the Korath Desert and you likely spent most of your early life struggling to survive in the deadly wasteland",
   "Your family was killed by a rogue mage who either had a vendetta against your family, or just wanted blood. Either way, you are alone",
   "Your family disappeared and you have no idea where they went. One day they just up and left",
   "Your family was executed for treason against the Empire. You were the only one to escape this fate",
   "Your family was stripped of its title for some reason. You were evicted from your home and left scrambling to survive among the un-washed masses",
   "Your family name was tarnished by a magic relative who flaunted their magical gift disgracefully like a Northern mage",
   "You disgraced your family in the eyes of the Empire. Something you did or failed to do has ruined your personal name and harmed your family",
   "Your family has a deep, dark secret that if discovered would destroy them and their name forever. You must protect this secret with your life",
   "Your family was assassinated. They may have been in the way of someone's plan or they may have been used to get at someone more powerful. Either way, your family is gone now"],
  ["Your family were marked as human sympathizers and are not particularly loved in their homeland",
  "Your family was ostracized for dissenting opinions and now people won't socialize with you or your family at all",
  "Your family died in the Northern Wars. They may have actually fought in the war, or were casualties of war who just happened to get in the way",
  "Your family has been caught in a feud for centuries. You may not remember why this feud started, but it is dire",
  "Your family was stripped of its title for some reason. You were evicted from your home and left scrambling to survive",
  "Your family turned to raiding human settlements early in your life to get food and perhaps strike back at the humans",
  "Your family house is haunted. Most likely this is because your home was the site of many, many deaths during the war against humans",
  "Your family has been split by a human in-law who was brought into your family by a sibling or relative. Some of your family like them and some hate them",
  "Your family was killed by humans who thought they were Scoia'tael. They may have been slaughtered or hung with no court proceedings or trials",
  "Your family is descended from an infamous traitor. It taints your family's interactions with others of the elder races and has made living in the elderland difficult"]
];
var parents_fates = [
  ["Your %PARENT% %PAST% killed in the Northern Wars.",
  "Your %PARENT% left you in the wilderness to fend for yourself. Maybe %PRONOUN% couldn't afford to keep you; maybe you were an accident",
  "Your %PARENT% %PAST% cursed by a mage or due to the intense hatred of someone %PRONOUN% encountered. The curse took %POSSESSIVE% life",
  "Your %PARENT% sold you for coin, or perhaps traded you for some goods or service. Your parents needed the money more than you",
  "Your %PARENT% joined a gang. You saw this gang often and were sometimes forced to work with them",
  "Your %PARENT% %PAST% killed by monsters (It is your decision as to what %PRONOUN% may have fallen prey to)",
  "Your %PARENT% %PAST% falsely executed. %PRONOUN% may have been a scapegoat for something or just in the wrong place",
  "Your %PARENT% died of a plague. There was nothing that could be done but try to ease %POSSESSIVE% passing",
  "Your %PARENT% defected to Nilfgaard. %PRONOUN% may have been given a deal for information or %PRONOUN% may just have jumped the border",
  "Your %PARENT% %PAST% kidnapped by nobles."
],
  ["Your father died in one of the Northern Wars. He may have already been in the military or he may have been conscripted into service during that war",
  "Your %PARENT% %PAST% poisoned. This may have been the work of a professional rival, or it may have been to get your parents out of the way",
  "The secret police took your %PARENT% for 'questioning.' The next week %POSSESSIVE% %BODY% %PAST% found hung in the streets of the city",
  "Your %PARENT% %PAST% killed by a rogue mage. Most likely %PRONOUN% tried to turn the mage in question in to the Empire and paid the price",
  "Your %PARENT% %PAST% imprisoned for unlawful magic. Maybe %PRONOUN% actually commited the crime or maybe it was a setup",
  "Your %PARENT% %PAST% exiled to the Korath Desert. Likely %PRONOUN% committed a major crime but killing %ACCUSATIVE% would cause trouble",
  "Your %PARENT% %PAST% cursed by a mage. The mage likely had a vendetta against %ACCUSATIVE%",
  "Your %PARENT% simply left you one day. You may not even know why %PRONOUN% did it. One day your %PARENT% just disappeared",
  "Your %PARENT% %PAST% enslaved. %PRONOUN% either commited a crime against the Empire or %PAST% set up by a rival",
  "Your %PARENT% %PAST% sent to the North as %DOUBLE_AGENT%. You likely don't even know where %PRONOUN% %PRESENT% now, but %PRONOUN% %PRESENT% serving the Emperor"],
  ["Your %PARENT% %PAST% accused of being Scoia'tael. The people around you give your parents sidelong glances",
  "Your %PARENT% turned on your own people and sold out the elder races to the humans. Your parents are unwelcome in your homeland",
  "Your %PARENT% killed %HIMSELF% out of despair. With no hope of regaining the glory of the past, %PRONOUN% gave up and ended it",
  "While traveling, your %PARENT% fell prey to human racism. %PRONOUN% died in a pogrom and %POSSESSIVE% %BODY% %PAST% displayed on a pike",
  "Your %PARENT% %HAVE% become obssessed with regaining the former glory of your race. %PRONOUN% sacrificed everything for this cause",
  "Your %PARENT% %PAST% exiled from your homeland. There are many possible reasons, from crime to dissenting opinons",
  "Your %PARENT% %PAST% cursed (You can decide what this curse is or, the Game Master can decide)",
  "Your parents gave you to another family so that you could survive, because they couldn't care for you",
  "Your %PARENT% joined the Scoia'tael in an attempt to get revenge on the humans who %PRONOUN% see as ruining %POSSESSIVE% %LIFE%",
  "Your %PARENT% died in an 'accident'. Most likely %PRONOUN% made a powerful enemy that finally found a way to get rid of %ACCUSATIVE%"]
];
var which_parents = [{"PARENT": "father",
                      "PAST": "was",
                      "ACCUSATIVE": "him",
                      "POSSESSIVE": "his",
                      "PRONOUN": "he",
                      "BODY": "body",
                      "DOUBLE_AGENT": "a double agent",
                      "LIFE": "life",
                      "PRESENT": "is"
                      },
                      {"PARENT": "mother",
                      "PAST": "was",
                      "ACCUSATIVE": "her",
                      "POSSESSIVE": "her",
                      "PRONOUN": "she",
                      "BODY": "body",
                      "DOUBLE_AGENT": "a double agent",
                      "LIFE": "life",
                      "PRESENT": "is"
                    },{"PARENT": "parents",
                                            "PAST": "were",
                                            "ACCUSATIVE": "them",
                                            "POSSESSIVE": "their",
                                            "PRONOUN": "they",
                                            "BODY": "bodies",
                                            "DOUBLE_AGENT": "double agents",
                                            "LIFE": "lives",
                                            "PRESENT": "are"
                                            }];
var family_statuss = [
  [
    ["You grew up in a noble manor with servants to wait on you, but you were always expected to behave and impress",
     "Paper of Nobility (+2 Reputation)"],
    ["You were given to a mage at ayoung age. You lived in comfort but barely saw your caretaker, who was always busy.",
     "A Chronicle (+1 Education)"],
    ["You grew up in a manor where you learned to be a proper lady or lord. Your fate was set from birth",
    "Personal Heraldry (+1 Reputation)"],
    ["You grew up among merchants and you were always surrounded by yelling, haggling, and money",
     "2 Acquaintances"],
    ["You grew up in an artisan's workshop. Your days were filled with the incessant sounds of creation, and often long",
    "3 Common Diagrams/Formulae"],
    ["You grew up with a band of performers. You may have traveled or you may have performed at a theater",
      "1 Instrument & 1 Friend"],
    ["You grew up on a farm in the countryside. You didn't have much to your name and your life was simple, but dangerous",
     "A Lucky Token (+1 Luck)"]
  ],
  [
    ["You grew up in a manor, training to be well-versed in the world of the court. The luxury was just your incentive",
    "Paper of Nobility (+2 Reputation)"],
    ["You were raised among the clergy of the Great Sun. You grew up pious and always aware that the Church would guide you",
    "A Holy Symbol (+1 Courage)"],
    ["You grew up knowing that your duty was to the Emperor, and that all of your luxury was a reward for your eventual service",
    "Personal Heraldry (+1 Reputation)"],
    ["You grew up in an artisan's shop, learning to craft products for sale around the world. You learned the value of quality",
    "3 Common Diagrams/Formula"],
    ["You grew up selling products all around the Empire. You saw all kinds exotic of goods from all around the world",
    "2 Acquaintances"],
    ["You were born into servitude and lived in simple quarters. You owned very little and toiled often",
    "A trained bird or serpent"],
    ["You grew up on one of the thousands of farms across the Empire. You had little to your name but life was simple",
    "A Lucky Token (+1 Luck)"]
  ],
  [
    ["You grew up in a palace and were constantly reminded of the glory of the past. You were expected to live up to the legacy",
     "Paper of Nobility (+2 Reputation)"],
    ["You grew up as a noble warrior's child, expected to rise to your family's reputation and to never dishonor your heritage",
     "Personal Heraldry (+1 Reputation)"],
    ["You grew up among traveling merchants. Life was difficult sometimes but non-human crafts are always valuable",
    "2 Acquaintances"],
    ["You grew up as the child of scribes, recording and protecting as much elderfolk history as possible",
    "A Chronicle (+1 Education)"],
    ["You grew up singing songs and performing plays. You worked backstage, helped write songs, and fixed instruments",
     "1 Instrument & 1 Friend"],
    ["You grew up in a family of artisans, visiting ancient palaces for inspiration and spending hours every day on projects",
     "3 Common Diagrams/Formulae"],
    ["You grew up in a lowborn family, tending to the manors of others or working small jobs around your home city",
     "A Lucky Token (+1 Luck)"]
  ]
];
var influential_friends = [
  [
    ["You grew up with influence from your local religion and spent hours a day at church",
     "Gear: A Holy Text"],
    ["Your greatest influence was an artisan who taught you to appreciate art and skill",
    "Gear: A Token You Made"],
    ["Your greatest influence was a count or countess who taught you how to compose yourself",
     "Gear: A Silver Ring"],
    ["Your greatest influence was a mage who taught you not to fear magic and to always question",
    "Gear: A Small Pendant"],
    ["Your greatest influence was a village witch who taught you the importance of knowledge",
     "Gear: A Black Magic Doll"],
    ["Your greatest influence was a cursed person who taught you to never judge others too harshly",
    "Gear: A Carved Totem"],
    ["Your greatest influence was an entertainer who taught you plenty about showmanship",
     "Gear: A Playbill or Ticket"],
    ["Your greatest influence was a merchant who taught you how to be shrewd and clever",
    "Gear: A Coin You Earned"],
    ["Your greatest influence was a criminal who taught you how to take care of yourself",
     "Gear: A Mask"],
    ["Your greatest influence was a soldier who taught you how to defend yourself",
    "Gear: A Battle Trophy"]
  ],
  [
    ["Your greatest influence was the Church. You spent years learning chants and rituals",
    "Gear: A Ceremonial Mask"],
    ["Your greatest influence was a social outcast who taught you to always question society",
    "Gear: A Bright Colorful Badge"],
    ["Your greatest influence was a count who taught you how to lead and instill order",
    "Gear: A Silver Necklace"],
    ["Your greatest influence was a mage who taught you the importance of order and caution",
    "Gear: An Emblem"],
    ["Your greatest influence was an imperial detective. You spent a lot of time solving mysteries",
    "Gear: A Magnifying Lens"],
    ["Your greatest influence was a mage hunter who taught you to be cautious of magic and mages",
    "Gear: A Ring with Dimeritium"],
    ["Your greatest influence was a soldier who shared stories of danger and excitement",
    "Gear: A Trophy of Battle"],
    ["Your greatest influence was an artisan who taught you to appreciate skill and precision",
    "Gear: A Trinket You Made"],
    ["Your greatest influence was a sentient monster that taught you that not all monsters are evil",
    "Gear: A Strange Totem"],
    ["Your greatest influence was an entertainer who taught you to express yourself",
    "Gear: A Token from a Fan"]
  ],
  [
    ["Your greatest influence was a human who taught you that sometimes racism is unfounded.",
    "Gear: A Straw Doll"],
    ["Your greatest influence was an artisan who taught you to appreciate great elderfolk art",
    "Gear: A Small Token You Made"],
    ["Your greatest influence was a War Dancer or a Mahakaman Defender who taught you honor",
    "Gear: A Token of Battle"],
    ["Your greatest influence was a highborn who taught you pride and how to comport yourself",
    "Gear: A Signet Ring"],
    ["Your greatest influence was an entertainer who taught you the importance of happiness and beauty",
    "Gear: A Playbill or Ticket"],
    ["Your greatest influence was a raider who taught you that you have the right to take what you need",
    "Gear: A Satchel"],
    ["Your greatest influence was a sage who taught you about the importance of elderfolk history",
    "Gear: A Book of Tales"],
    ["Your greatest influence was a criminal who taught you to follow your own rules",
    "Gear: A Mask"],
    ["Your greatest influence was a hunter who taught you how to survive in the wilderness",
    "Gear: A Trophy of a Hunt"],
    ["Your greatest influence was a lowland farmer who taught you how to live happily",
    "Gear: A Farmer's Spade"]
  ]
];

var siblingss = [
  ["brother", "sister"],
  ["younger", "older", "twin"],
  ["wants you dead", "can't stand you", "is jealous of you", "has no feelings about you", "likes you", "looks up to you", "is possessive of you"],
  ["shy", "aggresive", "kind", "strange", "thoughtful", "talkative", "romantic", "stern", "depressive", "immature"]
];
var life_events_event = ["Fortune or Misfortune", "Allies and Enemies", "Romance"];
var fortune_misfortunes = [
  [
    "Jackpot. Some major event or stroke of luck brought you 1d10x100 crowns",
    "Find a Teacher. You trained with a teacher. Gain +1 in any INT skill or start a new INT skill at +2",
    "A Noble Owes You. Something you did gained you 1 favor from a nobleman/noblewoman",
    "Find a Combat Teacher. You trained with a soldier. Gain +1 in any combat skill or start a new combat skill at +2",
    "A Witcher Owes You. You encountered a witcher at some point and managed to garner a favor from them",
    "Fell in with Bandits. You fell in with a bandit gang. Once per month you can ask these bandits for 1 favor",
    "Tamed a Wild Animal. You tamed a wild animal you encountered in the wilderness. Roll 1d10. 1-7: Wild Dog, 8-10: Wolf",
    "A Mage Owes You. You managed to garner 1 favor from a powerful mage you helped",
    "Blessed by a Priest. You were given a holy symbol that you can show to people of that faith to gain a +2 to Charisma with them.",
    "Knighted. You were knighted for valor in a random kingdom. In this kingdom you gain +2 reputation and are recognized as a knight"
  ],
  [
    "Debt. You fell deeply into debt to the tune of 1d10x100 crowns",
    "Imprisonment. Something you did (or a false acusation) had you imprisoned for 1d10 months",
    "Addiction. You contracted an addiction. You can choose. See the sidebar for addiction rules",
    "Loover, Friend or Relative Killed. Roll 1d10. 1-5: They died in an accident, 6-8: They were murdered by monsters, 9-10: They were murdered by bandits",
    "False Accusation. Roll 1d10. 1-3: The accusation is theft, 4-5: It's cowardice or betrayal, 6-8: It's murder,9: It's rape, 10: It's illegal witchcraf",
    "Hunted by the Law. Roll 1d10. 1-3: It's just a few of guards, 4-6: It's an entire small town, 7-8: It's a major city, 9-10: A whole kingdom is after you",
    "Betrayal. Roll 1d10. 1-3: You are being blackmailed, 4-7: A secret was exposed, 8-10: You were betrayed by someone very close to you",
    "Accident. Roll 1d10. 1-4: You were disfigured. Change your social standing to feared, 5-6: You were healing for 1d10 months, 7-8: You lost a 1d10 months of memory from that year, 9-10: You suffer from horrible nightmares (7 in 10 chance each time you sleep)",
    "Mental or Physical Incapacitation. Roll 1d10. 1-3: You were poisoned; permanently lose 5 HP, 4-7: You suffer from anxiety attacks and must make Stun saves (every 5 rounds) in times of stress, 8-10: You have a major psychosis. You hear voices and are violent, irrational, and depressive. The GM controls these voices",
    "Cursed. You have been cursed. See the Curse section on pg.230 to determine the details"
  ]
];
var alliess = [
  ["male", "female"],
  ["a bounty hunter", "a mage", "a mentor or teacher", "a childhood friend", "a craftsman", "an old enemy", "a duke/duchess", "a priest/priestess", "a soldier", "a bard"],
  ["saved them from something", "met in a tavern", "they saved you from something", "they hired you for something", "you were trapped together", "you were forced to work together", "you hired them for something", "you met while drunk and hit it off", "you met while traveling", "you fought together"],
  ["acquaintances", "friends", "close friends", "inseperable", "bound by bond"],
  ["Northern Kingdoms", "Nilfgaard", "Elderlands", "beyond the boundaries"]
];

// CHARACTER OBJECT
function Pj(name, clase, race, age){
  this.name = name;
  this.clase = clase;
  this.race = race;
  this.age = age;
  this.toString = function(){
    var bio = "You are ";
    // NAME AGE RACE CLASS
    bio = bio + this.name + " (" + this.age + ")"
    if(this.race == 3 ) bio = bio + ", a " + races[this.race] + " ";
    else if (this.race == 2) bio = bio + ", an " + races[this.race] + " " + classes[this.clase] + " ";
    else bio = bio +  ", a " + races[this.race] + " " + classes[this.clase] + " ";
    bio = bio + "from ";
    // ORIGIN REGION and PERK
    if (this.origin == 0) bio = bio + northern_lands_origins[this.region][0] + ", " + origins[this.origin] + " ( " + northern_lands_origins[this.region][1] + ").";
    if (this.origin == 1) bio = bio + nilfgaard_origins[this.region][0] + ", " + origins[this.origin] + " ( " + nilfgaard_origins[this.region][1] + ").";
    if (this.origin == 2) bio = bio + elder_lands_origins[this.region][0] + ", " + origins[this.origin] + " ( " + elder_lands_origins[this.region][1] + ").";
    // FAMILY FATE
    if (this.family == 1) {
      bio = bio + " " + family_fates[this.origin][this.family_fate] + ".";
    }
    // PARENTS FATE
    if (this.parents == 1 || this.family == 1) {
      var par_fate = parents_fates[this.origin][this.parents_fate];
      par_fate = par_fate.replace(/%PARENT%/gi, which_parents[this.which_parent].PARENT);
      par_fate = par_fate.replace(/%PRONOUN%/gi, which_parents[this.which_parent].PRONOUN);
      par_fate = par_fate.replace(/%POSSESSIVE%/gi, which_parents[this.which_parent].POSSESSIVE);
      par_fate = par_fate.replace(/%PAST%/gi, which_parents[this.which_parent].PAST);
      par_fate = par_fate.replace(/%BODY%/gi, which_parents[this.which_parent].BODY);
      par_fate = par_fate.replace(/%PRESENT%/gi, which_parents[this.which_parent].PRESENT);
      par_fate = par_fate.replace(/%ACCUSATIVE%/gi, which_parents[this.which_parent].ACCUSATIVE);
      par_fate = par_fate.replace(/%DOUBLE_AGENT%/gi, which_parents[this.which_parent].DOUBLE_AGENT);
      bio = bio + " " + par_fate + ".";
    }
    // Family status
    bio = bio + " " + family_statuss[this.origin][this.family_status][0] + " ( " + family_statuss[this.origin][this.family_status][1] + ").";
    // Influential friend
    bio = bio + influential_friends[this.origin][this.influential_friend][0] + " ( " + influential_friends[this.origin][this.influential_friend][1] + ").";
    // Siblings
    if (this.siblings == 0) bio = bio + " You have " + "no" + " siblings.";
    else if (this.siblings == 1) bio = bio + " You have one sibling, a ";
    else bio = bio + "<br>You have " + this.siblings + " siblings. A ";
    for(let i=0; i<this.siblings; i++) {
      bio = bio + siblingss[3][this.siblings_list[i][3]] + " " + siblingss[1][this.siblings_list[i][1]] + " " + siblingss[0][this.siblings_list[i][0]] + " who " + siblingss[2][this.siblings_list[i][2]];
      if( i < this.siblings - 2) bio= bio + ", a ";
      else if(i == this.siblings - 2) bio = bio + " and a ";
      else bio = bio + ".";
    }
    return bio;
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
    else pj.which_parent = 2;
  }
  if(roll2 <= 4) pj.which_parent = 0;
  else if (roll2 > 4 && roll2 <= 8) pj.which_parent = 1;
  else pj.which_parent = 2;
  return destination;
}

// Family status
function family_status(pj, roll) {
  var destination = "influential_friend";
  if (roll <= 5 ) pj.family_status = roll - 1;
  else if (roll <= 7) pj.family_status = 5;
  else if (roll <= 10) pj.family_status = 6;
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

// Life Events
function life_events(pj, roll) {
  var destination = "style";
  if(typeof pj.life_events === 'undefined') pj.life_events = [];
  if (pj.life_events.length < Math.floor(pj.age / 10)){
    if(roll <= 4) {
      destination = "venture_desventure";
      pj.life_events.push({"event": 0});
    }
    else if(roll <= 7) {
      destination = "allys_enemies";
      pj.life_events.push({"event": 1});
    }
    else {
      destination = "romance";
      pj.life_events.push({"event": 2});
    }
  }
  return destination;
}
// venture Desventure
function venture_desventure(pj, roll, roll2, roll3) {
  pj.life_events[pj.life_events.length - 1]["type"] = roll % 2;
  pj.life_events[pj.life_events.length - 1]["result"] = roll2 - 1;
  pj.life_events[pj.life_events.length - 1]["extra"] = roll3;
  return "life_events";
}

// allys_enemies
function allys_enemies(pj, roll) {
  var destination;
  pj.life_events[pj.life_events.length - 1]["type"] = roll % 2;
  if(roll % 2 == 0) destination = "ally";
  if(roll % 2 == 1) destination = "enemy";
  return destination;
}

// ally
function ally(pj, roll, roll2, roll3, roll4, roll5) {
  if(typeof pj.allies === 'undefined') pj.allies = [];
  var temp_ally = {
    "gender": 1 - roll % 2,
    "position": roll2 - 1,
    "how_you_met": roll3 - 1
  };
  if(roll4 <= 4) temp_ally["closeness"] = 0;
  else if (roll4 <= 6) temp_ally["closeness"] = 1;
  else if (roll4 <= 8) temp_ally["closeness"] = 2;
  else if (roll4 <= 9) temp_ally["closeness"] = 3;
  else if (roll4 <= 10) temp_ally["closeness"] = 4;
  if(roll5 <= 3) temp_ally["location"] = 0;
  else if (roll5 <= 6) temp_ally["location"] = 1;
  else if (roll4 <= 8) temp_ally["location"] = 2;
  else if (roll4 <= 10) temp_ally["location"] = 3;
  pj.allies.push(temp_ally);
  return "life_events";
}

// enemy
function enemy(pj, roll, roll2, roll3, roll4, roll5, roll6, roll7) {
  if(typeof pj.enemies === 'undefined') pj.enemies = [];
  var temp_enemy = {
    "gender": 1 - roll % 2,
    "position": roll2 - 1,
    "cause": roll3 - 1,
    "who": roll4 % 2,
    "power": roll5,
    "how_far": Math.floor(roll6-1),
    "power_nature": Math.floor(roll7-1)
  };
  pj.enemies.push(temp_enemy);
  return "life_events";
}

// romance
function romance(pj, roll, roll2) {
  if(roll == 1) pj.life_events[pj.life_events.length - 1]["type"] = 0;
  else if(roll <=4) pj.life_events[pj.life_events.length - 1]["type"] = 1;
  else if(roll <=6) pj.life_events[pj.life_events.length - 1]["type"] = 2;
  else if(roll <=10) pj.life_events[pj.life_events.length - 1]["type"] = 3;
  if(roll > 1 && roll <= 6) pj.life_events[pj.life_events.length - 1]["result"] = roll2 - 1;
  return "life_events";
}

// style
function style(pj, roll, roll2, roll3, roll4) {
  pj.clothes = roll - 1;
  pj.personality = roll2 - 1;
  pj.hair = roll3 - 1;
  pj.complements = roll4 - 1;
  return "values";
}
// values
function values(pj, roll, roll2, roll3) {
  pj.person_appreciated = roll - 1;
  pj.value = roll2 - 1;
  pj.others = roll3 - 1;
  return "Finished";
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
    else if (dest==="life_events") {
      dest = life_events(pj, roll(10));
    }
    else if(dest==="venture_desventure") {
      dest = venture_desventure(pj, roll(10), roll(10), roll(10));
    }
    else if(dest==="allys_enemies") {
      dest = allys_enemies(pj, roll(10));
    }
    else if(dest==="ally") {
      dest = ally(pj, roll(10), roll(10), roll(10), roll(10), roll(10));
    }
    else if(dest==="enemy") {
      dest = enemy(pj, roll(10), roll(10), roll(10), roll(10), roll(10), roll(10), roll(10));
    }
    else if(dest==="romance") {
      dest = romance(pj, roll(10), roll(10));
    }
    else if(dest==="style") {
      dest = style(pj, roll(10), roll(10), roll(10), roll(10));
    }
    else if(dest==="values") {
      dest = values(pj, roll(10), roll(10), roll(10));
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

var pj = "Null";
function formGenerate() {
  pj = new Pj(document.forms[0].name.value, parseInt(document.forms[0].class.value), parseInt(document.forms[0].race.value), parseInt(document.forms[0].age.value));
  random_generate(pj);
  document.getElementById("answer").innerHTML = pj.toString();
}

var dest = "region";
function roll_item(item) {
  document.getElementById(item).value = roll(10).toString();
}
var accumulation = "";
function choices() {
  if(pj==="Null") pj = new Pj(document.forms[0].name.value, parseInt(document.forms[0].class.value), parseInt(document.forms[0].race.value), parseInt(document.forms[0].age.value));
  if(pj.race != 0) dest ="family";
  if(dest=="region") {
    document.getElementById("answer").innerHTML =accumulation + "Region: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="nilfgaard_origin") {
    document.getElementById("answer").innerHTML =accumulation + "Nilfgaard Origin: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="nilfgaard_vassal") {
    document.getElementById("answer").innerHTML =accumulation + "Nilfgaard Vassal: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="northern_lands_origin") {
    document.getElementById("answer").innerHTML =accumulation + "Northern Lands origin: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="elder_lands_origin") {
  }
  else if (dest==="family") {
    document.getElementById("answer").innerHTML =accumulation + "Family: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="parents") {
    document.getElementById("answer").innerHTML =accumulation + "Parents: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="family_fate") {
    document.getElementById("answer").innerHTML =accumulation + "Family fate: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="parents_fate") {
    document.getElementById("answer").innerHTML =accumulation + "Parents fate: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><br>Which parent: <input type='text' id='roll2'><button onclick='roll_item(\"roll2\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="family_status") {
    document.getElementById("answer").innerHTML =accumulation + "Family status: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="influential_friend") {
    document.getElementById("answer").innerHTML =accumulation + "Influential friend: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="siblings") {
    document.getElementById("answer").innerHTML =accumulation + "Siblings: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="siblings_generation") {
    document.getElementById("answer").innerHTML =accumulation + "sibling<br>Gender: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><br>Age: <input type='text' id='roll2'><button onclick='roll_item(\"roll2\")'>1d10</button><br>Feelings: <input type='text' id='roll3'><button onclick='roll_item(\"roll3\")'>1d10</button><br>Personality: <input type='text' id='roll4'><button onclick='roll_item(\"roll4\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if (dest==="life_events") {
    document.getElementById("answer").innerHTML =accumulation + "Life event: <input type='text' id='roll'><button onclick='roll_item(\"roll\")'>1d10</button><button onclick='step()'>Next</button>";
  }
  else if(dest==="venture_desventure") {
    dest = venture_desventure(pj, roll(10), roll(10), roll(10));
  }
  else if(dest==="allys_enemies") {
    dest = allys_enemies(pj, roll(10));
  }
  else if(dest==="ally") {
    dest = ally(pj, roll(10), roll(10), roll(10), roll(10), roll(10));
  }
  else if(dest==="enemy") {
    dest = enemy(pj, roll(10), roll(10), roll(10), roll(10), roll(10), roll(10), roll(10));
  }
  else if(dest==="romance") {
    dest = romance(pj, roll(10), roll(10));
  }
  else if(dest==="style") {
    dest = style(pj, roll(10), roll(10), roll(10), roll(10));
  }
  else if(dest==="values") {
    dest = values(pj, roll(10), roll(10), roll(10));
  }
  else if (dest==="Unknown") {
    console.log("Something went wrong!");
    dest = "Finished";
  }
  else {
    dest = def_destination();
  }
}
function step() {
  if(dest=="region") {
    accumulation = accumulation + "Region: " + document.getElementById("roll").value + "<br>";
    dest = region(pj, document.getElementById("roll").value);
  }
  else if (dest==="nilfgaard_origin") {
    accumulation = accumulation + "Nilfgaard origin: " + document.getElementById("roll").value + "<br>";
    dest = nilfgaard_origin(pj, document.getElementById("roll").value);
  }
  else if (dest==="nilfgaard_vassal") {
    accumulation = accumulation + "Nilfgaard vassal: " + document.getElementById("roll").value + "<br>";
    dest = nilfgaard_vassal(pj, document.getElementById("roll").value);
  }
  else if (dest==="northern_lands_origin") {
    accumulation = accumulation + "Northern lands origin: " + document.getElementById("roll").value + "<br>";
    dest = northern_lands_origin(pj, document.getElementById("roll").value);
  }
  else if (dest==="elder_lands_origin") {
    dest = elder_lands_origin(pj);
  }
  else if (dest==="family") {
    accumulation = accumulation + "Family: " + document.getElementById("roll").value + "<br>";
    dest = family(pj, document.getElementById("roll").value);
  }
  else if (dest==="parents") {
    accumulation = accumulation + "Parents: " + document.getElementById("roll").value + "<br>";
    dest = parents(pj, document.getElementById("roll").value);
  }
  else if (dest==="family_fate") {
    accumulation = accumulation + "Family fate: " + document.getElementById("roll").value + "<br>";
    dest = family_fate(pj, document.getElementById("roll").value);
  }
  else if (dest==="parents_fate") {
    accumulation = accumulation + "Parents fate: " + document.getElementById("roll").value + "<br>" + "Which one: " + document.getElementById("roll2").value + "<br>";
    dest = parents_fate(pj, document.getElementById("roll").value, document.getElementById("roll2").value);
  }
  else if (dest==="family_status") {
    accumulation = accumulation + "Family status: " + document.getElementById("roll").value + "<br>";
    dest = family_status(pj, document.getElementById("roll").value);
  }
  else if (dest==="influential_friend") {
    accumulation = accumulation + "Influential friend: " + document.getElementById("roll").value + "<br>";
    dest = influential_friend(pj, document.getElementById("roll").value);
  }
  else if (dest==="siblings") {
    accumulation = accumulation + "Siblings: " + document.getElementById("roll").value + "<br>";
    dest = siblings(pj, document.getElementById("roll").value);
  }
  else if (dest==="siblings_generation") {
    accumulation = accumulation + "Sibling: " + "<br>";
    accumulation = accumulation + "&emsp; Gender: " + document.getElementById("roll").value + "<br>";
    accumulation = accumulation + "&emsp; Age: " + document.getElementById("roll2").value + "<br>";
    accumulation = accumulation + "&emsp; Feelings: " + document.getElementById("roll3").value + "<br>";
    accumulation = accumulation + "&emsp; Personality: " + document.getElementById("roll4").value + "<br>";
    dest = siblings_generation(pj, document.getElementById("roll").value, document.getElementById("roll2").value, document.getElementById("roll3").value, document.getElementById("roll4").value);
  }
  else if (dest==="life_events") {
    dest = life_events(pj, document.getElementById("roll").value);
    console.log(pj);
  }
  else if(dest==="venture_desventure") {
    dest = venture_desventure(pj, roll(10), roll(10), roll(10));
  }
  else if(dest==="allys_enemies") {
    dest = allys_enemies(pj, roll(10));
  }
  else if(dest==="ally") {
    dest = ally(pj, roll(10), roll(10), roll(10), roll(10), roll(10));
  }
  else if(dest==="enemy") {
    dest = enemy(pj, roll(10), roll(10), roll(10), roll(10), roll(10), roll(10), roll(10));
  }
  else if(dest==="romance") {
    dest = romance(pj, roll(10), roll(10));
  }
  else if(dest==="style") {
    dest = style(pj, roll(10), roll(10), roll(10), roll(10));
  }
  else if(dest==="values") {
    dest = values(pj, roll(10), roll(10), roll(10));
  }
  else if (dest==="Unknown") {
    console.log("Something went wrong!");
    dest = "Finished";
  }
  else {
    dest = def_destination();
    document.getElementById("answer").innerHTML = pj.toString();
  }
  choices();
}

//var pj = new Pj("Teofanes", 8, 0, 52);
//random_generate(pj)
//console.log(pj.toString());
//console.log(pj);
//var pj2 = new Pj("Aeothas", 0, 2, 94);
//random_generate(pj2);
//console.log(pj2.toString());
//console.log(pj2);
