import game from "./gameState.js";

const TICK_RATE = 3000;

async function init() {
  console.log("starting game");

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