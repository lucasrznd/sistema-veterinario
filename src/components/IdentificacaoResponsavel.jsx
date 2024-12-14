import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";

export function IdentificacaoResponsavel({ formik, isFormFieldValid, getFormErrorMessage }) {
    return (
        <div className="card p-fluid">
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
                        <InputText
                            id="responsavelCpf"
                            name="responsavelCpf"
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
                        <InputText
                            id="responsavelTelefone"
                            name="responsavelTelefone"
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
                        <InputText
                            id="responsavelCep"
                            name="responsavelCep"
                            value={formik.values.responsavelCep}
                            onChange={formik.handleChange}
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
                            value={formik.values.responsavelCidade}
                            onChange={formik.handleChange}
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