import { useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Panel } from 'primereact/panel';

export default function Principal() {
    const stepperRef = useRef(null);
    const [paciente, setPaciente] = useState({});

    return (
        <>
            <Panel>
                <div className="card flex justify-content-center">
                    <Stepper ref={stepperRef} style={{ flexBasis: '60rem' }}>
                        <StepperPanel header="Identificação do Paciente">

                            <div className="card p-fluid">
                                <div className="p-fluid formgrid grid">
                                    <div className="field col-12 md:col-6">
                                        <label htmlFor='nome' style={{ marginBottom: '0.5rem' }}>Nome:</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-list"></i>
                                            </span>
                                            <InputText
                                                id="nome"
                                                name="nome"
                                                value={paciente.nome}
                                                onChange={(e) => setPaciente({ ...paciente, nome: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="field col-12 md:col-6">
                                        <label htmlFor='especie' style={{ marginBottom: '0.5rem' }}>Espécie:</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-list"></i>
                                            </span>
                                            <InputText
                                                id="especie"
                                                name="especie"
                                                value={paciente.especie}
                                                onChange={(e) => setPaciente({ ...paciente, especie: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="field col-12 md:col-6">
                                        <label htmlFor='raca' style={{ marginBottom: '0.5rem' }}>Raça:</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-list"></i>
                                            </span>
                                            <InputText
                                                id="raca"
                                                name="raca"
                                                value={paciente.raca}
                                                onChange={(e) => setPaciente({ ...paciente, raca: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="field col-12 md:col-6">
                                        <label htmlFor='dataNascimento' style={{ marginBottom: '0.5rem' }}>Data de Nascimento:</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar"></i>
                                            </span>
                                            <Calendar
                                                id="dataNascimento"
                                                name="dataNascimento"
                                                value={paciente.dataNascimento}
                                                onChange={(e) => setPaciente({ ...paciente, dataNascimento: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="field col-12 md:col-6">
                                        <label htmlFor='sexo' style={{ marginBottom: '0.5rem' }}>Sexo:</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-mars"></i>
                                            </span>
                                            <InputText
                                                id="sexo"
                                                name="sexo"
                                                value={paciente.sexo}
                                                onChange={(e) => setPaciente({ ...paciente, sexo: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-4 justify-content-end">
                                <Button label="Avançar" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
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