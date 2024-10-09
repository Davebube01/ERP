// vantawaves.js
let vantaEffect = null;

export function initVantaWaves() {
  if (typeof window !== 'undefined' && window.VANTA) {
    vantaEffect = window.VANTA.WAVES({
      el: "#vanta-waves",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  }
}

export function destroyVantaWaves() {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
}