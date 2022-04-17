import styled from "styled-components";
import { Container } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

const LayoutContainer = styled(Container)``;

const Main = styled.main``;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutContainer maxWidth="xl">
        <Main>{children}</Main>
      </LayoutContainer>
      <Footer />
    </>
  );
}
