export const especiesDeAnimais = [{ descricao: 'Canina' }, { descricao: 'Felina' }];

export const cirurgias = {
    "Cavidade Abdominal": [
        { titulo: "Abdominocentese", complicacoes: [] },
        { titulo: "Celiotemia (Laparotomia) Exploratória", complicacoes: [] },
        { titulo: "Esplenectomia", complicacoes: [] },
        { titulo: "Hérnia Abdominal (Eventração/Evisceração)", complicacoes: [] },
        { titulo: "Hérnia Escrotal", complicacoes: [] },
        { titulo: "Hérnia Inguinal", complicacoes: [] },
        { titulo: "Hérnia Umbilical", complicacoes: [] }
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
        { titulo: "Acalasia Cricofaríngea", complicacoes: [] },
        { titulo: "Anomalias Dos Aneis Vasculares", complicacoes: [] },
        { titulo: "Endoscopia", complicacoes: [] },
        { titulo: "Esofagectomia Parcial", complicacoes: [] },
        { titulo: "Esofagotomia Cervical", complicacoes: [] },
        { titulo: "Esofagotomia Torácica", complicacoes: [] },
        { titulo: "Gastrojejunostomia", complicacoes: [] },
        { titulo: "Hérnia De Hiato", complicacoes: [] },
        { titulo: "Intussuscepção Gastroesofágica", complicacoes: [] },
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
        { titulo: "Catarata", complicaoes: [] },
        { titulo: "Ectrópio", complicaoes: [] },
        { titulo: "Enucleação", complicacoes: ["Deiscência", "Edema", "Hemorragia", "Infecção", "Inflamação"] },
        { titulo: "Entrópio", complicaoes: [] },
        { titulo: "Flap Conjuntival", complicacoes: ["Edema", "Eritema", "Infecção", "Inflamação", "Recidiva", "Seroma", "Úlcera"] },
        { titulo: "Flap Terceira Pálpebra", complicacoes: ["Ceratoconjuntivite", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Ectóprio", "Edema", "Entrópio", "Eritrema", "Hemorragia", "Recidiva", "Seca", "Secreção", "Triquíase", "Úlcera"] },
        { titulo: "Neoplasias Palpebrais", complicaoes: [] },
        { titulo: "Proptose Bulbar", complicaoes: [] },
        { titulo: "Sepultamento da Glândula da Terceira Pálpebra", complicaoes: [] }
    ],
    "Orelha": [
        { titulo: "Ablação do Canal Auditivo", complicacoes: [] },
        { titulo: "Otohematoma", complicacoes: [] },
        { titulo: "Pinectomia", complicacoes: [] }
    ],
    "Ortopedia": [
        { titulo: "Fratura Articulares", complicacoes: [] },
        { titulo: "Fratura Condilares", complicacoes: [] },
        { titulo: "Fratura Umerais", complicacoes: [] },
        { titulo: "Fratura de Carpo e Traso", complicacoes: [] },
        { titulo: "Fratura de Escápula", complicacoes: [] },
        { titulo: "Fratura de Maxilar e Mandíbula", complicacoes: [] },
        { titulo: "Fratura de Pelve", complicacoes: [] },
        { titulo: "Fratura de Rádio e Ulna", complicacoes: [] },
        { titulo: "Luxações Sacro Ilíaca", complicacoes: [] }
    ],
    "Períneo, Reto e Ânus": [
        { titulo: "Correção Hérnia Perineal", complicacoes: [] },
        { titulo: "Correção Prolapso Retal", complicacoes: [] },
        { titulo: "Ressecção Retal", complicacoes: [] },
        { titulo: "Saculectomia Anal", complicacoes: [] }
    ],
    "Sistema Biliar Extra Hepático": [
        { titulo: "Colecistoduodenostomia", complicacoes: [] },
        { titulo: "Colecistotomia", complicacoes: [] }
    ],
    "Sistema Cardiovascular": [
        { titulo: "Estenose Pulmonar", complicacoes: [] },
        { titulo: "Neoplasia Cardíaca", complicacoes: [] },
        { titulo: "Persistência Ducto Arterioso", complicacoes: [] },
        { titulo: "Tetralogia Fallot", complicacoes: [] }
    ],
    "Sistema Endócrino": [
        { titulo: "Adrenalectomia", complicacoes: [] },
        { titulo: "Pancrectomia Parcial", complicacoes: [] },
        { titulo: "Tiroidectomia", complicacoes: [] }
    ],
    "Sistema Respiratório Inferior e Parede Torácica": [
        { titulo: "Corre Ruptura Diafragmática", complicacoes: [] },
        { titulo: "Lobectomia", complicacoes: [] },
        { titulo: "Toracotomia", complicacoes: [] },
        { titulo: "Tumor em Parede Torácica", complicacoes: [] }
    ],
    "Sistema Urinário": [
        { titulo: "Cistectomia", complicacoes: [] },
        { titulo: "Cistotomia", complicacoes: [] },
        { titulo: "Correção Prolapso Uretral", complicacoes: [] },
        { titulo: "Nefrectomia", complicacoes: [] },
        { titulo: "Nefrotomia", complicacoes: [] },
        { titulo: "Pielolitotomia", complicacoes: [] },
        { titulo: "Ureterotomia", complicacoes: [] },
        { titulo: "Uretrostomia", complicacoes: [] }
    ]
};