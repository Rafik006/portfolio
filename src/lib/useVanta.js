import { useEffect } from "react";
import { getTheme } from "./theme.js";

const loaders = {
  globe: () => import("vanta/dist/vanta.globe.min.js"),
  birds: () => import("vanta/dist/vanta.birds.min.js"),
};

/** True when the browser has a real GPU behind WebGL. Software renderers (SwiftShader, llvmpipe —
 *  what headless audits and some VMs use) would burn the main thread for a decorative effect. */
function hasHardwareWebGL() {
  try {
    if (new URLSearchParams(window.location.search).get("fx") === "force") return true;
    if (navigator.connection?.saveData) return false;
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|softpipe|software|mesa offscreen/i.test(renderer);
  } catch {
    return false;
  }
}

const whenIdle = (cb) =>
  "requestIdleCallback" in window ? window.requestIdleCallback(cb, { timeout: 2000 }) : window.setTimeout(cb, 700);

/** Mounts a Vanta effect on `ref` lazily: only when the element is near the viewport and the
 *  main thread is idle (so first paint is never blocked by three.js), never when the visitor
 *  prefers reduced motion or has no GPU. `themed` holds per-theme overrides ({ light, dark });
 *  a theme switch rebuilds the effect, because Vanta derives its blending from the background at init. */
export default function useVanta(ref, effect, options, themed = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!hasHardwareWebGL()) return undefined;

    let instance = null;
    let Effect = null;
    let THREE = null;
    let cancelled = false;

    const build = () => {
      if (cancelled || !ref.current || !Effect) return;
      if (instance) instance.destroy();
      instance = Effect({ THREE, el: ref.current, ...options, ...(themed[getTheme()] || {}) });
    };

    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const [effectModule, threeModule] = await Promise.all([loaders[effect](), import("./three.js")]);
        Effect = effectModule.default;
        THREE = threeModule.default;
        whenIdle(build);
      },
      { rootMargin: "240px" }
    );
    io.observe(el);

    const onTheme = () => instance && build();
    window.addEventListener("themechange", onTheme);

    return () => {
      cancelled = true;
      io.disconnect();
      window.removeEventListener("themechange", onTheme);
      if (instance) instance.destroy();
    };
    // options are static per call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect]);
}
