function menuContent() {
  const content = document.getElementById("content");
  content.textContent = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Menu";
  content.appendChild(h2);

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  const p6 = document.createElement("p");
  p6.textContent = "";
  menu.appendChild(p6);

  const p = document.createElement("p");
  p.textContent = "Price";
  menu.appendChild(p);

  const p2 = document.createElement("p");
  p2.textContent = "One Black Coffee";
  menu.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = "1 Tear";
  menu.appendChild(p3);

  const p4 = document.createElement("p");
  p4.textContent = "Your Favorite Meal";
  menu.appendChild(p4);

  const p5 = document.createElement("p");
  p5.textContent = "1 Story";
  menu.appendChild(p5);

  content.appendChild(menu);
}
export { menuContent };
