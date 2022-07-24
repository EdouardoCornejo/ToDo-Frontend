const Error = ({children}) => {
    return (
      <div className="bg-red-800 text-white text-center p-1 uppercase font-bold mb-2 rounded duration-300 ">  
          {children}
      </div>
    )
  }

  const ErrorDate = ({children}) => {
    return (
      <div className="bg-red-800 text-white text-center p-1 uppercase font-bold mb-2 rounded ">
          {children}
      </div>
    )
  }

  const ErrorRegister = ({children}) => {
    return (
      <div className="bg-red-800 text-white text-center p-1 uppercase font-bold mb-2 rounded ">
          {children}
      </div>
    )
  }

  export {Error, ErrorDate, ErrorRegister}