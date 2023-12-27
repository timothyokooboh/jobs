import { colors } from "~/constants";

export const generateRandomColors = () => {
  return colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1) + 0)];
};
