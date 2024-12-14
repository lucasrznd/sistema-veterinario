import { useFormik } from "formik";

export const useCirurgiaFormik = (onSubmitCallback) => {
    return useFormik({
        initialValues: {
            pacienteNome: '',
            pacienteEspecie: '',
            pacienteRaca: '',
            pacienteDataNascimento: undefined,
            pacienteSexo: '',
            responsavelNome: '',
            responsavelNacionalidade: '',
            responsavelCpf: undefined,
            responsavelTelefone: undefined,
            responsavelEndereco: '',
            responsavelCep: undefined,
            responsavelCidade: '',
            responsavelSexo: ''
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

            if (!data.responsavelNome) {
                errors.responsavelNome = "O campo 'Nome' é obrigatório.";
            }

            if (!data.responsavelNacionalidade) {
                errors.responsavelNacionalidade = "O campo 'Espécie' é obrigatório.";
            }

            if (!data.responsavelCpf) {
                errors.responsavelCpf = "O campo 'Raça' é obrigatório.";
            }

            if (!data.responsavelTelefone) {
                errors.responsavelTelefone = "O campo 'Data de Nascimento' é obrigatório.";
            }

            if (!data.responsavelEndereco) {
                errors.responsavelEndereco = "O campo 'Sexo' é obrigatório.";
            }

            if (!data.responsavelCep) {
                errors.responsavelCep = "O campo 'CEP' é obrigatório.";
            }

            if (!data.responsavelCidade) {
                errors.responsavelCidade = "O campo 'Cidade' é obrigatório.";
            }

            if (!data.responsavelSexo) {
                errors.responsavelSexo = "O campo 'Sexo' é obrigatório.";
            }

            return errors;
        },
        onSubmit: onSubmitCallback
    });
};
