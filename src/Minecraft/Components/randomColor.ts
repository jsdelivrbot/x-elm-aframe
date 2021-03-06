AFRAME.registerComponent("random-color", {
  dependencies: ["material"],

  init: function(this: AFrame.Component) {
    this.el.setAttribute("material", "color", randomColor());
  }
});

const randomColor = (): string =>
  [
    "#",
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex()
  ].join("");

const randomHex = (): string =>
  "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
