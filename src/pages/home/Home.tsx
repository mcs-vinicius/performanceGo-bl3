import './Home.css'

function Home() {
  return (
    <div className='w-full bg-slate-700 justify-around min-h-[80vh]'>
        <div className='flex  min-h-[80vh]'>
            
            <div className='conteudoHome flex text-gray-50 items-center justify-center flex-col-reverse'>
            <button className=' bg-red-800'>Produtos</button>
                <h1><i> - Soraka</i></h1>
                <span className='font-semibold text-xl'>A ajuda chegou!</span>
            </div>

            <div className='imagemHome'>
                  <img src="https://ik.imagekit.io/wzl99vhez/Hades%20Game/Soraka.png?updatedAt=1706707193192"  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home