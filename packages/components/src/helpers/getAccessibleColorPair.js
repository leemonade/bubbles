/**
 * Calculates the luminance of an RGB color.
 * @param {string} color - A hex color value (e.g., '#ffffff').
 * @returns {number} The luminance value.
 */
export const getLuminance = (color) => {
  const rgb = color
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16) / 255)
    .map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

/**
 * Determines if a color is too bright and returns an appropriate color based on accessibility.
 * @param {string} color - The input color in hex format (e.g., '#ffffff').
 * @param {string} lightColor - The color to return if the input color is dark enough.
 * @param {string} darkColor - The color to return if the input color is almost white (too bright).
 * @returns {string} The appropriate color based on the input color's brightness.
 */
export const getAccessibleColorPair = (color, lightColor, darkColor) => {
  const luminanceThreshold = 0.179; // Adjust this threshold based on accessibility needs
  const colorLuminance = getLuminance(color);
  return colorLuminance > luminanceThreshold ? darkColor : lightColor;
};
