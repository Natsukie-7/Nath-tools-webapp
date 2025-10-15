import {
  GlobalStyles,
  MountContet,
  Wrapper,
} from "@templates/Page/Page.styled";
import { ParentComponent } from "solid-js";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

interface PageProps {}

const Page: ParentComponent = (props) => {
  return (
    <>
      <GlobalStyles />

      <Wrapper>
        <Header />
        <Navbar />

        <MountContet>{props.children}</MountContet>
      </Wrapper>
    </>
  );
};

export default Page;
