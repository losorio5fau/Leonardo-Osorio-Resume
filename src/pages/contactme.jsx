import { useState } from 'react'
import UserMessage from './userMessage'
import { SiGithub, SiGmail } from 'react-icons/si'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactMe = () => {
  const [message, setMessage] = useState(false)

  const copyToClipboard = (event) => {
    event.preventDefault()
    navigator.clipboard.writeText("leonardoosorio00@gmail.com")
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 1000)
  }

  return (
    <div className="bg-black py-14" id="contactme">
      <h1 className="animate-pulse font-Dosis text-white sm:text-5xl md:text-6xl text-4xl sm:pl-8 md:pl-12 pl-6 sm:py-8 md:py-10 py-6">
        <span className="border-b-2 pb-3">C</span>ontact Me:
      </h1>
      <div className="grid grid-cols-4 gap-1 md:p-10 sm:p-8 p-6 justify-items-center">
        <a target="_blank" href="https://github.com/losorio5fau" rel="noopener noreferrer">
          <SiGithub className="text-6xl sm:text-7xl md:text-8xl text-white hover:text-purple-700" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/leonardo-osorio-bbb8221a7/" rel="noopener noreferrer">
          <FaLinkedin className="text-6xl sm:text-7xl md:text-8xl text-white hover:text-blue-500" />
        </a>
        <a target="_blank" href="https://twitter.com/_LeonardoOsorio" rel="noopener noreferrer">
          <FaTwitter className="text-6xl sm:text-7xl md:text-8xl text-white hover:text-sky-500" />
        </a>
        <button onClick={copyToClipboard}>
          <SiGmail className="text-6xl sm:text-7xl md:text-8xl text-white hover:text-red-500" />
        </button>
      </div>
      {message && <UserMessage showMessage="Copied To ClickBoard!"/>}
    </div>
  );
}
 
export default ContactMe;