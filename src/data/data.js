export const especiesDeAnimais = [{ descricao: 'Canina' }, { descricao: 'Felina' }];

export const cirurgias = {
    "Cavidade Abdominal": [
        { titulo: "Abdominocentese", complicacoes: ["Hemorragia", "Hipoperfusão", "Hipotensão", "Lesão de Órgãos", "Óbito"] },
        { titulo: "Celiotemia (Laparotomia) Exploratória", complicacoes: ["Contaminação", "Deiscência", "Infecção", "Óbito"] },
        { titulo: "Esplenectomia", complicacoes: ["Abcesso", "Alterações Hematológicas", "Arritmias", "Coagulação Intravascular Disseminada (CID)", "Hemorragia", "Infecções", "Necrose", "Septicemia", "Óbito"] },
        { titulo: "Hérnia Abdominal (Eventração/Evisceração)", complicacoes: ["Contaminação", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma"] },
        { titulo: "Hérnia Escrotal", complicacoes: ["Contaminação", "Disúria", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma", "Teresmo"] },
        { titulo: "Hérnia Inguinal", complicacoes: ["Contaminação", "Disúria", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma", "Teresmo"] },
        { titulo: "Hérnia Umbilical", complicacoes: ["Contaminação", "Infecção", "Inflamação", "Peritonite", "Recidiva", "Seroma"] }
    ],
    "Cavidade Oral": [
        { titulo: "Biópsia", complicacoes: [] },
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
        { titulo: "Anomalias Dos Aneis Vasculares", complicacoes: ["Bandas Fibróticas Persistentes", "Hemorragia", "Perfuração Esofágica", "Regurgitação Persistente", "Óbito"] },
        { titulo: "Endoscopia", complicacoes: ["Disfunção Neurológica do Esfíncter", "Distensão Gástrica", "Impossibilidade da Remoção do Corpo Estranho", "Laceração", "Perfuração"] },
        { titulo: "Esofagectomia Parcial", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Esofagotomia Cervical", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Esofagotomia Torácica", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Gastrojejunostomia", complicacoes: [] },
        { titulo: "Hérnia De Hiato", complicacoes: ["Anorexia", "Recidiva", "Ulceração no Local da Anastomose", "Vômito"] },
        { titulo: "Intussuscepção Gastroesofágica", complicacoes: ["Contaminação", "Deiscência", "Estenoso Esofágica", "Extravasamento de Conteúdo Luminal", "Fistulação", "Infecção", "Regurgitação"] },
        { titulo: "Sonda Esofágica", complicacoes: [] }
    ],
    "Estômago": [
        { titulo: "Correção Torção Vôlvulo Gástrica", complicacoes: [] },
        { titulo: "Endoscopia", complicacoes: [] },
        { titulo: "Gastrectomia Parcial", complicacoes: [] },
        { titulo: "Gastroduodenostomia (BILLROTH I)", complicacoes: [] },
        { titulo: "Gastrojejunostomia (BILLROTH II)", complicacoes: [] },
        { titulo: "Gastrectomia Parcial", complicacoes: [] },
        { titulo: "Gastrotomia", complicacoes: [] },
        { titulo: "Piloromiotomia/Piloroplastia", complicacoes: [] },
        { titulo: "Úlcera Gástrica", complicacoes: [] },
    ],
    "Fígado": [
        { titulo: "Correção Shunt P.Sistêmico", complicacoes: [] },
        { titulo: "Lobectomia Hepática (Parcial/Total)", complicacoes: [] }
    ],
    "Intestino": [
        { titulo: "Colectomia (Parcial/Total)", complicacoes: [] },
        { titulo: "Colopexia", complicacoes: [] },
        { titulo: "Colostomia", complicacoes: [] },
        { titulo: "Enterectomia", complicacoes: [] },
        { titulo: "Enterotomia", complicacoes: [] },
        { titulo: "Plicatura Intestinal", complicacoes: [] }
    ],
    "Neurocirurgia": [
        { titulo: "Craniotomia", complicacoes: [] },
        { titulo: "Fraturas/Luxações Vertebrais (Cervical/Toracolombar/Lombar/Lombossacro)", complicacoes: [] },
        { titulo: "Hemilaminectomia Cervical", complicacoes: [] },
        { titulo: "Hemilaminectomia/Pediculectomia (Toracolombar/Lombar/Lombossacro)", complicacoes: [] },
        { titulo: "Instabilidade Atlantoaxial", complicacoes: [] },
        { titulo: "Laminectomia Dorsal (Toracolombar/Lombar/Lombossacro)", complicacoes: [] },
        { titulo: "Slot Ventral", complicacoes: [] }
    ],
    "Olhos e Anexos": [
        { titulo: "Catarata", complicaoes: ["Deslocamento de Retina", "Edema Corneano", "Endoftalmite", "Hemorragia", "Hiperemia Ocular", "Hipertensão Intraocular", "Lesões Corneanas", "Opacificação da Cápsula", "Retinopatia", "Sinéquia", "Uveíte"] },
        { titulo: "Ectrópio", complicaoes: ["Ceratoconjuntivite Seca", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Edema", "Eritema", "Hemorragia", "Infecção", "Recidiva", "Secreção", "Úlcera"] },
        { titulo: "Enucleação", complicacoes: ["Deiscência", "Edema", "Hemorragia", "Infecção", "Inflamação"] },
        { titulo: "Entrópio", complicaoes: ["Ceratoconjuntivite Seca", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Edema", "Eritema", "Hemorragia", "Infecção", "Recidiva", "Secreção", "Úlcera"] },
        { titulo: "Flap Conjuntival", complicacoes: ["Edema", "Eritema", "Infecção", "Inflamação", "Recidiva", "Seroma", "Úlcera"] },
        { titulo: "Flap Terceira Pálpebra", complicacoes: ["Ceratoconjuntivite", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Ectóprio", "Edema", "Entrópio", "Eritrema", "Hemorragia", "Recidiva", "Seca", "Secreção", "Triquíase", "Úlcera"] },
        { titulo: "Neoplasias Palpebrais", complicaoes: ["Ceratoconjuntivite Seca", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Edema", "Eritema", "Hemorragia", "Recidiva", "Secreção", "Úlcera"] },
        { titulo: "Proptose Bulbar", complicaoes: ["Enucleação", "Incapacidade de Reposicionamento"] },
        { titulo: "Sepultamento da Glândula da Terceira Pálpebra", complicaoes: ["Deiscência", "Edema", "Eritema", "Infecção", "Inflamação", "Recidiva", "Seroma", "Úlcera"] }
    ],
    "Orelha": [
        { titulo: "Ablação do Canal Auditivo", complicacoes: ["Alteração Estética", "Deiscência", "Edema", "Hematoma", "Infecção", "Necrose", "Recidiva Tumoral", "Seroma"] },
        { titulo: "Otohematoma", complicacoes: ["Edema", "Retração Cicatricial"] },
        { titulo: "Pinectomia", complicacoes: ["Alteração Estética", "Deiscência", "Edema", "Hematoma", "Infecção", "Necrose", "Recidiva Tumoral", "Seroma"] }
    ],
    "Ortopedia": [
        { titulo: "Amputação De Membros Torácico/Pélvico", complicacoes: [] },
        { titulo: "Displasia Coxofemoral", complicacoes: [] },
        { titulo: "Fraturas Articulares", complicacoes: [] },
        { titulo: "Fraturas De Carpo/Metacarpo/Tarso/Metatarso/Falanges", complicacoes: [] },
        { titulo: "Fraturas De Escápula", complicacoes: [] },
        { titulo: "Fraturas De Fêmur", complicacoes: [] },
        { titulo: "Fraturas De Maxilar E Mandíbula", complicacoes: [] },
        { titulo: "Fraturas De Pelve", complicacoes: [] },
        { titulo: "Fraturas De Rádio E Ulna", complicacoes: [] },
        { titulo: "Fraturas De Tíbia", complicacoes: [] },
        { titulo: "Luxação Coxofemoral", complicacoes: [] },
        { titulo: "Luxação De Cotovelo (Úmerorádioulnar)", complicacoes: [] },
        { titulo: "Luxação De Ombro (Escapuloumeral)", complicacoes: [] },
        { titulo: "Luxação De Patela", complicacoes: [] },
        { titulo: "Luxação Radiocárpica", complicacoes: [] },
        { titulo: "Luxação Têmporomandibular", complicacoes: [] },
        { titulo: "Luxação Tíbiotársica", complicacoes: [] },
        { titulo: "Ruptura Do Ligamento Cruzado Cranial", complicacoes: [] }
    ],
    "Períneo, Reto e Ânus": [
        { titulo: "Correção Hérnia Perineal", complicacoes: [] },
        { titulo: "Correção Prolapso Retal", complicacoes: [] },
        { titulo: "Neoplasias Perineais", complicacoes: [] },
        { titulo: "Ressecção Retal", complicacoes: [] },
        { titulo: "Saculectomia Glândula Adanal", complicacoes: [] }
    ],
    "Sistema Biliar Extra Hepático": [
        { titulo: "Colecistoduodenostomia", complicacoes: [] },
        { titulo: "Colecistectomia", complicacoes: [] }
    ],
    "Sistema Cardiovascular": [
        { titulo: "Neoplasia Cardíaca", complicacoes: [] },
        { titulo: "Pericardiectomia", complicacoes: [] },
        { titulo: "Pericardiocentese", complicacoes: [] },
        { titulo: "Persistência Ducto Arterioso", complicacoes: [] },
    ],
    "Sistema Endócrino": [
        { titulo: "Adrenalectomia", complicacoes: [] },
        { titulo: "Pancreactomia Parcial", complicacoes: [] },
        { titulo: "Tireoidectomia", complicacoes: [] }
    ],
    "Sistema Respiratório Inferior e Parede Torácica": [
        { titulo: "Dreno Torácico", complicacoes: [] },
        { titulo: "Lobectomia Pulmonar", complicacoes: [] },
        { titulo: "Ruptura Diafragmática", complicacoes: [] },
        { titulo: "Sistema Respiratório e Parede Torácica", complicacoes: [] },
        { titulo: "Toracocentese", complicacoes: [] },
        { titulo: "Toracorrafia", complicacoes: [] },
        { titulo: "Traqueorrafia", complicacoes: [] },
        { titulo: "Traqueostomia", complicacoes: [] }
    ],
    "Sistema Reprodutivo": [
        { titulo: "Cesariana com Ovariohisterectomia", complicacoes: [] },
        { titulo: "Cesariana sem Ovariohisterectomia", complicacoes: [] },
        { titulo: "Mastectomia", complicacoes: [] },
        { titulo: "Orquiectomia", complicacoes: [] },
        { titulo: "Ovariohisterectomia", complicacoes: [] },
        { titulo: "Penectomia", complicacoes: [] },
        { titulo: "Prolapso de Vagina", complicacoes: [] },
        { titulo: "Prolapso de Útero", complicacoes: [] },
        { titulo: "Vulvoplastia", complicacoes: [] }
    ],
    "Sistema Tegumentar": [
        { titulo: "Cirurgias Reconstrutivas", complicacoes: ["Congestão Tecidual", "Deiscência", "Hematomas", "Infecção", "Isquemia", "Necrose", "Seromas", "Tensão"] },
        { titulo: "Enxerto", complicacoes: ["Excesso de Movimentação de Enxerto", "Hematomas", "Infecções", "Isquemia", "Necrose Tecidual", "Seromas"] },
        { titulo: "Nodulectomia", complicacoes: ["Deiscência", "Hematoma", "Infecção", "Necrose", "Seroma", "Tensão"] }
    ],
    "Sistema Urinário": [
        { titulo: "Cistectomia", complicacoes: [] },
        { titulo: "Cistotomia", complicacoes: [] },
        { titulo: "Correção Prolapso Uretral", complicacoes: [] },
        { titulo: "Desvios Urinários (Duplo J E Sub)", complicacoes: [] },
        { titulo: "Nefrectomia", complicacoes: [] },
        { titulo: "Nefrotomia", complicacoes: [] },
        { titulo: "Pielolitotomia", complicacoes: [] },
        { titulo: "Ureterotomia", complicacoes: [] },
        { titulo: "Uretrostomia", complicacoes: [] }
    ],
    "Outras Cirurgias": [
        { titulo: "Linfadenectomia", complicacoes: [] },
        { titulo: "Sutura de Lacerações Cutâneas", complicacoes: [] }
    ]
};