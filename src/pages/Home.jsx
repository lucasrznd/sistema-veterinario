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
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import { Toast } from "primereact/toast";
import { msgErro, msgSucesso } from "../components/ui/Mensagens";

export default function Home() {
    const stepperRef = useRef(null);
    const toast = useRef(null);
    addLocale('pt-BR', ptBrLocale());

    const formik = useCirurgiaFormik((values) => {
        gerarPDF();
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const handlePDFSubmit = () => {
        formik.validateForm().then((errors) => {
            if (Object.keys(errors).length > 0) {
                formik.handleSubmit();
                msgErro(toast, 'Preencha corretamente todos os campos.');
            } else {
                msgSucesso(toast, 'PDF gerado com sucesso.');
                formik.handleSubmit(); // Submete o formulário
            }
        });
    };

    const gerarPDF = () => {
        const doc = new jsPDF();

        // Título principal
        doc.setFontSize(18);
        doc.text("Termo de Esclarecimento e Ciência sobre o Procedimento Cirúrgico", 14, 20);

        // Dados do Paciente
        const pacienteDados = [
            { campo: "Nome do Paciente", valor: formik.values.pacienteNome },
            { campo: "Espécie", valor: formik.values.pacienteEspecie },
            { campo: "Raça", valor: formik.values.pacienteRaca },
            { campo: "Data de Nascimento", valor: new Date().toLocaleDateString() },
            { campo: "Sexo", valor: formik.values.pacienteSexo }
        ];

        autoTable(doc, {
            startY: 30,
            head: [["Campo", "Valor"]],
            body: pacienteDados.map((item) => [item.campo, item.valor || "N/A"]),
        });

        // Dados do Responsável
        doc.text("Dados do Responsável", 14, doc.lastAutoTable.finalY + 10);
        const responsavelDados = [
            { campo: "Nome do Responsável", valor: formik.values.responsavelNome },
            { campo: "Nacionalidade", valor: formik.values.responsavelNacionalidade },
            { campo: "Sexo", valor: formik.values.responsavelSexo },
            { campo: "CPF", valor: formik.values.responsavelCpf },
            { campo: "Telefone", valor: formik.values.responsavelTelefone },
            { campo: "Endereço", valor: formik.values.responsavelEndereco },
            { campo: "CEP", valor: formik.values.responsavelCep },
            { campo: "Cidade", valor: formik.values.responsavelCidade },
        ];

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 15,
            head: [["Campo", "Valor"]],
            body: responsavelDados.map((item) => [item.campo, item.valor || "N/A"]),
        });

        // Dados do Estabelecimento
        doc.text("Dados do Estabelecimento", 14, doc.lastAutoTable.finalY + 10);
        const estabelecimentoDados = [
            { campo: "Nome do Estabelecimento", valor: formik.values.estabelecimentoNome },
            { campo: "Técnica Utilizada", valor: formik.values.estabelecimentoNome },
            { campo: "Nome do Anestesista", valor: formik.values.anestesistaNome },
            { campo: "Data da Cirurgia", valor: formik.values.dataCirurgia.toLocaleDateString() },
            { campo: "Nome do Cirurgião", valor: formik.values.nomeCirurgiaoUm },
        ];

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 15,
            head: [["Campo", "Valor"]],
            body: estabelecimentoDados.map((item) => [item.campo, item.valor || "N/A"]),
        });

        // Cirurgias e Complicações
        doc.text("Cirurgias e Complicações", 14, doc.lastAutoTable.finalY + 10);
        const cirurgias = formik.values.cirurgias.map((cirurgia) => ({
            titulo: cirurgia.titulo,
            complicacoes:
                cirurgia.complicacoes.length > 0
                    ? cirurgia.complicacoes.join(", ")
                    : "Nenhuma complicação informada",
        }));

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 15,
            head: [["Cirurgia", "Complicações"]],
            body: cirurgias.map((c) => [c.titulo, c.complicacoes]),
        });

        // Observacoes
        doc.text("Observações", 14, doc.lastAutoTable.finalY + 10);
        const observacoesDados = { campo: "Observações", valor: formik.values.observacoes };

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 15,
            head: [["Campo", "Valor"]],
            body: [[observacoesDados.campo, observacoesDados.valor]],
        });

        // Adiciona nova página para o termo de responsabilidade
        doc.addPage();

        // Centraliza o título
        doc.setFontSize(16);
        doc.text("Termo de Responsabilidade", doc.internal.pageSize.width / 2, 20, { align: "center" });

        // Configurações do texto
        doc.setFontSize(12);
        const marginX = 14; // Margem esquerda
        let cursorY = 30;   // Início do texto

        // Bloco 1 - Introdução do termo
        const texto1 = `Eu ${formik.values.responsavelNome?.toUpperCase() || "NOME DO RESPONSÁVEL"}, declaro que o Drº ${formik.values.nomeCirurgiaoUm.toUpperCase() || "NOME DO CIRURGIÃO"}
me informou sobre a proposta do procedimento que será realizado e que seus benefícios
me foram claramente explicados assim como os riscos e complicações potenciais.`;

        const linhasTexto1 = doc.splitTextToSize(texto1, 180); // Largura máxima do texto
        doc.text(linhasTexto1, marginX, cursorY);
        cursorY += linhasTexto1.length * 7; // Ajusta a posição vertical (7 é a altura da linha)

        // Bloco 2 - Perguntas e respostas
        const texto2 = `Declaro também que tive a oportunidade de fazer perguntas e, quando as fiz,
obtive respostas de maneira adequada e satisfatória. Entendo que não exista garantia
absoluta sobre os resultados a serem obtidos e que esta declaração não contém todas
as complicações e riscos conhecidos possíveis de acontecer nesta cirurgia,
mas apenas os mais frequentes.`;

        const linhasTexto2 = doc.splitTextToSize(texto2, 180);
        doc.text(linhasTexto2, marginX, cursorY);
        cursorY += linhasTexto2.length * 7;

        // Bloco 3 - Consentimento final
        const texto3 = `Assim, declaro que estou satisfeito(a) com as informações recebidas e que
compreendo o alcance dos riscos do procedimento. Desta maneira, e nestas condições,
dou o consentimento para que o mesmo seja realizado.`;

        const linhasTexto3 = doc.splitTextToSize(texto3, 180);
        doc.text(linhasTexto3, marginX, cursorY);
        cursorY += linhasTexto3.length * 7 + 10; // Espaço extra antes da assinatura

        // Assinatura e data
        doc.text("________________________ (Localização) __/__/____ (Data)", marginX + 20, cursorY);
        cursorY += 15;
        doc.text("___________________________________________", marginX + 25, cursorY);
        cursorY += 10;
        doc.text("Assinatura Responsável", marginX + 65, cursorY);

        // Salva o PDF
        doc.save("termo_responsabilidade.pdf");


        // Salvar o PDF
        doc.save("relatorio_paciente.pdf");
    };

    return (
        <>
            <Toast ref={toast} />
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
                                <Button label="Gerar PDF" type="submit" icon="pi pi-file-pdf" iconPos="right" onClick={handlePDFSubmit} />
                            </div>
                        </StepperPanel>
                    </Stepper>
                </div>
            </Panel>
        </>
    );
}