const cont = document.querySelector(".container");
const fullCards = document.querySelectorAll(".full");
const empty = document.querySelector(".empty");
const cards = document.querySelectorAll(".card");


const num = [1, 2, 3, 4, 5, 6, 7, 8];
num.sort(() => 0.5 - Math.random());

empty.setAttribute("data-pos", 8);

fullCards.forEach((card, i) => {
    card.innerHTML = `${num[i]}`;
    card.setAttribute("data-pos", i);
});

moveCard();

// Main function
function moveCard() {
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            console.log(e.currentTarget.dataset.pos);
            checkCard(e.currentTarget, parseInt(e.currentTarget.dataset.pos), parseInt(e.currentTarget.textContent));
            
            if(checkWin(fullCards)) {
                window.alert("You Win!");
                // console.log("you win")
            }
        });
    });

    console.log(checkWin(fullCards))
}

function checkCard(element, pos, value) {
    switch (pos) {
        case 0:
            move0(element, value);
            break;
        case 1:
            move1(element, value);
            break;
        case 2:
            move2(element, value);
            break;
        case 3:
            move3(element, value);
            break;
        case 4:
            move4(element, value);
            break;
        case 5:
            move5(element, value);
            break;
        case 6:
            move6(element, value);
            break;
        case 7:
            move7(element, value);
            break;
        case 8:
            move8(element, value);
            break;
    }
}

function move0(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 1 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 3 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move1(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 0 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 2 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 4 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move2(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 1 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 5 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move3(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 0 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 6 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 4 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move4(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 3 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 5 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 7 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 1 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move5(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 8 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 2 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 4 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move6(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 7 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 3 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move7(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 8 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 6 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
        if(+card.dataset.pos == 4 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}
function move8(element, value) {
    cards.forEach(card => {
        if(+card.dataset.pos == 7 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;

            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
            
        }
        if(+card.dataset.pos == 5 && card.classList.contains("empty")) {
            card.classList.remove("empty");
            card.classList.add("full");
            card.innerHTML = value;
            
            element.classList.add("empty");
            element.classList.remove("full");
            element.innerHTML = "";
        }
    })
}

function checkWin(cards) {
    let flag = false;
    cards.forEach(card => {
        console.log(+card.dataset.pos + 1, (+card.dataset.pos + 1 != +card.textContent) , +card.textContent);
        if (+card.dataset.pos + 1 != +card.textContent) {
            flag = true
        }
    });

    if (flag) {
        return false;
    } else {
        return true;
    }
}








