import Contact from './Contact/Contact';
import Price from './Price/Price';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import About from './About/About';

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Price />
            <Services />
            <Contact />
        </div>
    )
}
