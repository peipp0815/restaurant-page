const content = document.getElementById("content");

const h2 = document.createElement("h2");
h2.textContent = "Welcome";
content.appendChild(h2);

const tagline = document.createElement("p");
tagline.textContent = "Drink your last coffee of the day with us!";
content.appendChild(tagline);

const infoHours = document.createElement("div");
infoHours.setAttribute("id", "info-hours");

const infoHoursh3 = document.createElement("h3");
infoHoursh3.textContent = "Opening Hours";
infoHours.appendChild(infoHoursh3);

const infoHoursp = document.createElement("p");
infoHoursp.textContent = "Mo-Sa 8pm-12pm";
infoHours.appendChild(infoHoursp);

content.appendChild(infoHours);

const infoLocation = document.createElement("div");
infoLocation.setAttribute("id", "info-location");

const infoLocationh3 = document.createElement("h3");
infoLocationh3.textContent = "Location";
infoLocation.appendChild(infoLocationh3);

const infoLocationp = document.createElement("p");
infoLocationp.textContent = "67 Sunset Boulevard, At the River Styx";
infoLocation.appendChild(infoLocationp);

content.appendChild(infoLocation);

export { content };
