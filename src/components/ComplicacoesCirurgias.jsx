import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

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
            <h3>Complicações Selecionadas</h3>
            {formik.values.cirurgias.map((cirurgia, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <h4>{cirurgia.titulo}</h4>
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
            ))}
        </div>
    );
};
