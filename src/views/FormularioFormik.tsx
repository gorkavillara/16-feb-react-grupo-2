import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Error from "components/Error"

type FormType = {
    nombre: string
    apellido: string
    email: string
    isDeveloper: boolean
}

type ErrorsType = {
    nombre?: string
    apellido?: string
    email?: string
    isDeveloper?: string
}

// Esto es equivalente a lo de arriba
type FormErrors = {
    [Prop in keyof FormType]?: string
}

const formSchema = Yup.object({
    nombre: Yup.string().required().min(3, "El nombre debe tener mínimo 3 caracteres"),
    apellido: Yup.string().min(5),
    email: Yup.string().email(),
    isDeveloper: Yup.boolean()
})

const initialData: FormType = {
    nombre: "",
    apellido: "Blázquez",
    email: "juancarlos@perez.mayo",
    isDeveloper: true,
}

const FormularioFormik = () => {
    return (
        <div>
            <h3>Formulario Formik</h3>
            <Formik
                initialValues={initialData}
                onSubmit={(values) => console.log(values)}
                validationSchema={formSchema}
                validateOnBlur={true}
                validateOnChange={false}
                validate={(values) => {
                    const errors: ErrorsType = {}

                    if (values.nombre.length < 3) {
                        errors.nombre =
                            "El nombre tiene que tener mínimo 3 caracteres"
                    }

                    if (!values.isDeveloper) {
                        errors.isDeveloper =
                            "Debe ser desarrollador para enviar el formulario"
                    }

                    if (values.nombre === values.apellido) {
                        errors.nombre = "El nombre debe ser diferente al apellido"
                    }

                    return errors
                }}
            >
                <Form className="formik">
                    <label htmlFor="nombre">
                        <span>Nombre </span>
                        <Field id="nombre" type="text" name="nombre" />
                        <ErrorMessage className="error" name="nombre" component="span" />
                    </label>
                    <Field type="text" name="apellido" />
                    <ErrorMessage className="error" name="apellido" component={Error} />
                    <Field type="email" name="email" />
                    <label htmlFor="developer">
                        <span>Es desarrollador? </span>
                        <Field
                            id="developer"
                            type="checkbox"
                            name="isDeveloper"
                        />
                        <ErrorMessage className="error" name="isDeveloper" component={Error} />
                    </label>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormularioFormik
