import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p className="text-lg font-medium mb-4">¡Bienvenido, Administrador de Pinturas!</p>
                            <p className="text-sm text-gray-600 mb-6">
                                Este es el panel de control donde puedes gestionar todas las operaciones relacionadas con las pinturas y sus categorías.
                            </p>
                            {/* Nueva sección agregada */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Card 1 */}
                                <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2">Total de Pinturas</h3>
                                    <p className="text-3xl font-bold">120</p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2">Pinturas Activas</h3>
                                    <p className="text-3xl font-bold">95</p>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2">Categorías de Pinturas</h3>
                                    <p className="text-3xl font-bold">10</p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-600">
                                    Eres un administrador con permisos completos para gestionar pinturas, categorías y descuentos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
