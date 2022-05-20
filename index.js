const drumObjs = [
  { drum: "w drum", song: "crash" },
  { drum: "a drum", song: "kick-bass" },
  { drum: "s drum", song: "snare" },
  { drum: "d drum", song: "tom-1" },
  { drum: "j drum", song: "tom-2" },
  { drum: "k drum", song: "tom-3" },
  { drum: "l drum", song: "tom-4" },
]

// Listener on Buttons
const btns = Array.from(document.querySelectorAll("button"))
btns.map((btn) => {
  btn.addEventListener("click", () => {
    const drum = btn.getAttribute("class")
    const drumObj = drumObjs.find((obj) => obj.drum === drum)
    const song = new Audio(`sounds/${drumObj.song}.mp3`)
    btn.classList.add("pressed")
    setTimeout(() => {
      btn.classList.remove("pressed")
    }, 150)
    song.play()
  })
})

// Listener on Keys
document.addEventListener("keypress", (e) => {
  const key = e.key
  const drumObj = drumObjs.find((obj) => obj.drum.slice(0, 1) === key)
  const song = new Audio(`sounds/${drumObj.song}.mp3`)
  const btn = document.querySelector(`.${key}`)
  btn.classList.add("pressed")
  setTimeout(() => {
    btn.classList.remove("pressed")
  }, 150)
  song.play()
})
