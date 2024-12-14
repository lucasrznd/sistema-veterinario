import { useFormik } from "formik";

export const usePacienteFormik = (onSubmitCallback) => {
    return useFormik({
        initialValues: {
            pacienteNome: '',
            pacienteEspecie: '',
            pacienteRaca: '',
            pacienteDataNascimento: undefined,
            pacienteSexo: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.pacienteNome) {
                errors.pacienteNome = "O campo 'Nome' é obrigatório.";
            }

            if (!data.pacienteEspecie) {
                errors.pacienteEspecie = "O campo 'Espécie' é obrigatório.";
            }

            if (!data.pacienteRaca) {
                errors.pacienteRaca = "O campo 'Raça' é obrigatório.";
            }

            if (!data.pacienteDataNascimento) {
                errors.pacienteDataNascimento = "O campo 'Data de Nascimento' é obrigatório.";
            }

            if (!data.pacienteSexo) {
                errors.pacienteSexo = "O campo 'Sexo' é obrigatório.";
            }

            return errors;
        },
        onSubmit: onSubmitCallback
    });
};
