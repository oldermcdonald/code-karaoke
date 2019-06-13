// Title: I want it that way
// Artist: Backstreet Boys
// Songwriters: Andreas Mikael Carlsson / Martin Karl Sandberg


class You {
  tellMeWhy(questionNum) {
    switch(questionNum) {
      case 1:
        return "Ain't nothing but a heartache"
      case 2:
        return "Ain't nothing but a mistake"
      case 3:
        return "I never want to hear you say"
      case "I want it that way":
        return false;
    }
  }
}

// You are myFire
let myFire = new You()

console.log(myFire.tellMeWhy(1));
console.log(myFire.tellMeWhy(2));
console.log(myFire.tellMeWhy(3));
