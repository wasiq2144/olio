import './App.css'
import Navbar from './components/Header/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import img1 from '../src/assets/images/img-1.png'
import img2 from '../src/assets/images/img-2.webp'
import SmallHeading from './components/SmallHeading'
import list from './utils/list'
import experienceList from './utils/experienceList'
import Process from './components/Process'
import Experience from './components/Experience'
import BigHeading from './components/BigHeading'
import { Image } from './components/Image'
import { Footer } from './components/Footer/Footer'
function App() {

  return (
    <div>
    <div className='px-[150px]'>
    <Navbar />
    <HeroSection />
    <Image src={img1} />
    <SmallHeading className='w-3/4 py-4 m-auto my-[60px] text-center '>I love making cool things and solving complex problems for people — like you.</SmallHeading>
    <SmallHeading className='w-3/4 py-4 m-auto my-[60px] text-center '>I deliver impactful results through strategic thinking and data-driven insights.</SmallHeading>
    <img src={img2} alt="image-1" className='w-[40%] py-4 m-auto rounded-[50px]' />
    <div className="my-20">
    <h2 className='text-[60px] font-bold leading-none'>My tried-and-true <br/> design process</h2>
    <Process list={list}/>
    </div>
    <div className="mt-20 flex flex-col items-end">
    <h2 className='text-[140px] text-left my-3 font-semibold leading-none tracking-tight'>RELEVANT EXPERIENCE</h2>
    <Experience list={experienceList} />
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
