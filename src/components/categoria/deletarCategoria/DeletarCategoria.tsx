import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listar, deletar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../model/Categoria";

function DeletarCategoria() {

    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("Erro ao buscar categoria!")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        setIsLoading(true)
        try {
            await deletar(`/categorias/${id}`)
            alert("Categoria excluída com sucesso!")
        } catch (error: any) {
            alert("Erro ao excluir a categoria.")
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container w-1/3 mx-auto mt-24">
            <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
            <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-red-600 text-white font-bold text-2xl text-center">
                    Categoria
                </header>
                <p className="p-8 text-3xl bg-slate-200 h-full text-center">{categoria.nome}</p>
                <div className="flex">
                    <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}>
                        Não
                    </button>
                    <button className="text-black bg-yellow-400 hover:bg-orange-600 w-full py-2 flex justify-center" onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria