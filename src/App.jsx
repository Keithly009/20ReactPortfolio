import React, {useState} from 'react'; 

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className={`${theme === 'light' ? 'bg-black' :'bg-white'} w-screen h-screen flex items-center justify-center p-12 relative`}>
      <div className="w-full h-full border border-white"></div>
      <div className="absolute text-white bottom-12 left-4 flex-col space-y-2">
        <p onClick= {() => setTheme((prevTheme)=> prevTheme === 'light' ? 'dark' : 'light')} className="flex flex-col space-y-2 items-center">
          <span className={`h-4 w-4 flex-shrink-0 border border-white ${theme === 'light' && 'bg-white'}`}></span>
          <span style={{ "writingMode": "vertical-rl"}}> 
            LIGHT
          </span>
        </p>
        <p onClick= {() => setTheme((prevTheme)=> prevTheme === 'light' ? 'dark' : 'light')}  className="flex flex-col space-y-2 items-center">
        <span className={`h-4 w-4 flex-shrink-0 border border-white ${theme === 'dark' && 'bg-black'}`}></span>
          <span style={{ "writingMode": "vertical-rl"}}> 
            DARK
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
