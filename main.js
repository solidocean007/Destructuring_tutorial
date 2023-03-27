import { games } from "./data.js";

games.forEach((game) => {
  const { title, type, created, developer, release, image, characters } = game;

  const container = document.querySelector('.container');
  const card = document.createElement('div');
  card.className = 'card';
  container.appendChild(card);

  //Image
  const imageBox = document.createElement('div');
  imageBox.className = 'imageBox';
  card.append(imageBox);
  const imageEl = document.createElement("img");
  imageEl.className = "image";
  imageEl.src = image;
  imageBox.append(imageEl);

  //Info container
  const infoBox = document.createElement("div");
  infoBox.className = "infoBox";
  card.append(infoBox);

  //Game details
  const gameDetails = document.createElement("div");
  gameDetails.className = "gameDetails";
  infoBox.appendChild(gameDetails);

  //Game title
  const titleBlock = document.createElement("h2");
  titleBlock.className = "gameInfo";
  gameDetails.append(title);
  titleBlock.textContent = title;

  const [ char1, char2 ] = characters || [];
  console.log( char1 + ': is the first character');

  //Game type, Created By, Developer
  ["gameType", "createdBy", "developer","characters"].forEach((className) => {
    const element = document.createElement("div");
    element.className = className;
    gameDetails.appendChild(element);
    element.textContent =
      className === "gameType" ? `Type: ${type}`:
      className === "createdBy" ? `Creator: ${created}`:
      className === "developer" ? `Developer: ${developer}`:
      className === "characters" && characters ? `Characters: ${char1}, ${char2}`:"";
  });

  // Release date
  const releaseDate = document.createElement("div");
  releaseDate.className = "releaseDate";
  gameDetails.appendChild(releaseDate);
  releaseDate.textContent = `Released: ${release}`;
});
