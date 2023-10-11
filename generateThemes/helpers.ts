import { Shade, Variant } from "./types";
import { defaultTheme, lightTheme } from "./colors";

export function generateColorPalette(shade?: Shade) {
  const basePalette =
    shade === "light" ? lightTheme.editor : defaultTheme.editor;

  return {
    basePalette: basePalette,
    breadcrumbs:
      shade === "light" ? lightTheme.breadcrumbs : defaultTheme.breadcrumbs,
    colorPalette:
      shade === "light"
        ? lightTheme.syntax.default
        : defaultTheme.syntax.default,
    lightColorPalette:
      shade === "light" ? lightTheme.syntax.light : defaultTheme.syntax.light,
    darkColorPalette:
      shade === "light" ? lightTheme.syntax.dark : defaultTheme.syntax.dark,
    primaryBgColor:
      shade === "dark" ? basePalette.backgroundDark : basePalette.background,
    secondaryBgColor:
      shade === "dark" ? basePalette.background : basePalette.backgroundDark,
  };
}

export const alpha = (color: string, value: number) => {
  return `${color}${value * 100}`;
};

export function getLoadingColor(startColorName: Variant, shade?: Shade) {
  const colorPalette =
    shade === "light" ? lightTheme.syntax.default : defaultTheme.syntax.default;

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
