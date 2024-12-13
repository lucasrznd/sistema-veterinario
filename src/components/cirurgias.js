import React, { useState } from 'react';
import "./style.css";

function ExpansiveButton({ onOptionSelect, buttonText, selectedOptions, options }) {
  const [isExpanded, setIsExpanded] = useState(false);


  const handleOptionChange = (option) => {
    onOptionSelect(option);
  };

  return (
    <div style={{ display: 'inline-block', margin: '3px' }}>
      <button
        style={{
          fontSize: '13px', // Tamanho da fonte
          padding: '10px 10px', // Espaçamento interno
          backgroundColor: isExpanded ? 'GhostWhite' : 'GhostWhite', // Cor de fundo
          color: 'black', // Cor do texto
          border: 'none', // Remover borda
          cursor: 'pointer', // Cursor ao passar o mouse
          width: '23vh',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {buttonText}
      </button>
      {isExpanded && (
        <div style={{ marginTop: '10px' }}>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionChange(option)}
              disabled={selectedOptions.includes(option)}
              style={{
                fontSize: '10px', // Tamanho da fonte para as opções
                cursor: 'pointer',
                margin: '8px 0',
                display: 'block',
                backgroundColor: selectedOptions.includes(option) ? 'Aqua' : 'GhostWhite',
                border: 'none',
                width: '167px',
                height: '45px',



              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SelectedOptionsList({ selectedOptions, onRemoveOption }) {
  return (
    <div className='list'>
      <h2>OPÇÕES SELECIONADAS:</h2>


      <ul>
        {selectedOptions.map((option, index) => (
          <li key={index}>
            {option} <button onClick={() => onRemoveOption(option)}>X</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

function Cirurgias({ onGeneratePDF }) {
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    if (option === 'NODULECTOMIA') {
      onGeneratePDF([...selectedOptions, option], 'Complicação');
    } else {
      onGeneratePDF([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
    onGeneratePDF(updatedOptions);
  };

  const Tegu = ['NODULECTOMIA', 'RECONSTRUTIVAS', 'ENXERTO'];
  const OlhoAnex = ['PALPEBRAIS', 'CONJUNTIVAIS', 'ENUCLEAÇÃO', 'GLÂNDULA DA TERCEIRA PÁLPEBRA', 'PROPTOSE'];
  const Orelha = ['ABLAÇÃO DO CANAL AUDITIVO', 'OTOHEMATOMA', ' PINECTOMIA ']
  const Cav_Ab = ['CELIOTOMIA EXPLORATÓRIA', 'HÉRNIA UMBILICAL', 'HÉRNIA ABDOMINAL', 'HÉRNIA INGUINAL', 'HÉRNIA ESCROTAL', 'ABDOMINOCENTESE ']
  const Cav_oral = ['BIÓPSIA', 'MAXILECTOMIA PARCIAL', 'MANDIBULECTOMIA PARCIAL', 'MANDIBULECTOMIA ROSTRAL', 'QUEILOPLASTIA', 'GLOSSECTOMIA', 'CORREÇÃO FISSURA PALATINA',
    'CORREÇÃO FISSURAS ORONASAIS', 'EXCISÃO DE TUMORES ORAIS', 'CORREÇÃO MUCOCELE SALIVAR', 'CORREÇÃO SIALOCELE', 'MARSUPIALIZAÇÃO DA RÂNULA']
  const Esofago = ['ESOFAGECTOMIA PARCIAL', 'INTUSSUSCEPÇÃO GASTROESOFÁGICA']
  const Estomago = ['GASTROJEJUNOSTOMIA', 'CORREÇÃO TORÇÃO VÔLVULO ´GÁSTRICA']
  const Intestino = ['ETEROROMIA', 'ENTERECTOMIA', 'ENTEROPEXIA', 'PLICATURA INTESTINAL', 'COLOPEXIA', 'COLOSTOMIA', 'COLECTOMIA']
  const Par_reto_anus = ['RESSECÇÃO RETAL', 'SACULECTOMIA ANAL', 'CORREÇÃO HÉRNIA PERINEAL', 'CORREÇÃO PROLAPSO RETAL']
  const Figado = ['LOBECTOMIA PARCIAL', 'LOBECTOMIA TOTAL', 'CORREÇÃO SHUNT P.SISTÊMICO', 'VASO ANÔMALO']
  const Sis_Biliar = ['COLECISTOTOMIA', 'COLECISTODUODENOSTOMIA']
  const Sis_Endocrino = ['ADRENALECTOMIA', 'PANCREATECTOMIA PARCIAL', 'TIROIDECTOMIA']
  const Sis_Hemolinfatico = ['ESPLENECTOMIA PARCIAL', 'ESPLENECTOMIA TOTAL', 'LINFANDENECTOMIA ']
  const Sis_Urinario = ['NEFROTOMIA', 'PIELOLITOTOMIA', ' URETEROTOMIA', 'NEFECTOMIA', 'CISTOTOMIA', 'CISTECTOMIA', ' URETROSTOMIA',
    'CORREÇÃO PROLAPSO URETRAL'
  ]
  const Sis_Rep_Gen = ['OVÁRIO-HISTERCTOMIA', 'ORQUIECTOMIA', 'MASTECTOMIA', 'EPISIOTOMIA', 'EPISIOPLASTIA', 'PROSTATECTOMIA']
  const Sis_Cardio = ['PERSISTÊNCIA DUCTO ARTERIOSO', 'ESTENOSE PULMONAR', 'TETRALOGIA FALLOT', ' NEOPLASIA CARDIACA ']
  const Sis_Resp = ['CORREÇÃO NARINAS ESTENÓSTICAS', 'CORREÇÃO DE PALATO MOLE ALONGADO', 'CORREÇÃO SÁCULOS LARÍGEOS EVERTIDOS',
    'CORREÇÃO DE COLAPSO DE TRAQUEIA POR ENDOPROTESE', 'RETIRADA DE TUMORES EM TRAQUEIA OU LARINGE'
  ]
  const Sis_ResInf_Parede_Tora = ['TORACOTOMIA', 'TUMOR EM PAREDE TORÁCICA', 'LOBECTOMIA', 'CORRE.RUPTURA DIAFRAGMÁTICA']
  const Ortopedia = ['FRATURA DE MAXILA E MANDIBULA', 'FRATURA DE ESCÁPULA', 'FRATURA UMERAIS', 'FRATURA ARTICULARES', 'FRATURA CONDILARES', 'FRATURA DE RÁDIO E ULNA',
    'FRATURA DE CARPO E TARSO', 'FRATURA DE PELVE', 'LUXAÇÕES SACRO ILÍACA', 'FRATURA ACETABULAR', 'FRATURA FEMORAL', 'FRATURA DE TÍBIA', 'AVULSÃO DA CRISTA DA TÍBIA',
    'LUXAÇÃO TEMPOROMANDIBULAR', 'CORRE DISPLASIA COTOVELO', 'CORREÇÃO DE FRAGMENTAÇÃO DO PROCESSO CORONÓIDE', 'CORREÇÃO DA NÃO UNIÃO DO PROCESSO ANCÔNEO',
    'CORREÇÃO DE LUXAÇÃO OU SUBLUXAÇÃO DE COTOVELO', 'CORREÇÃO DA DISPLASIA COXOFEMORAL', 'CORREÇÃO DA RUPTURA DO LIGAMENTO CRUZADO CRANIAL',
    'CORREÇÃO DA LUXAÇÃO PATELAR MEDIAL'
  ]
  const Neurocirurgia = ['CIRURGIA DE COLUNA CERVICAL', 'CORREÇÃO DE FRATURAS OU LUXAÇÕES DE COLUNA CERVICAL', 'CIRURGIA DA COLUNA TORACO LOMBAR',
    'CIRURGIA DA COLUNA LOMBO SACRA'
  ]

  return (
    <div className='containerCir'>

      <div className="mineContainerCirurgia"><h2 className="cirurgia"> CIRURGIAS </h2> </div>

      <div>

        <div className='grupo1' >

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA TEGUMENTAR"
            selectedOptions={selectedOptions}
            options={Tegu}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="OLHO E ANEXOS"
            selectedOptions={selectedOptions}
            options={OlhoAnex}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="ORELHA"
            selectedOptions={selectedOptions}
            options={Orelha}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="CAVIDADE ABDOMINAL "
            selectedOptions={selectedOptions}
            options={Cav_Ab}
          />



        </div>

        {/** adicionei um codigo aqui em baixo. Ass Thiago Amim */}
        <div className='grupo2'>

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="CAVIDADE ORAL"
            selectedOptions={selectedOptions}
            options={Cav_oral}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="ESÔFAGO"
            selectedOptions={selectedOptions}
            options={Esofago}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="ESTÔMAGO"
            selectedOptions={selectedOptions}
            options={Estomago}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="INTESTINO"
            selectedOptions={selectedOptions}
            options={Intestino}
          />



        </div> {/* fim do codigo do grupo 2 */}

        <div className='grupo3'>

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="PERÍNEO,RETO E ÂNUS"
            selectedOptions={selectedOptions}
            options={Par_reto_anus}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="FÍGADO"
            selectedOptions={selectedOptions}
            options={Figado}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA BILIAR EXTRA HEPÁTICO"
            selectedOptions={selectedOptions}
            options={Sis_Biliar}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA ENDÓCRINO"
            selectedOptions={selectedOptions}
            options={Sis_Endocrino}
          />


        </div> {/*Fim do Grupo 3 */}

        <div className='grupo3'>

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA
        HEMOLINFÁTICO "
            selectedOptions={selectedOptions}
            options={Sis_Hemolinfatico}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA URINÁRIO"
            selectedOptions={selectedOptions}
            options={Sis_Urinario}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA REPRODUTIVO E GENITAL "
            selectedOptions={selectedOptions}
            options={Sis_Rep_Gen}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA
        CARDIOVASCULAR"
            selectedOptions={selectedOptions}
            options={Sis_Cardio}
          />

        </div> {/*Fim do Grupo 4 */}


        <div className='grupo3'>

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA
        RESPIRATÓRIO"
            selectedOptions={selectedOptions}
            options={Sis_Resp}
          />

          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="SISTEMA
        RESPIRATÓRIO INFERIOR E PAREREDE TORÁCICA"
            selectedOptions={selectedOptions}
            options={Sis_ResInf_Parede_Tora}
          />
          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="ORTOPEDIA"
            selectedOptions={selectedOptions}
            options={Ortopedia}
          />
          <ExpansiveButton
            onOptionSelect={handleOptionSelect}
            buttonText="NEUROCIRURGIA"
            selectedOptions={selectedOptions}
            options={Neurocirurgia}
          />



        </div> {/*Fim do Grupo 5 */}



      </div>

      <div className='list'>
        <SelectedOptionsList selectedOptions={selectedOptions} onRemoveOption={handleRemoveOption} />

      </div>

      <div className='limpar'>
        <button className='tamanho' onClick={() => setSelectedOptions([])} >Limpar Lista</button>

      </div>

    </div>
  );
}

export default Cirurgias;