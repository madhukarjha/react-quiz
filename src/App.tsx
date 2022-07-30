import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes";
import "./App.css";
import Header from "./navigation/header";
import { lightTheme } from "./theme";
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
          <Header></Header>
          <AppRoute />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
