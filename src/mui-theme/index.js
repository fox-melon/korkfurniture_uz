// https://mui.com/material-ui/customization/theming/

import { createTheme } from '@mui/material'

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    }
  },
  components: {MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "20px",
        paddingRight: "20px",
        "@media (min-width: 600px)": {
          paddingLeft: "15px",
          paddingRight: "15px",
        },
      },
      maxWidthLg: {
        "@media (min-width: 1500px)": {
          maxWidth: "1560px",
        },
      },
      maxWidthLg: {
        "@media (min-width: 1100px)": {
          maxWidth: "1300px",
        },
      },
    },
  },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          '&:hover': {
            color: 'black'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: 'none'
        }
      }
    }
  }
})
