import { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Panel } from 'primereact/panel';
import { addLocale } from "primereact/api";
import { ptBrLocale } from "../functions/utils";
import { Dropdown } from "primereact/dropdown";
import { especiesDeAnimais } from "../data/data";
import { RadioButton } from "primereact/radiobutton";
import { useFormik } from "formik";
import { usePacienteFormik } from "../hooks/usePacienteFormik";

export default function Home() {
    const stepperRef = useRef(null);
    addLocale('pt-BR', ptBrLocale());

    const formik = usePacienteFormik((values) => {
        console.log(values); 
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const avançarFormPaciente = async () => {
        const errors = await formik.validateForm(); // Valida todos os campos
        formik.setTouched(
            Object.keys(formik.values).reduce((acc, key) => {
                acc[key] = true; // Marca todos os campos como "touched"
                return acc;
            }, {})
        );

        if (Object.keys(errors).length === 0) {
            // Se não houver erros, avança para o próximo passo
            stepperRef.current.nextCallback();
        } else {
            // Não avança e exibe os erros
            console.log("Erros no formulário:", errors);
        }
    }

    return (
        <>
            <Panel>
                <div className="card flex justify-content-center">
                    <Stepper ref={stepperRef} className="w-9">
                        <StepperPanel header="Identificação do Paciente">
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

                            <div className="flex pt-4 justify-content-end">
                                <Button label="Avançar" icon="pi pi-arrow-right" iconPos="right" onClick={avançarFormPaciente} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Identificação do Responsavél">
                            <div className="flex flex-column h-12rem">
                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                            </div>
                            <div className="flex pt-4 justify-content-between">
                                <Button label="Voltar" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Button label="Avançar" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Identificação do Estabelecimento">
                            <div className="flex flex-column h-12rem">
                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                            </div>
                            <div className="flex pt-4 justify-content-start">
                                <Button label="Voltar" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            </div>
                        </StepperPanel>
                    </Stepper>
                </div>
            </Panel>
        </>
    );
}