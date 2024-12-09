import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    categorias,
    pinturas,
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCategorias, setFilteredCategorias] = useState(categorias);
    const [searchTermPintura, setSearchTermPintura] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/add25ad749.js";
        script.crossOrigin = "anonymous";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        setFilteredCategorias(
            categorias.filter((categoria) =>
                categoria.nombre
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, categorias]);

    const handleCategorySelect = (selectedCategory) => {
        setSearchTerm(selectedCategory.nombre);
        setShowDropdown(false); // Ocultar el dropdown al seleccionar una categoría
    };

    const filterPinturasByCategoria = (categoriaId) => {
        return pinturas.filter(
            (pintura) =>
                pintura.categoria_id === categoriaId &&
                pintura.nombre
                    .toLowerCase()
                    .includes(
                        searchTermPintura[categoriaId]?.toLowerCase() || ""
                    )
        );
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <nav className="bg-gray-800 text-white p-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <Link href="/" className="text-xl font-semibold">
                            Home
                        </Link>
                        {auth.user ? (
                            <Link
                                href="/dashboard"
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex space-x-2">
                                <Link
                                    href="/login"
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl lg:max-w-7xl">
                        <main className="mt-6">
                            <div className="relative mb-4 w-full max-w-xs mx-auto">
                                <input
                                    type="text"
                                    placeholder="Buscar categoría..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    onFocus={() => setShowDropdown(true)}
                                    onBlur={() =>
                                        setTimeout(
                                            () => setShowDropdown(false),
                                            100
                                        )
                                    }
                                />
                                {showDropdown && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto">
                                        {filteredCategorias.map((categoria) => (
                                            <li
                                                key={categoria.id}
                                                className="px-4 py-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer"
                                                onClick={() =>
                                                    handleCategorySelect(
                                                        categoria
                                                    )
                                                }
                                            >
                                                {categoria.nombre}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredCategorias.map((categoria) => (
                                    <div
                                        key={categoria.id}
                                        className="bg-white rounded-lg shadow-sm"
                                    >
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {categoria.nombre}
                                            </h3>

                                            <div className="mb-4 w-full max-w-xs mx-auto mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Buscar pintura..."
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                                    value={searchTermPintura[categoria.id] || ""}
                                                    onChange={(e) =>
                                                        setSearchTermPintura({
                                                            ...searchTermPintura,
                                                            [categoria.id]: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 gap-6 mt-4">
                                                {filterPinturasByCategoria(categoria.id).map((pintura) => (
                                                    <div
                                                        key={pintura.id}
                                                        className="bg-white rounded-lg shadow-md overflow-hidden"
                                                    >
                                                        <img
                                                            src={pintura.imagen}
                                                            alt={pintura.nombre}
                                                            className="w-full h-48 object-cover"
                                                            onError={(e) =>
                                                                (e.target.src =
                                                                    "/images/default-image.jpg")
                                                            }
                                                        />
                                                        <div className="p-6">
                                                            <h4 className="text-xl font-semibold text-gray-900">
                                                                {pintura.nombre}
                                                            </h4>
                                                            <p className="text-sm text-gray-500">
                                                                {pintura.descripcion}
                                                            </p>
                                                            <div className="flex items-center justify-between mt-4">
                                                                <span className="text-sm text-gray-500">
                                                                    ${pintura.precio}
                                                                </span>
                                                                <Link
                                                                    href={route("pinturas.show", {
                                                                        pintura: pintura.slug,
                                                                    })}
                                                                    className="text-indigo-600 hover:text-indigo-900"
                                                                >
                                                                    <i className="fa-regular fa-eye"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
