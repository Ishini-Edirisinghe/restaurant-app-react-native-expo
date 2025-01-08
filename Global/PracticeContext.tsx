import React, { createContext, useState } from 'react';

// Extend the context type to include the new state variables
interface PracticeContextType {
  state: string | null;
  setState: React.Dispatch<React.SetStateAction<string | null>>;
  val: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
  val1: number;
  setVal1: React.Dispatch<React.SetStateAction<number>>;
  val2: number;
  setVal2: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with an undefined default value
export const PracticeContext = createContext<PracticeContextType | undefined>(undefined);

// Define the provider component
export const PracticeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<string | null>(null);
  const [val, setVal] = useState<number>(0);
  const [val1, setVal1] = useState<number>(0);
  const [val2, setVal2] = useState<number>(0);

  return (
    <PracticeContext.Provider
      value={{
        state,
        setState,
        val,
        setVal,
        val1,
        setVal1,
        val2,
        setVal2,
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
};


// import React, { useState } from 'react';
// import { createContext } from 'react';


// const PracticeContext = createContext('light');
//     const [val,setVal]=React.useState(0);
//     const [val1,setval1]=React.useState(0);
//     const [val2,setval2]=React.useState(0);
//     const [theme, setTheme] = useState('dark');

// const PracticeProvider = ({children}:any) =>{
//     return(
//         <PracticeContext.Provider 
//         value={theme}>
//             {children}
//         </PracticeContext.Provider>

//     )
// }

// export {PracticeContext,PracticeProvider}