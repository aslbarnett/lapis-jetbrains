import { BaseVariant, Theme, Variant } from "./types";

const themeMap = [
  { label: "lapis", color: "lapis" },
  { label: "lapis-amethyst", color: "amethyst" },
  { label: "lapis-ruby", color: "ruby" },
  { label: "lapis-amber", color: "amber" },
  { label: "lapis-peridot", color: "peridot" },
  { label: "lapis-aquamarine", color: "aquamarine" },
  { label: "lapis-quartz", alias: "lapis-onyx", color: "quartz" },
];

const variants = ["default"];

export const themes: Array<Theme> = [
  ...themeMap
    .map(({ label, color }) => {
      return variants.map(() => ({
        name: label,
        baseVariant: "default" as BaseVariant,
        variant: color as Variant,
      }));
    })
    .reduce((acc, curr) => [...acc, ...curr], []),
];
