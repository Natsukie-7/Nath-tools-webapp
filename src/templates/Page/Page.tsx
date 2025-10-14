import Navbar from "@templates/Page/Navbar/Navbar";
import { GlobalStyles, Wrapper } from "@templates/Page/Page.styled";
import { ParentComponent } from "solid-js";

interface PageProps {}

const Page: ParentComponent = (props) => {
  return (
    <>
      <GlobalStyles />

      <Wrapper>
        <Navbar />
        {props.children}
      </Wrapper>
    </>
  );
};

export default Page;
