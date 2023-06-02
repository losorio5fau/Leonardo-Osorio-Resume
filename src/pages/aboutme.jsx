import Image from 'next/image'
import Link from 'next/link'
import UserMessage from './userMessage'
import { useState } from 'react'
import { BsDownload, BsChevronDoubleDown } from 'react-icons/bs'
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiPython, SiGithub, SiSwift, SiMongodb } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'

const AboutMe = () => {
  const [message, setMessage] = useState(false)

  const scrolling = (e, location) => {
    let loc = document.getElementById(location);
    e.preventDefault();  // Stop Page Reloading
    loc && loc.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  const DownloadedCV = () => {
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 1500)
  }

  return (
    <div className="py-4 sm:py-5 md:py-9" id="aboutme">
      <h1 className="animate-bounce font-Dosis text-4xl sm:text-5xl md:text-6xl text-white pl-8 sm:pl-10 md:pl-12">
        <span className="border-b-2 pb-3">Abo</span>ut Me:
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-1 p-10 justify-items-center">
        <div>
          <Image
            src="/profile.jpeg"
            className="rounded-full md:w-96 sm:w-60 w-60 lg:h-full md:h-5/6 h-full"
            width={300}
            height={300}
            alt="profile picture"
          />
        </div>
        <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-Dosis px-2 sm:px-4 md:px-6 p-4">
          <p>
            <span className="text-2xl sm:text-3xl md:text-4xl">H</span>ola, I&#39;m <span className="text-2xl sm:text-3xl md:text-4xl">L</span>eonardo
            <span className="text-2xl sm:text-3xl md:text-4xl">O</span>sorio.
          </p>
          <p>I&#39;m a <span className="text-2xl sm:text-3xl md:text-4xl">F</span>ull <span className="text-2xl sm:text-3xl md:text-4xl">S</span>tack
            <span className="text-2xl sm:text-3xl md:text-4xl"> W</span>eb <span className="text-2xl sm:text-3xl md:text-4xl">E</span>ngineer &
            <span className="text-2xl sm:text-3xl md:text-4xl"> IOS</span> <span className="text-2xl sm:text-3xl md:text-4xl">D</span>eveloper.&#160;
            <span className="text-2xl sm:text-3xl md:text-4xl">👨‍💻</span>
          </p>
          <div className="pt-4 sm:pt-6 md:pt-8">
            <p>
              Computer Science Graduate With Minor On AI, Entry-Level Full Stack Developer Creating And Learning Quality 
              Software For The World, Love To Learn New Things, Growth My Knowledge And Always Looking For New Challenges.
            </p>
            <p className="pt-4 sm:pt-6 md:pt-8">
              Levering My Skills To Create Amazing Software, Solving Problems And Creating New Solutions
              Using <FaReact className="inline-block align-baseline hover:text-cyan-400"/> ReactJS, <SiNextdotjs className="inline-block align-baseline"/> NextJS,&#160;
              <SiMongodb className="inline-block align-baseline hover:text-green-500"/>MongoDB, <FaNodeJs className="inline-block align-baseline"/> NodeJS,&#160;
              <SiJavascript className="inline-block align-baseline hover:text-yellow-400"/> Javascript, <SiPython className="inline-block align-baseline"/> Python,&#160;
              <SiTailwindcss className="inline-block align-baseline hover:text-sky-400" /> TailwindCSS, <SiSwift className="inline-block align-baseline" /> Swift,&#160;
              <SiGithub className="inline-block align-baseline hover:text-purple-700"/> GitHub And More. Currently Working As A Freelancer, But Open For Full Time Job.
            </p>
            <div className="grid grid-cols-2 gap-1 py-6 sm:py-8 md:py-10 justify-items-center md:text-lg lg:text-xl sm:text-base text-sm">
              <div className="lg:px-4 px-1">
                <a href="/CV.pdf" download="LeonardoOsorioResume" 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 sm:px-2 md:px-3 lg:px-4 rounded-full mt-8"
                onClick={DownloadedCV}
                >
                  Download CV <BsDownload className="inline-block pl-1 animate-bounce md:text-lg lg:text-xl xl:text-2xl sm:text-base text-sm" />
                </a>
              </div>
              <div className="lg:px-4 px-1">
                <a onClick={(e) => {scrolling(e, 'contactme')}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 sm:px-2 md:px-3 lg:px-4 rounded-full mt-8">
                  Lets Connect <BsChevronDoubleDown className="inline-block pl-1 animate-bounce md:text-lg lg:text-xl xl:text-2xl sm:text-base text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {message && <UserMessage showMessage="Successfully Downloaded!"/>}
    </div>
  );
}
 
export default AboutMe;