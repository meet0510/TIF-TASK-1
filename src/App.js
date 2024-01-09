import { Box } from "@chakra-ui/react";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Box>
      <Landing />
      <About />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
