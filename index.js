
const container = document.getElementsByClassName("container");
for (let i = 1; i < 5; i++) {
  let section = document.createElement("section");
  section.id = `a${i}`;
  section.className = "sectionss";

  container[0].append(section);
}
// ================================

const topSection = document.getElementById("a1");

const welome = document.createElement("h1");

welome.className = "welcome";
welome.textContent = "game";

topSection.append(welome);

// ====================================

const playersSection = document.getElementById("a2");

for (let i = 5; i < 7; i++) {
  let sectionBox = document.createElement("section");
  sectionBox.id = `a${i}`;
  sectionBox.className = "playerBox";

  playersSection.append(sectionBox);
}
// ===========================
const player1 = document.getElementById('a5');
const player2 = document.getElementById("a6");

const pointsText1 = document.createElement("h3");
pointsText1.className = "pointsText";
pointsText1.textContent = "POINTS";

const pointsText2 = document.createElement("h3");
pointsText2.className = "pointsText";
pointsText2.textContent = "POINTS";

const pointsName1 = document.createElement("h3");
pointsName1.textContent = "yehciel";

const pointsName2 = document.createElement("h3");

pointsName2.textContent = "naftali";

const pointsNum1 = document.createElement("h2");
pointsNum1.textContent = 0;
const pointsNum2 = document.createElement("h2");
pointsNum2.textContent = 0;

player1.append(pointsName1, pointsNum1, pointsText1);

player2.append(pointsName2, pointsNum2, pointsText2);

// =====================================


// ================================

const daisSection = document.getElementById("a3");

for (let i = 7; i < 9; i++) {
  let daisBox = document.createElement("section");
  daisBox.id = `a${i}`;
  daisBox.className = "daisBox";

  daisSection.append(daisBox);
}

// ===================

const dais1 = document.getElementById("a7");
const dais2 = document.getElementById("a8");

const daisNum1 = document.createElement("h2");
daisNum1.textContent = 0;
const daisNum2 = document.createElement("h2");
daisNum2.textContent = 0;

dais1.append(daisNum1);
dais2.append(daisNum2);

// ====================================

const buttonsSection = document.getElementById("a4");

const rolB = document.createElement("button");
rolB.id = "rolB";
rolB.className = "buttonss";
rolB.textContent = "ROOL";
const paasB = document.createElement("button");
paasB.id = "paasB";
paasB.className = "buttonss";
paasB.textContent = "PAAS";

buttonsSection.append(rolB, paasB);

// ============================================
function disNum() {
  const firstNum1 = Math.random() * (6 - 1) + 1;
  const firstNum = firstNum1.toFixed(0);
  return firstNum;
}



// ========================

const firstTooPlay = Math.random() * (2 - 1) + 1;

// =============================

function Winer() {
  if (
    Number(pointsNum1.textContent) >= 100 ||
    Number(pointsNum2.textContent) >= 100
  ) {
    return true;
  } else {
    return false;
  }
}

// =======================

function dubleCenario(playerpons) {
  if (firstNum === secondNum) {
    
    return true;
  } else {
    return false;
  }
}

// ===================================
let firstNum;
let secondNum;
let total;
let turn = firstTooPlay.toFixed(0);
console.log(turn);

function teeeesssttt(){
  console.log("first");
      firstNum = disNum();
      console.log(firstNum);
      secondNum = disNum();
      daisNum1.textContent = firstNum;
      daisNum2.textContent = secondNum;
      console.log(secondNum);
      if (dubleCenario(Number(pointsNum1.textContent))) {
        pointsNum1.textContent = 0
        // console.log("first")
        turn = "2";
      } else{
        total = Number(firstNum) + Number(secondNum);
        // console.log(total);
        pointsNum1.textContent = Number(pointsNum1.textContent) + total;
      }

}

function ttttteeeeeesssssttt2222222(){
  firstNum = disNum();
      console.log(firstNum);
      secondNum = disNum();
      console.log(secondNum);
      daisNum1.textContent = firstNum;
      daisNum2.textContent = secondNum;
      if (dubleCenario(Number(pointsNum2.textContent))) {
        pointsNum2.textContent = 0
        turn = "1";
      } else {
        total = Number(firstNum) + Number(secondNum);
        
        pointsNum2.textContent = Number(pointsNum2.textContent) + total;
      }
}


  addEventListener("click", (e) => {
    if (e.target.id === "rolB" && Winer() == false) {
      if(turn == "1"){
        teeeesssttt()
      }else if(turn == "2"){
        ttttteeeeeesssssttt2222222()

      }
      
    } else if(e.target.id === "paasB" && Winer() == false){
      if(turn == "1"){
        turn = "2"
      }else if(turn == "2"){
        turn ="1"

      }
      
    }else if (Winer() == true){
      console.log("end")
    }});

