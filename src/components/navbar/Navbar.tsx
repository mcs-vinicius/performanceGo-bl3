
function Navbar() {
  return (
    <div className=' w-full h-auto flex text-lg justify-around content-center bg-gray-500 text-gray-200'>
        <div className='flex gap-3'>
            <img className="w-10 h-10 object-contain content-center" src="https://ik.imagekit.io/wzl99vhez/Hades%20Game/Cruz-vermelha.png?updatedAt=1706707189398" alt="" />
            <div className="text-2xl font-bold">Soraka</div>
        </div>
        <div className="flex gap-5 font-semibold">
            <div>Criar Categoria</div>
            <div>Editar Categoria</div>
            <div>Deletar Categoria</div>
        </div>
    </div>
  )
}

export default Navbar