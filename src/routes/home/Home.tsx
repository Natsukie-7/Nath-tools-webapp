import { Wrapper } from "@routes/home/Home.styled";
import { useThemeContext } from "@tools/themes/themes.context";
import { Component } from "solid-js";

interface HomeProps {}

const Home: Component<HomeProps> = (props) => {
  const [, { toggleTheme }] = useThemeContext();

  return (
    <Wrapper
      onClick={() => {
        toggleTheme();
      }}
    >
      <h1>Bem vindo</h1>
    </Wrapper>
  );
};

export default Home;
