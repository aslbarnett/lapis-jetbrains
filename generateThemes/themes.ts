import { BaseVariant, Shade, Theme, Variant } from "./types";

const themeMap = [
  { label: "lapis", color: "lapis" },
  { label: "lapis-amethyst", color: "amethyst" },
  { label: "lapis-ruby", color: "ruby" },
  { label: "lapis-amber", color: "amber" },
  { label: "lapis-peridot", color: "peridot" },
  { label: "lapis-aquamarine", color: "aquamarine" },
  { label: "lapis-quartz", alias: "lapis-onyx", color: "quartz" },
];

const variants = ["default", "light", "italic"];

export const themes: Array<Theme> = [
  ...themeMap
    .map(({ label, color }) => {
      return variants.map((variant) => ({
        name: `${label}${variant === "default" ? "" : `-${variant}`}`,
        baseVariant: "default" as BaseVariant,
        variant: color as Variant,
        ...(variant.includes("light") && { shade: "light" as Shade }),
        italics: variant.includes("italic"),
      }));
    })
    .reduce((acc, curr) => [...acc, ...curr], []),
];
