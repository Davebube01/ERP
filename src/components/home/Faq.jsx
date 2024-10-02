import React, { useState, useRef, useEffect } from "react";

export default function Faq({ question, answer, isInitiallyOpen }) {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const contentRef = useRef(null);

  const toggleAnswer = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isInitiallyOpen) {
      setIsOpen(true);
    }
  }, [isInitiallyOpen]);

  return (
    <div className="border-b-2 border-gray-300 py-5">
      <button
        className="flex w-full justify-between items-center"
        onClick={toggleAnswer}
      >
        <span className="text-left md:text-2xl text-xl text-gray-800 font-semibold font-[Inter]">{question}</span>
        {isOpen ? (
            <span className='text-3xl '>
                <ion-icon name='close-outline' ></ion-icon>
            </span>
        ) : (
            <span className='text-3xl '>
                <ion-icon name='add' ></ion-icon>
            </span>
        )}
      </button>
      {/* {isOpen && <div className="text-base mt-6 text-gray-600 font-[Roboto]">{answer}</div>} */}
      <div 
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        ref={contentRef}
      >
        <div className="text-base mt-6 text-gray-600 font-[Roboto]">
          {answer}
        </div>
      </div>
    </div>
  );
}
