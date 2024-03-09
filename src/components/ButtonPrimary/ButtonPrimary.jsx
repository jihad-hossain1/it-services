import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <div className="rounded-3xl relative inline-flex group items-center justify-center px-5 py-2  cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-500 to-blue-400 border-blue-600 text-white">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-full group-hover:h-11 opacity-10"></span>
            <span className="relative font-bold">{children}</span>
        </div>

    );
};

export default ButtonPrimary;