import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from 'primereact/checkbox';
import "./ui/FormCirurgias.css";
import { cirurgias } from '../data/data';

export const FormCirurgias = ({ formik }) => {
    const toggleCirurgia = (cirurgia) => {
        let novasSelecionadas = [...formik.values.cirurgias];

        // Verifica se a cirurgia já foi selecionada
        if (novasSelecionadas.some((item) => item.titulo === cirurgia.titulo)) {
            novasSelecionadas = novasSelecionadas.filter((item) => item.titulo !== cirurgia.titulo);
        } else {
            // Adiciona a cirurgia como um objeto com título e complicações
            novasSelecionadas.push({
                titulo: cirurgia.titulo,
                complicacoes: cirurgia.complicacoes || [], // Adiciona complicações ou array vazio
            });
        }

        formik.setFieldValue("cirurgias", novasSelecionadas);
    };

    return (
        <div>
            <h2>Selecione as Cirurgias Realizadas</h2>

            <div className="card p-fluid">
                <div className="accordion-grid">
                    {Object.keys(cirurgias).map((parte, index) => (
                        <Accordion key={index} className="accordion-item">
                            <AccordionTab header={parte}>
                                {cirurgias[parte].map((item, idx) => {
                                    // Verifica se o item é um objeto ou string
                                    const cirurgia =
                                        typeof item === "object"
                                            ? { titulo: item.titulo, complicacoes: item.complicacoes }
                                            : { titulo: item, complicacoes: [] };

                                    const isChecked = formik.values.cirurgias.some(
                                        (selecionada) => selecionada.titulo === cirurgia.titulo
                                    );

                                    return (
                                        <div key={idx} className="p-field-checkbox">
                                            <Checkbox
                                                inputId={cirurgia.titulo}
                                                checked={isChecked}
                                                onChange={() => toggleCirurgia(cirurgia)}
                                            />
                                            <label className="ml-1" htmlFor={cirurgia.titulo}>
                                                {cirurgia.titulo}
                                            </label>
                                        </div>
                                    );
                                })}
                            </AccordionTab>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};