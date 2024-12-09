import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ categorias: initialCategorias }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        fecha_creacion: "",
        artista: "",
        tecnica: "",
        vendido: "",
        coleccion: "",
        dimenciones: "",
        categoria_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        const formData = {
            ...data,
            vendido: data.vendido === "true" ? true : false,
        };
        post(route("pinturas.store"), {
            data: formData,
            onFinish: () =>
                reset(
                    "nombre",
                    "descripcion",
                    "precio",
                    "cantidad",
                    "fecha_creacion",
                    "artista",
                    "tecnica",
                    "vendido",
                    "coleccion",
                    "dimenciones",
                    "categoria_id"
                ),
        });
    };

    const [categorias, setCategorias] = useState(initialCategorias);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Crear Nueva Pintura
                </h2>
            }
        >
            <Head title="crear una nueva pintura" />

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
                                <div>
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
                                        required
                                    />

                                    <InputError
                                        message={errors.descripcion}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="precio"
                                        value="Precio"
                                    />

                                    <TextInput
                                        id="precio"
                                        name="precio"
                                        value={data.precio}
                                        className="mt-1 block w-full"
                                        autoComplete="precio"
                                        onChange={(e) =>
                                            setData("precio", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.precio}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="cantidad"
                                        value="Cantidad"
                                    />

                                    <TextInput
                                        id="cantidad"
                                        name="cantidad"
                                        type="number"
                                        value={data.cantidad}
                                        className="mt-1 block w-full"
                                        autoComplete="cantidad"
                                        onChange={(e) =>
                                            setData("cantidad", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.cantidad}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="fecha_creacion"
                                        value="Fecha de Creación"
                                    />

                                    <TextInput
                                        id="fecha_creacion"
                                        name="fecha_creacion"
                                        value={data.fecha_creacion}
                                        className="mt-1 block w-full"
                                        autoComplete="fecha_creacion"
                                        onChange={(e) =>
                                            setData(
                                                "fecha_creacion",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.fecha_creacion}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="artista"
                                        value="Artista"
                                    />

                                    <TextInput
                                        id="artista"
                                        name="artista"
                                        value={data.artista}
                                        className="mt-1 block w-full"
                                        autoComplete="artista"
                                        onChange={(e) =>
                                            setData("artista", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.artista}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="tecnica"
                                        value="Técnica"
                                    />

                                    <select
                                        id="tecnica"
                                        name="tecnica"
                                        value={data.tecnica}
                                        onChange={(e) =>
                                            setData("tecnica", e.target.value)
                                        }
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        required
                                    >
                                        <option value="">
                                            Selecciona una técnica
                                        </option>
                                        <option value="oleo">Óleo</option>
                                        <option value="acrilico">
                                            Acrílico
                                        </option>
                                        <option value="acuarela">
                                            Acuarela
                                        </option>
                                        <option value="carboncillo">
                                            Carboncillo
                                        </option>
                                    </select>

                                    <InputError
                                        message={errors.tecnica}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="vendido"
                                        value="Vendido"
                                    />

                                    <select
                                        id="vendido"
                                        name="vendido"
                                        value={data.vendido}
                                        className="mt-1 block w-full"
                                        autoComplete="vendido"
                                        onChange={(e) =>
                                            setData("vendido", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="">
                                            Seleccione una opción
                                        </option>
                                        <option value="1">Sí</option>
                                        <option value="0">No</option>
                                    </select>

                                    <InputError
                                        message={errors.vendido}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="coleccion"
                                        value="Colección"
                                    />

                                    <TextInput
                                        id="coleccion"
                                        name="coleccion"
                                        value={data.coleccion}
                                        className="mt-1 block w-full"
                                        autoComplete="coleccion"
                                        onChange={(e) =>
                                            setData("coleccion", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.coleccion}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="dimenciones"
                                        value="dimenciones"
                                    />

                                    <TextInput
                                        id="dimenciones"
                                        name="dimenciones"
                                        value={data.dimenciones}
                                        className="mt-1 block w-full"
                                        autoComplete="dimenciones"
                                        onChange={(e) =>
                                            setData(
                                                "dimenciones",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.dimenciones}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="categoria_id"
                                        value="Categoría"
                                    />

                                    <select
                                        id="categoria_id"
                                        name="categoria_id"
                                        value={data.categoria_id}
                                        onChange={(e) =>
                                            setData(
                                                "categoria_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    >
                                        <option value="">
                                            Selecciona una categoría
                                        </option>
                                        {categorias.map((categoria) => (
                                            <option
                                                key={categoria.id}
                                                value={categoria.id}
                                            >
                                                {categoria.nombre}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError
                                        message={errors.categoria_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Crear Pintura
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
