import { Shade, Variant } from "./types";
import { defaultTheme, lightTheme } from "./colors";

export const italicAttributes = [
  "COFFEESCRIPT.CLASS_NAME",
  "CONDITIONALLY_NOT_COMPILED",
  "CONSOLE_USER_INPUT",
  "CONSTRUCTOR_CALL_ATTRIBUTES",
  "CSS.COLOR",
  "CSS.FUNCTION",
  "CSS.IDENT",
  "CSS.IMPORTANT",
  "CSS.KEYWORD",
  "CSS.PROPERTY_NAME",
  "CSS.URL",
  "CUSTOM_KEYWORD1_ATTRIBUTES",
  "CUSTOM_KEYWORD2_ATTRIBUTES",
  "DEFAULT_KEYWORD",
  "CUSTOM_KEYWORD3_ATTRIBUTES",
  "CUSTOM_KEYWORD4_ATTRIBUTES",
  "Clojure Literal",
  "DEBUGGER_INLINED_VALUES",
  "DEBUGGER_INLINED_VALUES_EXECUTION_LINE",
  "DEBUGGER_INLINED_VALUES_MODIFIED",
  "DEFAULT_BLOCK_COMMENT",
  "DEFAULT_CLASS_NAME",
  "DEFAULT_DOC_COMMENT",
  "DEFAULT_DOC_COMMENT_TAG",
  "DEFAULT_FUNCTION_CALL",
  "DEFAULT_FUNCTION_DECLARATION",
  "DEFAULT_GLOBAL_VARIABLE",
  "DEFAULT_INTERFACE_NAME",
  "DEFAULT_LINE_COMMENT",
  "DEFAULT_METADATA",
  "DEFAULT_PARAMETER",
  "DJANGO_TAG_NAME",
  "FIRST SYMBOL IN LIST",
  "FOLLOWED_HYPERLINK_ATTRIBUTES",
  "GHERKIN_OUTLINE_PARAMETER_SUBSTITUTION",
  "HYPERLINK_ATTRIBUTES",
  "IVAR",
  "JADE_STATEMENTS",
  "KOTLIN_DYNAMIC_FUNCTION_CALL",
  "KOTLIN_DYNAMIC_PROPERTY_CALL",
  "LESS_VARIABLE",
  "MACRONAME",
  "MARKDOWN_CODE_SPAN",
  "MARKDOWN_LINK_TITLE",
  "OC.MESSAGE_ARGUMENT",
  "OC.METHOD_DECLARATION",
  "OC.PROPERTY",
  "OC.STRUCT_LIKE",
  "OC.TYPEDEF",
  "PY.BUILTIN_NAME",
  "PY.KEYWORD_ARGUMENT",
  "PY.PREDEFINED_DEFINITION",
  "PY.PREDEFINED_USAGE",
  "PY.SELF_PARAMETER",
  "REST.EXPLICIT",
  "REST.FIELD",
  "ReSharper.IL_TARGET_CODE_LABEL",
  "SASS_MIXIN",
  "SLIM_FILTER",
  "TODO_DEFAULT_ATTRIBUTES",
  "TS.MODULE_NAME",
  "VELOCITY_KEYWORD",
  "XPATH.KEYWORD",
  "com.plan9.LABEL",
  "org.rust.LIFETIME",
  "org.rust.TYPE_ALIAS",
  "XML_ATTRIBUTE_NAME",
];

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
