const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"
async function getProphetdata() {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets)
}

const displayProphets = (prophets) => {
    let temp, item, item2, item3, item4, a, b, c, d, i;
temp = document.getElementsByTagName("template")[0];
item = temp.content.querySelector("h2");
item2 = temp.content.querySelector("p");
item3 = temp.content.querySelector(".birth-place");
item4 = temp.content.querySelector(".profile");
prophets.forEach(prophet => {
    a = document.importNode(item, true);
  b = document.importNode(item2, true);
  c = document.importNode(item3, true);
  d = document.importNode(item4, true);
  a.textContent = prophet.name;
  b.textContent = prophet.birthdate;
  c.textContent = prophet.birthplace;
  d.textContent = prophet.imageurl;
  document.body.appendChild(a);
  document.body.appendChild(b);
  document.body.appendChild(c);
  document.body.appendChild(d);
  item4.setAttribute("src", d.textContent);
});

}

getProphetdata();