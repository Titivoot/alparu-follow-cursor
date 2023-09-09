// oneko.js: https://github.com/adryd325/oneko.js

var alparu_image =
  "data:image/png;base64,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";

(function oneko() {
  const nekoEl = document.createElement("div");
  let nekoPosX = 32;
  let nekoPosY = 32;
  let mousePosX = 0;
  let mousePosY = 0;
  const isReduced =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  if (isReduced) {
    return;
  }

  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;
  const nekoSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function create() {
    nekoEl.id = "alparu";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.backgroundImage = `url('${alparu_image}')`;
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.minWidth = "0";
    nekoEl.style.padding = "0";
    nekoEl.style.margin = "0";
    nekoEl.style.zIndex = 999999;

    document.body.appendChild(nekoEl);

    document.onmousemove = (event) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    window.onekoInterval = setInterval(frame, 100);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    // every ~ 20 seconds
    if (
      idleTime > 10 &&
      Math.floor(Math.random() * 200) == 0 &&
      idleAnimation == null
    ) {
      let avalibleIdleAnimations = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) {
        avalibleIdleAnimations.push("scratchWallW");
      }
      if (nekoPosY < 32) {
        avalibleIdleAnimations.push("scratchWallN");
      }
      if (nekoPosX > window.innerWidth - 32) {
        avalibleIdleAnimations.push("scratchWallE");
      }
      if (nekoPosY > window.innerHeight - 32) {
        avalibleIdleAnimations.push("scratchWallS");
      }
      idleAnimation =
        avalibleIdleAnimations[
          Math.floor(Math.random() * avalibleIdleAnimations.length)
        ];
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;
    const diffX = nekoPosX - mousePosX;
    const diffY = nekoPosY - mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite("alert", 0);
      // count down after being alerted before moving
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;

    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  chrome.storage.local.get("checked", ({ checked }) => {
    if (typeof checked === "undefined") {
      chrome.storage.local.set({ checked: true });
      location.reload();
    }

    if (checked) {
      create();
    }
  });
})();
