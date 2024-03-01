import './App.css'
import Navbar from './components/Header/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import img1 from '../src/assets/images/img-1.png'
import img2 from '../src/assets/images/img-2.webp'
import SmallHeading from './components/SmallHeading'
import list from './utils/list'
import Process from './components/Process'
import BigHeading from './components/BigHeading'
function App() {

  return (
    <div className='w-[1200px] m-auto'>
    <Navbar />
    <HeroSection />
    <img src={img1} alt="image-1" className='w-[40%] py-4 m-auto rounded-[50px]' />
    <SmallHeading className='w-3/4 py-4 m-auto my-[60px] text-center '>I love making cool things and solving complex problems for people — like you.</SmallHeading>
    <SmallHeading className='w-3/4 py-4 m-auto my-[60px] text-center '>I deliver impactful results through strategic thinking and data-driven insights.</SmallHeading>
    <img src={img2} alt="image-1" className='w-[40%] py-4 m-auto rounded-[50px]' />
    <SmallHeading  className='w-3/4 py-4 text-left my-[60px]'>My tried-and-true <br/> design process</SmallHeading>
    <Process list={list}/>
    <h1 className='text-[130px] text-left my-[200px] font-semibold leading-none'>RELEVANT EXPERIENCE</h1>
    </div>
  )
}

export default App
