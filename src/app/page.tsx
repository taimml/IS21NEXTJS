import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HeroSection from "./components/MainPage";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7x1 mx-auto px-34">
        <Header/>        
        <Navigation/>
        <HeroSection/>

    </main>
  );

}
