import { BsCheckCircleFill } from 'react-icons/bs'

const UserMessage = ({showMessage}) => {
  return (
    <div className="fixed md:bottom-8 sm:bottom-9 bottom-11 shadow-2xl bg-white md:right-4 sm:right-2 right-1 p-1 border-l-8 border-l-blue-600 rounded-md z-10">
      {showMessage && (
        <span className="font-Dosis md:text-lg sm:text-base text-sm text-black border-x-stone-400 align-baseline">
          &#160;<BsCheckCircleFill className="text-blue-600 inline-block mb-1"/>
          &#160;{showMessage}&#160;
        </span>
      )}
    </div>
  );
}
 
export default UserMessage;