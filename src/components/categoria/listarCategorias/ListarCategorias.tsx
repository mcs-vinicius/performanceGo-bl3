import CardCategoria from "../cardCategoria/CardCategoria"
import { useEffect, useState } from "react";
import { listar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../model/Categoria";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar("/categorias", setCategorias)
        } catch (error: any) {
            alert("Erro ao buscar categoria!")
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [])

    return (
        <>
            {categorias.length === 0 && (
                <div className="flex justify-center items-center min-h-screen">
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                    />
                </div >)
            }
            <div className="flex justify-center w-full mt-28 mb-8">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias