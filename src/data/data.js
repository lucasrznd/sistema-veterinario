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
        { titulo: "Fenda Palatina", complicacoes: ["Cicatrização Incompleta", "Deiscência de Suturas Devido À Tensão Nos Tecidos ou Manipulação Inadequada", "Dificuldade de Cicatrização.", "Infecções Locais", "Pneumonia Aspirativa", "Recidivas Da Fenda"] },
        { titulo: "Fístulas Oronasais", complicacoes: ["Deiscência de Suturas", "Hematomas", "Infecções de Sítio Cirurgico", "Inflamação", "Necrose Do Retalho e Edema No Local"] },
        { titulo: "Mucocele Salivar/Sialocele", complicacoes: ["Deiscência de Sutura", "Infecção de Sítio Cirúgico.", "Remoção Incompleta Da Glândula", "Seromas"] },
        { titulo: "Excisão de Tumores Orais", complicacoes: ["Alterações Funcionais", "Comprometimento Ósseo.", "Deiscências Suturas", "Hemorragias", "Infecções de Sítio Cirúrgico", "Protusão Da Lingua", "Recidiva Local ou Metástase", "Sialorreia"] },
        { titulo: "Glossectomia", complicacoes: ["Deiscência Da Sutura", "Desidratação", "Infecção Local", "Obstrução Parcial Vias Aéreas.", "Perda de Peso Progressiva"] },
        { titulo: "Mandibulectomia", complicacoes: ["Alterações Estéticas", "Deiscência de Sutura", "Dor e Desconforto Pós-Operatório", "Infecção de Sítio Cirúrgico", "Recidiva Tumoral"] },
        { titulo: "Marsupialização da Rânula", complicacoes: ["Formação de Seromas e Dificuldade Na Cicatrização", "Infecções Pós-Operatórias", "Recidiva Da Lesão"] },
        { titulo: "Maxilectomia", complicacoes: ["Alterações Funcionais", "Complicações Estéticas", "Comprometimento Respiratório", "Deiscencia de Suturas", "Dor Pós-Operatória.", "Edema", "Fístulas Oronasais", "Hemorragias", "Infecção de Sítio Cirúrgico", "Lesões Teciduais", "Recidiva", "Remoção Incompleta"] },
        { titulo: "Queiloplastia", complicacoes: ["Assimetria", "Cicatrização Inadequada", "Deiscência de Suturas", "Dificuldade Na Alimentação", "Infecção de Sítio Cirúrgico", "Sangramento."] }
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
        { titulo: "Endoscopia", complicacoes: ["Dificuldade de Observação Endoscópica", "Disfunção Neurológica Do Esfíncter", "Distensões Gástricas e Necessidade de Conversão Para Cirurgia Convencional", "Hemorragia", "Lacerações", "Perfurações"] },
        { titulo: "Gastrectomia Parcial", complicacoes: ["Anorexia", "Deficiência Nutricional", "Gastrite", "Hemorragia", "Pancreatite", "Peritonite", "Recidiva", "Ulceração", "Vômito", "Óbito"] },
        { titulo: "Gastroduodenostomia (BILLROTH I)", complicacoes: ["Alteração Neurológica", "Anorexia", "Choque Hipovolêmico", "Deiscência", "Exócrina", "Granuloma", "Hepatite", "Insuficiência Pancreática", "Insuficiência Pancreática Endócrina", "Linfoadenomegalia", "Obstrução Biliar", "Pancreatite", "Pneumonia Aspirativa", "Recidiva", "Recidiva", "Refluxo Duodenogástrico", "Regurgitação", "Sepse", "Vômito", "Óbito"] },
        { titulo: "Gastrojejunostomia (BILLROTH II)", complicacoes: ["Alteração Neurológica", "Anorexia", "Choque Hipovolêmico", "Deiscência", "Exócrina", "Granuloma", "Hepatite", "Insuficiência Pancreática", "Insuficiência Pancreática Endócrina", "Linfoadenomegalia", "Obstrução Biliar", "Pancreatite", "Pneumonia Aspirativa", "Recidiva", "Recidiva", "Refluxo Duodenogástrico", "Regurgitação", "Sepse", "Vômito", "Óbito"] },
        { titulo: "Gastropexia", complicacoes: ["Anorexia", "Comprometimento da Sonda", "Diminuição de Motilidade", "Peritonite", "Recorrência", "Vômito", "Úlcera"] },
        { titulo: "Gastrotomia", complicacoes: ["Alterações Metabólicas", "Distensão Abdominal", "Dor Abdominal", "Extravasamento Do Conteúdo Gástrico", "Extração", "Infeccção Da Ferida", "Migração", "Obstrução Do Tubo", "Regurgitação", "Vômito"] },
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
        { titulo: "Colopexia", complicacoes: ["Contaminação", "Dor Local", "Falha de Aderencia", "Incontinencia Fecal Temporária", "Necrose Tecidual", "Peritonite", "Tenesmo", "Transfixação da Agulha A Luz do Colon", "Tração Excessiva"] },
        { titulo: "Colostomia", complicacoes: ["Deiscencia de Sutura", "Dermatites Periestomais", "Incontinencia Fecal.", "Infecções", "Retração Prolapso Estoma"] },
        { titulo: "Enterectomia", complicacoes: ["Aderencias Intestinais", "Choque Hipovolemico", "Deiscencia Anastomose", "Desequilibrio Eletrolitico", "Diarreia Persistente.", "Disturbios Metabolicos", "Estenoses Locais", "Hiponatremia", "Infecções Locais", "Má Absorção", "Obstrução Intestinal", "Perda Ponderal", "Peritonite", "Sindrome do Intestino Curto"] },
        { titulo: "Enterotomia", complicacoes: ["Aderencias Alças Intestinais", "Contaminação Cavidade Abdominal", "Deiscencia de Sutura", "Desidratação.", "Disturbios Metabolicos", "Estenose Segmentar", "Hemorragias", "Insuficiencia Intestinal", "Intecção Sitio Cirurgico", "Obstrução Secundária", "Peritonite Septica"] },
        { titulo: "Plicatura Intestinal", complicacoes: ["Aderencias", "Dor Abdominal Persistente", "Estenoses", "Infecções", "Laceração", "Obstrução Secundária", "Perfurações Multiplas de Alça", "Peritonite Septica", "Ruptura Intestinal"] }
    ],
    "Neurocirurgia": [
        { titulo: "Craniotomia", complicacoes: ["Dano Tecidual", "Deficits Neurológicos", "Hemorragia", "Hipertensão Intracraniana", "Infecção de Sítio Cirurgico", "Meningite", "Recidiva de Cistos e Tumores"] },
        { titulo: "Fraturas/Luxações Vertebrais (Cervical/Toracolombar/Lombar/Lombossacro)", complicacoes: ["A Instabilidade Residual da Coluna", "Dor Crônica", "Incontinência Urinária e Infecções Pós-Operatórias ou Fecal", "Persistência ou Agravamento de Disfunções Neurológicas", "Solturas ou Fraturas"] },
        { titulo: "Hemilaminectomia Cervical", complicacoes: ["Dor Crônica", "Fibrose Epidural", "Hemorragia Intraoperatórias", "Infecção", "Instabilidade Vertebral", "Lesoes Iatrogênicas À Medula Espinhal ou Raízes Nervosas"] },
        { titulo: "Hemilaminectomia/Pediculectomia (Toracolombar/Lombar/Lombossacro)", complicacoes: ["Fibrose Epidural", "Hemorragias Intraoperatórias", "Infecção de Sítio Cirúrgico", "Instabilidade Cervical", "Lesões Iatrogênicas", "Paresia ou Peraplegia", "Presença de Material Residual No Canal Vertebral"] },
        { titulo: "Instabilidade Atlantoaxial", complicacoes: ["Falha ou Migração dos Implantes", "Infecções", "Lesões Neurológicas Iatrogênicas", "Perfuração Traqueal e Paralisia Laríngea", "Pneumonia Aspirativa"] },
        { titulo: "Laminectomia Dorsal (Toracolombar/Lombar/Lombossacro)", complicacoes: [] },
        { titulo: "Slot Ventral", complicacoes: ["Déficits Neurológicos Iatrogênicos", "Falha Na Descompressão Completa", "Fibrose Epidural", "Infecções No Local Cirúrgico", "Instabilidade Vertebral", "O Risco de Lesão do Seio Venoso Vertebral"] }
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
        { titulo: "Amputação de Membros Torácico/Pélvico", complicacoes: ["Atrofia Muscular", "Desequilibrios Locomotores", "Dor Crônica", "Dor Neuropática", "Hematomas", "Hemorragias", "Infecção de Coto", "Seromas"] },
        { titulo: "Displasia Coxofemoral", complicacoes: ["Dorcronica", "Falhas Na Colocação de Próteses ou Implantes", "Fibrose", "Infecções Pós-Operatórias", "Luxações Persistentes", "Osteófitos", "Redução Da Amplitude de Mocimento", "Rigidez Articular"] },
        { titulo: "Fraturas Articulares", complicacoes: ["Corrosão", "Dor", "Falha de Fixação de Placas", "Fibrose Periarticular", "Infecção Tardia", "Infecções", "Limitação Da Mobilidade", "Parafusos ou Implantes; Orteoartrite Pós Traumática", "Rejeição"] },
        { titulo: "Fraturas de Carpo/Metacarpo/Tarso/Metatarso/Falanges", complicacoes: [] },
        { titulo: "Fraturas de Escápula", complicacoes: ["Calo Ósseo", "Desalinhamento Ósseo", "Dor", "Falhas Em Estabilização", "Fibrose", "Infecções de Sítio Cirurgico", "Limitação de Movimento", "Osteófitos", "Rigidez Articular"] },
        { titulo: "Fraturas de Fêmur", complicacoes: ["Consolidação Inadequada", "Desalinhamento de Implantes", "Dor", "Infecção de Sítio Cirurgico", "Instabilidade Ossea", "Interrupção Suprimento Vascular", "Lesoes de Nervos", "Rigidez Articular"] },
        { titulo: "Fraturas de Maxilar e Mandíbula", complicacoes: ["Deiscência de Suturas", "Desalinhamento Dentário", "Falha de Implante", "Formação de Fístulas", "Infecção de Sítio Cirúrgico", "Inflamação Crônica", "Instabilidade Óssea", "Má Oclusão Da Mordedura", "Sequestro Ósseo"] },
        { titulo: "Fraturas de Pelve", complicacoes: ["Calo Ósseo", "Complicações Funcionais", "Desalinhamento", "Dificuldade De Deambulação", "Dor Cronica", "Estreitamento Do Canal Pélvico", "Falhas De Implantes Cirurgicos", "Hemorragias Internas", "Infecção De Sítio Cirurgico", "Instabilidade Residual", "Ruptura De Bexiga Ou Uretra"] },
        { titulo: "Fraturas de Rádio e Ulna", complicacoes: ["Desalinhamento e Falhas No Implante", "Dor Cronica", "Infecção de Sítio Cirurgico", "Não União Ossea", "Osteomielite", "Pseudoartrose", "Reabsorção Ossea", "Rigidez Articular"] },
        { titulo: "Fraturas de Tíbia", complicacoes: ["Calo Ósseo", "Desalinhamento e Instabilidade Ossea", "Falha de Implantes", "Infecções de Sítio Cirurgico", "Lesoes Em Tecidos Moles", "Osteomielite", "Rejeição de Implantes"] },
        { titulo: "Fraturas de Úmero", complicacoes: ["Calo Osseo", "Deformidades Anatomicas", "Desalinhamento", "Deslocamento de Fragmentos Osseos", "Encurtamento de Membro", "Infecções de Sitio Cirurgico", "Não Uniao Fratura", "Ostiomielite", "Perda Funcional"] },
        { titulo: "Luxação Coxofemoral", complicacoes: ["Hematomas", "Hemorragias", "Infecção de Sítio Cirurgico", "Recidiva Da Luxação", "Restrição de Movimentos"] },
        { titulo: "Luxação de Cotovelo (Úmerorádioulnar)", complicacoes: ["Dor", "Exposição Ou Rejeição Do Implante", "Infecção de Ferida Cirurgica", "Irritação de Partes Moles", "Migração Do Implante", "Má Uniao"] },
        { titulo: "Luxação de Ombro (Escapuloumeral)", complicacoes: ["Artrite Séptica", "Dor Cronica", "Falhas Implantares", "Fibrose Intra-Articular", "Frouxidão Persistente", "Infecção Ferida Cirurgica", "Limitação de Amplitude de Movimento", "Osteoartrite"] },
        { titulo: "Luxação de Patela", complicacoes: ["Artrite Degenerativa", "Claudicação e Atrofia Muscular", "Dor", "Dor Persistente", "Infecção Sítio Cirurgico", "Lesoes Tecidos Adjascentes", "Migração de Implantes", "Recidiva Da Luxação", "Tecido Cicatricial Excessivo"] },
        { titulo: "Luxação Radiocárpica", complicacoes: ["Artrose Secundária", "Instabilidade Residual", "Irritação Tecidual", "Quebra de Implantes"] },
        { titulo: "Luxação Sacroilíaca", complicacoes: ["Afrouxamento de Implantes", "Danos Neurologicos", "Dor", "Instabilidade Articular", "Perfuração Canal Espinhal", "Posicionamento Inadequado Dos Parafusos", "Seromas"] },
        { titulo: "Luxação Têmporomandibular", complicacoes: ["Anquilose Articular", "Infecção Local", "Instabilidade Articular", "Lesões Em Estruturas Adjascentes"] },
        { titulo: "Luxação Tíbiotársica", complicacoes: ["Danos a Estrutuas Adjacentes e Dor Cronica", "Degeneração Articular Progressiva", "Falha Fixação de Implantes", "Infecções", "Instabilidade Articular", "Recidiva", "Redução Amplide de Movimento"] },
        { titulo: "Ruptura do Ligamento Cruzado Cranial", complicacoes: ["Claudicação Prolongada", "Deiscencia de Suturas", "Falha Fixação de Implantes", "Fratura de Tíbia", "Instabilidade Articular", "Lesoes Meniscais", "Limitações de Movimento", "Osteoartrose", "Infecções de Sitio Cirurgico"] }
    ],
    "Períneo, Reto e Ânus": [
        { titulo: "Hérnia Perineal", complicacoes: ["Abscessos", "Claudicação", "Comprometimento do Esficter Anal", "Contaminação Abdominal", "Deiscencia de Suturas", "Dor", "Incontinencia Fecal e Urinária", "Infecção de Ferida Operatoria", "Lesões Nervosas", "Necrose Vesical", "Prolapsos Retais", "Recidiva."] },
        { titulo: "Prolapso Retal", complicacoes: ["Aderencias", "Constrição Lumen Intestinal", "Contaminação Fecal", "Deiscência de Sutura", "Infecção Local", "Necrose Tecidual", "Obstrução", "Perfuração Intestinal", "Recidiva"] },
        { titulo: "Neoplasias Perineais", complicacoes: ["Deiscencia de Suturas", "Estenose Anal", "Formação de Fístulas", "Hipercalemia Paraneoplasica", "Incontinencia Fecal Transitoria ou Permanente", "Infecções Sitio Cirurgico", "Recidiva"] },
        { titulo: "Ressecção Retal", complicacoes: ["Aderencias Pelvicas.", "Alteração Transito Intestinal", "Deiscencia Da Anastomose", "Desidratação", "Diarreia Cronica", "Estenose Local", "Fibrose", "Fistulas e Abscesos", "Incontinencia Fecal", "Infecções Locais", "Má Absorção", "Peritonite Septica", "Risco Contaminação Cavidade Abdominal", "Sindrome Do Intestino Curto"] },
        { titulo: "Saculectomia Glândula Adanal", complicacoes: ["Abscessos", "Deiscencia de Suturas", "Dificuldade de Defecação", "Estenoses Anais", "Fistulas", "Hemorragia Intraoperatoria", "Incontinencia Fecal Transitoria ou Permanente", "Infecções Locais", "Recidivas de Neoplasias", "Tenesmo Persistente"] }
    ],
    "Sistema Biliar Extra Hepático": [
        { titulo: "Colecistoduodenostomia", complicacoes: ["Colangite", "Deiscência da Anastomose", "Estenose do Lúmen", "Hemorragias Transoperatórias", "Infecções.", "Peritonite Biliar"] },
        { titulo: "Colecistectomia", complicacoes: ["Colangite Ascendente", "Estenoses de Ducto Biliar", "Hemorragias", "Peritonite Biliar", "Ruptura do Ducto Biliar.", "Vazamentos Biliares"] }
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
        { titulo: "Linfadenectomia", complicacoes: ["Deiscências de Suturas", "Dificuldade de Cicatrização.", "Edema Linfático", "Hemorragia", "Infecções Pós-Operatórias", "Lesões de Estruturas Adjacentes", "Seromas"] },
    ],
    "Sistema Respiratório e Parede Torácica": [
        { titulo: "Colapso de Traqueia", complicacoes: ["Colapso Residual", "Enfisema Subcutâneo", "Granulomas", "Hipoventilação", "Infecções Locais", "Migração Do Stent", "Obstrução Traqueal", "Perfuração Traqueal", "Pneumotórax", "Reestenose Traqueal"] },
        { titulo: "Dreno Torácico", complicacoes: ["Bloqueio de Lúmen Dreno", "Comprometimento Respiratório", "Edema Pulmonar de Reexpansão", "Empiema", "Hemorragias", "Hemotórax", "Hemotórax Retido", "Lacerações Pulmonares", "Pneumotórax Hipertensivo"] },
        { titulo: "Estenose de Narina", complicacoes: ["Deiscência de Sutura", "Despigmentação Tecido Nasal", "Estenose Recorrente", "Infecção de Sítio Cirúrgico", "Tecido Cicatricial Excessivo"] },
        { titulo: "Eversão de Sacos Laríngeos", complicacoes: ["Cicatrização Excessiva", "Colapso Laríngeo", "Edema Pós-Operatório Das Vias Respiratórias Superiores", "Hemorragia Intraoperatória", "Pneumonia Aspirativa", "Regurgitação e Vômitos"] },
        { titulo: "Lobectomia Pulmonar", complicacoes: ["Arritmias", "Atelectasias", "Colapso Parcial", "Diminuição Da Ventilação Pulmonar", "Dor", "Hemorragias", "Hipotensão", "Infecção Cavidade Torácica", "Pneumonias", "Pneumotórax Persistente"] },
        { titulo: "Neoplasias em Laringe e Traqueia", complicacoes: ["Danos de Nervos Laríngeos Recorrentes", "Edema Laríngeo ou Traqueal", "Estenose", "Hemorragias", "Infecções de Sítio Cirurgico", "Obstrução de Vias Aereas", "Paralisia Laríngea", "Pneumonias Aspirativa", "Reccorencia Neoplasica", "Refluxo"] },
        { titulo: "Neoplasias em Parede Torácica", complicacoes: ["Atelectasias", "Dor Intensa", "Edemas", "Efusões Pleurais", "Hemorragia", "Infecções de Sítio Cirurgico", "Pneumomia", "Recidivas Tumorais", "Rejeição Do Implante ou Material"] },
        { titulo: "Paralisia de Laringe", complicacoes: ["Edema Laríngeo", "Hemorragias", "Infecções", "Lesões Nerco Laringeo Recorrente", "Obstrução Respiratória", "Pneumonia Aspirativa"] },
        { titulo: "Prolongamento de Palato Mole", complicacoes: ["Edema Pós-Operatório e em Casos Raros", "Hemorragias Transoperatórias Significativas", "Inflamações Crônicas e Infecções", "Regurgitação Nasal e Pneumonia Por Aspiração"] },
        { titulo: "Ruptura Diafragmática", complicacoes: ["Aderencias Torácicas", "Falha Na Restituição Da Pressão Negativa Intratorácica", "Hemorragias", "Infecções de Sítio Cirurgico", "Insuficiência Respiratória", "Pneumotórax"] },
        { titulo: "Toracocentese", complicacoes: ["Enfisema Subcutâneo", "Hemorragias", "Infecções", "Lesões Iatrogênicas Em Estruturas Intratorácicas", "Pneumotórax Induzido"] },
        { titulo: "Toracorrafia", complicacoes: ["Atelectasia", "Dor", "Enfisema Subcutâneo", "Hemorragias", "Infecções", "Lesões de Parênquima Pulmonar", "Pneumonia", "Pneumotórax Persistente"] },
        { titulo: "Traqueorrafia", complicacoes: ["Deiscencia de Sutura", "Enfisema Subcutâneo", "Estenose Traqueal", "Hemorragia", "Hipoventilação", "Infecções Locais", "Obstrução Respiratória", "Pneumotórax"] },
        { titulo: "Traqueostomia", complicacoes: ["Enfisema Subcutâneo", "Infecções Locais de Incisão", "Insuficiencia Respiratória", "Necrose Tecidual", "Pneumonia Aspirativa", "Sangramento Incisional", "Tecido Cicatricial Exarcebado"] }
    ],
    "Sistema Reprodutivo": [
        { titulo: "Cesariana com Ovariohisterectomia", complicacoes: ["Aderencia Intra-Abdominal", "Dor Cronica", "Hemorragias", "Hidronefrose", "Incontinencia Urinária Pós-Operatoria", "Infecção de Sitio Cirurgico", "Lesoes Acidentais de Estruturas Adjacentes", "Obstrução Intestinal", "Piometra de Coto Uterino", "Sindrome do Ovario Remanescente", "Urinomas"] },
        { titulo: "Cesariana sem Ovariohisterectomia", complicacoes: ["Aderencias Abdominais", "Deiscencia de Suturas", "Hemorragias", "Infecções Uterinas", "Insuficiencia Renal Aguda", "Metrite", "Retenção Placentária", "Septicemia"] },
        { titulo: "Episioplastia", complicacoes: ["Deiscencia de Suturas", "Desconforto e Dificuldade Miccional", "Estenose Vulvar", "Hematoma", "Infecções", "Recidiba de Infecções Trato Urinario", "Retençao de Urina", "Secreções Vulvares"] },
        { titulo: "Episiotomia", complicacoes: ["Contaminaçao Fecal e Urinaria", "Deiscencia de Suturas", "Edemas Incisionais", "Estenose Vaginal", "Fistulas Urogenitais", "Hematomas", "Infecçõa Local"] },
        { titulo: "Mastectomia", complicacoes: ["Deiscencia de Suturas", "Edema de Membros Pelvicos", "Infecções de Sítio Cirurgico", "Necrose Isquemica", "Septicemia", "Seromas"] },
        { titulo: "Orquiectomia", complicacoes: ["Abscessos Locais", "Deiscencia de Suturas", "Edema Escrotal", "Granulomas", "Hematomas", "Hemorragias", "Infecção Sitio Cirurgico", "Peritonite", "Reações Inflamatorias"] },
        { titulo: "Ovariohisterectomia", complicacoes: ["Deiscencia de Suturas", "Granulomas", "Hemorragias", "Hidronefrose", "Infecções", "Insuficiencia Renal", "Piometra de Coto Uterino", "Seromas", "Sindrome do Ovario Remanescente"] },
        { titulo: "Penectomia", complicacoes: ["Deiscencia de Sutiras", "Estenose da Uretra", "Hemorragias", "Infecçoes Urinarias Recorrentes", "Infecções de Sitio Cirurgico", "Miíases"] },
        { titulo: "Prolapso de Vagina", complicacoes: ["Deiscencia de Suturas", "Edema", "Hemorragia", "Infecções", "Necrose", "Recidiva", "Ulceras"] },
        { titulo: "Prolapso de Útero", complicacoes: ["Aderencias Pelvicas", "Choque Hipovolemico", "Deiscencia", "Disuria", "Hemorragias", "Infecçoes", "Lesoes Renais Agudas", "Necrose Tecidual", "Obstrução Uretral Parcial ou Completa", "Retençao Urinaria"] }
    ],
    "Sistema Tegumentar": [
        { titulo: "Cirurgias Reconstrutivas", complicacoes: ["Congestão Tecidual", "Deiscência", "Hematomas", "Infecção", "Isquemia", "Necrose", "Seromas", "Tensão"] },
        { titulo: "Enxerto", complicacoes: ["Excesso de Movimentação de Enxerto", "Hematomas", "Infecções", "Isquemia", "Necrose Tecidual", "Seromas"] },
        { titulo: "Nodulectomia", complicacoes: ["Deiscência", "Hematoma", "Infecção", "Necrose", "Seroma", "Tensão"] },
        { titulo: "Sutura de Lacerações Cutâneas", complicacoes: ["Deiscência da Ferida", "Formação de Cicatrizes Hipertróficas ou Queloides", "Infecção", "Necrose Tecidual", "Reação Inflamatória Exacerbada e Formação de Fístulas."] }
    ],
    "Sistema Urinário": [
        { titulo: "Cistectomia", complicacoes: ["Acidose Metabólica", "Hemorragias", "Hipernatremia", "Incontinência Urinária Permanente", "Infecções", "Infecções Recorrentes.", "Metastases", "Necrose de Bexiga", "Obstruções Ureterais", "Polaciúria", "Pólipos", "Sepse", "Uroabdômen"] },
        { titulo: "Cistotomia", complicacoes: ["Aderências Abdominais", "Disúria Transitória", "Hematúria", "Infecções de Sítio Cirúrgico", "Peritonite Séptica"] },
        { titulo: "Cistostomia", complicacoes: ["Aderências Intra-Abdominais", "Hemorragia", "Infecções Do Trato Urinário", "Obstrução Uretrais", "Recidiva de Urolitos", "Retenção Urinária e Fístulas Vesicocutâneas", "Ruptura Vesical"] },
        { titulo: "Prolapso Uretral", complicacoes: ["Automutilação", "Edema", "Estenose Uretral", "Hematúria", "Infecções", "Lesoes Em Tecidos Adjascentes", "Necrose Tecidual", "Recidiva Do Prolapso"] },
        { titulo: "Desvios Urinários (Duplo J e Sub)", complicacoes: ["Estenose", "Hemorragias", "Hidronefrose", "Infecções Bacterianas", "Lesoes Teciduais", "Obstruções Recorrentes", "Pielonefrite", "Reações Inflamatórias Locais", "Trauma Mucosa", "Uroabdomen"] },
        { titulo: "Nefrectomia", complicacoes: ["Estenose", "Hemorragias", "Hidronefrose", "Infecções Bacterianas", "Lesoes Teciduais", "Obstruções Recorrentes", "Pielonefrite", "Reações Inflamatórias Locais", "Trauma Mucosa", "Uroabdomen"] },
        { titulo: "Nefrotomia", complicacoes: ["Baixa de Taxa de Filtração Glomerular", "Hemorragia Intrarrenal", "Infartos", "Inflamação Cortical e Fibrose", "Inflamações Parenquima", "Lesões Estruturais"] },
        { titulo: "Pielolitotomia", complicacoes: ["Doença Renal Crônica", "Fibrose", "Hemorragias", "Hidronefrose", "Infecções", "Recidiva Cálculos Renais"] },
        { titulo: "Ureterotomia", complicacoes: ["Aderencias", "Estenose", "Fibrose", "Hemorragia", "Hidronefrose", "Infecções de Sítio Cirurgico", "Insuficiência Renal", "Recidiva de Calculos"] },
        { titulo: "Uretrostomia", complicacoes: ["Automutilação", "Cicatrização Indequada", "Estenoses", "Hemorragias", "Infecções", "Infecções Bacterianas Ascendentes", "Processos Irritativos", "Recidiva de Cálculos", "Vazamentos Urinários"] }
    ]
};