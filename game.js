/// PSEUDOCODE ///

//? 1-100 arasında rastgele bir sayı tut.

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let score = 10;
// let topScore = 0;

//? LocalStorage'de topScore adiyla değişken olusturur.
let topScore = localStorage.getItem("topScore") || 0;
// console.log(localStorage.getItem("topScore"));
// console.log(topScore);
document.querySelector(".top-score").textContent = topScore;

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
    if (score >= topScore) {
      //   topScore = score;
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
    //! eger rastgele!==input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }

  //* again basıldığında oyunu baslangıç değerine kur

  document.querySelector(".again-btn").addEventListener("click", () => {
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random() * 100);
    document.querySelector(".secret-number").textContent = "?";
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText = `Starting..`;
  });
});

//? Enter tuşunu bağlama.

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});
//pseduo
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

myObj = { a: 1, b: 2, c: 3 };
localStorage.setItem("OBJ", JSON.stringify(myObj));
