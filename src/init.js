import game from "./gameState.js";
import { TICK_RATE } from "./constants.js";
import initButtons from "./buttons.js";

async function init() {
  console.log("starting game");
  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame); // Browser function - whenever browser has an idle moment nextAnimationFrame is called
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
