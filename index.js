const adviceNumber = document.getElementById("advice-number")
const adviceBlock = document.getElementById("advice")
const url = "https://api.adviceslip.com/advice"
const diceBtn = document.getElementById("dice")
request()
diceBtn.addEventListener("click", request)

function request() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText)
                console.log(data.slip.id)
                console.log(data.slip.advice)
                adviceNumber.textContent = `ADVICE #${data.slip.id}`
                adviceBlock.textContent = `“${data.slip.advice}”`
            }
            if (xhr.status == 404) {
                adviceBlock.textContent = `Sorry... something goes wrong`
            }
        }
    }

    xhr.open("GET", url, true);

    xhr.send();
}