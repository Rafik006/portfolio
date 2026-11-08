// three.js pinned to 0.134 for Vanta. Vanta's birds effect still reads BufferAttribute.length,
// which three deprecated with a console.warn on every frame. The getter is not configurable,
// so the only clean fix is to drop that single message.
import * as THREE from "three";

const DEPRECATED = "THREE.BufferAttribute: .length has been deprecated";
const warn = console.warn.bind(console);
console.warn = (...args) => {
  if (typeof args[0] === "string" && args[0].startsWith(DEPRECATED)) return;
  warn(...args);
};

export default THREE;
