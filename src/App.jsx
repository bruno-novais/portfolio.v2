import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import ScrollToTopButton from './components/scrollToTopButton/scrollToTopButton'; // Ajuste o caminho conforme necessário
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    white: {
      main: '#D2D3E0'
    },
    black: {
      main: '#060505'
    },
    info: {
      main: '#5769E9'
    },
    success: {
      main: '#85ED91'
    },
    warning: {
      main: '#F3DD6C'
    },
    error: {
      main: '#ED4245'
    },
    primary: {
      main: '#5769E9'
    },
    body: {
      main: '#1D1E2B'
    },
    components: {
      main: '#292A35'
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#5769e9',
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
            backgroundColor: '#bebfca',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
            backgroundColor: '#5768e9',
        },
      },
    },
  },
  typography: {
    fontSize: 12,
    button: {
      textTransform: 'capitalize',
    }
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTopButton />
      <Home />
      <About />
      <Projects />
    </ThemeProvider>
  );
}


export default App;
