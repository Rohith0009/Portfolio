import './App.css'
import Hero from './Sections/Hero/Hero.tsx'
import StarryBackground from "./Sections/Components/StarryBackground.tsx";
import Skills from './Sections/Achivements/Skills.tsx'
import Footer from "./Sections/footer.tsx";

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <StarryBackground/>
            <div className="z-20">
                <Hero/>
                <Skills/>
                <Footer/>
            </div>

        </div>
    )
}

export default App
