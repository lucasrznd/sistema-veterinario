import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabPanel, TabView } from 'primereact/tabview';

export const ComplicacoesCirurgias = ({ formik }) => {
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
                <h3>Complicações Selecionadas</h3> : <></>}
            {/* <h3>Complicações Selecionadas</h3> */}
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
        </div>
    );
};
