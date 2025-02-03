import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabPanel, TabView } from 'primereact/tabview';
import { useState } from 'react';
import { textoTermoConsentimento } from '../utils/textos';

export const ComplicacoesCirurgias = ({ formik, isFormFieldValid, getFormErrorMessage }) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [termoLido, setTermoLido] = useState(false);

    const handleDialogOpen = () => {
        setDialogVisible(true);
    };

    const handleDialogClose = () => {
        setDialogVisible(false);
        setTermoLido(true);
        formik.setFieldValue('termoConsentimento', true)
    };

    const dialogFooter = () => {
        return (
            <div>
                <Button label="Li e Concordo" icon="pi pi-check" onClick={handleDialogClose} />
            </div>
        );
    }

    const handleRemoveComplicacao = (cirurgiaTitulo, complicacao) => {
        const novasSelecionadas = formik.values.cirurgias.map((cirurgia) => {
            if (cirurgia.titulo === cirurgiaTitulo) {
                return {
                    ...cirurgia,
                    complicacoes: cirurgia.complicacoes.filter((c) => c !== complicacao),
                };
            }
            return cirurgia;
        });

        formik.setFieldValue("cirurgias", novasSelecionadas);
    };

    return (
        <div>
            {formik.values.cirurgias.length !== undefined && formik.values.cirurgias.length > 0 ?
                <>
                    <h3>Complicações Selecionadas</h3>
                    <TabView>
                        {formik.values.cirurgias.map((cirurgia, index) => (
                            <TabPanel key={cirurgia.titulo} header={cirurgia.titulo}>
                                <div key={index}>
                                    <DataTable value={cirurgia.complicacoes} rows={5} paginator emptyMessage="Sem complicações.">
                                        <Column field="complicacao" header="Complicação" align="center" alignHeader="center" body={(rowData) => rowData} />
                                        <Column
                                            header="Ações"
                                            align="center"
                                            alignHeader="center"
                                            body={(rowData) => (
                                                <Button
                                                    icon="pi pi-trash"
                                                    className="p-button-rounded p-button-danger"
                                                    onClick={() => handleRemoveComplicacao(cirurgia.titulo, rowData)}
                                                />
                                            )}
                                        />
                                    </DataTable>
                                </div>
                            </TabPanel>
                        ))}
                    </TabView>
                </>
                : <></>}
            {/* <h3>Complicações Selecionadas</h3> */}

            <div>
                <h3>Observações</h3>

                <InputTextarea
                    id="observacoes"
                    name="observacoes"
                    className='w-full'
                    style={{ height: '100px' }}
                    value={formik.values.observacoes}
                    onChange={formik.handleChange} />
            </div>

            <div className="p-field-checkbox mt-2">
                <Checkbox inputId="terms" checked={formik.values.termoConsentimento} onChange={(e) => formik.setFieldValue('termoConsentimento', e.checked)}
                    disabled={!termoLido}
                    className={isFormFieldValid('termoConsentimento') ? "p-invalid uppercase" : "uppercase"} />
                <label className='ml-1'>
                    Concordo com os{' '}
                    <span className='text-primary underline cursor-pointer' onClick={handleDialogOpen}>
                        termos
                    </span>
                </label>
            </div>
            {getFormErrorMessage('termoConsentimento')}
            
            <Dialog header="Termos e Condições" visible={dialogVisible} footer={dialogFooter}
                style={{ width: '30vw', minWidth: "30vw" }} breakpoints={{ '1200px': '65vw', '641px': '70vw' }}
                onHide={handleDialogClose} blockScroll modal draggable={false}>
                <p className='text-justify'>{textoTermoConsentimento}</p>
            </Dialog>
        </div>
    );
};
