export default {
  button: {
    content: {
      color: {
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#343A3F',
            type: 'color',
          },
          down: {
            value: '#4D5358',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#E2FF7A',
            type: 'color',
          },
          down: {
            value: '#E2FF7A',
            type: 'color',
          },
          'default--reverse': {
            value: '#98C200',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          down: {
            value: '#d13b3b',
            type: 'color',
          },
        },
      },
      default: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      hover: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    background: {
      color: {
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#B4E600',
            type: 'color',
          },
          selected: {
            value: '#E2FF7A',
            type: 'color',
          },
          pressed: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          pressed: {
            value: '#ffffff',
            type: 'color',
          },
          down: {
            value: '#0C1F22',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          pressed: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#F8F9FB',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#f7dede',
            type: 'color',
          },
          hover: {
            value: '#d13b3b',
            type: 'color',
          },
          down: {
            value: '#f7dede',
            type: 'color',
          },
        },
      },
    },
    border: {
      color: {
        secondary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#343A3F',
            type: 'color',
          },
          pressed: {
            value: '{global.border.color.primary.strong}',
            type: 'color',
            failedToResolve: true,
          },
          down: {
            value: '#343A3F',
            type: 'color',
          },
        },
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#98C200',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: '#DDE1E6',
            type: 'color',
          },
          hover: {
            value: '#C1C7CD',
            type: 'color',
          },
          down: {
            value: '#C1C7CD',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#f7dede',
            type: 'color',
          },
          hover: {
            value: '#d13b3b',
            type: 'color',
          },
          down: {
            value: '#d13b3b',
            type: 'color',
          },
          'default--reverse': {
            value: '#d13b3b',
            type: 'color',
          },
        },
      },
      width: {
        value: '2px',
        type: 'borderWidth',
      },
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        rounded: {
          value: '99em',
          type: 'borderRadius',
        },
      },
    },
    spacing: {
      padding: {
        vertical: {
          md: {
            value: '8px',
            type: 'spacing',
          },
          sm: {
            value: '4px',
            type: 'spacing',
          },
        },
        horizontal: {
          sm: {
            value: '16px',
            type: 'spacing',
          },
          xs: {
            value: '8px',
            type: 'spacing',
          },
          md: {
            value: '24px',
            type: 'spacing',
          },
        },
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
    shadow: {
      hover: {
        value: {
          x: 0,
          y: 0,
          blur: 4,
          spread: 0,
          color: '#b4e600cc',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
      pressed: {
        value: {
          x: 0,
          y: 0,
          blur: 4,
          spread: 0,
          color: '{global.border.color.primary.strong}',
          type: 'innerShadow',
        },
        type: 'boxShadow',
        failedToResolve: true,
      },
    },
    textDecoration: {
      underLine: {
        value: 'underline',
        type: 'textDecoration',
      },
    },
  },
  buttonText: {
    content: {
      color: {
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#343A3F',
            type: 'color',
          },
          down: {
            value: '#4D5358',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          hover: {
            value: '#b52a2a',
            type: 'color',
          },
          down: {
            value: '#d13b3b',
            type: 'color',
          },
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    background: {
      color: {
        primary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: 'transparent',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#F8F9FB',
            type: 'color',
          },
          down: {
            value: 'transparent',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: 'transparent',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#f0bebe',
            type: 'color',
          },
          down: {
            value: 'transparent',
            type: 'color',
          },
        },
      },
    },
    border: {
      color: {
        primary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#F8F9FB',
            type: 'color',
          },
          down: {
            value: '#F8F9FB',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#f0bebe',
            type: 'color',
          },
          down: {
            value: '#f7dede',
            type: 'color',
          },
        },
      },
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
      },
      width: {
        value: '2px',
        type: 'borderWidth',
      },
    },
    spacing: {
      padding: {
        vertical: {
          md: {
            value: '8px',
            type: 'spacing',
          },
          sm: {
            value: '4px',
            type: 'spacing',
          },
        },
        horizontal: {
          md: {
            value: '24px',
            type: 'spacing',
          },
          sm: {
            value: '16px',
            type: 'spacing',
          },
          xs: {
            value: '8px',
            type: 'spacing',
          },
        },
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
  },
  buttonIcon: {
    content: {
      color: {
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#343A3F',
            type: 'color',
          },
          down: {
            value: '#4D5358',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          'default--reverse': {
            value: '#878D96',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          down: {
            value: '#d13b3b',
            type: 'color',
          },
          'hover--reverse': {
            value: '#b52a2a',
            type: 'color',
          },
        },
      },
    },
    background: {
      color: {
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
          'default--reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover--reverse': {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          'down--reverse': {
            value: 'transparent',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#0C1F22',
            type: 'color',
          },
          hover: {
            value: '#343A3F',
            type: 'color',
          },
          down: {
            value: '#0C1F22',
            type: 'color',
          },
          'default--reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover--reverse': {
            value: '#F8F9FB',
            type: 'color',
          },
          'down--reverse': {
            value: 'transparent',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: '#F8F9FB',
            type: 'color',
          },
          hover: {
            value: '#F2F4F8',
            type: 'color',
          },
          down: {
            value: '#F8F9FB',
            type: 'color',
          },
          'default-reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover-reverse': {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          'down-reverse': {
            value: 'transparent',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#f7dede',
            type: 'color',
          },
          hover: {
            value: '#d13b3b',
            type: 'color',
          },
          down: {
            value: '#f7dede',
            type: 'color',
          },
          'default--reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover--reverse': {
            value: '#f0bebe',
            type: 'color',
          },
          'down--reverse': {
            value: 'transparent',
            type: 'color',
          },
        },
      },
    },
    border: {
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        rounded: {
          value: '99em',
          type: 'borderRadius',
        },
      },
      width: {
        value: '2px',
        type: 'borderWidth',
      },
      color: {
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
          down: {
            value: '#98C200',
            type: 'color',
          },
          'default--reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover--reverse': {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          'down--reverse': {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#343A3F',
            type: 'color',
          },
          down: {
            value: '#343A3F',
            type: 'color',
          },
          'default-reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover-reverse': {
            value: '#F8F9FB',
            type: 'color',
          },
          'down-reverse': {
            value: '#F8F9FB',
            type: 'color',
          },
        },
        terciary: {
          default: {
            value: '#DDE1E6',
            type: 'color',
          },
          hover: {
            value: '#C1C7CD',
            type: 'color',
          },
          down: {
            value: '#C1C7CD',
            type: 'color',
          },
          'default-reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover--reverse': {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          'down--reverse': {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#f7dede',
            type: 'color',
          },
          hover: {
            value: '#d13b3b',
            type: 'color',
          },
          down: {
            value: '#d13b3b',
            type: 'color',
          },
          'default--reverse': {
            value: 'transparent',
            type: 'color',
          },
          'hover--reverse': {
            value: '#f0bebe',
            type: 'color',
          },
          'down--reverse': {
            value: '#f7dede',
            type: 'color',
          },
        },
      },
    },
    spacing: {
      padding: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '6px',
          type: 'spacing',
        },
      },
    },
  },
  buttonAction: {
    content: {
      color: {
        primary: {
          default: {
            value: '#0C1F22',
            type: 'color',
          },
          hover: {
            value: '#B4E600',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
          'default--reverse': {
            value: '#C1C7CD',
            type: 'color',
          },
          'hover--reverse': {
            value: '#ffffff',
            type: 'color',
          },
          'down--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#0C1F22',
            type: 'color',
          },
          hover: {
            value: '#d13b3b',
            type: 'color',
          },
          down: {
            value: '#d13b3b',
            type: 'color',
          },
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '16px',
          fontSize: '12px',
        },
        type: 'typography',
      },
    },
    background: {
      color: {
        primary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#ffffff26',
            type: 'color',
          },
          down: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          'hover--reverse': {
            value: '#0C1F22',
            type: 'color',
          },
          'down--reverse': {
            value: '#878D96',
            type: 'color',
          },
          'hover--reverse-transparent': {
            value: '#ffffff26',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#f7dede',
            type: 'color',
          },
          down: {
            value: '#f7dede',
            type: 'color',
          },
        },
      },
    },
    border: {
      color: {
        primary: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
          'hover--reverse': {
            value: '#4D5358',
            type: 'color',
          },
          'down--reverse': {
            value: '#878D96',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: '#f7dede',
            type: 'color',
          },
          down: {
            value: '#C1C7CD',
            type: 'color',
          },
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        rounded: {
          value: '99em',
          type: 'borderRadius',
        },
      },
    },
    spacing: {
      padding: {
        sm: {
          value: '2px',
          type: 'spacing',
        },
        md: {
          value: '4px',
          type: 'spacing',
        },
      },
      gap: {
        value: '4px',
        type: 'spacing',
      },
    },
  },
  input: {
    content: {
      color: {
        default: {
          value: '#343A3F',
          type: 'color',
        },
        selected: {
          value: '#B4E600',
          type: 'color',
        },
        placeholder: {
          value: '#878D96',
          type: 'color',
        },
        icon: {
          value: '#878D96',
          type: 'color',
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        hover: {
          value: '#F8F9FB',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
        subtle: {
          value: '#DDE1E6',
          type: 'color',
        },
        negative: {
          value: '#d13b3b',
          type: 'color',
        },
      },
      radius: {
        sm: {
          value: '2px',
          type: 'borderRadius',
        },
        md: {
          value: '4px',
          type: 'borderRadius',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
    spacing: {
      padding: {
        vertical: {
          md: {
            value: '8px',
            type: 'spacing',
          },
          sm: {
            value: '3px',
            type: 'spacing',
          },
        },
        horizontal: {
          sm: {
            value: '4px',
            type: 'spacing',
          },
          md: {
            value: '8px',
            type: 'spacing',
          },
        },
        all: {
          value: '12px',
          type: 'spacing',
        },
      },
      gap: {
        none: {
          value: '0px',
          type: 'spacing',
        },
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
      },
    },
  },
  label: {
    spacing: {
      gap: {
        none: {
          value: '0px',
          type: 'spacing',
        },
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
      },
    },
    content: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        subtle: {
          value: '#878D96',
          type: 'color',
        },
      },
      typo: {
        '01': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            lineHeight: '20px',
            fontSize: '14px',
          },
          type: 'typography',
        },
        '02': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '20px',
            fontSize: '14px',
          },
          type: 'typography',
        },
        '03': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '20px',
            fontSize: '14px',
          },
          type: 'typography',
        },
      },
    },
  },
  helpText: {
    content: {
      color: {
        default: {
          value: '#878D96',
          type: 'color',
        },
        emphasis: {
          value: '#4D5358',
          type: 'color',
        },
        phatic: {
          value: '#d13b3b',
          type: 'color',
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          fontSize: '10px',
          lineHeight: '14px',
        },
        type: 'typography',
      },
    },
  },
  radio: {
    size: {
      sm: {
        value: '10px',
        type: 'sizing',
      },
      md: {
        value: '20px',
        type: 'sizing',
      },
    },
    content: {
      color: {
        text: {
          value: '#4D5358',
          type: 'color',
        },
        selected: {
          value: '#2F463F',
          type: 'color',
        },
        default: {
          value: 'transparent',
          type: 'color',
        },
        icon: {
          value: '#C1C7CD',
          type: 'color',
        },
        hover: {
          value: '#878D96',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        selected: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        'default--reverse': {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        'selected--reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        value: '99em',
        type: 'borderRadius',
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
        hover: {
          value: '#2F463F',
          type: 'color',
        },
        selected: {
          value: '#2F463F',
          type: 'color',
        },
      },
    },
    spacing: {
      gap: {
        value: '8px',
        type: 'spacing',
      },
      paddings: {
        md: {
          value: '16px',
          type: 'spacing',
        },
        lg: {
          value: '24px',
          type: 'spacing',
        },
      },
    },
    shadow: {
      hover: {
        value: {
          x: 0,
          y: 0,
          blur: 2,
          spread: 0,
          color: '#2f463fcc',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
    },
    label: {
      content: {
        typo: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '20px',
            fontSize: '14px',
          },
          type: 'typography',
        },
      },
    },
  },
  checkbox: {
    size: {
      md: {
        value: '20px',
        type: 'sizing',
      },
    },
    content: {
      color: {
        default: {
          value: 'transparent',
          type: 'color',
        },
        selected: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        contrast: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        hover: {
          value: '#98C200',
          type: 'color',
        },
        selected: {
          value: '#B4E600',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
        hover: {
          value: '#98C200',
          type: 'color',
        },
        selected: {
          value: '#B4E600',
          type: 'color',
        },
      },
      radius: {
        value: '2px',
        type: 'borderRadius',
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
    spacing: {
      gap: {
        value: '8px',
        type: 'spacing',
      },
      paddings: {
        md: {
          value: '16px',
          type: 'spacing',
        },
        lg: {
          value: '24px',
          type: 'spacing',
        },
      },
    },
  },
  toggle: {
    size: {
      inner: {
        value: '8 px',
        type: 'sizing',
      },
      width: {
        value: '32px',
        type: 'sizing',
      },
    },
    spacing: {
      padding: {
        value: '6px 4px',
        type: 'spacing',
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
    content: {
      color: {
        default: {
          value: '#B4E600',
          type: 'color',
        },
        selected: {
          value: '#ffffff',
          type: 'color',
        },
        hover: {
          value: '#E2FF7A',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        unselected: {
          default: {
            value: '#DDE1E6',
            type: 'color',
          },
          hover: {
            value: '#E2FF7A',
            type: 'color',
          },
        },
        selected: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
          hover: {
            value: '#98C200',
            type: 'color',
          },
        },
      },
    },
    border: {
      radius: {
        value: '99em',
        type: 'borderRadius',
      },
    },
  },
  badge: {
    content: {
      typo: {
        caption: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            fontSize: 10,
            lineHeight: 14,
            textCase: 'uppercase',
          },
          type: 'typography',
        },
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '16px',
            fontSize: 12,
          },
          type: 'typography',
        },
        'sm--bold': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            lineHeight: '16px',
            fontSize: '12px',
          },
          type: 'typography',
        },
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '14px',
          },
          type: 'typography',
        },
        'md--bold': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            lineHeight: '24px',
            fontSize: '14px',
          },
          type: 'typography',
        },
      },
      color: {
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
        default: {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        neutral: {
          default: {
            value: '#F2F4F8',
            type: 'color',
          },
          hover: {
            value: '#DDE1E6',
            type: 'color',
          },
          white: {
            value: '#ffffff',
            type: 'color',
          },
          grey: {
            value: '#F2F4F8',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        primary: {
          default: {
            value: '#B4E600',
            type: 'color',
          },
        },
        phatic: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          'default--warning': {
            value: '#f39c12',
            type: 'color',
          },
        },
        info: {
          default: {
            value: '#307AE8',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#0C1F22',
            type: 'color',
          },
        },
      },
    },
    border: {
      radius: {
        value: '99em',
        type: 'borderRadius',
      },
      'md-radius': {
        value: '4px',
        type: 'borderRadius',
      },
      color: {
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
        default: {
          value: '#DDE1E6',
          type: 'color',
        },
        white: {
          value: '#878D96',
          type: 'color',
        },
        grey: {
          value: '#C1C7CD',
          type: 'color',
        },
        hover: {
          value: '#878D96',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
    size: {
      sm: {
        value: '8px',
        type: 'sizing',
      },
      md: {
        value: '12px',
        type: 'sizing',
      },
      lg: {
        value: '16px',
        type: 'sizing',
      },
      xlg: {
        value: '32px',
        type: 'sizing',
      },
      '2xlg': {
        value: '48px',
        type: 'sizing',
      },
    },
    spacing: {
      padding: {
        '3xsm': {
          value: '2px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '12px',
          type: 'spacing',
        },
        sm: {
          value: '4px',
          type: 'spacing',
        },
      },
    },
  },
  avatar: {
    size: {
      xsm: {
        value: '16px',
        type: 'sizing',
      },
      sm: {
        value: '24px',
        type: 'sizing',
      },
      md: {
        value: '32px',
        type: 'sizing',
      },
      xmd: {
        value: '48px',
        type: 'sizing',
      },
      lg: {
        value: '56px',
        type: 'sizing',
      },
      xlg: {
        value: '120px',
        type: 'sizing',
      },
    },
    content: {
      typo: {
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            fontSize: 12,
            textCase: 'uppercase',
            lineHeight: 16,
          },
          type: 'typography',
        },
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            fontSize: 16,
            textCase: 'uppercase',
          },
          type: 'typography',
        },
        lg: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            fontSize: 23,
            textCase: 'uppercase',
          },
          type: 'typography',
        },
        xlg: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            fontSize: '56px',
            textCase: 'uppercase',
          },
          type: 'typography',
        },
      },
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        10: {
          value: '#EC62D8',
          type: 'color',
        },
        '01': {
          value: '#DC5571',
          type: 'color',
        },
        '02': {
          value: '#F26262',
          type: 'color',
        },
        '03': {
          value: '#E36B2B',
          type: 'color',
        },
        '04': {
          value: '#E8C642',
          type: 'color',
        },
        '05': {
          value: '#96D47F',
          type: 'color',
        },
        '06': {
          value: '#50B579',
          type: 'color',
        },
        '07': {
          value: '#4F96FF',
          type: 'color',
        },
        '08': {
          value: '#7449F4',
          type: 'color',
        },
        '09': {
          value: '#B462F2',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        circle: {
          value: '50%',
          type: 'borderRadius',
        },
        md: {
          value: '4px',
          type: 'borderRadius',
        },
      },
    },
  },
  colorPicker: {
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        rounded: {
          value: '99em',
          type: 'borderRadius',
        },
      },
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
    spacing: {
      gap: {
        value: '16px',
        type: 'spacing',
      },
      padding: {
        value: '16px',
        type: 'spacing',
      },
    },
    size: {
      md: {
        value: '16px',
        type: 'sizing',
      },
    },
  },
  calendar: {
    content: {
      typo: {
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: '24px',
            fontSize: '14px',
          },
          type: 'typography',
        },
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '16px',
            fontSize: '12px',
          },
          type: 'typography',
        },
      },
      color: {
        calendarButton: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        weekName: {
          default: {
            value: '#C1C7CD',
            type: 'color',
          },
        },
        weekday: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#B4E600',
            type: 'color',
          },
          down: {
            value: '#ffffff',
            type: 'color',
          },
          'default--weekend': {
            value: '#d13b3b',
            type: 'color',
          },
        },
      },
    },
    spacing: {
      padding: {
        vertical: {
          value: '8px',
          type: 'spacing',
        },
        horizontal: {
          value: '8px',
          type: 'spacing',
        },
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
    border: {
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        rounded: {
          value: '99em',
          type: 'borderRadius',
        },
      },
    },
    background: {
      color: {
        calendarButton: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          hover: {
            value: '#F8F9FB',
            type: 'color',
          },
          down: {
            value: '#F2F4F8',
            type: 'color',
          },
          'default--reverse': {
            value: '#B4E600',
            type: 'color',
          },
          'hover--reverse': {
            value: '#98C200',
            type: 'color',
          },
          'down--reverse': {
            value: '#B4E600',
            type: 'color',
          },
        },
        weekday: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
          'default--alt': {
            value: '#E2FF7A',
            type: 'color',
          },
        },
        range: {
          default: {
            value: 'transparent',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          down: {
            value: '#B4E600',
            type: 'color',
          },
        },
      },
    },
    size: {
      md: {
        value: '36px',
        type: 'sizing',
      },
    },
  },
  popover: {
    background: {
      color: {
        enabled: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        vertical: {
          xsm: {
            value: '4px',
            type: 'spacing',
          },
          sm: {
            value: '8px',
            type: 'spacing',
          },
          md: {
            value: '16px',
            type: 'spacing',
          },
        },
        horizontal: {
          xsm: {
            value: '4px',
            type: 'spacing',
          },
          sm: {
            value: '8px',
            type: 'spacing',
          },
          md: {
            value: '16px',
            type: 'spacing',
          },
        },
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
    border: {
      color: {
        enabled: {
          value: '#F8F9FB',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
    },
  },
  drawer: {
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        muted: {
          value: '#F2F4F8',
          type: 'color',
        },
      },
    },
    spacing: {
      gap: {
        xxs: {
          value: '4px',
          type: 'spacing',
        },
        xs: {
          value: '8px',
          type: 'spacing',
        },
        sm: {
          value: '16px',
          type: 'spacing',
        },
        md: {
          value: '32px',
          type: 'spacing',
        },
      },
      padding: {
        value: '16px',
        type: 'spacing',
      },
    },
    shadow: {
      left: {
        value: '{core.shadow.400}',
        type: 'boxShadow',
        failedToResolve: true,
      },
      top: {
        value: [
          {
            x: 0,
            y: 100,
            blur: 60,
            spread: 0,
            color: '#dde1e614',
            type: 'dropShadow',
          },
          {
            x: 0,
            y: 32,
            blur: 32,
            spread: 0,
            color: '#1a202b0d',
            type: 'dropShadow',
          },
        ],
        type: 'boxShadow',
      },
    },
    content: {
      color: {
        default: {
          value: '#343A3F',
          type: 'color',
        },
        icon: {
          value: '#4D5358',
          type: 'color',
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '24px',
          fontSize: '20px',
        },
        type: 'typography',
      },
      'typo-regular': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      'typo-bold': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 600,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    border: {
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
  },
  link: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '24px',
          fontSize: '14px',
          textDecoration: 'underline',
        },
        type: 'typography',
      },
      color: {
        default: {
          value: '#B4E600',
          type: 'color',
        },
        hover: {
          value: '#98C200',
          type: 'color',
        },
        down: {
          value: '#E2FF7A',
          type: 'color',
        },
        'default--reverse': {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        horizontal: {
          value: '2px',
          type: 'spacing',
        },
      },
      gap: {
        value: '4px',
        type: 'spacing',
      },
    },
    background: {
      color: {
        default: {
          value: 'transparent',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        down: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        value: '2px',
        type: 'borderRadius',
      },
    },
  },
  divider: {
    size: {
      sm: {
        value: '1px',
        type: 'sizing',
      },
    },
    background: {
      color: {
        default: {
          value: '#DDE1E6',
          type: 'color',
        },
      },
    },
  },
  tab: {
    content: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        hover: {
          value: '#343A3F',
          type: 'color',
        },
        down: {
          value: '#B4E600',
          type: 'color',
        },
      },
      typo: {
        sm: {
          value: '{global.content.typo.body.sm}',
          type: 'typography',
        },
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    border: {
      color: {
        hover: {
          value: '#DDE1E6',
          type: 'color',
        },
        selected: {
          value: '#B4E600',
          type: 'color',
        },
        content: {
          value: '#DDE1E6',
          type: 'color',
        },
        default: {
          value: 'transparent',
          type: 'color',
        },
        down: {
          value: '#B4E600',
          type: 'color',
        },
      },
      radius: {
        value: '2px',
        type: 'borderRadius',
      },
      width: {
        sm: {
          value: '{global.border.width.sm}',
          type: 'borderWidth',
        },
        md: {
          value: '{global.border.width.md}',
          type: 'borderWidth',
        },
        value: '4px',
        type: 'borderWidth',
      },
    },
    background: {
      color: {
        default: {
          value: 'transparent',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        selected: {
          value: 'transparent',
          type: 'color',
        },
        down: {
          value: 'transparent',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        value: '16px',
        type: 'spacing',
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
      vertical: {
        md: {
          value: '16px',
          type: 'spacing',
        },
      },
      horizontal: {
        xsm: {
          value: '8px',
          type: 'spacing',
        },
      },
    },
  },
  segmentedControl: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        hover: {
          value: '#343A3F',
          type: 'color',
        },
        down: {
          value: '#B4E600',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        value: '16px',
        type: 'spacing',
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
    background: {
      color: {
        default: {
          value: '#F8F9FB',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        selected: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
      color: {
        default: {
          value: '#F8F9FB',
          type: 'color',
        },
        hover: {
          value: '#C1C7CD',
          type: 'color',
        },
        selected: {
          value: '#B4E600',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
  },
  dropzone: {
    spacing: {
      padding: {
        value: '24px',
        type: 'spacing',
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
    content: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        hover: {
          value: '#98C200',
          type: 'color',
        },
        'default--subtle': {
          value: '#878D96',
          type: 'color',
        },
        'default--icon': {
          value: '#E2FF7A',
          type: 'color',
        },
        'check--icon': {
          value: '#5cbc6a',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#E2FF7A',
          type: 'color',
        },
        hover: {
          value: '#98C200',
          type: 'color',
        },
      },
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
  },
  modal: {
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        value: '16px',
        type: 'spacing',
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
    border: {
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
      width: {
        value: '2px',
        type: 'borderWidth',
      },
    },
  },
  dropdown: {
    content: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--alt': {
          value: '#878D96',
          type: 'color',
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '24px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      'typo--medium': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '24px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    spacing: {
      padding: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
      },
      gap: {
        '1xsm': {
          value: '{global.spacing.gap.1xsm}',
          type: 'spacing',
        },
        md: {
          value: '{global.spacing.gap.md}',
          type: 'spacing',
        },
        value: '8px',
        type: 'spacing',
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        down: {
          value: '#E2FF7A',
          type: 'color',
        },
        active: {
          value: '#F2F4F8',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
      },
    },
    shadow: {
      default: {
        value: {
          x: 0,
          y: 10,
          blur: 36,
          spread: 0,
          color: '#C1C7CD',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
    },
  },
  score: {
    content: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        muted: {
          value: '#878D96',
          type: 'color',
        },
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
      typo: {
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '16px',
            fontSize: '12px',
            textCase: 'none',
          },
          type: 'typography',
        },
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            lineHeight: '20px',
            fontSize: '14px',
            textCase: 'none',
          },
          type: 'typography',
        },
        'lg--bold': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            lineHeight: '24px',
            fontSize: '16px',
            textCase: 'none',
          },
          type: 'typography',
        },
        lg: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '16px',
            textCase: 'none',
            letterSpacing: '',
            paragraphSpacing: '24px',
          },
          type: 'typography',
        },
        xlg: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '32px',
            fontSize: '23px',
            textCase: 'none',
          },
          type: 'typography',
        },
        '2xlg': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 600,
            lineHeight: '40px',
            fontSize: '29px',
            textCase: 'none',
          },
          type: 'typography',
        },
      },
    },
    background: {
      color: {
        neutral: {
          default: {
            value: '#F2F4F8',
            type: 'color',
          },
          emphasis: {
            value: '#DDE1E6',
            type: 'color',
          },
          subtle: {
            value: '#F8F9FB',
            type: 'color',
          },
          hover: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          active: {
            value: '#ffffff',
            type: 'color',
          },
        },
        positive: {
          default: {
            value: '#5cbc6a',
            type: 'color',
          },
          emphasis: {
            value: '#368442',
            type: 'color',
          },
          muted: {
            value: '#c9e9cd',
            type: 'color',
          },
        },
        attention: {
          default: {
            value: '#f39c12',
            type: 'color',
          },
          emphasis: {
            value: '#ba7609',
            type: 'color',
          },
          muted: {
            value: '#fef3e1',
            type: 'color',
          },
        },
        negative: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          emphasis: {
            value: '#b52a2a',
            type: 'color',
          },
          muted: {
            value: '#f0bebe',
            type: 'color',
          },
        },
      },
    },
    border: {
      color: {
        neutral: {
          default: {
            value: '#F2F4F8',
            type: 'color',
          },
          emphasis: {
            value: '#DDE1E6',
            type: 'color',
          },
          active: {
            value: '#B4E600',
            type: 'color',
          },
        },
        positive: {
          default: {
            value: '#5cbc6a',
            type: 'color',
          },
          emphasis: {
            value: '#368442',
            type: 'color',
          },
          muted: {
            value: '#c9e9cd',
            type: 'color',
          },
        },
        attention: {
          default: {
            value: '#f39c12',
            type: 'color',
          },
          emphasis: {
            value: '#ba7609',
            type: 'color',
          },
          muted: {
            value: '#fef3e1',
            type: 'color',
          },
        },
        negative: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          emphasis: {
            value: '#b52a2a',
            type: 'color',
          },
          muted: {
            value: '#f0bebe',
            type: 'color',
          },
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        lg: {
          value: '8px',
          type: 'borderRadius',
        },
      },
    },
    spacing: {
      padding: {
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
        xlg: {
          value: '32px',
          type: 'spacing',
        },
      },
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
  },
  tree: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '24px',
        },
        type: 'typography',
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    spacing: {
      gap: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
      },
      padding: {
        vertical: {
          value: '3px',
          type: 'spacing',
        },
        horizontal: {
          value: '8px',
          type: 'spacing',
        },
      },
    },
    border: {
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        hover: {
          value: '#DDE1E6',
          type: 'color',
        },
        'default-alt': {
          value: '#B4E600',
          type: 'color',
        },
        'hover-alt': {
          value: '#878D96',
          type: 'color',
        },
      },
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        hover: {
          value: '#F8F9FB',
          type: 'color',
        },
      },
    },
  },
  breadcrumbs: {
    content: {
      typo: {
        default: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: 20,
            fontSize: 14,
          },
          type: 'typography',
        },
        hover: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: 20,
            fontSize: 14,
            textDecoration: 'underline',
          },
          type: 'typography',
        },
        current: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: 20,
            fontSize: 14,
          },
          type: 'typography',
        },
      },
      color: {
        default: {
          value: '#0C1F22',
          type: 'color',
        },
        hover: {
          value: '#B4E600',
          type: 'color',
        },
        'default--alt': {
          value: '#343A3F',
          type: 'color',
        },
      },
    },
  },
  breadcrumb: {
    spacing: {
      gap: {
        value: '8px',
        type: 'spacing',
      },
    },
  },
  pager: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: 20,
          fontSize: 14,
        },
        type: 'typography',
      },
      'typo--bold': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: 20,
          fontSize: 14,
        },
        type: 'typography',
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: 'transparent',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        down: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        selected: {
          value: 'transparent',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: 'transparent',
          type: 'color',
        },
        hover: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        down: {
          value: '#C1C7CD',
          type: 'color',
        },
        selected: {
          value: '#E2FF7A',
          type: 'color',
        },
      },
      radius: {
        value: '99em',
        type: 'borderRadius',
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
    size: {
      md: {
        value: '48px',
        type: 'sizing',
      },
    },
    spacing: {
      gap: {
        lg: {
          value: '16px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
      },
    },
  },
  tooltip: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: 20,
          fontSize: 14,
        },
        type: 'typography',
      },
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        'default-reverse': {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--alt': {
          value: '#B4E600',
          type: 'color',
        },
        'default-reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        vertical: {
          sm: {
            value: '4px',
            type: 'spacing',
          },
          md: {
            value: '12px',
            type: 'spacing',
          },
        },
        horizontal: {
          sm: {
            value: '8px',
            type: 'spacing',
          },
          md: {
            value: '12px',
            type: 'spacing',
          },
        },
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
    border: {
      radius: {
        value: '2px',
        type: 'borderRadius',
      },
    },
  },
  banner: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '24px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      'typo--bold': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '24px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        success: {
          value: '#368442',
          type: 'color',
        },
        error: {
          value: '#b52a2a',
          type: 'color',
        },
        warning: {
          value: '#ba7609',
          type: 'color',
        },
        info: {
          value: '#98C200',
          type: 'color',
        },
      },
    },
    spacing: {
      padding: {
        vertical: {
          xsm: {
            value: '4px',
            type: 'spacing',
          },
          sm: {
            value: '8px',
            type: 'spacing',
          },
          md: {
            value: '12px',
            type: 'spacing',
          },
        },
        horizontal: {
          sm: {
            value: '16px',
            type: 'spacing',
          },
          md: {
            value: '24px',
            type: 'spacing',
          },
        },
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
    background: {
      color: {
        success: {
          value: '#e4f4e6',
          type: 'color',
        },
        error: {
          value: '#f7dede',
          type: 'color',
        },
        warning: {
          value: '#fef3e1',
          type: 'color',
        },
        info: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
    },
  },
  chip: {
    content: {
      typo: {
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '16px',
            fontSize: '12px',
          },
          type: 'typography',
        },
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '14px',
          },
          type: 'typography',
        },
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#F2F4F8',
          type: 'color',
        },
        hover: {
          value: '#DDE1E6',
          type: 'color',
        },
        'default--alt': {
          value: 'transparent',
          type: 'color',
        },
        'hover--alt': {
          value: '#F8F9FB',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
        hover: {
          value: '#878D96',
          type: 'color',
        },
        'default--alt': {
          value: '#878D96',
          type: 'color',
        },
        'hover--alt': {
          value: '#4D5358',
          type: 'color',
        },
        empty: {
          value: 'transparent',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      radius: {
        value: '99em',
        type: 'borderRadius',
      },
    },
    spacing: {
      padding: {
        horizontal: {
          sm: {
            value: '8px',
            type: 'spacing',
          },
        },
        vertical: {
          sm: {
            value: '3px',
            type: 'spacing',
          },
        },
      },
    },
  },
  toast: {
    spacing: {
      padding: {
        value: '16px',
        type: 'spacing',
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
    content: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        'default--reverse': {
          value: '#4D5358',
          type: 'color',
        },
        'default--alt': {
          value: '#C1C7CD',
          type: 'color',
        },
        'default--alt--reverse': {
          value: '#878D96',
          type: 'color',
        },
      },
      typo: {
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '14px',
          },
          type: 'typography',
        },
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: 24,
            fontSize: 14,
          },
          type: 'typography',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    border: {
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--reverse': {
          value: '#C1C7CD',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
  },
  menu: {
    spacing: {
      padding: {
        xms: {
          value: '4px',
          type: 'spacing',
        },
        xsm: {
          value: '8px',
          type: 'spacing',
        },
        sm: {
          value: '12px',
          type: 'spacing',
        },
        md: {
          value: '16px',
          type: 'spacing',
        },
        xlslg: {
          value: '28px',
          type: 'spacing',
        },
        lg: {
          value: '24px',
          type: 'spacing',
        },
      },
      gap: {
        value: '12px',
        type: 'spacing',
      },
    },
    content: {
      color: {
        main: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#4D5358',
            type: 'color',
          },
          active: {
            value: '#343A3F',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        sub: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#4D5358',
            type: 'color',
          },
          active: {
            value: '#343A3F',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
      },
      'typo--regular': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 400,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      'typo--medium': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
      typo: {
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: 16,
          },
          type: 'typography',
        },
      },
    },
    background: {
      color: {
        main: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          'default--dark': {
            value: '{global.background.color.primary.dark}',
            type: 'color',
            failedToResolve: true,
          },
          hover: {
            value: '#F8F9FB',
            type: 'color',
          },
          'hover--dark': {
            value: '#4A6000',
            type: 'color',
          },
          active: {
            value: '{global.background.color.primary.verySubtle}',
            type: 'color',
            failedToResolve: true,
          },
          'active--dark': {
            value: '#98C200',
            type: 'color',
          },
        },
        sub: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          'default---dark': {
            value: '{global.background.color.primary.dark}',
            type: 'color',
            failedToResolve: true,
          },
          hover: {
            value: '#F8F9FB',
            type: 'color',
          },
          'hover--dark': {
            value: '#4A6000',
            type: 'color',
          },
          active: {
            value: '{global.background.color.primary.verySubtle}',
            type: 'color',
            failedToResolve: true,
          },
          'active--dark': {
            value: '#98C200',
            type: 'color',
          },
        },
      },
    },
    size: {
      md: {
        value: '48px',
        type: 'sizing',
      },
      lg: {
        value: '56px',
        type: 'sizing',
      },
    },
    border: {
      color: {
        main: {
          active: {
            value: '#B4E600',
            type: 'color',
          },
          default: {
            value: '#DDE1E6',
            type: 'color',
          },
        },
        sub: {
          default: {
            value: '#C1C7CD',
            type: 'color',
          },
          'default--dark': {
            value: '#878D96',
            type: 'color',
          },
          hover: {
            value: '#C1C7CD',
            type: 'color',
          },
          active: {
            value: '#B4E600',
            type: 'color',
          },
        },
      },
    },
    shadow: {
      value: [
        {
          color: '#21272a0d',
          type: 'dropShadow',
          x: 32,
          y: 0,
          blur: 32,
          spread: 0,
        },
      ],
      type: 'boxShadow',
    },
    footer: {
      value: '{core.shadow.200}',
      type: 'boxShadow',
      failedToResolve: true,
    },
    modal: {
      value: '{core.shadow.300}',
      type: 'boxShadow',
      failedToResolve: true,
    },
  },
  stepper: {
    content: {
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 20,
        },
        type: 'typography',
      },
      'typo-pending': {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 500,
          fontSize: 14,
          lineHeight: 20,
        },
        type: 'typography',
      },
      color: {
        pending: {
          value: '{global.content.color.secondary.mutedSuble}',
          type: 'color',
          failedToResolve: true,
        },
        'pending-text': {
          value: '#0C1F22',
          type: 'color',
        },
        active: {
          value: '#B4E600',
          type: 'color',
        },
        completed: {
          value: '#343A3F',
          type: 'color',
        },
        default: {
          value: '#878D96',
          type: 'color',
        },
      },
    },
    spacing: {
      gap: {
        value: '4px',
        type: 'spacing',
      },
      xsm: {
        value: '6px',
        type: 'spacing',
      },
      padding: {
        xsm: {
          value: '8px',
          type: 'spacing',
        },
        md: {
          value: '16px',
          type: 'spacing',
        },
      },
    },
    background: {
      color: {
        pending: {
          value: '{global.background.color.primary.verySubtle}',
          type: 'color',
          failedToResolve: true,
        },
        active: {
          value: '{global.background.color.primary.verySubtle}',
          type: 'color',
          failedToResolve: true,
        },
        'active--reverse': {
          value: '#DDE1E6',
          type: 'color',
        },
        completed: {
          value: '#B4E600',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
        active: {
          value: '#C1C7CD',
          type: 'color',
        },
        'active--reverse': {
          value: '#ffffff',
          type: 'color',
        },
        completed: {
          value: '#B4E600',
          type: 'color',
        },
      },
      radius: {
        value: '50%',
        type: 'borderRadius',
      },
      md: {
        value: '4px',
        type: 'borderRadius',
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
    },
    size: {
      sm: {
        value: '12px',
        type: 'sizing',
      },
      md: {
        value: '20px',
        type: 'sizing',
      },
      xlg: {
        value: '24px',
        type: 'sizing',
      },
    },
  },
  accordion: {
    content: {
      typo: {
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: '24px',
            fontSize: '16px',
          },
          type: 'typography',
        },
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '20px',
            fontSize: '14px',
          },
          type: 'typography',
        },
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        'default--alt': {
          value: '#F8F9FB',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#DDE1E6',
          type: 'color',
        },
      },
      width: {
        value: '1px',
        type: 'borderWidth',
      },
      radius: {
        value: '8px',
        type: 'borderRadius',
      },
    },
    spacing: {
      padding: {
        md: {
          value: '16px',
          type: 'spacing',
        },
        lg: {
          value: '24px',
          type: 'spacing',
        },
      },
      gap: {
        value: '16px',
        type: 'spacing',
      },
    },
  },
  table: {
    content: {
      typo: {
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: 20,
            fontSize: 14,
          },
          type: 'typography',
        },
        'md--bold': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: 20,
            fontSize: 14,
          },
          type: 'typography',
        },
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: 16,
            fontSize: 12,
          },
          type: 'typography',
        },
      },
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#DDE1E6',
          type: 'color',
        },
        emphasis: {
          value: '#878D96',
          type: 'color',
        },
      },
      width: {
        value: '2px',
        type: 'borderWidth',
      },
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
    },
    spacing: {
      padding: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
      },
      gaps: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
      },
    },
  },
  timeline: {
    content: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
      typo: {
        value: {
          fontFamily: 'Albert Sans',
          fontWeight: 600,
          lineHeight: '20px',
          fontSize: '14px',
        },
        type: 'typography',
      },
    },
    background: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    spacing: {
      gap: {
        value: '4px',
        type: 'spacing',
      },
      padding: {
        value: '24px',
        type: 'spacing',
      },
    },
    border: {
      color: {
        default: {
          value: '#4D5358',
          type: 'color',
        },
        'default--reverse': {
          value: '#ffffff',
          type: 'color',
        },
      },
      width: {
        sm: {
          value: '1px',
          type: 'borderWidth',
        },
        md: {
          value: '2px',
          type: 'borderWidth',
        },
      },
    },
  },
  swiper: {
    size: {
      md: {
        value: '48px',
        type: 'sizing',
      },
    },
    content: {
      color: {
        default: {
          value: '#878D96',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#F2F4F8',
          type: 'color',
        },
        hover: {
          value: '#DDE1E6',
          type: 'color',
        },
      },
    },
    spacing: {
      gap: {
        value: '16px',
        type: 'spacing',
      },
      padding: {
        value: '48px',
        type: 'spacing',
      },
    },
    border: {
      radius: {
        value: '2px',
        type: 'borderRadius',
      },
    },
  },
  comunica: {
    content: {
      typo: {
        '01': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: 24,
            fontSize: 14,
          },
          type: 'typography',
        },
        '02': {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: 24,
            fontSize: 14,
          },
          type: 'typography',
        },
      },
      color: {
        default: {
          value: '#343A3F',
          type: 'color',
        },
        'default--alt': {
          value: '#C1C7CD',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#F8F9FB',
          type: 'color',
        },
        muted: {
          value: '#ffffff',
          type: 'color',
        },
        emphasis: {
          value: '#F2F4F8',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        default: {
          value: '#C1C7CD',
          type: 'color',
        },
        'default--alt': {
          value: '#98C200',
          type: 'color',
        },
      },
      width: {
        sm: {
          value: '1px',
          type: 'borderWidth',
        },
        md: {
          value: '2px',
          type: 'borderWidth',
        },
      },
      radius: {
        value: '4px',
        type: 'borderRadius',
      },
    },
    spacing: {
      padding: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
        xlg: {
          value: '96px',
          type: 'spacing',
        },
      },
      gap: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
      },
    },
  },
  menuLibrary: {
    content: {
      color: {
        main: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          hover: {
            value: '#4D5358',
            type: 'color',
          },
          active: {
            value: '#B4E600',
            type: 'color',
          },
        },
        sub: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          active: {
            value: '#ffffff',
            type: 'color',
          },
        },
      },
    },
    background: {
      color: {
        main: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          active: {
            value: '{global.background.color.primary.verySubtle}',
            type: 'color',
            failedToResolve: true,
          },
        },
        sub: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          active: {
            value: '#ffffff',
            type: 'color',
          },
        },
      },
    },
  },
  headerCreate: {
    spacing: {
      padding: {
        lg: {
          value: '24px',
          type: 'spacing',
        },
      },
    },
    border: {
      width: {
        sm: {
          value: '1px',
          type: 'borderWidth',
        },
      },
    },
  },
  HeaderCreate: {
    content: {
      color: {
        default: {
          value: '#343A3F',
          type: 'color',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        hover: {
          value: '#DDE1E6',
          type: 'color',
        },
      },
    },
  },
  cardLibrary: {
    spacing: {
      padding: {
        horizontal: {
          xsm: {
            value: '8px',
            type: 'spacing',
          },
          sm: {
            value: '12px',
            type: 'spacing',
          },
          md: {
            value: '16px',
            type: 'spacing',
          },
          '2xsm': {
            value: '4px',
            type: 'spacing',
          },
        },
        vertical: {
          xsm: {
            value: '8px',
            type: 'spacing',
          },
          sm: {
            value: '12px',
            type: 'spacing',
          },
          md: {
            value: '16px',
            type: 'spacing',
          },
          '2xsm': {
            value: '4px',
            type: 'spacing',
          },
        },
      },
      gap: {
        sm: {
          value: '4px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
        xlg: {
          value: '24px',
          type: 'spacing',
        },
      },
    },
    content: {
      color: {
        emphasis: {
          value: '#2F463F',
          type: 'color',
        },
        default: {
          value: '#4D5358',
          type: 'color',
        },
        subje: {
          value: '#343A3F',
          type: 'color',
        },
        muted: {
          value: '#878D96',
          type: 'color',
        },
        icon: {
          value: '#878D96',
          type: 'color',
        },
      },
      typo: {
        lg: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            lineHeight: '24px',
            fontSize: '18px',
          },
          type: 'typography',
        },
        md: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: 20,
            fontSize: 14,
          },
          type: 'typography',
        },
        sm: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '16px',
            fontSize: '12px',
          },
          type: 'typography',
        },
      },
    },
    background: {
      color: {
        default: {
          value: '#ffffff',
          type: 'color',
        },
        cover: {
          value: '#F2F4F8',
          type: 'color',
        },
      },
    },
    border: {
      color: {
        defaut: {
          value: '#878D96',
          type: 'color',
        },
        subtle: {
          value: '#DDE1E6',
          type: 'color',
        },
      },
      radius: {
        sm: {
          value: '2px',
          type: 'borderRadius',
        },
        circle: {
          value: '50%',
          type: 'borderRadius',
        },
      },
      width: {
        sm: {
          value: '1px',
          type: 'borderWidth',
        },
        lg: {
          value: '4px',
          type: 'borderWidth',
        },
      },
    },
    shadow: {
      hover: {
        value: {
          x: 0,
          y: 10,
          blur: 36,
          spread: 0,
          color: '#C1C7CD',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
    },
  },
  buttonIconCard: {
    spacing: {
      padding: {
        sm: {
          value: '2px',
          type: 'spacing',
        },
      },
    },
    content: {
      color: {
        primary: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          hover: {
            value: '#ffffff',
            type: 'color',
          },
          down: {
            value: '#ffffff',
            type: 'color',
          },
        },
      },
    },
    background: {
      color: {
        primary: {
          default: {
            value: '#4d535866',
            type: 'color',
          },
          hover: {
            value: '#4d5358b3',
            type: 'color',
          },
          down: {
            value: '#4D5358',
            type: 'color',
          },
        },
      },
    },
    border: {
      radius: {
        md: {
          value: '4px',
          type: 'borderRadius',
        },
      },
    },
  },
  ButtonIconCard: {
    blur: {
      default: {
        value: '4px',
        type: 'dimension',
      },
    },
  },
  buttonIconLike: {
    content: {
      color: {
        primary: {
          default: {
            value: '#878D96',
            type: 'color',
          },
          hover: {
            value: '#FF5470',
            type: 'color',
          },
          active: {
            value: '#FF5470',
            type: 'color',
          },
        },
      },
    },
  },
  global: {
    shadow: {
      100: {
        value: [
          {
            color: '#dde1e614',
            type: 'dropShadow',
            x: 0,
            y: 2,
            blur: 0,
            spread: 0,
          },
          {
            color: '#1a202b14',
            type: 'dropShadow',
            x: 0,
            y: 10,
            blur: 36,
            spread: 0,
          },
        ],
        type: 'boxShadow',
      },
      200: {
        value: [
          {
            color: '#dde1e629',
            type: 'dropShadow',
            x: 0,
            y: 2,
            blur: 0,
            spread: 0,
          },
          {
            color: '#1a202b1f',
            type: 'dropShadow',
            x: 0,
            y: 10,
            blur: 36,
            spread: 0,
          },
        ],
        type: 'boxShadow',
      },
      300: {
        value: [
          {
            color: '#dde1e63d',
            type: 'dropShadow',
            x: 0,
            y: 2,
            blur: 0,
            spread: 0,
          },
          {
            color: '#1a202b29',
            type: 'dropShadow',
            x: 0,
            y: 10,
            blur: 36,
            spread: 0,
          },
        ],
        type: 'boxShadow',
      },
      400: {
        value: [
          {
            color: '#dde1e614',
            type: 'dropShadow',
            x: -100,
            y: 0,
            blur: 60,
            spread: 0,
          },
          {
            color: '#1a202b0d',
            type: 'dropShadow',
            x: -32,
            y: 0,
            blur: 32,
            spread: 0,
          },
        ],
        type: 'boxShadow',
      },
    },
    focus: {
      default: {
        value: {
          x: 0,
          y: 0,
          blur: 0,
          spread: 2,
          color: '#B4E600',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
    },
    content: {
      color: {
        text: {
          emphasis: {
            value: '#343A3F',
            type: 'color',
          },
          default: {
            value: '#4D5358',
            type: 'color',
          },
          muted: {
            value: '#878D96',
            type: 'color',
          },
          subtle: {
            value: '#C1C7CD',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        icon: {
          emphasis: {
            value: '#4D5358',
            type: 'color',
          },
          default: {
            value: '#878D96',
            type: 'color',
          },
          muted: {
            value: '#C1C7CD',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        primary: {
          subtle: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          muted: {
            value: '#E2FF7A',
            type: 'color',
          },
          default: {
            value: '#B4E600',
            type: 'color',
          },
          emphasis: {
            value: '#98C200',
            type: 'color',
          },
          strong: {
            value: '#4A6000',
            type: 'color',
          },
        },
        secondary: {
          muted: {
            value: '#0C1F22',
            type: 'color',
          },
          default: {
            value: '#4D5358',
            type: 'color',
          },
          emphasis: {
            value: '#343A3F',
            type: 'color',
          },
          subtle: {
            value: '#F2F4F8',
            type: 'color',
          },
        },
        negative: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          emphasis: {
            value: '#b52a2a',
            type: 'color',
          },
          muted: {
            value: '#e07c7c',
            type: 'color',
          },
          subtle: {
            value: '#f7dede',
            type: 'color',
          },
        },
        positive: {
          default: {
            value: '#5cbc6a',
            type: 'color',
          },
          emphasis: {
            value: '#368442',
            type: 'color',
          },
          muted: {
            value: '#aedeb5',
            type: 'color',
          },
          subtle: {
            value: '#e4f4e6',
            type: 'color',
          },
        },
        transparent: {
          value: 'transparent',
          type: 'color',
        },
        disabled: {
          value: '#C1C7CD',
          type: 'color',
        },
        attention: {
          default: {
            value: '#f39c12',
            type: 'color',
          },
          emphasis: {
            value: '#ba7609',
            type: 'color',
          },
          muted: {
            value: '#f8c16b',
            type: 'color',
          },
          subtle: {
            value: '#fef3e1',
            type: 'color',
          },
        },
        tertiary: {
          default: {
            value: '#2F463F',
            type: 'color',
          },
        },
        accent: {
          default: {
            value: '#FF5470',
            type: 'color',
          },
        },
      },
      typo: {
        heading: {
          xlg: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '32px',
              fontSize: '26px',
            },
            type: 'typography',
          },
          'xlg--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '32px',
              fontSize: '26px',
            },
            type: 'typography',
          },
          lg: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '28px',
              fontSize: '23px',
            },
            type: 'typography',
          },
          'lg--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '28px',
              fontSize: '23px',
            },
            type: 'typography',
          },
          md: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '20px',
            },
            type: 'typography',
          },
          'md--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '20px',
            },
            type: 'typography',
          },
          sm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          'sm--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          xsm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
          'xsm--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
        },
        body: {
          lg: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '24px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          'lg--medium': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          'lg--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          md: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
          'md--medium': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
          'md--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
          sm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
          'sm--medium': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
          'sm--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
          xsm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '16px',
              fontSize: '12px',
            },
            type: 'typography',
          },
          'xsm--semiBold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '16px',
              fontSize: '12px',
            },
            type: 'typography',
          },
          'lg--bold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          'md--bold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
          'sm--bold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
        },
        caption: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '14px',
          },
          type: 'typography',
        },
      },
      typoMobile: {
        heading: {
          xlg: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '32px',
              fontSize: '26px',
            },
            type: 'typography',
          },
          lg: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '28px',
              fontSize: '23px',
            },
            type: 'typography',
          },
          md: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '20px',
            },
            type: 'typography',
          },
          sm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '20px',
              fontSize: '18px',
            },
            type: 'typography',
          },
          xsm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 600,
              lineHeight: '16px',
              fontSize: '16px',
            },
            type: 'typography',
          },
        },
        body: {
          lg: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
          'lg--bold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '24px',
              fontSize: '16px',
            },
            type: 'typography',
          },
          md: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
          'md--bold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '20px',
              fontSize: '14px',
            },
            type: 'typography',
          },
          sm: {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 400,
              lineHeight: '16px',
              fontSize: '12px',
            },
            type: 'typography',
          },
          'sm--bold': {
            value: {
              fontFamily: 'Albert Sans',
              fontWeight: 500,
              lineHeight: '16px',
              fontSize: '12px',
            },
            type: 'typography',
          },
        },
        caption: {
          value: {
            fontFamily: 'Albert Sans',
            fontWeight: 400,
            lineHeight: '16px',
            fontSize: '12px',
          },
          type: 'typography',
        },
      },
    },
    background: {
      color: {
        surface: {
          default: {
            value: '#ffffff',
            type: 'color',
          },
          emphasis: {
            value: '#DDE1E6',
            type: 'color',
          },
          muted: {
            value: '#F2F4F8',
            type: 'color',
          },
          subtle: {
            value: '#F8F9FB',
            type: 'color',
          },
          'default--reverse': {
            value: '#4D5358',
            type: 'color',
          },
        },
        primary: {
          subtle: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          muted: {
            value: '#E2FF7A',
            type: 'color',
          },
          default: {
            value: '#B4E600',
            type: 'color',
          },
          emphasis: {
            value: '#98C200',
            type: 'color',
          },
          strong: {
            value: '#4A6000',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#0C1F22',
            type: 'color',
          },
          emphasis: {
            value: '#343A3F',
            type: 'color',
          },
          muted: {
            value: '#878D96',
            type: 'color',
          },
          subtle: {
            value: '#F8F9FB',
            type: 'color',
          },
        },
        accent: {
          default: {
            value: '#FF5470',
            type: 'color',
          },
          emphasis: {
            value: '#ebeb00',
            type: 'color',
          },
          subtle: {
            value: '#ffffe0',
            type: 'color',
          },
        },
        negative: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          emphasis: {
            value: '#b52a2a',
            type: 'color',
          },
          muted: {
            value: '#f0bebe',
            type: 'color',
          },
          subtle: {
            value: '#f7dede',
            type: 'color',
          },
        },
        positive: {
          default: {
            value: '#5cbc6a',
            type: 'color',
          },
          emphasis: {
            value: '#368442',
            type: 'color',
          },
          muted: {
            value: '#c9e9cd',
            type: 'color',
          },
          subtle: {
            value: '#e4f4e6',
            type: 'color',
          },
        },
        transparent: {
          value: 'transparent',
          type: 'color',
        },
        disabled: {
          value: '#F2F4F8',
          type: 'color',
        },
        overlay: {
          default: {
            value: '#f2f4f880',
            type: 'color',
          },
        },
        attention: {
          default: {
            value: '#f39c12',
            type: 'color',
          },
          emphasis: {
            value: '#ba7609',
            type: 'color',
          },
          muted: {
            value: '#fbdaa6',
            type: 'color',
          },
          subtle: {
            value: '#fef3e1',
            type: 'color',
          },
        },
        info: {
          default: {
            value: '#307AE8',
            type: 'color',
          },
          emphasis: {
            value: '#155AC1',
            type: 'color',
          },
          muted: {
            value: '#B1CDF6',
            type: 'color',
          },
          subtle: {
            value: '#E8F0FC',
            type: 'color',
          },
        },
        tertiary: {
          default: {
            value: '#2F463F',
            type: 'color',
          },
        },
      },
    },
    border: {
      width: {
        sm: {
          value: '1px',
          type: 'borderWidth',
        },
        md: {
          value: '2px',
          type: 'borderWidth',
        },
        lg: {
          value: '4px',
          type: 'borderWidth',
        },
      },
      radius: {
        sm: {
          value: '2px',
          type: 'borderRadius',
        },
        md: {
          value: '4px',
          type: 'borderRadius',
        },
        lg: {
          value: '8px',
          type: 'borderRadius',
        },
        rounded: {
          value: '99em',
          type: 'borderRadius',
        },
        circle: {
          value: '50%',
          type: 'borderRadius',
        },
      },
      color: {
        line: {
          default: {
            value: '#878D96',
            type: 'color',
          },
          emphasis: {
            value: '#4D5358',
            type: 'color',
          },
          muted: {
            value: '#C1C7CD',
            type: 'color',
          },
          subtle: {
            value: '#DDE1E6',
            type: 'color',
          },
          'default--reverse': {
            value: '#ffffff',
            type: 'color',
          },
        },
        primary: {
          subtle: {
            value: 'hsla(216,80%,119%,1)',
            type: 'color',
          },
          muted: {
            value: '#E2FF7A',
            type: 'color',
          },
          default: {
            value: '#B4E600',
            type: 'color',
          },
          emphasis: {
            value: '#98C200',
            type: 'color',
          },
        },
        secondary: {
          default: {
            value: '#4D5358',
            type: 'color',
          },
          emphasis: {
            value: '#343A3F',
            type: 'color',
          },
          muted: {
            value: '#878D96',
            type: 'color',
          },
          subtle: {
            value: '#F8F9FB',
            type: 'color',
          },
        },
        negative: {
          default: {
            value: '#d13b3b',
            type: 'color',
          },
          emphasis: {
            value: '#b52a2a',
            type: 'color',
          },
          muted: {
            value: '#f0bebe',
            type: 'color',
          },
          subtle: {
            value: '#f7dede',
            type: 'color',
          },
        },
        positive: {
          default: {
            value: '#5cbc6a',
            type: 'color',
          },
          emphasis: {
            value: '#368442',
            type: 'color',
          },
          muted: {
            value: '#c9e9cd',
            type: 'color',
          },
          subtle: {
            value: '#e4f4e6',
            type: 'color',
          },
        },
        transparent: {
          value: 'transparent',
          type: 'color',
        },
        disabled: {
          default: {
            value: '#C1C7CD',
            type: 'color',
          },
          muted: {
            value: '#f0f4f9',
            type: 'color',
          },
        },
        overlay: {
          default: {
            value: '#f2f4f880',
            type: 'color',
          },
        },
        attention: {
          default: {
            value: '#f39c12',
            type: 'color',
          },
          emphasis: {
            value: '#ba7609',
            type: 'color',
          },
          muted: {
            value: '#fbdaa6',
            type: 'color',
          },
          subtle: {
            value: '#fef3e1',
            type: 'color',
          },
        },
        leemons: {
          default: {
            value: '{core.color.leemons.500}',
            type: 'color',
            failedToResolve: true,
          },
        },
        info: {
          default: {
            value: '#307AE8',
            type: 'color',
          },
          emphasis: {
            value: '#155AC1',
            type: 'color',
          },
          muted: {
            value: '#B1CDF6',
            type: 'color',
          },
          subtle: {
            value: '#E8F0FC',
            type: 'color',
          },
        },
        tertiary: {
          default: {
            value: '#2F463F',
            type: 'color',
          },
        },
      },
    },
    spacing: {
      padding: {
        '3xsm': {
          value: '2px',
          type: 'spacing',
        },
        '2xsm': {
          value: '4px',
          type: 'spacing',
        },
        '1xsm': {
          value: '6px',
          type: 'spacing',
        },
        xsm: {
          value: '8px',
          type: 'spacing',
        },
        sm: {
          value: '12px',
          type: 'spacing',
        },
        md: {
          value: '16px',
          type: 'spacing',
        },
        lg: {
          value: '24px',
          type: 'spacing',
        },
        xlslg: {
          value: '28px',
          type: 'spacing',
        },
        xlg: {
          value: '32px',
          type: 'spacing',
        },
        '2xlg': {
          value: '40px',
          type: 'spacing',
        },
        '3xlg': {
          value: '48px',
          type: 'spacing',
        },
      },
      gap: {
        none: {
          value: '0px',
          type: 'spacing',
        },
        sm: {
          value: '4px',
          type: 'spacing',
        },
        xsm: {
          value: '6px',
          type: 'spacing',
        },
        md: {
          value: '8px',
          type: 'spacing',
        },
        slg: {
          value: '12px',
          type: 'spacing',
        },
        lg: {
          value: '16px',
          type: 'spacing',
        },
        xlg: {
          value: '24px',
          type: 'spacing',
        },
        xxlg: {
          value: '32px',
          type: 'spacing',
        },
      },
    },
    icon: {
      size: {
        xsm: {
          value: '8px',
          type: 'sizing',
        },
        sm: {
          value: '12px',
          type: 'sizing',
        },
        md: {
          value: '16px',
          type: 'sizing',
        },
        lg: {
          value: '20px',
          type: 'sizing',
        },
        xlg: {
          value: '24px',
          type: 'sizing',
        },
        '2xlg': {
          value: '32px',
          type: 'sizing',
        },
      },
    },
    control: {
      size: {
        50: {
          value: '8 px',
          type: 'sizing',
        },
        100: {
          value: '16px',
          type: 'sizing',
        },
        200: {
          value: '20px',
          type: 'sizing',
        },
        300: {
          value: '24px',
          type: 'sizing',
        },
        400: {
          value: '28px',
          type: 'sizing',
        },
        500: {
          value: '32px',
          type: 'sizing',
        },
        600: {
          value: '36px',
          type: 'sizing',
        },
        700: {
          value: '40px',
          type: 'sizing',
        },
        800: {
          value: '44px',
          type: 'sizing',
        },
        900: {
          value: '48px',
          type: 'sizing',
        },
        1000: {
          value: '56px',
          type: 'sizing',
        },
      },
    },
    hover: {
      default: {
        value: {
          x: 0,
          y: 0,
          blur: 4,
          spread: 0,
          color: '#98c200cc',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
    },
  },
  core: {
    color: {
      black: {
        value: '#1a202b',
        type: 'color',
      },
      white: {
        value: '#ffffff',
        type: 'color',
      },
      neutral: {
        50: {
          value: '#F8F9FB',
          type: 'color',
        },
        75: {
          value: '#f0f4f9',
          type: 'color',
        },
        100: {
          value: '#F2F4F8',
          type: 'color',
        },
        200: {
          value: '#DDE1E6',
          type: 'color',
        },
        300: {
          value: '#C1C7CD',
          type: 'color',
        },
        400: {
          value: '#A2A9B0',
          type: 'color',
        },
        500: {
          value: '#878D96',
          type: 'color',
        },
        600: {
          value: '#697077',
          type: 'color',
        },
        700: {
          value: '#4D5358',
          type: 'color',
        },
        800: {
          value: '#343A3F',
          type: 'color',
        },
        900: {
          value: '#21272A',
          type: 'color',
        },
      },
      primary: {
        100: {
          value: 'hsla(216,80%,119%,1)',
          type: 'color',
        },
        200: {
          value: '#E2FF7A',
          type: 'color',
        },
        300: {
          value: '#B4E600',
          type: 'color',
        },
        400: {
          value: '#98C200',
          type: 'color',
        },
        500: {
          value: '#4A6000',
          type: 'color',
        },
        600: {
          value: '#1760cf',
          type: 'color',
        },
        700: {
          value: '#134faa',
          type: 'color',
        },
        800: {
          value: '#10428e',
          type: 'color',
        },
        900: {
          value: '#0d3877',
          type: 'color',
        },
      },
      danger: {
        100: {
          value: '#f7dede',
          type: 'color',
        },
        200: {
          value: '#f0bebe',
          type: 'color',
        },
        300: {
          value: '#e07c7c',
          type: 'color',
        },
        400: {
          value: '#d95c5c',
          type: 'color',
        },
        500: {
          value: '#d13b3b',
          type: 'color',
        },
        600: {
          value: '#b52a2a',
          type: 'color',
        },
        700: {
          value: '#912222',
          type: 'color',
        },
        800: {
          value: '#6d1919',
          type: 'color',
        },
        900: {
          value: '#481111',
          type: 'color',
        },
      },
      success: {
        100: {
          value: '#e4f4e6',
          type: 'color',
        },
        200: {
          value: '#c9e9cd',
          type: 'color',
        },
        300: {
          value: '#aedeb5',
          type: 'color',
        },
        400: {
          value: '#77c783',
          type: 'color',
        },
        500: {
          value: '#5cbc6a',
          type: 'color',
        },
        600: {
          value: '#44a552',
          type: 'color',
        },
        700: {
          value: '#368442',
          type: 'color',
        },
        800: {
          value: '#296331',
          type: 'color',
        },
        900: {
          value: '#1b4221',
          type: 'color',
        },
      },
      attention: {
        100: {
          value: '#fef3e1',
          type: 'color',
        },
        200: {
          value: '#fbdaa6',
          type: 'color',
        },
        300: {
          value: '#f8c16b',
          type: 'color',
        },
        400: {
          value: '#f6b54d',
          type: 'color',
        },
        500: {
          value: '#f39c12',
          type: 'color',
        },
        600: {
          value: '#d98a0b',
          type: 'color',
        },
        700: {
          value: '#ba7609',
          type: 'color',
        },
        800: {
          value: '#9b6208',
          type: 'color',
        },
        900: {
          value: '#7c4f06',
          type: 'color',
        },
      },
      info: {
        100: {
          value: '#E8F0FC',
          type: 'color',
        },
        200: {
          value: '#B1CDF6',
          type: 'color',
        },
        300: {
          value: '#7EACF1',
          type: 'color',
        },
        400: {
          value: '#5592EC',
          type: 'color',
        },
        500: {
          value: '#307AE8',
          type: 'color',
        },
        600: {
          value: '#1867DC',
          type: 'color',
        },
        700: {
          value: '#155AC1',
          type: 'color',
        },
        800: {
          value: '#134FAA',
          type: 'color',
        },
        900: {
          value: '#104593',
          type: 'color',
        },
      },
      secondary: {
        100: {
          value: '#0C1F22',
          type: 'color',
        },
      },
      tertiary: {
        100: {
          value: '#2F463F',
          type: 'color',
        },
      },
      accent: {
        100: {
          value: '#FF5470',
          type: 'color',
        },
        200: {
          value: 'hsla(60,100%,102%,1)',
          type: 'color',
        },
        300: {
          value: '#ffffe0',
          type: 'color',
        },
        400: {
          value: '#ffffb8',
          type: 'color',
        },
        500: {
          value: '#ffff8f',
          type: 'color',
        },
        600: {
          value: '#ffff66',
          type: 'color',
        },
        700: {
          value: '#ffff3d',
          type: 'color',
        },
        800: {
          value: '#ffff14',
          type: 'color',
        },
        900: {
          value: '#ebeb00',
          type: 'color',
        },
      },
      customPrimary: {
        hue: {
          value: 216,
          type: 'color',
        },
        saturation: {
          value: 80,
          type: 'color',
        },
        lightness: {
          value: 55,
          type: 'color',
        },
        hsla: {
          value: '#307ae8',
          type: 'color',
        },
      },
      customAccent: {
        hue: {
          value: 60,
          type: 'color',
        },
        saturation: {
          value: 100,
          type: 'color',
        },
        lightness: {
          value: 78,
          type: 'color',
        },
        hsla: {
          value: '#ffff8f',
          type: 'color',
        },
      },
    },
    dimension: {
      0: {
        value: 0,
        type: 'sizing',
      },
      50: {
        value: 4,
        type: 'sizing',
      },
      100: {
        value: 8,
        type: 'sizing',
      },
      150: {
        value: 12,
        type: 'sizing',
      },
      175: {
        value: 14,
        type: 'sizing',
      },
      200: {
        value: 16,
        type: 'sizing',
      },
      250: {
        value: 20,
        type: 'sizing',
      },
      300: {
        value: 24,
        type: 'sizing',
      },
      350: {
        value: 28,
        type: 'sizing',
      },
      400: {
        value: 32,
        type: 'sizing',
      },
      500: {
        value: 40,
        type: 'sizing',
      },
      600: {
        value: 48,
        type: 'sizing',
      },
      700: {
        value: 56,
        type: 'sizing',
      },
      800: {
        value: 64,
        type: 'sizing',
      },
      900: {
        value: 72,
        type: 'sizing',
      },
      1000: {
        value: 80,
        type: 'sizing',
      },
      static: {
        0: {
          value: 0,
          type: 'sizing',
        },
        10: {
          value: 1,
          type: 'sizing',
        },
        25: {
          value: 2,
          type: 'sizing',
        },
        50: {
          value: 4,
          type: 'sizing',
        },
        75: {
          value: 6,
          type: 'sizing',
        },
        100: {
          value: 8,
          type: 'sizing',
        },
        150: {
          value: 12,
          type: 'sizing',
        },
        200: {
          value: 16,
          type: 'sizing',
        },
        250: {
          value: 20,
          type: 'sizing',
        },
        300: {
          value: 24,
          type: 'sizing',
        },
        350: {
          value: 28,
          type: 'sizing',
        },
        400: {
          value: 32,
          type: 'sizing',
        },
        450: {
          value: 36,
          type: 'sizing',
        },
        500: {
          value: 40,
          type: 'sizing',
        },
        550: {
          value: 44,
          type: 'sizing',
        },
        600: {
          value: 48,
          type: 'sizing',
        },
        700: {
          value: 56,
          type: 'sizing',
        },
        800: {
          value: 64,
          type: 'sizing',
        },
        900: {
          value: 72,
          type: 'sizing',
        },
        1000: {
          value: 80,
          type: 'sizing',
        },
      },
      root: {
        value: 16,
        type: 'sizing',
      },
      percentage: {
        50: {
          value: '50%',
          type: 'sizing',
        },
        100: {
          value: '100%',
          type: 'sizing',
        },
      },
      breakpoint: {
        xsm: {
          value: '320px',
          type: 'sizing',
        },
        sm: {
          value: '640px',
          type: 'sizing',
        },
        md: {
          value: '1007px',
          type: 'sizing',
        },
        lg: {
          value: '1440px',
          type: 'sizing',
        },
      },
    },
    font: {
      family: {
        main: {
          value: 'Albert Sans',
          type: 'fontFamilies',
        },
        alt: {
          value: 'Albert Sans',
          type: 'fontFamilies',
        },
        code: {
          value: 'Courier new',
          type: 'fontFamilies',
        },
      },
      weight: {
        regular: {
          value: 400,
          type: 'fontWeights',
        },
        medium: {
          value: 500,
          type: 'fontWeights',
        },
        semiBold: {
          value: 600,
          type: 'fontWeights',
        },
        light: {
          value: 300,
          type: 'fontWeights',
        },
        bold: {
          value: 600,
          type: 'fontWeights',
        },
      },
      lineHeight: {
        75: {
          value: 14,
          type: 'lineHeights',
        },
        100: {
          value: 16,
          type: 'lineHeights',
        },
        200: {
          value: 20,
          type: 'lineHeights',
        },
        300: {
          value: 24,
          type: 'lineHeights',
        },
        400: {
          value: 28,
          type: 'lineHeights',
        },
        500: {
          value: 32,
          type: 'lineHeights',
        },
        600: {
          value: 40,
          type: 'lineHeights',
        },
        700: {
          value: 48,
          type: 'lineHeights',
        },
      },
      size: {
        25: {
          value: 8,
          type: 'fontSizes',
        },
        30: {
          value: 10,
          type: 'fontSizes',
        },
        50: {
          value: 12,
          type: 'fontSizes',
        },
        75: {
          value: 14,
          type: 'fontSizes',
        },
        100: {
          value: 16,
          type: 'fontSizes',
        },
        200: {
          value: 18,
          type: 'fontSizes',
        },
        300: {
          value: 20,
          type: 'fontSizes',
        },
        400: {
          value: 23,
          type: 'fontSizes',
        },
        500: {
          value: 26,
          type: 'fontSizes',
        },
        600: {
          value: 29,
          type: 'fontSizes',
        },
      },
      uppercase: {
        value: 'uppercase',
        type: 'textCase',
      },
    },
    shadow: {
      100: {
        value: {
          x: 0,
          y: 10,
          blur: 36,
          spread: 0,
          color: '#C1C7CD',
          type: 'dropShadow',
        },
        type: 'boxShadow',
      },
    },
    blur: {
      value: '4px',
      type: 'dimension',
    },
  },
  util: {
    color: {
      primary: {
        lightness: {
          scale: {
            value: 1.21,
            type: 'other',
          },
          up: {
            1: {
              value: 67,
              type: 'other',
            },
            2: {
              value: 81,
              type: 'other',
            },
            3: {
              value: 98,
              type: 'other',
            },
            4: {
              value: 119,
              type: 'other',
            },
            5: {
              value: 144,
              type: 'other',
            },
          },
          down: {
            1: {
              value: 45,
              type: 'other',
            },
            2: {
              value: 37,
              type: 'other',
            },
            3: {
              value: 31,
              type: 'other',
            },
            4: {
              value: 26,
              type: 'other',
            },
            5: {
              value: 21,
              type: 'other',
            },
          },
        },
      },
      accent: {
        lightness: {
          scale: {
            value: 8,
            type: 'other',
          },
          up: {
            1: {
              value: 86,
              type: 'other',
            },
            2: {
              value: 94,
              type: 'other',
            },
            3: {
              value: 102,
              type: 'other',
            },
            4: {
              value: 110,
              type: 'other',
            },
          },
          down: {
            1: {
              value: 70,
              type: 'other',
            },
            2: {
              value: 62,
              type: 'other',
            },
            3: {
              value: 54,
              type: 'other',
            },
            4: {
              value: 46,
              type: 'other',
            },
          },
        },
      },
      colorDebug: {
        value: '#9747FF',
        type: 'color',
      },
      debugColorContainer: {
        value: '#ebdcff',
        type: 'color',
      },
    },
    font: {
      scale: {
        value: 1.125,
        type: 'other',
      },
      base: {
        value: 16,
        type: 'other',
      },
    },
  },
  underline: {
    value: 'underline',
    type: 'textDecoration',
  },
};
