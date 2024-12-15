import { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { addLocale } from "primereact/api";
import { ptBrLocale } from "../functions/utils";
import { useCirurgiaFormik } from "../hooks/useCirurgiaFormik";
import { IdentificacaoPaciente } from "../components/IdentificacaoPaciente";
import { IdentificacaoResponsavel } from "../components/IdentificacaoResponsavel";
import { IdentificacaoEstabelecimento } from "../components/IdentificaoEstabelecimento";
import { FormCirurgias } from "../components/FormCirurgias";
import { ComplicacoesCirurgias } from "../components/ComplicacoesCirurgias";

export default function Home() {
    const stepperRef = useRef(null);
    addLocale('pt-BR', ptBrLocale());

    const formik = useCirurgiaFormik((values) => {
        console.log(values);
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <>
            <Panel>
                <div className="card flex justify-content-center">
                    <Stepper ref={stepperRef} className="w-10">
                        <StepperPanel header="Identificação do Paciente">
                            <IdentificacaoPaciente
                                formik={formik}
                                isFormFieldValid={isFormFieldValid}
                                getFormErrorMessage={getFormErrorMessage}
                                addLocale={addLocale} />
                            <div className="flex pt-4 justify-content-end">
                                <Button label="Avançar" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>

                        <StepperPanel header="Identificação do Responsavél">
                            <IdentificacaoResponsavel
                                formik={formik}
                                isFormFieldValid={isFormFieldValid}
                                getFormErrorMessage={getFormErrorMessage} />
                            <div className="flex pt-4 justify-content-between">
                                <Button label="Voltar" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Button label="Avançar" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>

                        <StepperPanel header="Identificação do Estabelecimento">
                            <IdentificacaoEstabelecimento
                                formik={formik}
                                isFormFieldValid={isFormFieldValid}
                                getFormErrorMessage={getFormErrorMessage} />
                            <div className="flex pt-4 justify-content-between">
                                <Button label="Voltar" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Button label="Avançar" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>

                        <StepperPanel header="Cirurgias">
                            <FormCirurgias formik={formik} />
                            <ComplicacoesCirurgias formik={formik} />
                            <div className="flex pt-4 justify-content-between">
                                <Button label="Voltar" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Button label="Gerar PDF" icon="pi pi-file-pdf" iconPos="right" onClick={() => console.log(formik.values)} />
                            </div>
                        </StepperPanel>
                    </Stepper>
                </div>
            </Panel>
        </>
    );
}