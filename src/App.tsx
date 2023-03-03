import { lazy } from "react";
import styled from "@emotion/styled";

import { font } from "./mixins";
import { colors, breakpoints } from "./variables";

const Header = lazy(() =>
  import("./components/Header").then(({ Header }) => ({ default: Header }))
);

const Welcome = lazy(() =>
  import("./pages/Welcome").then(({ Welcome }) => ({ default: Welcome }))
);

const About = lazy(() =>
  import("./pages/About").then(({ About }) => ({ default: About }))
);

const OurMission = lazy(() =>
  import("./pages/OurMission").then(({ OurMission }) => ({
    default: OurMission,
  }))
);

const Gif = lazy(() =>
  import("./pages/Gif").then(({ Gif }) => ({ default: Gif }))
);

const Gallery = lazy(() =>
  import("./pages/Gallery").then(({ Gallery }) => ({ default: Gallery }))
);

const Roadmap = lazy(() =>
  import("./pages/Roadmap").then(({ Roadmap }) => ({ default: Roadmap }))
);

const Team = lazy(() =>
  import("./pages/Team").then(({ Team }) => ({ default: Team }))
);

const Footer = lazy(() =>
  import("./components/Footer").then(({ Footer }) => ({ default: Footer }))
);

function App() {
  return (
    <Page>
      <Header />

      <Welcome />
      <About />
      <OurMission />
      <RunningLine>
        <p>
          <span>let's energize each other</span>
          <span>let's energize each other</span>
        </p>
      </RunningLine>
      <Gif />
      <Gallery />
      <Roadmap />
      <Team />

      <Footer />
    </Page>
  );
}

const Page = styled.div`
  background-color: ${colors.bg};
`;

const RunningLine = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  padding: 1.2rem 0 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${colors.black};

  p {
    margin: 0;
    ${font({ size: "2.5rem", color: colors.white })};

    text-transform: uppercase;

    animation: running-line 5s linear 0s infinite;
    position: absolute;

    & > span {
      margin-right: 2.5rem;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    height: 8rem;
    padding: 2rem 0 1rem 0;

    p {
      ${font({ size: "8rem", color: colors.white })};
    }
  }
`;

export default App;
