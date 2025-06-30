function setupHoverGlow(wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  const glow = wrapper.querySelector(".glow-cursor");
  const border = wrapper.querySelector(".glow-border");

  if (!wrapper || !glow || !border) return;

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.opacity = "1";

    const edgeThreshold = 25;
    const nearEdge =
      x < edgeThreshold || x > rect.width - edgeThreshold ||
      y < edgeThreshold || y > rect.height - edgeThreshold;

    border.style.opacity = nearEdge ? "1" : "0";
  });

  wrapper.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
    border.style.opacity = "0";
  });
}

// ✅ Activate the effect for your card wrapper(s)
document.addEventListener("DOMContentLoaded", () => {
  setupHoverGlow(".hover-wrapper");
  setupHoverGlow(".hover-wrapper-2");
});
