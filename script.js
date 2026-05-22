const dwarfText = document.getElementById("dwarfText")

upgradeBtn.addEventListener("click", () => {
  if (gold >= cost) {
    dwarfText.innerText = "A fine upgrade! Keep mining! ⛏️"
  } else {
    dwarfText.innerText = "Ye need more gold, lad! 💰"
  }
})