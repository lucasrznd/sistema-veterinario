import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { RadioButton } from "primereact/radiobutton";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { msgErro } from "./ui/Mensagens";

export function IdentificacaoResponsavel({ formik, isFormFieldValid, getFormErrorMessage }) {
    const toast = useRef(null);
    const [cidadeDisabled, setCidadeDisabled] = useState(true);

    const onChangeCep = async (e) => {
        formik.setFieldValue('responsavelCep', e.value);

        var cpfLimpo = e.value.replace(/[^\d]/g, "");
        if (cpfLimpo.length === 8) {
            try {
                const response = await axios.get('https://viacep.com.br/ws/' + cpfLimpo + '/json/');

                if (response.data.erro === 'true') {
                    msgErro(toast, 'CEP inválido.');
                    setCidadeDisabled(false);
                    return;
                }

                formik.setFieldValue('responsavelCidade', response.data.localidade);
                setCidadeDisabled(true);
            } catch (error) {
                msgErro(toast, 'Erro de conexão com o servidor.');
                setCidadeDisabled(false);
            }
        }

        if (formik.values.zipCode === '') {
            formik.setFieldValue('responsavelCidade', '');
        }
    }

    return (
        <div className="card p-fluid">
            <Toast ref={toast} />
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelNome' style={{ marginBottom: '0.5rem' }}>Nome:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText
                            id="responsavelNome"
                            name="responsavelNome"
                            maxLength={50}
                            value={formik.values.responsavelNome}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('responsavelNome') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelNome')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelNacionalidade' style={{ marginBottom: '0.5rem' }}>Nacionalidade:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-flag"></i>
                        </span>
                        <InputText
                            id="responsavelNacionalidade"
                            name="responsavelNacionalidade"
                            maxLength={50}
                            value={formik.values.responsavelNacionalidade}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('responsavelNacionalidade') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelNacionalidade')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelCpf' style={{ marginBottom: '0.5rem' }}>CPF:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputMask
                            id="responsavelCpf"
                            name="responsavelCpf"
                            mask="999.999.999-99"
                            value={formik.values.responsavelCpf}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('responsavelCpf') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelCpf')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelTelefone' style={{ marginBottom: '0.5rem' }}>Telefone:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-phone"></i>
                        </span>
                        <InputMask
                            id="responsavelTelefone"
                            name="responsavelTelefone"
                            mask="(99) 9 9999-9999"
                            value={formik.values.responsavelTelefone}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('responsavelTelefone') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelTelefone')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelEndereco' style={{ marginBottom: '0.5rem' }}>Endereço:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-home"></i>
                        </span>
                        <InputText
                            id="responsavelEndereco"
                            name="responsavelEndereco"
                            maxLength={70}
                            value={formik.values.responsavelEndereco}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('responsavelEndereco') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelEndereco')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelCep' style={{ marginBottom: '0.5rem' }}>CEP:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-home"></i>
                        </span>
                        <InputMask
                            mask="99999-999"
                            id="responsavelCep"
                            name="responsavelCep"
                            value={formik.values.responsavelCep}
                            onChange={onChangeCep}
                            className={isFormFieldValid('responsavelCep') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelCep')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelCidade' style={{ marginBottom: '0.5rem' }}>Cidade:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-home"></i>
                        </span>
                        <InputText
                            id="responsavelCidade"
                            name="responsavelCidade"
                            maxLength={80}
                            value={formik.values.responsavelCidade}
                            onChange={formik.handleChange}
                            disabled={cidadeDisabled}
                            className={isFormFieldValid('responsavelCidade') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('responsavelCidade')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='responsavelSexo' style={{ marginBottom: '0.5rem' }}>Sexo:</label>
                    <div className="p-inputgroup flex-1">
                        <div className="flex flex-wrap gap-2">
                            <div className="flex align-items-center">
                                <RadioButton id="sexo" inputId="Masculino"
                                    name="masculino" value="Masculino"
                                    onChange={(e) => formik.setFieldValue('responsavelSexo', e.target.value)}
                                    checked={formik.values.responsavelSexo === 'Masculino'} />
                                <label htmlFor="masculino" className="ml-2">Masculino</label>
                            </div>

                            <div className="flex align-items-center">
                                <RadioButton id="sexo" inputId="Feminino"
                                    name="feminino" value="Feminino"
                                    onChange={(e) => formik.setFieldValue('responsavelSexo', e.target.value)}
                                    checked={formik.values.responsavelSexo === 'Feminino'} />
                                <label htmlFor="feminino" className="ml-2">Feminino</label>
                            </div>

                            <div className="flex align-items-center">
                                <RadioButton id="sexo" inputId="Outros"
                                    name="outros" value="Outros"
                                    onChange={(e) => formik.setFieldValue('responsavelSexo', e.target.value)}
                                    checked={formik.values.responsavelSexo === 'Outros'} />
                                <label htmlFor="outros" className="ml-2">Outros</label>
                            </div>
                        </div>
                    </div>
                    {getFormErrorMessage('responsavelSexo')}
                </div>
            </div>
        </div>
    );
}