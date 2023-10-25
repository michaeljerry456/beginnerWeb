

class Player {
    
    constructor(name="Guest", wallet = 5000, betAmount=50, cards=[], head=[], tail=[],pass=false,alive=false) {
      this.name = name;
      this.wallet = wallet;
      this._betAmount = betAmount;
      this.cards = cards;
      this.head = head;
      this.tail = tail;
      this.pass = pass;
      this.alive = alive;
    }

      // this is a method, but not add () when call it. 
    //   provide a way to access the value of an attribute.  
    get betAmount() {  
        console.log("get betAmount:", this._betAmount)
        return this._betAmount;
    }

    // Setter for the value attribute
    set betAmount(newV) { // this is a method, but not add () when call it.
        if (this.alive) {
            let oldV = this._betAmount;
            this._betAmount = newV;
            this.wallet -= (newV - oldV);
            // Add code to update the innerText of an HTML element
            // if (this.name == "michael") {
            //     document.getElementById(`michaelWallet`).innerText = this.wallet;
            //     document.getElementById(`michaelMes`).innerText = this._betAmount;
            // } else if (this.name == "p1") {
            //     document.getElementById(`p1Wallet`).innerText = this.wallet;
            //     document.getElementById(`p1Mes`).innerText = this._betAmount;
            // }
            document.querySelector(`#${this.name}Wallet`).innerText = this.wallet;
            document.querySelector(`#${this.name}Mes`).innerText = this._betAmount;

        }
        
    }

    add() {
        this.betAmount += 120;
    }

    static HighestBet() {
        Player.highestBet = Math.max(
          ...Player.instances.map(player => player.betAmount)  
        );
        return Player.highestBet;
    }

    raise() {
        console.log(Player.HighestBet())
    }

    
  }

Player.instances = [];
Player.highestBet = 0;


let michael = new Player("michael", wallet=5000, 0, [], [], [], false, alive=false);
Player.instances.push(michael)
let p1 = new Player("p1", 5000, 0, [], [], [], false);
let p2 = new Player("p2");
Player.instances.push(p1)
michael.betAmount = 0;
p1.alive = true;
p1.betAmount = 500;
michael.betAmount += 300;
michael.add();

// // Use the reduce method to find the highest value
// const highestBet = Player.instances.reduce((highest, current) => {
//   return current.betAmount > highest ? current.betAmount : highest;
// }, -Infinity); // Start with a very small value
// console.log(`The highest value is: ${highestBet}`);

// p1.raise();  ok

// set default value for instance. it can write in the constructor. 
// but when initiation, the attriute can be empty.
// 
// michael.alive = true;
// p1.alive = true;
// console.log(michael)
// console.log(michael.alive)
// console.log(p1.alive)
// console.log(p2)

// test setter and getter
console.log(michael.betAmount);
console.log(michael.wallet); 
console.log(michael._wallet); // this is original attribute name.




