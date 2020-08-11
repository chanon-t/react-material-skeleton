import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[300]
    },
    secondary: {
      main: green[300],
    }
  }
})
