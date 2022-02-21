import { createTheme } from '@mui/material/styles'
// import blue from '@mui/material/colors/blue';

const theme = createTheme({
  palette: {
    primary: {
      main: '#85C800',
      contrastText: '#fff',
    },
    secondary: {
      main: 'hsl(230 35% 7%)',
      contrastText: '#fff',
    },
  },
})

export default theme
