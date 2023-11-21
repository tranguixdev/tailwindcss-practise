import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="p-6 rounded-xl shadow-lg flex items-center mx-auto space-x-4">
        <div className="shrink-0">
          <img className='h-12 w-12' src={logo} alt='chitchat logo'></img>
        </div>
        <div>
          <div className='text-xl font-medium text-black'></div>
          <p className='text-slate-900'>you have a new message</p>
        </div>
      </div>
      <div className='py-8 px-8 mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src={logo}></img>
        <div className='text-center space-y-2 sm:text-left'>
          <div className='space-y-0.5'>
            <p className='text-lg text-black font-semibold'>
              Erin lindford
            </p>
            <p className='text-state-500 font-medium'>
              Product Engineer
            </p>
            <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-purple-600 focus:ring-offset-2'>Message</button>
            <div className='p-2'>
              <button className='bg-sky-500 hover:bg-sky-700 font-semibold rounded-full border px-4 text-white text-sm py-1 '>Save change</button>
            </div>
            <div className='p-2'>
              <button className='dark:md:hover:bg-fuchsia-600'>Save change</button>
            </div>
            <button class="bg-violet-500 hover:bg-violet-600 rounded-full text-sm p-2 text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Save changes</button>
          </div>
        </div>
      </div>
      <div className="mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo} alt="Modern building architecture"></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
