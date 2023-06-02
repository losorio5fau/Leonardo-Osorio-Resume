import Head from 'next/head'
import Link from 'next/link'
import WorkedCompanies from './companies'
import AboutMe from './aboutme'
import ContactMe from './contactme'
import Footer from './footer'

export default function Home() {

  const scrolling = (e, location) => {
    let loc = document.getElementById(location);
    e.preventDefault();  // Stop Page Reloading
    loc && loc.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Leonardo J. Osorio</title>
      </Head>
      <div className="block w-full h-4/5 z-10 contrast-125 brightness-75 bg-no-repeat bg-cover" style={{backgroundImage: `url('/bg-Image.jpg')`}}>
        <div className="relative w-full z-20">
            <div className="pt-2 pb-56">
              <button className="font-Dosis sm:pl-7 pt-2 sm:text-2xl min-[500px]:text-lg pl-2 md:text-3xl">
                <span className="hover:text-gray-300 hover:underline">
                  <Link href="/">LEONARDO OSORIO</Link>
                </span>
              </button>
              <div className="inline-block sm:px-6 px-2 sm:space-x-14 space-x-4 float-right">
                <button className="p-2">
                  <span className="hover:text-gray-300 hover:underline md:text-2xl sm:text-xl text-base font-Dosis">
                    <a onClick={(e) => {scrolling(e, 'aboutme')}}>ABOUT</a>
                  </span>
                </button>
                <button className="p-2">
                  <span className="hover:text-gray-300 hover:underline md:text-2xl sm:text-xl text-base font-Dosis">
                    <a onClick={(e) => {scrolling(e, 'workedcompanies')}}>WORK</a>
                  </span>
                </button>
                <button className="p-2">
                  <span className="hover:text-gray-300 hover:underline md:text-2xl sm:text-xl text-base font-Dosis">
                    <a onClick={(e) => {scrolling(e, 'contactme')}}>CONTACT</a>
                  </span>
                </button>
              </div>
            </div>
            <div className="text-center sm:space-y-14 space-y-8 pb-64">
              <p className="font-Dosis text-3xl md:text-6xl sm:text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] cursor-default">LEONARDO OSORIO</p>
              <p className="font-Dosis text-1xl md:text-4xl sm:text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] cursor-default">FULL STACK ENGINEER & IOS DEVELOPER</p>
            </div>
        </div>
      </div>
      <div>
        <AboutMe />
        <WorkedCompanies />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}
