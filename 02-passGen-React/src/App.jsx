import { useState, useCallback, useEffect, useRef } from 'react';
//useState is used to reflect changes in the UI by using the variable & setVariable.
//useCallback is used to optimize the processes & the code by storing in cache.
//useEffect is used for fetching data & running processes in the DOM.
//useRef is used to store the reference of the DOM elements.

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); // the value to be toggled through checkbox
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // all the changes will be made in the UI. say length selection, allowance of numbers & characters
  // that's why we are using useState

  const passwordGeneration = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setPassword(password); // this will set the newly generated password to the password variable.

  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGeneration();
  }, [length, numberAllowed, charAllowed, passwordGeneration]);

  //NOTE: there is a difference between the dependency arrays of useCallback & useEffect.
  //in useCallback, the dependency array provides the methods for optimization of the variable, whenever they'll run
  //in useEffect, the dependency array ensures that the function inside of it will re-run whenever there is a change in the variable

  const passwordRef = useRef(null);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select(); //this will highlight the text, the reference we are passing.
    passwordRef.current?.setSelectionRange(0, 99); //this will set the selection range to be copied
    //in the above mentioned lines, we are using ternary/optional operator because the value might be empty
    window.navigator.clipboard.writeText(password); //window object exists only for JavaScript rendering & not for server side rendering
    //the line above writes the password variable to the clipboard
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e) => setLength(parseInt(e.target.value))} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;