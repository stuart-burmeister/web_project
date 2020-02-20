const theme = {
  typography: {
    fontFamily: "AppleSDGothicNeo-regular",
  },
  palette: {
    primary: { main: "#00897b", },
    secondary: { main: "#c8c8c8" },
    select: { main: "#73bbff" },
    info: { main: "#73bbff" },
    text: {
      primary: "#000000",
      secondary: "#c8c8c8",
    },
    divider: "#c8c8c8",
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
          '& $notchedOutline': {
              borderColor: '#c8c8c8',
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
              borderColor: '#73bbff',
          },
          '&$focused $notchedOutline': {
              borderColor: '#73bbff',
          },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#73bbff'
        }
      }
    }
  }
};

export default theme;