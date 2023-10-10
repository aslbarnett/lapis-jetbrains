import { Theme } from "./types";
import { uiTemplate } from "./template";
import { writeFile, readFile } from "fs";
import { themes } from "./themes";
import { parseString, Builder } from "xml2js";
import { generateColorPalette } from "./helpers";

function createTheme({ name, baseVariant, variant, shade }: Theme) {
  const themeName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const template = uiTemplate({ baseVariant, variant, name: themeName });

  writeFile(
    `../src/main/resources/theme/${themeName.split(" ").join("")}.theme.json`,
    JSON.stringify(template),
    (error) => {
      if (error) {
        console.log("There was an unexpected error: ", error);
      }
    },
  );

  const palette: any = generateColorPalette(shade);

  const keyMap: any = {
    variant: palette.colorPalette[variant],
    breadcrumbVariant: palette.breadcrumbs[variant],
  };

  // XML template
  readFile("./template.xml", (err, data) => {
    if (err) {
      console.error("Error reading XML file:", err);
      return;
    }

    parseString(data, (parseErr, result) => {
      if (parseErr) {
        console.error("Error parsing XML data:", parseErr);
        return;
      }

      const copyResult = { ...result };

      // Update scheme
      copyResult.scheme["$"].name = themeName;
      copyResult.scheme["$"].parent_scheme =
        shade === "light" ? "Default" : "Darcula";

      // Update colors
      copyResult.scheme.colors[0].option.forEach((opt: any, index: number) => {
        const optionValue = opt["$"].value;

        if (optionValue === "") {
          return;
        }

        const keys = optionValue.split(".");
        const firstKey = keys[0];
        const firstKeyColor = keyMap[firstKey]
          ? keyMap[firstKey]
          : palette[firstKey];

        const color =
          keys.length === 1 ? firstKeyColor : palette[firstKey][keys[1]];

        copyResult.scheme.colors[0].option[index]["$"].value = color.slice(1);
      });

      // Update attributes
      copyResult.scheme.attributes[0].option.forEach(
        (opt: any, index: number) => {
          const optionValue = opt.value;

          if (optionValue === undefined) {
            return;
          }

          if (optionValue[0] === "") {
            return;
          }

          const optionArray = optionValue[0].option;

          optionArray.forEach((optEl: any, arrIndex: number) => {
            const arrValue = optEl["$"].value;
            if (!isNaN(arrValue)) {
              return;
            }

            const keys = arrValue.split(".");
            const firstKey = keys[0];
            const firstKeyColor = keyMap[firstKey]
              ? keyMap[firstKey]
              : palette[firstKey];

            const color =
              keys.length === 1 ? firstKeyColor : palette[firstKey][keys[1]];

            copyResult.scheme.attributes[0].option[index].value[0].option[
              arrIndex
            ]["$"].value = color.slice(1);
          });
        },
      );

      // Build XML
      const builder = new Builder();
      const updatedXml = builder.buildObject(copyResult);

      // Write to file
      writeFile(
        `../src/main/resources/theme/${themeName.split(" ").join("")}.xml`,
        updatedXml,
        (error) => {
          if (error) {
            console.log("There was an unexpected error: ", error);
          }
        },
      );
    });
  });
}

themes.forEach((theme) => createTheme(theme));
