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
            responsavelCpf: '',
            responsavelTelefone: '',
            responsavelEndereco: '',
            responsavelCep: '',
            responsavelCidade: '',
            responsavelSexo: '',
            estabelecimentoNome: '',
            diagnostico: '',
            cirurgia: '',
            anestesistaNome: '',
            dataCirurgia: '',
            nomeCirurgiaoUm: '',
            nomeCirurgiaoDois: '',
            nomeCirurgiaoTres: '',
            cirurgias: [],
            observacoes: '',
            termoConsentimento: false,
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

            if (!data.estabelecimentoNome) {
                errors.estabelecimentoNome = "O campo 'Nome do Estabelecimento' é obrigatório.";
            }

            if (!data.diagnostico) {
                errors.diagnostico = "O campo 'Diagnóstico' é obrigatório.";
            }

            if (!data.cirurgia) {
                errors.cirurgia = "O campo 'Cirurgia' é obrigatório.";
            }

            if (!data.anestesistaNome) {
                errors.anestesistaNome = "O campo 'Nome do Anestesista' é obrigatório.";
            }

            if (!data.dataCirurgia) {
                errors.dataCirurgia = "O campo 'Data da Cirurgia' é obrigatório.";
            }

            if (!data.nomeCirurgiaoUm) {
                errors.nomeCirurgiaoUm = "O campo 'Nome do Cirurgião' é obrigatório.";
            }

            if (!data.termoConsentimento) {
                errors.termoConsentimento = "Termo de Consentimento obrigatório.";
            }

            return errors;
        },
        onSubmit: onSubmitCallback
    });
};
