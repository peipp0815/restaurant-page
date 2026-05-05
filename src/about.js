function aboutContent() {
  const content = document.getElementById("content");
  content.textContent = "";

  const h2 = document.createElement("h2");
  h2.textContent = "About";
  content.appendChild(h2);

  const p = document.createElement("p");
  p.textContent =
    "Located right next to a ferry stop, this affordable café provides you with food and drink as you wait for your ride.";
  content.appendChild(p);
}
export { aboutContent };
