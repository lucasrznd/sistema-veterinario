import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

export function IdentificacaoEstabelecimento({ formik, isFormFieldValid, getFormErrorMessage }) {
    return (
        <div className="card p-fluid">
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                    <label htmlFor='estabelecimentoNome' style={{ marginBottom: '0.5rem' }}>Nome do Estabelecimento:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-building"></i>
                        </span>
                        <InputText
                            id="estabelecimentoNome"
                            name="estabelecimentoNome"
                            maxLength={50}
                            value={formik.values.estabelecimentoNome}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('estabelecimentoNome') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('estabelecimentoNome')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='diagnostico' style={{ marginBottom: '0.5rem' }}>Diagnóstico:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-building"></i>
                        </span>
                        <InputText
                            id="diagnostico"
                            name="diagnostico"
                            maxLength={200}
                            value={formik.values.diagnostico}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('diagnostico') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('diagnostico')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='cirurgia' style={{ marginBottom: '0.5rem' }}>Cirurgia:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-building"></i>
                        </span>
                        <InputText
                            id="cirurgia"
                            name="cirurgia"
                            maxLength={50}
                            value={formik.values.cirurgia}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('cirurgia') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('cirurgia')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='anestesistaNome' style={{ marginBottom: '0.5rem' }}>Nome do Anestesista:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText
                            id="anestesistaNome"
                            name="anestesistaNome"
                            value={formik.values.anestesistaNome}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('anestesistaNome') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('anestesistaNome')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='dataCirurgia' style={{ marginBottom: '0.5rem' }}>Data da Cirurgia:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-calendar"></i>
                        </span>
                        <Calendar
                            id="dataCirurgia"
                            name="dataCirurgia"
                            hideOnDateTimeSelect
                            dateFormat="dd/mm/yy" locale="pt-BR"
                            value={formik.values.dataCirurgia}
                            onChange={(e) => formik.setFieldValue('dataCirurgia', new Date(e.value))}
                            className={isFormFieldValid('dataCirurgia') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('dataCirurgia')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='nomeCirurgiaoUm' style={{ marginBottom: '0.5rem' }}>Nome do Cirurgião:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText
                            id="nomeCirurgiaoUm"
                            name="nomeCirurgiaoUm"
                            value={formik.values.nomeCirurgiaoUm}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('nomeCirurgiaoUm') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('nomeCirurgiaoUm')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='nomeCirurgiaoDois' style={{ marginBottom: '0.5rem' }}>Nome 2º Cirurgião <strong>(Opcional)</strong>:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText
                            id="nomeCirurgiaoDois"
                            name="nomeCirurgiaoDois"
                            maxLength={70}
                            value={formik.values.nomeCirurgiaoDois}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('nomeCirurgiaoDois') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('nomeCirurgiaoDois')}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor='nomeCirurgiaoTres' style={{ marginBottom: '0.5rem' }}>Nome 3º Cirurgião <strong>(Opcional)</strong>:</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText
                            id="nomeCirurgiaoTres"
                            name="nomeCirurgiaoTres"
                            maxLength={80}
                            value={formik.values.nomeCirurgiaoTres}
                            onChange={formik.handleChange}
                            className={isFormFieldValid('nomeCirurgiaoTres') ? "p-invalid uppercase" : "uppercase"} />
                    </div>
                    {getFormErrorMessage('nomeCirurgiaoTres')}
                </div>
            </div>
        </div>
    );
}