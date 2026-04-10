import BackgroundGradient from "../components/background/background-gradient";
import Header from "./_shared/header";
import Hero from "./_shared/hero";

export default function Home() {
  return (
    <div className="text-foreground">
      <Header />
      <Hero />
      <BackgroundGradient />
    </div>
  );
}
