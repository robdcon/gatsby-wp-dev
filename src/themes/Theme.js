export const invertTheme = ({colors, colorsInvert, global}) => ({
    colors: colorsInvert,
    colorsInvert: colors,
    global
})

const colors = {
    primary: '#f96200',
    secondary: '#000000',
    lightBackground: '#ffffff',
    darkBackground: '#000000',
    foreground: '#000000',
    lightText: '#ffffff',
    darkText: '#000000',
    greyLightText: '#aaaaaa',
    greyDarkText: '#aaaaaa'
}

const Theme = {
    colors: {
        primaryColor: colors.primary,
        secondaryColor: colors.secondary,
        backgroundColor: colors.lightBackground,
        lightText: colors.lightText,
        darkText: colors.darkText,
        greyLightText: colors.greyLightText
    },
    colorsInvert: {
        primaryColor: colors.primary,
        secondaryColor: colors.lightText,
        backgroundColor: colors.darkBackground,
        lightText: colors.darkText,
        darkText: colors.lightText
        
    },
    global: {
        fontFamily: 'Montserrat, Verdana, sans-serif',
        // Font Sizes
        h1FontSize: "60px",
        h2FontSize: "48px",
        h3FontSize: "36px",
        h4FontSize: "24px",
        h5FontSize: "18px",
        bodyFontSize: "16px",
        // Content
        cardPadding: "16px 16px 24px 16px",
        cardBorder: "1px solid #dddddd",
        cardShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        maxTextWidth: "800px",
        subheadingLineHeight: "1.3",
        primaryFont: "Montserrat, Roboto, sans-serif",
        secondaryFont: "Open Sans, Roboto, sans-serif",

        buttonStyles: 

        `display: inline-block;
        line-height: 35px;
        margin: 8px;
        padding: 15px 25px;
        font-size: 20px;
        font-weight: bold;
        position: relative;
        opacity: .999;
        border-radius: 3px;
        transition: border 0.5s ease-out 0.5s, color 0.5s ease-out;

        background-color: transparent;
        border: 2px solid #dddddd;
        color: ${colors.primary};

        &:before, &:after {
            content: '';
            border-style: solid;
            border-color: ${colors.primary};
            position: absolute;
            z-index: 999;
            border-radius: 3px;
            box-sizing: content-box;
            transition: height 0.5s, width 0.5s;
        }

        &:before {
            width: 0;
            height: 100%;
            border-width: 2px 0 2px 0;
            top: -2px;
            left: 0;
            transition-delay: 0.05s;
        }

        &:after {
            width: 100%;
            height: 0;
            border-width: 0 2px 0 2px;
            top: 0;
            left: -2px;
        }

        &:hover {
            border-color: ${colors.primary}
        }

        &:active {
            border-color: transparent;
        }

        &:hover:before {
            width: 100%;
        }

        &:hover:after {
            height: 100%;
        }
    `,
    

    },

    horizontalNavStyles: `
        display: flex;
        flex-direction: column;
    `,

    footerBackground: colors.darkBackground
}


export default Theme