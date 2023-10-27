// console.log(190);

//input  file\preference\settings\code runner: run in terminal£¬ select/check
// const prompt = require('prompt-sync')();
// var first = prompt("input first name:");
// var last = prompt("input last name:");
// console.log("full name:",first,last)

// document.write(100+"200")

// console.log(1/0)

//set  an object
// let player1 = {name:"SharedWorker",age:23,chips:500};
// console.log(player1["name"])

// console.clear(); useless

//use Function to create a class
function Players(name, money, head, tail) {
  this.name = name;
  this.money = money;
  this.hand = [head, tail];
}
// let firstP = 'club10'
// let player1 = new Players("michael",500,[firstP,"spade4"],["club4","spade4"]);
let player1 = new Players("michael", 500);
// console.log(player1.hand[0])
// console.log(player1.money)
// player1.hand = [['Club4','Heart2'],['Club6','Spade9']]
player1.hand = [["Club4", "Heart2"]];
player1.hand2 = [["Club4", "Heart2"]];
console.log(player1.hand[0]);
console.log(player1.hand2[0]);

//change 'club4' to b4
const imageFilenames = [
  "ClubJ.png",
  "Club10.png",
  "Club4.png",
  "Club5.png",
  "Club6.png",
  "Club7.png",
  "Club8.png",
  "Club9.png",
  "Diamond10.png",
  "Diamond2.png",
  "Diamond4.png",
  "Diamond6.png",
  "Diamond7.png",
  "Diamond8.png",
  "DiamondQ.png",
  "Heart10.png",
  "Heart2.png",
  "Heart3.png",
  "Heart4.png",
  "Heart6.png",
  "Heart7.png",
  "Heart8.png",
  "HeartQ.png",
  "JOKER-A.png",
  "SpadeJ.png",
  "Spade10.png",
  "Spade4.png",
  "Spade5.png",
  "Spade6.png",
  "Spade7.png",
  "Spade8.png",
  "Spade9.png",
  // 'image3.jpg',
  // Add more image filenames as needed
];
// console.log(imageFilenames.length);
// let h1 = 'Club4'
// h2 = h1.replace(/\D+/g,"b")
// console.log(h2)
// console.log(h1[0])
function ChgCard(picN) {
  // change the name of a card's image to concise sign.

  let ChgedPicN = picN.split(".")[0]; //del '.png'
  // console.log(ChgedPicN)
  if (ChgedPicN[ChgedPicN.length - 1] === "A") {
    ChgedPicN = "j6";
  } else if (ChgedPicN[ChgedPicN.length - 1] === "J") {
    ChgedPicN = ChgedPicN.slice(0, ChgedPicN.length - 1) + "11";
  } else if (ChgedPicN[ChgedPicN.length - 1] === "Q") {
    ChgedPicN = ChgedPicN.slice(0, ChgedPicN.length - 1) + "12";
  }
  // console.log(ChgedPicN)
  if (["C", "S", "c", "s"].includes(ChgedPicN[0])) {
    // console.log("in con")
    ChgedPicN = ChgedPicN.replace(/\D+/g, "b");
  } else if (["D", "H", "d", "h"].includes(ChgedPicN[0])) {
    ChgedPicN = ChgedPicN.replace(/\D+/g, "r");
  } else {
  }
  return ChgedPicN;
}

// console.log(ChgCard('HeartQ.png'))
// ok
// for (let i=0;i<imageFilenames.length;i++){
//     console.log(ChgCard(imageFilenames[i]))
// }

// console.log(ChgCard('HeartQ.png')===ChgCard('DiamondQ.png'))

//sglPK
const cardVal = {
  r12: 12,
  r2: 10,
  r8: 8,
  r4: 4,
  b10: 3,
  b4: 3,
  b6: 3,
  b11: 2,
  r10: 2,
  r6: 2,
  r7: 2,
  b5: 1,
  b7: 1,
  b8: 1,
  b9: 1,
  j6: 0,
  r3: 0,
};
// let chgedCard = ChgCard('Club6.png')
// let chgedCard2 = ChgCard('Diamond10.png')
// console.log(cardVal[chgedCard]>cardVal[chgedCard2])
// console.log(cardVal[chgedCard],cardVal[chgedCard2])

// test sglPK many times
// for (let i = 0;i<10;i++){
//     const num1 = Math.floor(Math.random() * 32); // generates a random integer between 0 and 31 (inclusive)
//     const num2 = Math.floor(Math.random() * 32); // generates another random integer between 0 and 31 (inclusive)
//     console.log("num2:",num2);
//     console.log(imageFilenames[num1],imageFilenames[num2])
//     let chgedCard1 = ChgCard(imageFilenames[num1])
//     let chgedCard2 = ChgCard(imageFilenames[num2])
//     console.log(cardVal[chgedCard1],cardVal[chgedCard2])
//     console.log(cardVal[chgedCard1]>cardVal[chgedCard2])
//     console.log()
// }

function join2Cards(card1, card2) {
  // Combine the two cards from highest to lowest in a group.
  let joined; // Declare joined1 before the if-else blocks
  if (cardVal[card1] > cardVal[card2]) {
    joined = card1 + card2;
  } else if (cardVal[card1] < cardVal[card2]) {
    joined = card2 + card1;
  } else {
    if (card1.match(/(\d+)$/)[0] >= card2.match(/(\d+)$/)[0]) {
      joined = card1 + card2;
    } else {
      joined = card2 + card1;
    }
  }
  return joined;
}
// console.log(join2Cards('r3','b6'))

//add numbers in a string
function sumNumbers(str) {
  const numbers = str.match(/\d+/g);
  let sum = 0;

  if (numbers) {
    numbers.forEach((num) => {
      sum += parseInt(num);
    });
  }
  return sum;
}

// console.log("sumNumbers:",sumNumbers("r2r8"))

//groupsPK
function compare(array1, array2) {
  let joined1 = join2Cards(array1[0], array1[1]);
  let joined2 = join2Cards(array2[0], array2[1]);

  // console.log("joined1:",joined1,"joined2:",joined2)
  //judge ding
  if (joined1 === "j6r3") {
    return 1;
  } else if (joined2 === "j6r3") {
    return -1;
  } else {
    //not ding either
    // paired
    if (array1[0] === array1[1] && array2[0] != array2[1]) {
      return 1;
    } else if (array2[0] === array2[1] && array1[0] != array1[1]) {
      return -1;
    } else if (array1[0] === array1[1] && array2[0] === array2[1]) {
      if (cardVal[array1[0]] > cardVal[array2[0]]) {
        return 1;
      } else if (cardVal[array1[0]] < cardVal[array2[0]]) {
        return -1;
      } else {
        return 0;
      }
    } else {
      // not paired either
      // wang gang
      // ¿ÉÒÔÅÅÐò['r12b9'>'r12b8'='r12r8'>'r2r8'='r2b8']
      const WGangVal = { r12b9: 3, r12b8: 2, r12r8: 2, r2r8: 1, r2b8: 1 };
      const keysArray = Object.keys(WGangVal);
      // console.log("w/gang in group2?:",keysArray.includes(joined2));
      // console.log(!keysArray.includes(joined1));
      if (keysArray.includes(joined1) && !keysArray.includes(joined2)) {
        return 1;
      } else if (keysArray.includes(joined2) && !keysArray.includes(joined1)) {
        return -1;
      } else if (keysArray.includes(joined1) && keysArray.includes(joined2)) {
        if (sumNumbers(joined1) > sumNumbers(joined2)) {
          return 1;
        } else if (sumNumbers(joined1) < sumNumbers(joined2)) {
          return -1;
        } else {
          return 0;
        }
      } else {
        // not wang/gang either
        if (sumNumbers(joined1) % 10 > sumNumbers(joined2) % 10) {
          return 1;
        } else if (sumNumbers(joined1) % 10 < sumNumbers(joined2) % 10) {
          return -1;
        } else {
          // the same sum
          let joined1head = joined1.match(/.*?(\d+)/)[0];
          let joined2head = joined2.match(/.*?(\d+)/)[0];
          if (cardVal[joined1head] > cardVal[joined2head]) {
            return 1;
          } else if (cardVal[joined1head] < cardVal[joined2head]) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    }
  }
}

// console.log("\ntest special:")
// console.log("PK result:",compare([ 'b5', 'b7' ],[ 'b10', 'b11' ]),"\n")

// test comparing 2 groups. ok
// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}
// for (let i = 0;i<1000;i++) {
//     shuffleArray(imageFilenames);
//     let group1 = [ChgCard(imageFilenames[0]),ChgCard(imageFilenames[1])]
//     let group2 = [ChgCard(imageFilenames[2]),ChgCard(imageFilenames[3])]
//     if (compare(group1,group2) === 0){
//         console.log("group1:",group1,"group2:",group2)
//         console.log("groupPK:",compare(group1,group2))
//         console.log()
//     }
// }

//machine to group his 4 cards wisdomly, the larger the head
//enumrate all combinations of the 4 cards:
shuffleArray(imageFilenames);
const renamed32 = [];
imageFilenames.forEach(function (pic) {
  renamed32.push(ChgCard(pic));
});
// console.log(renamed32);
let the1stMateWith = 0;
let headInHand = ["b7", "r3"];
for (let i = 1; i < 4; i++) {
  let group1 = [renamed32[0], renamed32[i]];
  let group2 = renamed32.slice(0, 4);
  group2.splice(i, 1);
  group2.splice(0, 1);
  // console.log(group1,group2)
  let headTemp = compare(group1, group2) >= 0 ? group1 : group2;
  // console.log("headTemp:",headTemp)
  // useless:headInHand = compare(headInHand,headTemp) >=0? headInHand:headTemp
  // todo: record which i mate index 0 to create the max
  if (compare(headInHand, headTemp) === -1) {
    headInHand = headTemp;
    the1stMateWith = i; // it is also the index of michael's 4 cards
  }
}
// console.log("headInHand:",headInHand)
// console.log("the1stMateWith:",the1stMateWith)

// function addT(str) {
//     return str + "T"
// }
// console.log(addT("club10"))

// let arr2 = [ 'Club4', 'Heart2' ,'club8'];
// arr2 = arr2.map(card => ChgCard(card));
// console.log(arr2);

class Player {
  //this is a test
  constructor(name, wallet=300, betAmount, cards) {
    this.name = name;
    this.wallet = wallet;
    this.betAmount = betAmount;
    this.cards = cards;
  }
}

const michael = new Player("michael",undefined, 30);
// michael.wallet = 500;
console.log(michael.wallet, michael.betAmount);


