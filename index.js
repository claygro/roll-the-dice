function dice() {
  const num = document.querySelector(".myInput").value;
  const result = document.querySelector(".result");
  const diceImages = document.querySelector(".diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="diceImage/${value}.png">`);
  }
  result.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
  let invalid = document.querySelector(".invalid");
  if (num > 6) {
    result.textContent = ``;
    diceImages.innerHTML = "";
    invalid.innerHTML = "You have to choose number up to 6";
  } else {
    invalid.innerHTML = "";
  }
}
