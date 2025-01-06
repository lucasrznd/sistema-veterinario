import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { especiesDeAnimais } from "../data/data";

export function IdentificacaoPaciente({ formik, isFormFieldValid, getFormErrorMessage, addLocale }) {
    return (
        <div className="card p-fluid">
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                    <label htmlFor='pacienteNome' style={{ marginBottom: '0.5rem' }}>Nome:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-list"></i>
                        </span>
                        <InputText
                            id="pacienteNome"
                            name="pacienteNome"
                            value={formik.values.pacienteNome}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('pacienteNome') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('pacienteNome')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='pacienteEspecie' style={{ marginBottom: '0.5rem' }}>Espécie:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-list"></i>
                        </span>
                        <Dropdown id="pacienteEspecie" name="pacienteEspecie"
                            value={formik.values.pacienteEspecie}
                            onChange={(e) => formik.setFieldValue('pacienteEspecie', e.value.descricao)}
                            options={especiesDeAnimais} optionLabel="descricao"
                            editable placeholder="Selecione uma espécie"
                            className={isFormFieldValid('pacienteEspecie') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('pacienteEspecie')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='pacienteRaca' style={{ marginBottom: '0.5rem' }}>Raça:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-list"></i>
                        </span>
                        <InputText
                            id="pacienteRaca"
                            name="pacienteRaca"
                            value={formik.values.pacienteRaca}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('pacienteRaca') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('pacienteRaca')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='pacienteDataNascimento' style={{ marginBottom: '0.5rem' }}>Data de Nascimento:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-calendar"></i>
                        </span>
                        <Calendar
                            id="pacienteDataNascimento"
                            name="pacienteDataNascimento"
                            dateFormat="dd/mm/yy" locale="pt-BR"
                            showButtonBar
                            value={formik.values.pacienteDataNascimento}
                            onChange={(e) => formik.setFieldValue('pacienteDataNascimento', new Date(e.value))}
                            className={isFormFieldValid('pacienteDataNascimento') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('pacienteDataNascimento')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='sexo' style={{ marginBottom: '0.5rem' }}>Sexo:</label>
                    <div className="p-inputgroup flex-1">
                        <div className="flex flex-wrap gap-2">
                            <div className="flex align-items-center">
                                <RadioButton id="sexo" inputId="macho"
                                    name="macho" value="Macho"
                                    onChange={(e) => formik.setFieldValue('pacienteSexo', e.target.value)}
                                    checked={formik.values.pacienteSexo === 'Macho'} />
                                <label htmlFor="macho" className="ml-2">Macho</label>
                            </div>

                            <div className="flex align-items-center">
                                <RadioButton id="sexo" inputId="femea"
                                    name="femea" value="Fêmea"
                                    onChange={(e) => formik.setFieldValue('pacienteSexo', e.target.value)}
                                    checked={formik.values.pacienteSexo === 'Fêmea'} />
                                <label htmlFor="femea" className="ml-2">Fêmea</label>
                            </div>
                        </div>
                    </div>
                    {getFormErrorMessage('pacienteSexo')}
                </div>
            </div>
        </div>
    );
}