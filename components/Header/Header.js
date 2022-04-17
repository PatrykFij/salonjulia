import MenuWithDrawer from "./components/Menu";
import { AppBar, Toolbar, Container } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/theme/lightTheme";

function HideOnScroll(props) {
  const { children, window } = props;
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const scrollTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <>
      {isDownLargeScreen ? (
        <Slide appear={false} direction="down" in={!scrollTrigger}>
          {children}
        </Slide>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuWithDrawer />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
