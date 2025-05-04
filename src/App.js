import './App.css';
import RouterComponent from './router/Router';

function App() {
  return (
    <div className="App flex justify-center bg-bgColor ">
      <div className='max-w-[1240px] mt-4 h-[calc(100vh-16px)] w-[100%] text-xl'>
        <div className='font-pacifico flex flex-grow items-center py-6'>
          nish
          <span className='pl-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1 to-gradient-2'>
            codeX
          </span>
        </div>
        <RouterComponent />
      </div>
    </div>
  );
}

export default App;
