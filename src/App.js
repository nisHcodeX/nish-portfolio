import './App.css';
import RouterComponent from './router/Router';

function App() {
  return (
    <div className="App flex justify-center bg-bgColor h-[100vh] overflow-y-auto">
      <div className='max-w-[1240px] m-4 w-[100%] text-xl'>
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
