import Hero from "../components/Hero";
import Services from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useLocalStorage } from "@mantine/hooks";

function HomePage() {
  const [isFreelance, setFreelance] = useLocalStorage({
    key: "isFreelance",
    defaultValue: "false",
    getInitialValueInEffect: true,
  });

  return (
    <>
      <Hero isFreelance={isFreelance} setFreelance={setFreelance} />
      <Services isFreelance={isFreelance} />
      <Projects isFreelance={isFreelance} />
      <Contact />
    </>
  );
}

export default HomePage;

