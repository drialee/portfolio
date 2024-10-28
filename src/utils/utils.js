// Helper function to convert HEX color to RGBA
export const hexToRgba = (hex, alpha) => {
  // Logic for hex to rgba conversion
  // Assuming you have this logic somewhere in your code, here's an example implementation:
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits hex
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits hex
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `${r}, ${g}, ${b}, ${alpha}`;
};

// turn hex into opacity 0.3 hex
export const hexWithOpacity = (hex, opacity) => {
  // Remove the hash at the start if it's there
  hex = hex.replace("#", "");

  // If the hex is shorthand (3 digits), expand it to 6 digits
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convert the opacity (0 to 1) to a two-digit hex code
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");

  // Return the hex color with the alpha value appended
  return `#${hex}${alpha}`;
};

// Global function for border style
export const getBorderStyle = (isHovered, color) => {
  return {
    borderRadius: "10px",
    border: isHovered ? `4px solid ${color}` : "2px transparent",
    boxShadow: isHovered
      ? `0px 0px 4px rgba(${hexToRgba(color, 0.5)})`
      : "none",
    backgroundColor: `rgba(${hexToRgba(color, 0.3)})`,
  };
};

export const Tag = (isHovered, color) => {
  return {
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    border: `2.5px solid ${color}`,
    backgroundColor: "white",
  };
};
