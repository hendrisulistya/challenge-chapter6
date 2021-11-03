// PLAYER
const player1batu = document.getElementById("player1-batu");
const player1kertas = document.getElementById("player1-kertas");
const player1Gunting = document.getElementById("player1-gunting");
const latarBatu = document.getElementById("latarBatu");
const laterKertas = document.getElementById("latarKertas");
const latarGunting = document.getElementById("latarGunting");

// RESULT
const onlyVs = document.querySelector(".only-vs");
const resultText = document.querySelector(".result-text");

// COMPUTER
const latarBatuCom = document.getElementById("latarBatu-COM");
const latarKertasCom = document.getElementById("latarKertas-COM");
const latarGuntingCom = document.getElementById("latarGunting-COM");

// PLAY AGAIM
const refreshPage = document.getElementById("refresh-page");

class Player {
  batu() {
    player1batu.addEventListener("click", () => {
      console.log(player1batu.id)
      const hands = [comBatu, comKertas, comGunting];
      const hand = hands[Math.floor(Math.random()*hands.length)].id;

      latarBatu.style.background = "#C4C4C4";

      function set(duration1, duration2, duration3) {
        setTimeout(() => {
          latarBatuCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarBatuCom.style.background = "";
          }, 300)
        }, duration1)
        setTimeout(() => {
          latarKertasCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarKertasCom.style.background = "";
          }, 300)
        }, duration2)
        setTimeout(() => {
          latarGuntingCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarGuntingCom.style.background = "";
          }, 300)
        }, duration3)
      }

      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          set(300, 600, 900);
        } else if(i === 2) {
          set(1200, 1500, 1800);
        } else if(i === 3) {
          set(2100, 2400, 2700)
         } else if(i === 4) {
          set(3000, 3300, 3600)
         }
      }

        setTimeout(() => {
          latarBatuCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comBatu") {
              onlyVs.className = "result-draw";
              resultText.innerHTML = "DRAW";
              latarBatuCom.style.background = "#C4C4C4";
              console.log("Hasil DRAW")
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarBatuCom.style.background = "";
            }
          }, 300)
        }, 3900)

        if(hand === "comBatu") {
          return;
        }

        console.log(hand)

        setTimeout(() => {
          latarKertasCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comKertas") {
              onlyVs.className = "result";
              resultText.innerHTML = "COM <br> WIN";
              latarKertasCom.style.background = "#C4C4C4";
              console.log("COM WIN")
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarKertasCom.style.background = "";
            }
          }, 300)
        }, 4200)

        if(hand === "comKertas") {
          return;
        }

        setTimeout(() => {
          latarGuntingCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comGunting") {
              onlyVs.className = "result";
              resultText.innerHTML = "PLAYER 1 <br> WIN";
              latarGuntingCom.style.background = "#C4C4C4";
              console.log("PLAYER WIN");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarGuntingCom.style.background = "";
            }
          }, 300)
        }, 4500)
    })
  }

  kertas() {
    player1kertas.addEventListener("click", () => {
      console.log(player1kertas.id)
      const hands = [comBatu, comKertas, comGunting];
      const hand = hands[Math.floor(Math.random()*hands.length)].id;
      console.log(hand)

      laterKertas.style.background = "#C4C4C4";

      function set(duration1, duration2, duration3) {
        setTimeout(() => {
          latarBatuCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarBatuCom.style.background = "";
          }, 300)
        }, duration1)
        setTimeout(() => {
          latarKertasCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarKertasCom.style.background = "";
          }, 300)
        }, duration2)
        setTimeout(() => {
          latarGuntingCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarGuntingCom.style.background = "";
          }, 300)
        }, duration3)
      }

      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          set(300, 600, 900);
        } else if(i === 2) {
          set(1200, 1500, 1800);
        } else if(i === 3) {
          set(2100, 2400, 2700)
         } else if(i === 4) {
          set(3000, 3300, 3600)
         }
      }

        setTimeout(() => {
          latarBatuCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comBatu") {
              onlyVs.className = "result";
              resultText.innerHTML = "PLAYER 1 <br> WIN";
              latarBatuCom.style.background = "#C4C4C4";
              console.log("PLAYER WIN");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarBatuCom.style.background = "";
            }
          }, 300)
        }, 3900)

        if(hand === "comBatu") {
          return;
        }



        setTimeout(() => {
          latarKertasCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comKertas") {
              onlyVs.className = "result-draw";
              resultText.innerHTML = "DRAW";
              latarKertasCom.style.background = "#C4C4C4";
              console.log("DRAW");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarKertasCom.style.background = "";
            }
          }, 300)
        }, 4200)

        if(hand === "comKertas") {
          return;
        }

        setTimeout(() => {
          latarGuntingCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comGunting") {
              onlyVs.className = "result";
              resultText.innerHTML = "COM WIN";
              latarGuntingCom.style.background = "#C4C4C4";
              console.log("COM WIN");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarGuntingCom.style.background = "";
            }
          }, 300)
        }, 4500)
    })
  }

  gunting() {
    player1Gunting.addEventListener("click", () => {
      console.log(player1Gunting.id)
      const hands = [comBatu, comKertas, comGunting];
      const hand = hands[Math.floor(Math.random()*hands.length)].id;
      console.log(hand)

      latarGunting.style.background = "#C4C4C4";

      function set(duration1, duration2, duration3) {
        setTimeout(() => {
          latarBatuCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarBatuCom.style.background = "";
          }, 300)
        }, duration1)
        setTimeout(() => {
          latarKertasCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarKertasCom.style.background = "";
          }, 300)
        }, duration2)
        setTimeout(() => {
          latarGuntingCom.style.background = "#C4C4C4";
          setTimeout(() => {
            latarGuntingCom.style.background = "";
          }, 300)
        }, duration3)
      }

      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          set(300, 600, 900);
        } else if(i === 2) {
          set(1200, 1500, 1800);
        } else if(i === 3) {
          set(2100, 2400, 2700)
         } else if(i === 4) {
          set(3000, 3300, 3600)
         }
      }

        setTimeout(() => {
          latarBatuCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comBatu") {
              onlyVs.className = "result";
              resultText.innerHTML = "COM WIN";
              latarBatuCom.style.background = "#C4C4C4";
              console.log("COM WIN");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarBatuCom.style.background = "";
            }
          }, 300)
        }, 3900)

        if(hand === "comBatu") {
          return;
        }



        setTimeout(() => {
          latarKertasCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comKertas") {
              onlyVs.className = "result";
              resultText.innerHTML = "PLAYER 1 <br> WIN";
              latarKertasCom.style.background = "#C4C4C4";
              console.log("Player WIN");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarKertasCom.style.background = "";
            }
          }, 300)
        }, 4200)

        if(hand === "comKertas") {
          return;
        }

        setTimeout(() => {
          latarGuntingCom.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "comGunting") {
              onlyVs.className = "result-draw";
              resultText.innerHTML = "DRAW";
              latarGuntingCom.style.background = "#C4C4C4";
              console.log("Hasil DRAW");
              setTimeout(() => {
                if(confirm("Mau main lagi? GASSSS KLIK OK 🔥")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              latarGuntingCom.style.background = "";
            }
          }, 300)
        }, 4500)
    })
  }

  playAgain() {
    refreshPage.addEventListener("click", () => {
      history.go(0);
    })
  }
}


const main = new Player();


main.batu();
main.kertas();
main.gunting();
main.playAgain();