import illustration from './assets/illustration-article.svg'
import avatar from './assets/image-avatar.webp'

function App() {

  return (
    <>
      <div className='bg-amber-300 flex flex-col items-center justify-center min-h-screen'>
        <div onClick="document.querySelector('#popover').style.display='block';
  setTimeout(()=>(document.querySelector('#popover').style.display='none'),1000)"
          className="bg-white m-3 inline-flex flex-col p-6 rounded-3xl border  sm:w-md w-auto duration-300 transition-all">
          <img src={illustration} alt="illustration-article" className="rounded-2xl w-full" />
          <div className="my-6">
            <div className="rounded-md bg-yellow-400/60 inline-block px-2 py-1 font-bold">Learning</div>
            <div className="my-2 font-medium">Published 21 Dec 2023</div>
            <div className="mt-1">
              <h1 className="font-black text-3xl hover:text-yellow-500 cursor-pointer duration-300">HTML & CSS foundations</h1>
              <p className="my-4 text-lg font-semibold text-slate-500">
                These languages are the backbone of every website, defining structure, content, and presentation.
              </p>
            </div>
            <div className="flex  items-center gap-x-4">
              <img src={avatar} alt="blogger" /> <span className="font-black text-lg">Greg Hooper</span>
            </div>
          </div>
        </div>

        <div id="popover" className="text-center px-4 m-1 rounded-2xl text-2xl bg-gray-950 text-slate-50 absolute hidden">
          Challenge by <a rel="noopener" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend
            Mentor</a>.
          Coded by <a href="#">Coder Arpit Devank</a>.
        </div>

      </div>
    </>
  )
}

export default App
