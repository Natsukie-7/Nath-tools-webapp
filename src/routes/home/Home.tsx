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
      Home
    </Wrapper>
  );
};

export default Home;
