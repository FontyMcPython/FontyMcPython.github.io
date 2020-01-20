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
   "Your family house was cursed and now either crops won’t grow or specters roam the halls. It became too dangerous for you to stay in this home",
   "With so many wars your family’s livelihood was destroyed. Your family turned to crime to survive",
   "Your family accumulated a huge debt through gambling or favors from others. You need money desperately",
   "Your family has fallen into a feud with another family. You may not even remember why this feud started in the first place",
   "Due to some action or inaction your family has become hated in your home town and now no one there wants to have anything to do with them",
   "One day everything you had was ripped away by a bandit mob. Your family was massacred, leaving you entirely alone",
   "Your family has a deep, dark secret that if discovered would ruin you all completely. You can decide what this secret is, or the Game Master can decide",
   "Your family has come to despise each other. No one you grew up with will talk with each other any more and you’re lucky to get a passing hello from your siblings"],
  ["Your family was indentured for crimes against the Empire or on trumped-up charges. Only you escaped",
   "Your family was exiled to the Korath Desert and you likely spent most of your early life struggling to survive in the deadly wasteland",
   "Your family was killed by a rogue mage who either had a vendetta against your family, or just wanted blood. Either way, you are alone",
   "Your family disappeared and you have no idea where they went. One day they just up and left",
   "Your family was executed for treason against the Empire. You were the only one to escape this fate",
   "Your family was stripped of its title for some reason. You were evicted from your home and left scrambling to survive among the un-washed masses",
   "Your family name was tarnished by a magic relative who flaunted their magical gift disgracefully like a Northern mage",
   "You disgraced your family in the eyes of the Empire. Something you did or failed to do has ruined your personal name and harmed your family",
   "Your family has a deep, dark secret that if discovered would destroy them and their name forever. You must protect this secret with your life",
   "Your family was assassinated. They may have been in the way of someone’s plan or they may have been used to get at someone more powerful. Either way, your family is gone now"],
  ["Your family were marked as human sympathizers and are not particularly loved in their homeland",
  "Your family was ostracized for dissenting opinions and now people won’t socialize with you or your family at all",
  "Your family died in the Northern Wars. They may have actually fought in the war, or were casualties of war who just happened to get in the way",
  "Your family has been caught in a feud for centuries. You may not remember why this feud started, but it is dire",
  "Your family was stripped of its title for some reason. You were evicted from your home and left scrambling to survive",
  "Your family turned to raiding human settlements early in your life to get food and perhaps strike back at the humans",
  "Your family house is haunted. Most likely this is because your home was the site of many, many deaths during the war against humans",
  "Your family has been split by a human in-law who was brought into your family by a sibling or relative. Some of your family like them and some hate them",
  "Your family was killed by humans who thought they were Scoia’tael. They may have been slaughtered or hung with no court proceedings or trials",
  "Your family is descended from an infamous traitor. It taints your family’s interactions with others of the elder races and has made living in the elderland difficult"]
];
var parents_fates = [
  ["One or more of your parents were killed in the Northern Wars. Most likely your father, but it is also possible that your mother fought or was a casualty",
  "One or more of your parents left you in the wilderness to fend for yourself. Maybe they couldn’t afford to keep you; maybe you were an accident",
  "One or more of your parents were cursed by a mage or due to the intense hatred of someone they encountered. The curse took their life",
  "One or more of your parents sold you for coin, or perhaps traded you for some goods or service. Your parents needed the money more than you",
  "One or more of your parents joined a gang. You saw this gang often and were sometimes forced to work with them",
  "One or more of your parents were killed by monsters. It is your decision as to what they may have fallen prey to",
  "One or more of your parents were falsely executed. They may have been a scapegoat for something or just in the wrong place",
  "One or more of your parents died of a plague. There was nothing that could be done but try to ease their passing",
  "One or more of your parents defected to Nilfgaard. They may have been given a deal for information or they may just have jumped the border",
  "One or more of your parents were kidnapped by nobles. Likely it was your mother, who attracted the attention of a local lord or his son"
],
  ["Your father died in one of the Northern Wars. He may have already been in the military or he may have been conscripted into service during that war",
  "One or more of your parents were poisoned. This may have been the work of a professional rival, or it may have been to get your parents out of the way",
  "The secret police took your parent or parents for ‘questioning.’ The next week their bodies were found hung in the streets of the city",
  "One or more of your parents were killed by a rogue mage. Most likely they tried to turn the mage in question in to the Empire and paid the price",
  "One or more of your parents were imprisoned for unlawful magic. Maybe they actually commited the crime or maybe it was a setup",
  "One or more of your parents were exiled to the Korath Desert. Likely they committed a major crime but killing them would cause trouble",
  "One or more of your parents were cursed by a mage. The mage likely had a vendetta against them",
  "Your parents simply left you one day. You may not even know why they did it. One day your parents just disappeared",
  "One or more of your parents were enslaved. They either commited a crime against the Empire or were set up by a rival",
  "One or more of your parents were sent to the North as double agents. You likely don’t even know where they are now, but they’re serving the Emperor"],
  ["One or more of your parents were accused of being Scoia’tael. The people around you give your parents sidelong glances",
  "One or more of your parents turned on your own people and sold out the elder races to the humans. Your parents are unwelcome in your homeland",
  "One or more of your parents killed themselves out of despair. With no hope of regaining the glory of the past, they gave up and ended it",
  "While traveling, one or more of your parents fell prey to human racism. They died in a pogrom and their bodies were displayed on pikes",
  "One or more of your parents have become obssessed with regaining the former glory of their race. They sacrifice everything for this cause",
  "One or more of your parents were exiled from your homeland. There are many possible reasons, from crime to dissenting opinons",
  "One or more of your parents were cursed. You can decide what this curse is or, the Game Master can decide",
  "Your parents gave you to another family so that you could survive, because they couldn’t care for you",
  "One or more of your parents joined the Scoia’tael in an attempt to get revenge on the humans who they see as ruining their lives",
  "One or more of your parents died in an ‘accident’. Most likely they made a powerful enemy that finally found a way to get rid of them"]
];
var which_parents = ["father", "mother", "parents"];
var family_statuss = [
  [
    ["Aristocracy. You grew up in a noble manor with servants to wait on you, but you were always expected to behave and impress",
     "Paper of Nobility (+2 Reputation)"],
    ["Adopted by a Mage. You were given to a mage at ayoung age. You lived in comfort but barely saw your caretaker, who was always busy.",
     "A Chronicle (+1 Education)"],
    ["Knights. You grew up in a manor where you learned to be a proper lady or lord. Your fate was set from birth",
    "Personal Heraldry (+1 Reputation)"],
    ["Merchant Family. You grew up among merchants and you were always surrounded by yelling, haggling, and money",
     "2 Acquaintances"],
    ["Artisan Family. You grew up in an artisan’s workshop. Your days were filled with the incessant sounds of creation, and often long",
    "3 Common Diagrams/Formulae"],
    ["Entertainer Family. You grew up with a band of performers. You may have traveled or you may have performed at a theater",
      "1 Instrument & 1 Friend"],
    ["Peasant Family. You grew up on a farm in the countryside. You didn’t have much to your name and your life was simple, but dangerous",
     "A Lucky Token (+1 Luck)"]
  ],
  [
    ["Aristocracy. You grew up in a manor, training to be well-versed in the world of the court. The luxury was just your incentive",
    "Paper of Nobility (+2 Reputation)"],
    ["High Clergy. You were raised among the clergy of the Great Sun. You grew up pious and always aware that the Church would guide you",
    "A Holy Symbol (+1 Courage)"],
    ["Knights. You grew up knowing that your duty was to the Emperor, and that all of your luxury was a reward for your eventual service",
    "Personal Heraldry (+1 Reputation)"],
    ["Artisan Family. You grew up in an artisan’s shop, learning to craft products for sale around the world. You learned the value of quality",
    "3 Common Diagrams/Formula"],
    ["Merchant Family. You grew up selling products all around the Empire. You saw all kinds exotic of goods from all around the world",
    "2 Acquaintances"],
    ["Born into Servitude. You were born into servitude and lived in simple quarters. You owned very little and toiled often",
    "A trained bird or serpent"],
    ["Peasant Family. You grew up on one of the thousands of farms across the Empire. You had little to your name but life was simple",
    "A Lucky Token (+1 Luck)"]
  ],
  [
    ["Aristocracy. You grew up in a palace and were constantly reminded of the glory of the past. You were expected to live up to the legacy",
     "Paper of Nobility (+2 Reputation)"],
    ["Noble Warrior. You grew up as a noble warrior’s child, expected to rise to your family’s reputation and to never dishonor your heritage",
     "Personal Heraldry (+1 Reputation)"],
    ["Merchants. You grew up among traveling merchants. Life was difficult sometimes but non-human crafts are always valuable",
    "2 Acquaintances"],
    ["Scribe Family. You grew up as the child of scribes, recording and protecting as much elderfolk history as possible",
    "A Chronicle (+1 Education)"],
    ["Entertainers. You grew up singing songs and performing plays. You worked backstage, helped write songs, and fixed instruments",
     "1 Instrument & 1 Friend"],
    ["Artisan Family. You grew up in a family of artisans, visiting ancient palaces for inspiration and spending hours every day on projects",
     "3 Common Diagrams/Formulae"],
    ["Lowborn Family. You grew up in a lowborn family, tending to the manors of others or working small jobs around your home city",
     "A Lucky Token (+1 Luck)"]
  ]
];
var influential_friends = [
  [
    ["A Church. You grew up with influence from your local religion and spent hours a day at church",
     "Gear: A Holy Text"],
    ["An Artisan. Your greatest influence was an artisan who taught you to appreciate art and skill",
    "Gear: A Token You Made"],
    ["A Count. Your greatest influence was a count or countess who taught you how to compose yourself",
     "Gear: A Silver Ring"],
    ["A Mage. Your greatest influence was a mage who taught you not to fear magic and to always question",
    "Gear: A Small Pendant"],
    ["A Witch. Your greatest influence was a village witch who taught you the importance of knowledge",
     "Gear: A Black Magic Doll"],
    ["A Cursed Person. Your greatest influence was a cursed person who taught you to never judge others too harshly",
    "Gear: A Carved Totem"],
    ["An Entertainer. Your greatest influence was an entertainer who taught you plenty about showmanship",
     "Gear: A Playbill or Ticket"],
    ["A Merchant. Your greatest influence was a merchant who taught you how to be shrewd and clever",
    "Gear: A Coin You Earned"],
    ["A Criminal. Your greatest influence was a criminal who taught you how to take care of yourself",
     "Gear: A Mask"],
    ["A Man At Arms. Your greatest influence was a soldier who taught you how to defend yourself",
    "Gear: A Battle Trophy"]
  ],
  [
    ["The Cult of the Great Sun. Your greatest influence was the Church. You spent years learning chants and rituals",
    "Gear: A Ceremonial Mask"],
    ["An Outcast. Your greatest influence was a social outcast who taught you to always question society",
    "Gear: A Bright Colorful Badge"],
    ["A Count. Your greatest influence was a count who taught you how to lead and instill order",
    "Gear: A Silver Necklace"],
    ["A Mage. Your greatest influence was a mage who taught you the importance of order and caution",
    "Gear: An Emblem"],
    ["A Solicitor. Your greatest influence was an imperial detective. You spent a lot of time solving mysteries",
    "Gear: A Magnifying Lens"],
    ["A Mage Hunter. Your greatest influence was a mage hunter who taught you to be cautious of magic and mages",
    "Gear: A Ring with Dimeritium"],
    ["A Man At Arms. Your greatest influence was a soldier who shared stories of danger and excitement",
    "Gear: A Trophy of Battle"],
    ["An Artisan. Your greatest influence was an artisan who taught you to appreciate skill and precision",
    "Gear: A Trinket You Made"],
    ["A Sentient Monster. Your greatest influence was a sentient monster that taught you that not all monsters are evil",
    "Gear: A Strange Totem"],
    ["An Entertainer. Your greatest influence was an entertainer who taught you to express yourself",
    "Gear: A Token from a Fan"]
  ],
  [
    ["A Human. Your greatest influence was a human who taught you that sometimes racism is unfounded.",
    "Gear: A Straw Doll"],
    ["An Artisan. Your greatest influence was an artisan who taught you to appreciate great elderfolk art",
    "Gear: A Small Token You Made"],
    ["A Noble Warrior. Your greatest influence was a War Dancer or a Mahakaman Defender who taught you honor",
    "Gear: A Token of Battle"],
    ["A Highborn. Your greatest influence was a highborn who taught you pride and how to comport yourself",
    "Gear: A Signet Ring"],
    ["An Entertainer. Your greatest influence was an entertainer who taught you the importance of happiness and beauty",
    "Gear: A Playbill or Ticket"],
    ["A Raider. Your greatest influence was a raider who taught you that you have the right to take what you need",
    "Gear: A Satchel"],
    ["A Sage. Your greatest influence was a sage who taught you about the importance of elderfolk history",
    "Gear: A Book of Tales"],
    ["A Criminal. your greatest influence was a criminal who taught you to follow your own rules",
    "Gear: A Mask"],
    ["A Hunter. Your greatest influence was a hunter who taught you how to survive in the wilderness",
    "Gear: A Trophy of a Hunt"],
    ["A Lowland Farmer. Your greatest influence was a lowland farmer who taught you how to live happily",
    "Gear: A Farmer’s Spade"]
  ]
];

var siblingss = [
  ["brother", "sister"],
  ["younger", "older", "twin"],
  ["Wants you dead", "Can't stand you", "Jealous of you", "No feelings about you", "Likes you", "Looks up to you", "Possessive of you"],
  ["Shy", "Aggresive", "Kind", "Strange", "Thoughtful", "Talkative", "Romantic", "Stern", "Depressive", "Immature"]
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
    "False Accusation. Roll 1d10. 1-3: The accusation is theft, 4-5: It’s cowardice or betrayal, 6-8: It’s murder,9: It’s rape, 10: It’s illegal witchcraf",
    "Hunted by the Law. Roll 1d10. 1-3: It’s just a few of guards, 4-6: It’s an entire small town, 7-8: It’s a major city, 9-10: A whole kingdom is after you",
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
    var bio = "";
    // NAME AGE RACE CLASS
    bio = bio + this.name + " (" + this.age + ")"
    if(this.race == 3 ) bio = bio + ", a " + races[this.race] + " ";
    else if (this.race == 2) bio = bio + ", an " + races[this.race] + " " + classes[this.clase] + " ";
    else bio = bio +  ", a " + races[this.race] + " " + classes[this.clase] + " ";
    bio = bio + "from ";
    if (this.origin == 0) bio = bio + northern_lands_origins[this.region][0] + ", " + origins[this.origin] + " ( " + northern_lands_origins[this.region][1] + ").";
    if (this.origin == 1) bio = bio + nilfgaard_origins[this.region][0] + ", " + origins[this.origin] + " ( " + nilfgaard_origins[this.region][1] + ").";
    if (this.origin == 2) bio = bio + elder_lands_origins[this.region][0] + ", " + origins[this.origin] + " ( " + elder_lands_origins[this.region][1] + ").";
    if (this.family == 1) {
      bio = bio + " " + family_fates[this.origin][this.family_fate] + ".";
    }
    if (this.parents == 1 || this.family == 1) {
      bio = bio + " " + parents_fates[this.origin][this.parents_fate] + ".";
    }
    bio = bio + " " + family_statuss[this.origin][this.family_status][0] + " ( " + family_statuss[this.origin][this.family_status][1] + ").";
    bio = bio + " Most influential friend: " + influential_friends[this.origin][this.influential_friend][0] + " ( " + influential_friends[this.origin][this.influential_friend][1] + ").";
    bio = bio + " You have " + this.siblings + " siblings.";
    for(let i=0; i<this.siblings; i++) {
      bio = bio + " A " + siblingss[3][this.siblings_list[i][3]] + " " + siblingss[1][this.siblings_list[i][1]] + " " + siblingss[0][this.siblings_list[i][0]] + " who " + siblingss[2][this.siblings_list[i][2]] + ".";
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
    else pj.which_parent = 1;;
  }
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

function formGenerate() {
  var pj = new Pj(document.forms[0].name.value, document.forms[0].class.value, document.forms[0].race.value, document.forms[0].age.value);
  random_generate(pj);
  console.log(pj);
  document.getElementById("answer").innerHTML = pj.toString();
}

//var pj = new Pj("Teofanes", 8, 0, 52);
//random_generate(pj)
//console.log(pj.toString());
//console.log(pj);
//var pj2 = new Pj("Aeothas", 0, 2, 94);
//random_generate(pj2);
//console.log(pj2.toString());
//console.log(pj2);
