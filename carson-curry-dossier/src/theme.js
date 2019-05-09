const whiteSmoke = "#F5F5F5";
const slateGray = "#2F2F2F";

const themeLight = {
    background: whiteSmoke,
    body: slateGray
};

const themeDark = {
    background: slateGray,
    body: whiteSmoke
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
