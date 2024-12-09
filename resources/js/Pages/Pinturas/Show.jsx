import { Head, Link } from '@inertiajs/react';

export default function Show({ pintura }) {
    return (
        <>
            <Head title="Show Painting" />
            <div className="bg-black text-white min-h-screen">

                <nav className="bg-gray-800 text-white p-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <Link href="/" className="text-xl font-semibold">Home</Link>
                        <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Login
                        </Link>
                    </div>
                </nav>

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h3 className="text-lg font-bold mb-4">{pintura.nombre}</h3>
                                {pintura.imagen && (
                                    <div className="mb-4">
                                        <img 
                                            src={pintura.imagen} 
                                            alt={`Imagen de ${pintura.nombre}`} 
                                            className="w-full max-w-md mx-auto rounded shadow"
                                        />
                                    </div>
                                )}
                                <p><strong>Descripción:</strong> {pintura.descripcion}</p>
                                <p><strong>Precio:</strong> ${pintura.precio}</p>
                                <p><strong>Técnica:</strong> {pintura.tecnica}</p>
                                <p><strong>Artista:</strong> {pintura.artista}</p>
                                <p><strong>Dimensiones:</strong> {pintura.dimenciones}</p>
                                <p><strong>Cantidad:</strong> {pintura.cantidad}</p>
                                <p><strong>Fecha de creación:</strong> {pintura.fecha_creacion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
