import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        descripcion: "",
        activo: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("categorias.store"), {
            data,
            onFinish: () =>
                reset("nombre", "descripcion", "activo"),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Crear Nueva Categoría
                </h2>
            }
        >
            <Head title="crear una nueva categoría" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel
                                        htmlFor="nombre"
                                        value="Nombre"
                                    />

                                    <TextInput
                                        id="nombre"
                                        name="nombre"
                                        value={data.nombre}
                                        className="mt-1 block w-full"
                                        autoComplete="nombre"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("nombre", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.nombre}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="descripcion"
                                        value="Descripción"
                                    />

                                    <TextInput
                                        id="descripcion"
                                        name="descripcion"
                                        value={data.descripcion}
                                        className="mt-1 block w-full"
                                        autoComplete="descripcion"
                                        onChange={(e) =>
                                            setData(
                                                "descripcion",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.descripcion}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="activo"
                                        value="Activo"
                                    />
                                    <div className="flex items-center mt-2">
                                        <input
                                            id="activo"
                                            name="activo"
                                            type="checkbox"
                                            checked={data.activo}
                                            onChange={(e) =>
                                                setData(
                                                    "activo",
                                                    e.target.checked
                                                )
                                            }
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="activo"
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            ¿Está activa esta categoría?
                                        </label>
                                    </div>
                                    <InputError
                                        message={errors.activo}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Crear Categoría
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
