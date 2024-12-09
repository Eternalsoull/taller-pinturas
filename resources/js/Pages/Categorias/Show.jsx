import { Head, Link } from '@inertiajs/react';

export default function ShowCategory({ categoria }) {
    return (
        <>
            <Head title="Show Category" />
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
                                <h3 className="text-lg font-bold mb-4">{categoria.nombre}</h3>
                                <p><strong>Descripción:</strong> {categoria.descripcion}</p>
                                <p><strong>Estado:</strong> {categoria.activo ? "Activa" : "Inactiva"}</p>
                                <p><strong>Slug:</strong> {categoria.slug}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
