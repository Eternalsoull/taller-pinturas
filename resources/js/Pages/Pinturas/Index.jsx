import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";

export default function Index({ pinturas }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPinturas, setFilteredPinturas] = useState(pinturas);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(true); // Mostrar el modal de confirmación
    };

    const confirmDelete = () => {
        if (deleteId) {
            Inertia.delete(route("pinturas.destroy", deleteId));
            setShowModal(false); // Cerrar el modal después de la eliminación
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === "") {
            setFilteredPinturas(pinturas);
        } else {
            const filtered = pinturas.filter((pintura) =>
                pintura.nombre.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPinturas(filtered);
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/add25ad749.js";
        script.crossOrigin = "anonymous";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pinturas
                </h2>
            }
        >
            <Head title="Pinturas" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <a
                                href={route("pinturas.create")}
                                className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                Crear nueva pintura{" "}
                                <i className="fa-solid fa-plus"></i>
                            </a>

                            {/* Campo de búsqueda */}
                            <div className="mt-4 mb-6">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="Buscar por nombre..."
                                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>

                            {/* Tabla de pinturas */}
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Imagen
                                        </th>
                                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Descripción
                                        </th>
                                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Precio
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPinturas.length > 0 ? (
                                        filteredPinturas.map((pintura) => (
                                            <tr key={pintura.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {/* Imagen de la pintura */}
                                                    <img
                                                        src={pintura.imagen}
                                                        alt={pintura.nombre}
                                                        className="w-16 h-16 object-cover rounded-md"
                                                        onError={(e) =>
                                                            (e.target.src =
                                                                "/images/default-image.jpg")
                                                        }
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {pintura.nombre}
                                                </td>
                                                <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-500">
                                                    {pintura.descripcion}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {pintura.precio}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a
                                                        href={route(
                                                            "pinturas.edit",
                                                            pintura.id
                                                        )}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        <i className="fa-solid fa-pen"></i>
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(pintura.id)
                                                        }
                                                        className="text-red-600 hover:text-red-900 relative group"
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                        {/* Tooltip */}
                                                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs p-2 rounded">
                                                            Eliminar pintura
                                                        </div>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="px-6 py-4 text-sm text-center text-gray-500"
                                            >
                                                No se encontraron pinturas.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Confirmación */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-semibold text-gray-800">
                            ¿Estás seguro de que deseas eliminar esta pintura?
                        </h3>
                        <div className="mt-4 flex justify-end space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-md"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
