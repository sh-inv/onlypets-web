import Header from "@/layout/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <DefaltWidth>
        <Component {...pageProps} />
      </DefaltWidth>
    </ThemeProvider>
  );
};

const DefaltWidth = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

export default App;
