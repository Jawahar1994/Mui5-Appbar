import React from "react";
import "./App.module.css";
import ThemeComponent from "./theme/ThemeComponent";
import Header from "./components/common/header/Header";
import Main from "./components/common/Content/Main";
import Footer from "./components/common/footer/Footer";

const App: React.FC = () => {
  return (
    <ThemeComponent>
      <Header />
      <Main />
      <Footer />
    </ThemeComponent>
  );
};

export default App;
