import { Shade, Variant } from "./types";
import { defaultTheme } from "./colors";

export function generateColorPalette(shade?: Shade) {
  const basePalette = defaultTheme.editor;

  return {
    basePalette: basePalette,
    breadcrumbs: defaultTheme.breadcrumbs,
    colorPalette: defaultTheme.syntax.default,
    lightColorPalette: defaultTheme.syntax.light,
    darkColorPalette: defaultTheme.syntax.dark,
    primaryBgColor:
      shade === "dark" ? basePalette.backgroundDark : basePalette.background,
    secondaryBgColor:
      shade === "dark" ? basePalette.background : basePalette.backgroundDark,
  };
}

export const alpha = (color: string, value: number) => {
  return `${color}${value * 100}`;
};

export function getLoadingColor(startColorName: Variant) {
  const colorPalette = defaultTheme.syntax.default;

  const colorMap = {
    lapis: colorPalette.aquamarine,
    amethyst: colorPalette.lapis,
    ruby: colorPalette.amber,
    amber: colorPalette.ruby,
    peridot: colorPalette.aquamarine,
    aquamarine: colorPalette.lapis,
    quartz: colorPalette.lapis,
  };

  return colorMap[startColorName];
}
