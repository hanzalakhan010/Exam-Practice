// Bonus - MoodBoard Generator

// Prompt the user for their mood
// Use fetch to get a quote related to that mood
// Render the mood and quote inside the HTML page

async function getMood() {
  let tags = [...document.querySelectorAll(".selected")].map((tag)=>tag.innerHTML).join(",");
  let output = document.getElementById('output')
  try {
    let response = await fetch(`https://api.quotable.io/random?tags=${tags}`);
    let data = await response.json()
    // console.log(data)
    output!.innerHTML = data
  } catch {}
}

let tags = document.querySelectorAll(".tags");
if (tags) {
  [...tags].forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("selected");
    });
  });
}
