import Image from 'next/image'

const WorkedCompanies = () => {
  return (
    <div className="bg-white sm:py-14 py-10" id="workedcompanies">
      <h1 className="font-Dosis text-black md:text-6xl md:px-12 md:pt-6 sm:text-5xl sm:px-10 text-4xl px-6 pt-2">
        Worked Companies & Projects:
      </h1>
      <div className="grid grid-cols-3 gap-3 sm:p-10 p-6 justify-items-center">
        <a target="_blank" href="https://www.bundleiq.com/" rel="noopener noreferrer" className="hover:cursor-help inline-grid justify-items-center items-center animate-pulse">
          <Image 
            src="/bundleIQ.png"
            width={300}
            height={300}
            alt="bundleIQ logo"
          />
        </a>
        <a target="_blank" href="https://www.intel.com/content/www/us/en/developer/topic-technology/artificial-intelligence/overview.html?wapkw=artificial%20intelligence" rel="noopener noreferrer" className="hover:cursor-help inline-grid justify-items-center items-center">
          <Image
            src="/Intel.png"
            className="grayscale hover:grayscale-0"
            width={135}
            height={135}
            alt="Intel logo"
          />
        </a>
        <a target="_blank" href="https://www.nstem.org/" rel="noopener noreferrer" className="hover:cursor-help">
          <Image
            src="/NSTEM.png"
            className="grayscale hover:grayscale-0"
            width={135}
            height={135}
            alt="NSTEM logo"
          />
        </a>
      </div>
    </div>
  );
}
 
export default WorkedCompanies;