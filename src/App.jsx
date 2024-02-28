import './App.css'
import Navbar from './components/Header/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import img1 from '../src/assets/images/img-1.png'
import img2 from '../src/assets/images/img-2.webp'
import SmallHeading from './components/SmallHeading'

function App() {

  return (
    <div className='w-[1200px] m-auto'>
    <Navbar />
    <HeroSection />
    <img src={img1} alt="image-1" className='w-[40%] py-4 m-auto rounded-[50px]' />
    <SmallHeading className='w-3/4 py-4 m-auto'>I love making cool things and solving complex problems for people — like you.
</SmallHeading>
    <SmallHeading className='w-3/4 py-4 m-auto'>I deliver impactful results through strategic thinking and data-driven insights.
</SmallHeading>
    <img src={img2} alt="image-1" className='w-[40%] py-4 m-auto rounded-[50px]' />
    </div>
  )
}

export default App
