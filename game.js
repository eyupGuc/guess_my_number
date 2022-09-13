/// PSEUDOCODE ///

//? 1-100 arasında rastgele bir sayı tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let score = 10;
let topScore = 0;

//* CheckBtn basıldığında kontrolleri yap

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  //   console.log(guessInput);

  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rastgele==input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats you win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
    //! eger rastgele!==input.value
  } else {
    // score -= 1;
    score--;
    guessInput > randomNumber
      ? (msg.innerText = "DECREASE")
      : (msg.innerText = "INCREASE");
  }
});

//? eger input girilmediyse
//? kullanıcıya uyarı ver

//! eger rastgele==input.value
//? tebrikler bildiniz.
//?background=green
//?eger score>topScore
//?  topScore=score
//? secret_number=gorunur.

//! değilse
//! eger score>0
//!! score=score-1
//? eger rastgele< input.value
//? AZALT
//? değilse
//?ARTTIR
//!değilse
//?uzgunuz kaybettiniz
