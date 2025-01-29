export const especiesDeAnimais = [{ descricao: 'Canina' }, { descricao: 'Felina' }];

export const cirurgias = {
    "Cavidade Abdominal": [
        { titulo: "Abdominocentese", complicacoes: ["Hemorragia", "Hipoperfusão", "Hipotensão", "Lesão de Órgãos", "Óbito"] },
        { titulo: "Celiotomia (Laparotomia) Exploratória", complicacoes: ["Contaminação", "Deiscência", "Infecção", "Óbito"] },
        { titulo: "Hérnia Abdominal (Eventração/Evisceração)", complicacoes: ["Contaminação", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma"] },
        { titulo: "Hérnia Escrotal", complicacoes: ["Contaminação", "Disúria", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma", "Teresmo"] },
        { titulo: "Hérnia Inguinal", complicacoes: ["Contaminação", "Disúria", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma", "Teresmo"] },
        { titulo: "Hérnia Umbilical", complicacoes: ["Contaminação", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma"] }
    ],
    "Cavidade Oral": [
        { titulo: "Biópsia", complicacoes: ["Aspiração de Fluidos", "Desconforto Mastigação", "Dificuldade Respiratória", "Hemorragia", "Infecção Local", "Lesões Adjascentes"] },
        { titulo: "Fenda Palatina", complicacoes: [] },
        { titulo: "Fístulas Oronasais", complicacoes: [] },
        { titulo: "Mucocele Salivar/Sialocele", complicacoes: [] },
        { titulo: "Excisão de Tumores Orais", complicacoes: [] },
        { titulo: "Glossectomia", complicacoes: [] },
        { titulo: "Mandibulectomia", complicacoes: [] },
        { titulo: "Marsupialização da Rânula", complicacoes: [] },
        { titulo: "Maxilectomia", complicacoes: [] },
        { titulo: "Queiloplastia", complicacoes: [] }
    ],
    "Esôfago": [
        { titulo: "Acalasia Cricofaríngea", complicacoes: ["Pneumonia Aspirativa", "Seroma"] },
        { titulo: "Anomalias dos Aneis Vasculares", complicacoes: ["Bandas Fibróticas Persistentes", "Hemorragia", "Perfuração Esofágica", "Regurgitação Persistente", "Óbito"] },
        { titulo: "Endoscopia", complicacoes: ["Disfunção Neurológica do Esfíncter", "Distensão Gástrica", "Impossibilidade da Remoção do Corpo Estranho", "Laceração", "Perfuração"] },
        { titulo: "Esofagectomia Parcial", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Esofagotomia Cervical", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Esofagotomia Torácica", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Hérnia de Hiato", complicacoes: ["Anorexia", "Recidiva", "Ulceração no Local da Anastomose", "Vômito"] },
        { titulo: "Intussuscepção Gastroesofágica", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Sonda Esofágica", complicacoes: ["Celulite Cervical", "Divertículo Esofágico", "Esofagite", "Estenose Esofágica", "Infecção", "Necessidade de Retirada", "Retirada pelo Paciente", "Vômito"] }
    ],
    "Estômago": [
        { titulo: "Torção Vôlvulo Gástrica", complicacoes: ["Anemia", "Arritmia", "Coagulação Intravascular Disseminada", "Esplenectomia", "Hepatopatia", "Hipoproteinemia", "Infecção", "Necrose Estômago", "Perfuração Metabólica", "Síndrome da Resposta Inflamatória Sistêmica", "Vasculite"] },
        { titulo: "Endoscopia", complicacoes: [] },
        { titulo: "Gastrectomia Parcial", complicacoes: ["Anorexia", "Deficiência Nutricional", "Gastrite", "Hemorragia", "Pancreatite", "Peritonite", "Recidiva", "Ulceração", "Vômito", "Óbito"] },
        { titulo: "Gastroduodenostomia (BILLROTH I)", complicacoes: ["Alteração Neurológica", "Anorexia", "Choque Hipovolêmico", "Deiscência", "Exócrina", "Granuloma", "Hepatite", "Insuficiência Pancreática", "Insuficiência Pancreática Endócrina", "Linfoadenomegalia", "Obstrução Biliar", "Pancreatite", "Pneumonia Aspirativa", "Recidiva", "Recidiva", "Refluxo Duodenogástrico", "Regurgitação", "Sepse", "Vômito", "Óbito"] },
        { titulo: "Gastrojejunostomia (BILLROTH II)", complicacoes: ["Alteração Neurológica", "Anorexia", "Choque Hipovolêmico", "Deiscência", "Exócrina", "Granuloma", "Hepatite", "Insuficiência Pancreática", "Insuficiência Pancreática Endócrina", "Linfoadenomegalia", "Obstrução Biliar", "Pancreatite", "Pneumonia Aspirativa", "Recidiva", "Recidiva", "Refluxo Duodenogástrico", "Regurgitação", "Sepse", "Vômito", "Óbito"] },
        { titulo: "Gastropexia", complicacoes: ["Anorexia", "Comprometimento da Sonda", "Diminuição de Motilidade", "Peritonite", "Recorrência", "Vômito", "Úlcera"] },
        { titulo: "Gastrotomia", complicacoes: [] },
        { titulo: "Gastrostomia (Sonda Gástrica)", complicacoes: ["Alterações Metabólicas", "Distensão Abdominal", "Dor Abdominal", "Extravasamento do Conteúdo Gástrico", "Extração", "Infecção da Ferida", "Migração", "Obstrução do Tubo", "Regurgitação", "Vômito"] },
        { titulo: "Piloromiotomia/Piloroplastia", complicacoes: ["Anorexia", "Pancreatite", "Perfuração", "Peritonite", "Retardo do Esvaziamento Gástrico", "Vômito"] },
        { titulo: "Úlcera Gástrica", complicacoes: [] },
    ],
    "Fígado": [
        { titulo: "Shunt P.Sistêmico", complicacoes: ["Ascite", "Encefalopatia Hepática", "Fibrose Tecidual", "Hemorragias", "Hipertensão Portal", "Insuficiência Hepática Aguda", "Trombose"] },
        { titulo: "Lobectomia Hepática (Parcial/Total)", complicacoes: ["Aderências Intra-Abdominais", "Choque Hipovolêmico", "Dor.", "Hemorragia", "Infcções de Sítio Cirúrgico", "Insuficiência Hepática", "Obstrução Intestinal", "Peritonite"] }
    ],
    "Intestino": [
        { titulo: "Colectomia (Parcial/Total)", complicacoes: ["Aderencia de Mesentério", "Alteção Consistencia Fecal", "Deiscencia de Suturas", "Diarreia Temporaria", "Infecção Sitio Cirurgico", "Peritonite", "Vazamento Intestinal"] },
        { titulo: "Colopexia", complicacoes: ["Contaminação", "Dor Local", "Falha de Aderencia", "Incontinencia Fecal Temporária", "Necrose Tecidual", "Peritonite", "Tenesmo", "Transfixação Da Agulha A Luz Do Colon", "Tração Excessiva"] },
        { titulo: "Colostomia", complicacoes: ["Deiscencia de Sutura", "Dermatites Periestomais", "Incontinencia Fecal.", "Infecções", "Retração Prolapso Estoma"] },
        { titulo: "Enterectomia", complicacoes: ["Aderencias Intestinais", "Choque Hipovolemico", "Deiscencia Anastomose", "Desequilibrio Eletrolitico", "Diarreia Persistente.", "Disturbios Metabolicos", "Estenoses Locais", "Hiponatremia", "Infecções Locais", "Má Absorção", "Obstrução Intestinal", "Perda Ponderal", "Peritonite", "Sindrome Do Intestino Curto"] },
        { titulo: "Enterotomia", complicacoes: ["Aderencias Alças Intestinais", "Contaminação Cavidade Abdominal", "Deiscencia de Sutura", "Desidratação.", "Disturbios Metabolicos", "Estenose Segmentar", "Hemorragias", "Insuficiencia Intestinal", "Intecção Sitio Cirurgico", "Obstrução Secundária", "Peritonite Septica"] },
        { titulo: "Plicatura Intestinal", complicacoes: ["Aderencias", "Dor Abdominal Persistente", "Estenoses", "Infecções", "Laceração", "Obstrução Secundária", "Perfurações Multiplas de Alça", "Peritonite Septica", "Ruptura Intestinal"] }
    ],
    "Neurocirurgia": [
        { titulo: "Craniotomia", complicacoes: ["Dano Tecidual", "Deficits Neurológicos", "Hemorragia", "Hipertensão Intracraniana", "Infecção de Sítio Cirurgico", "Meningite", "Recidiva de Cistos E Tumores"] },
        { titulo: "Fraturas/Luxações Vertebrais (Cervical/Toracolombar/Lombar/Lombossacro)", complicacoes: ["A Instabilidade Residual Da Coluna", "Dor Crônica", "Incontinência Urinária e Infecções Pós-Operatórias ou Fecal", "Persistência ou Agravamento de Disfunções Neurológicas", "Solturas ou Fraturas"] },
        { titulo: "Hemilaminectomia Cervical", complicacoes: ["Dor Crônica", "Fibrose Epidural", "Hemorragia Intraoperatórias", "Infecção", "Instabilidade Vertebral", "Lesoes Iatrogênicas À Medula Espinhal ou Raízes Nervosas"] },
        { titulo: "Hemilaminectomia/Pediculectomia (Toracolombar/Lombar/Lombossacro)", complicacoes: [] },
        { titulo: "Instabilidade Atlantoaxial", complicacoes: ["Falha ou Migração dos Implantes", "Infecções", "Lesões Neurológicas Iatrogênicas", "Perfuração Traqueal E Paralisia Laríngea", "Pneumonia Aspirativa"] },
        { titulo: "Laminectomia Dorsal (Toracolombar/Lombar/Lombossacro)", complicacoes: [] },
        { titulo: "Slot Ventral", complicacoes: ["Déficits Neurológicos Iatrogênicos", "Falha Na Descompressão Completa", "Fibrose Epidural", "Infecções No Local Cirúrgico", "Instabilidade Vertebral", "O Risco De Lesão Do Seio Venoso Vertebral"] }
    ],
    "Olhos e Anexos": [
        { titulo: "Catarata", complicacoes: ["Deslocamento de Retina", "Edema Corneano", "Endoftalmite", "Hemorragia", "Hiperemia Ocular", "Hipertensão Intraocular", "Lesões Corneanas", "Opacificação da Cápsula", "Retinopatia", "Sinéquia", "Uveíte"] },
        { titulo: "Ectrópio", complicacoes: ["Ceratoconjuntivite Seca", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Edema", "Eritema", "Hemorragia", "Infecção", "Recidiva", "Secreção", "Úlcera"] },
        { titulo: "Enucleação", complicacoes: ["Deiscência", "Edema", "Hemorragia", "Infecção", "Inflamação"] },
        { titulo: "Entrópio", complicacoes: ["Ceratoconjuntivite Seca", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Edema", "Eritema", "Hemorragia", "Infecção", "Recidiva", "Secreção", "Úlcera"] },
        { titulo: "Flap Conjuntival", complicacoes: ["Edema", "Eritema", "Infecção", "Inflamação", "Recidiva", "Seroma", "Úlcera"] },
        { titulo: "Flap Terceira Pálpebra", complicacoes: ["Ceratoconjuntivite", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Ectóprio", "Edema", "Entrópio", "Eritrema", "Hemorragia", "Recidiva", "Seca", "Secreção", "Triquíase", "Úlcera"] },
        { titulo: "Neoplasias Palpebrais", complicacoes: ["Ceratoconjuntivite Seca", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Edema", "Eritema", "Hemorragia", "Recidiva", "Secreção", "Úlcera"] },
        { titulo: "Proptose Bulbar", complicacoes: ["Enucleação", "Incapacidade de Reposicionamento"] },
        { titulo: "Sepultamento da Glândula da Terceira Pálpebra", complicacoes: ["Deiscência", "Edema", "Eritema", "Infecção", "Inflamação", "Recidiva", "Seroma", "Úlcera"] }
    ],
    "Orelha": [
        { titulo: "Ablação do Canal Auditivo", complicacoes: ["Alteração Estética", "Deiscência", "Edema", "Hematoma", "Infecção", "Necrose", "Recidiva Tumoral", "Seroma"] },
        { titulo: "Otohematoma", complicacoes: ["Edema", "Retração Cicatricial"] },
        { titulo: "Pinectomia", complicacoes: ["Alteração Estética", "Deiscência", "Edema", "Hematoma", "Infecção", "Necrose", "Recidiva Tumoral", "Seroma"] }
    ],
    "Ortopedia": [
        { titulo: "Amputação de Membros Torácico/Pélvico", complicacoes: [] },
        { titulo: "Displasia Coxofemoral", complicacoes: [] },
        { titulo: "Fraturas Articulares", complicacoes: [] },
        { titulo: "Fraturas de Carpo/Metacarpo/Tarso/Metatarso/Falanges", complicacoes: [] },
        { titulo: "Fraturas de Escápula", complicacoes: [] },
        { titulo: "Fraturas de Fêmur", complicacoes: [] },
        { titulo: "Fraturas de Maxilar E Mandíbula", complicacoes: [] },
        { titulo: "Fraturas de Pelve", complicacoes: [] },
        { titulo: "Fraturas de Rádio E Ulna", complicacoes: [] },
        { titulo: "Fraturas de Tíbia", complicacoes: [] },
        { titulo: "Fraturas de Úmero", complicacoes: [] },
        { titulo: "Luxação Coxofemoral", complicacoes: [] },
        { titulo: "Luxação de Cotovelo (Úmerorádioulnar)", complicacoes: [] },
        { titulo: "Luxação de Ombro (Escapuloumeral)", complicacoes: [] },
        { titulo: "Luxação de Patela", complicacoes: [] },
        { titulo: "Luxação Radiocárpica", complicacoes: [] },
        { titulo: "Luxação Sacroilíaca", complicacoes: [] },
        { titulo: "Luxação Têmporomandibular", complicacoes: [] },
        { titulo: "Luxação Tíbiotársica", complicacoes: [] },
        { titulo: "Ruptura Do Ligamento Cruzado Cranial", complicacoes: [] }
    ],
    "Períneo, Reto e Ânus": [
        { titulo: "Hérnia Perineal", complicacoes: [] },
        { titulo: "Prolapso Retal", complicacoes: [] },
        { titulo: "Neoplasias Perineais", complicacoes: [] },
        { titulo: "Ressecção Retal", complicacoes: [] },
        { titulo: "Saculectomia Glândula Adanal", complicacoes: [] }
    ],
    "Sistema Biliar Extra Hepático": [
        { titulo: "Colecistoduodenostomia", complicacoes: [] },
        { titulo: "Colecistectomia", complicacoes: [] }
    ],
    "Sistema Cardiovascular": [
        { titulo: "Neoplasia Cardíaca", complicacoes: ["Arritmias Cardíacas", "Comprometimento Hemodinâmico", "Hemorragia Intraoperatória", "Infecção", "Metástase", "Recorrência Tumoral", "Sepse", "Tamponamento Cardíaco"] },
        { titulo: "Pericardiectomia", complicacoes: ["Arritmias Cardíacas", "Atelectasia Pulmonar", "Efusão Pleural", "Hemorragia Intraoperatória", "Hérnia Cardíaca", "Infecções Pós-Operatórias", "Lesão do Nervo Frênico", "Recorrência de Efusões", "Tamponamento Cardíaco Residual"] },
        { titulo: "Pericardiocentese", complicacoes: ["Hemorragias", "Infecção Intraoperatória", "Laceração Cardíaca", "Pneumopericárdio", "Pneumotórax", "Recorrência de Efusão Pericárdica", "Tamponamento Residual"] },
        { titulo: "Persistência Ducto Arterioso", complicacoes: ["Complicações Anestésicas", "Embolização", "Hemorragia", "Infecção", "Lesão do Parênquima Pulmonar", "Reabertura Ductal ou Fluxo Residual e Hemólise"] },
    ],
    "Sistema Endócrino": [
        { titulo: "Adrenalectomia", complicacoes: ["Arritmia", "Crises Hipertensivas", "Desequilíbrio Hidroeletrolítico", "Hemorragia", "Hipoadrenocorticismo", "Insuficiência Renal Aguda", "Isquemia Cardíaca", "Pancreatite", "Peritonite", "Tromboembolismo"] },
        { titulo: "Pancreactomia Parcial", complicacoes: ["Fístulas Pancreáticas", "Hemorragias", "Infecções Intra-abdominais", "Pancreatite"] },
        { titulo: "Tireoidectomia", complicacoes: ["Alterações Vocais", "Edema", "Hematomas", "Hemorragia", "Hipoparatireoidismo", "Metástases Linfáticas", "Metástases Pulmonares", "Paralisia Laríngea Unilateral ou Bilateral"] }
    ],
    "Sistema Hemolinfático": [
        { titulo: "Esplenectomia", complicacoes: ["Abcesso", "Alterações Hematológicas", "Arritmias", "Coagulação Intravascular Disseminada (CID)", "Hemorragia", "Infecções", "Necrose", "Septicemia", "Óbito"] },
        { titulo: "Linfadenectomia", complicacoes: [] },
    ],
    "Sistema Respiratório e Parede Torácica": [
        { titulo: "Colapso de Traqueia", complicacoes: [] },
        { titulo: "Dreno Torácico", complicacoes: [] },
        { titulo: "Estenose de Narina", complicacoes: [] },
        { titulo: "Eversão de Sacos Laríngeos", complicacoes: [] },
        { titulo: "Lobectomia Pulmonar", complicacoes: [] },
        { titulo: "Neoplasias em Laringe e Traqueia", complicacoes: [] },
        { titulo: "Neoplasias em Parede Torácica", complicacoes: [] },
        { titulo: "Paralisia de Laringe", complicacoes: [] },
        { titulo: "Prolongamento de Palato Mole", complicacoes: [] },
        { titulo: "Ruptura Diafragmática", complicacoes: [] },
        { titulo: "Toracocentese", complicacoes: [] },
        { titulo: "Toracorrafia", complicacoes: [] },
        { titulo: "Traqueorrafia", complicacoes: [] },
        { titulo: "Traqueostomia", complicacoes: [] }
    ],
    "Sistema Reprodutivo": [
        { titulo: "Cesariana com Ovariohisterectomia", complicacoes: [] },
        { titulo: "Cesariana sem Ovariohisterectomia", complicacoes: [] },
        { titulo: "Episioplastia", complicacoes: [] },
        { titulo: "Episiotomia", complicacoes: [] },
        { titulo: "Mastectomia", complicacoes: [] },
        { titulo: "Orquiectomia", complicacoes: [] },
        { titulo: "Ovariohisterectomia", complicacoes: [] },
        { titulo: "Penectomia", complicacoes: [] },
        { titulo: "Prolapso de Vagina", complicacoes: [] },
        { titulo: "Prolapso de Útero", complicacoes: [] }
    ],
    "Sistema Tegumentar": [
        { titulo: "Cirurgias Reconstrutivas", complicacoes: ["Congestão Tecidual", "Deiscência", "Hematomas", "Infecção", "Isquemia", "Necrose", "Seromas", "Tensão"] },
        { titulo: "Enxerto", complicacoes: ["Excesso de Movimentação de Enxerto", "Hematomas", "Infecções", "Isquemia", "Necrose Tecidual", "Seromas"] },
        { titulo: "Nodulectomia", complicacoes: ["Deiscência", "Hematoma", "Infecção", "Necrose", "Seroma", "Tensão"] },
        { titulo: "Sutura de Lacerações Cutâneas", complicacoes: [] }
    ],
    "Sistema Urinário": [
        { titulo: "Cistectomia", complicacoes: [] },
        { titulo: "Cistotomia", complicacoes: [] },
        { titulo: "Cistostomia", complicacoes: [] },
        { titulo: "Prolapso Uretral", complicacoes: [] },
        { titulo: "Desvios Urinários (Duplo J E Sub)", complicacoes: [] },
        { titulo: "Nefrectomia", complicacoes: [] },
        { titulo: "Nefrotomia", complicacoes: [] },
        { titulo: "Pielolitotomia", complicacoes: [] },
        { titulo: "Ureterotomia", complicacoes: [] },
        { titulo: "Uretrostomia", complicacoes: [] }
    ]
};