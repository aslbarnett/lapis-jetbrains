import { Theme } from "./types";
import { alpha, generateColorPalette, getLoadingColor } from "./helpers";

export const uiTemplate = ({ name, variant, shade }: Theme) => {
  const {
    basePalette,
    lightColorPalette,
    darkColorPalette,
    colorPalette,
    primaryBgColor,
    secondaryBgColor,
  } = generateColorPalette(shade);

  return {
    author: "Alex Barnett",
    dark: shade !== "light",
    name: name,
    editorScheme: `/theme/${name.split(" ").join("")}.xml`,
    ui: {
      "*": {
        acceleratorForeground: basePalette.text,
        acceleratorSelectionForeground: basePalette.text,

        background: secondaryBgColor,
        foreground: basePalette.foreground,

        infoForeground: basePalette.foreground,

        selectionBackground: basePalette.selection,
        selectionInactiveBackground: basePalette.selection,
        selectionBackgroundInactive: basePalette.selection,
        selectionForeground: basePalette.foreground,

        disabledBackground: basePalette.selection,
        inactiveBackground: basePalette.selection,

        errorForeground: colorPalette.ruby,

        borderColor: primaryBgColor,
        disabledBorderColor: basePalette.selection,
        focusColor: basePalette.inactive,
        focusedBorderColor: basePalette.inactive,

        separatorColor: secondaryBgColor,
      },

      ActionButton: {
        hoverBackground: basePalette.selection,
        hoverBorderColor: basePalette.selection,
        pressedBackground: basePalette.folder,
        pressedBorderColor: colorPalette[variant],
      },

      Button: {
        arc: 5,
        foreground: colorPalette[variant],
        startBackground: primaryBgColor,
        endBackground: primaryBgColor,
        startBorderColor: primaryBgColor,
        endBorderColor: primaryBgColor,
        shadowColor: "#00000000",
        focusedBorderColor: lightColorPalette[variant],
        default: {
          shadowColor: "#00000000",
          foreground: primaryBgColor,
          startBackground: colorPalette[variant],
          endBackground: colorPalette[variant],
          startBorderColor: colorPalette[variant],
          endBorderColor: colorPalette[variant],
          focusedBorderColor: darkColorPalette[variant],
          focusColor: darkColorPalette[variant],
        },
      },

      Borders: {
        color: primaryBgColor,
        ContrastBorderColor: primaryBgColor,
      },

      ComboBox: {
        nonEditableBackground: primaryBgColor,
        background: primaryBgColor,
        selectionBackground: primaryBgColor,
        ArrowButton: {
          iconColor: colorPalette[variant],
          disabledIconColor: basePalette.inactiveDark,
          nonEditableBackground: primaryBgColor,
        },
      },

      CompletionPopup: {
        selectionBackground: primaryBgColor,
        selectionInactiveBackground: primaryBgColor,
      },

      Component: {
        errorFocusColor: colorPalette.ruby,
        inactiveErrorFocusColor: darkColorPalette.ruby,
        warningFocusColor: colorPalette.amber,
        inactiveWarningFocusColor: darkColorPalette.amber,
      },

      Counter: {
        background: colorPalette[variant],
        foreground: primaryBgColor,
      },

      "DebuggerPopup.borderColor": colorPalette[variant],

      DefaultTabs: {
        underlineColor: colorPalette[variant],
        inactiveUnderlineColor: basePalette.inactive,
        hoverBackground: primaryBgColor,
        underlinedTabForeground: colorPalette[variant],
      },

      DragAndDrop: {
        areaForeground: basePalette.foreground,
        areaBackground: primaryBgColor,
      },

      Editor: {
        background: primaryBgColor,
        foreground: basePalette.foreground,
        shortcutForeground: colorPalette[variant],
      },

      "EditorPane.inactiveBackground": primaryBgColor,

      EditorTabs: {
        underlineColor: colorPalette[variant],
        underlinedTabBackground: primaryBgColor,
        underlinedTabForeground: basePalette.foreground,
        underlineHeight: 3,
      },

      FileColor: {
        Yellow: alpha(colorPalette.amber, 0.1),
        Green: alpha(colorPalette.peridot, 0.1),
        Blue: alpha(colorPalette.lapis, 0.1),
        Violet: alpha(colorPalette.amethyst, 0.1),
        Orange: alpha(darkColorPalette.amber, 0.1),
        Rose: alpha(colorPalette.ruby, 0.1),
      },

      Label: {
        infoForeground: basePalette.foreground,
      },

      Link: {
        activeForeground: colorPalette[variant],
        hoverForeground: colorPalette[variant],
        pressedForeground: colorPalette[variant],
        visitedForeground: colorPalette[variant],
      },

      MainToolbar: {
        inactiveBackground: primaryBgColor,
        background: secondaryBgColor,
        Dropdown: {
          hoverBackground: alpha(basePalette.inactiveDark, 0.6),
        },
      },

      "MenuBar.borderColor": primaryBgColor,

      "Menu.borderColor": primaryBgColor,

      "NavBar.borderColor": primaryBgColor,

      Notification: {
        background: primaryBgColor,
        borderColor: colorPalette.lapis,

        errorForeground: colorPalette.ruby,
        errorBackground: secondaryBgColor,
        errorBorderColor: colorPalette.ruby,

        MoreButton: {
          background: primaryBgColor,
          innerBorderColor: primaryBgColor,
        },

        ToolWindow: {
          informativeForeground: basePalette.foreground,
          informativeBackground: primaryBgColor,
          informativeBorderColor: colorPalette.lapis,

          warningForeground: basePalette.foreground,
          warningBackground: primaryBgColor,
          warningBorderColor: colorPalette.amber,

          errorForeground: basePalette.foreground,
          errorBackground: primaryBgColor,
          errorBorderColor: colorPalette.ruby,
        },
      },

      ParameterInfo: {
        background: primaryBgColor,
        foreground: basePalette.inactive,
        infoForeground: colorPalette.lapis,
        currentParameterForeground: basePalette.foreground,
      },

      Plugins: {
        background: primaryBgColor,
        disabledForeground: basePalette.inactive,
        hoverBackground: basePalette.selection,
        lightSelectionBackground: basePalette.selection,
        tagBackground: colorPalette[variant],
        tagForeground: primaryBgColor,

        Button: {
          installForeground: colorPalette[variant],
          installBorderColor: colorPalette[variant],
          installFillForeground: primaryBgColor,
          installFillBackground: colorPalette[variant],
          updateForeground: primaryBgColor,
          updateBackground: colorPalette[variant],
          updateBorderColor: colorPalette[variant],
        },

        SearchField: {
          background: primaryBgColor,
        },

        "SectionHeader.background": primaryBgColor,

        Tab: {
          selectedForeground: basePalette.foreground,
          selectedBackground: basePalette.selection,
          hoverBackground: basePalette.selection,
        },
      },

      Popup: {
        paintBorder: false,
        "Toolbar.borderColor": colorPalette[variant],
        "Header.activeBackground": primaryBgColor,
        "Header.inactiveBackground": basePalette.selection,
        Advertiser: {
          foreground: colorPalette[variant],
          borderColor: colorPalette[variant],
        },
      },

      ProgressBar: {
        trackColor: primaryBgColor,
        progressColor: colorPalette[variant],
        indeterminateStartColor: colorPalette[variant],
        indeterminateEndColor: getLoadingColor(variant, shade),
        failedColor: colorPalette.ruby,
        passedColor: colorPalette.peridot,
        passedEndColor: colorPalette.amber,
      },

      SearchEverywhere: {
        "Advertiser.foreground": basePalette.foreground,
        "Header.background": primaryBgColor,

        SearchField: {
          background: primaryBgColor,
          borderColor: basePalette.selection,
        },

        Tab: {
          selectedForeground: primaryBgColor,
          selectedBackground: colorPalette[variant],
        },
      },

      SearchMatch: {
        startBackground: colorPalette[variant],
        endBackground: colorPalette[variant],
      },

      SpeedSearch: {
        foreground: basePalette.foreground,
        borderColor: colorPalette[variant],
        background: primaryBgColor,
        errorForeground: colorPalette.ruby,
      },

      TabbedPane: {
        underlineColor: colorPalette[variant],
        contentAreaColor: basePalette.selection,
        hoverColor: basePalette.selection,
      },

      Table: {
        background: primaryBgColor,
        stripeColor: basePalette.selection,
        selectionForeground: basePalette.foreground,
        foreground: basePalette.foreground,
        dropLineColor: basePalette.foreground,
        focusCellForeground: basePalette.foreground,
        gridColor: colorPalette[variant],
        lightSelectionInactiveForeground: basePalette.foreground,
        lightSelectionForeground: basePalette.foreground,
        selectionBackground: basePalette.selection,
        selectionInactiveForeground: basePalette.foreground,
        lightSelectionBackground: basePalette.selection,
        lightSelectionInactiveBackground: basePalette.inactiveDark,
      },

      TextArea: {
        background: primaryBgColor,
        selectionBackground: basePalette.selection,
      },

      TextField: {
        background: primaryBgColor,
        selectionBackground: basePalette.selection,
      },

      ToggleButton: {
        onForeground: basePalette.foreground,
        onBackground: colorPalette[variant],
        offForeground: basePalette.inactive,
        offBackground: basePalette.inactiveDark,
        borderColor: basePalette.selection,
        buttonColor: colorPalette[variant],
      },

      ToolTip: {
        background: primaryBgColor,
      },

      ToolWindow: {
        Button: {
          hoverBackground: basePalette.selection,
          selectedBackground: secondaryBgColor,
          selectedForeground: colorPalette[variant],
        },

        Header: {
          background: secondaryBgColor,
          inactiveBackground: secondaryBgColor,
          borderColor: primaryBgColor,
        },

        HeaderTab: {
          hoverBackground: basePalette.selection,
          hoverInactiveBackground: basePalette.selection,
          selectedInactiveBackground: basePalette.selection,
          underlineHeight: 3,
          underlineColor: colorPalette[variant],
        },
      },

      Tree: {
        selectionBackground: basePalette.selection,
        modifiedItemForeground: colorPalette.lapis,
        rowHeight: 20,
      },

      ValidationTooltip: {
        errorBackground: colorPalette.ruby,
        errorBorderColor: colorPalette.ruby,
        warningBackground: colorPalette.amber,
        warningBorderColor: colorPalette.amber,
      },

      VersionControl: {
        FileHistory: {
          Commit: {
            selectedBranchBackground: basePalette.inactive,
          },
        },

        GitLog: {
          headIconColor: colorPalette.peridot,
          localBranchIconColor: colorPalette.lapis,
          otherIconColor: colorPalette.aquamarine,
          remoteBranchIconColor: colorPalette.ruby,
          tagIconColor: colorPalette.amber,
        },

        HgLog: {
          bookmarkIconColor: colorPalette.amber,
          branchIconColor: colorPalette.lapis,
          closedBranchIconColor: basePalette.inactiveDark,
          headIconColor: colorPalette.peridot,
          localTagIconColor: darkColorPalette.lapis,
          mqTagIconColor: colorPalette.aquamarine,
          tagIconColor: colorPalette.lapis,
          tipIconColor: darkColorPalette.lapis,
        },

        "Log.Commit": {
          currentBranchBackground: primaryBgColor,
          unmatchedForeground: colorPalette.lapis,
        },

        RefLabel: {
          backgroundBrightness: 0.3,
          backgroundBase: colorPalette.lapis,
          foreground: primaryBgColor,
        },
      },

      WelcomeScreen: {
        "Projects.selectionInactiveBackground": basePalette.selection,
        separatorColor: basePalette.selection,
      },
    },
    icons: {
      ColorPalette: {
        "Actions.Blue": colorPalette.lapis,
        "Actions.Green": colorPalette.peridot,
        "Actions.Orange": colorPalette.amber,
        "Actions.Purple": colorPalette.amethyst,
        "Actions.Red": colorPalette.ruby,
        "Actions.Yellow": colorPalette.amber,
        "Actions.Gray": basePalette.inactive,
        "Actions.White": basePalette.foreground,
        "Actions.Black": primaryBgColor,
        "Actions.Grey": basePalette.inactive,
        "Actions.GreyInline.Dark": basePalette.inactive,
        "Actions.GreyInline": basePalette.inactive,
        "Objects.Blue": colorPalette.lapis,
        "Objects.Green": colorPalette.peridot,
        "Objects.GreenAndroid": colorPalette.peridot,
        "Objects.Grey": basePalette.inactive,
        "Objects.Pink": colorPalette.aquamarine,
        "Objects.Purple": colorPalette.amethyst,
        "Objects.Red": colorPalette.ruby,
        "Objects.RedStatus": colorPalette.ruby,
        "Objects.Yellow": colorPalette.amber,
        "Objects.YellowDark": colorPalette.amber,
        "Objects.BlackText": primaryBgColor,
        "Tree.iconColor": basePalette.inactive,
        "Checkbox.Background.Default.Dark": primaryBgColor,
        "Checkbox.Border.Default.Dark": basePalette.inactiveDark,
        "Checkbox.Foreground.Selected.Dark": basePalette.inactive,
        "Checkbox.Focus.Wide.Dark": colorPalette.lapis,
        "Checkbox.Focus.Thin.Default.Dark": colorPalette.lapis,
        "Checkbox.Focus.Thin.Selected.Dark": colorPalette.lapis,
        "Checkbox.Background.Disabled.Dark": secondaryBgColor,
        "Checkbox.Border.Disabled.Dark": basePalette.selection,
        "Checkbox.Foreground.Disabled.Dark": basePalette.inactiveDark,
      },
    },
  };
};
