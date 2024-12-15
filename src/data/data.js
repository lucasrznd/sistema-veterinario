export const especiesDeAnimais = [{ descricao: 'Canina' }, { descricao: 'Felina' }];

export const cirurgias = {
    "Cavidade Abdominal": [
        { titulo: "Abdominocentese", complicacoes: [] },
        { titulo: "Celiotemia Exploratória", complicacoes: [] },
        { titulo: "Hérnia Abdominal", complicacoes: [] },
        { titulo: "Hérnia Escrotal", complicacoes: [] },
        { titulo: "Hérnia Inguinal", complicacoes: [] },
        { titulo: "Hérnia Umbilical", complicacoes: [] }
    ],
    "Cavidade Oral": [
        { titulo: "Biópsia", complicacoes: [] },
        { titulo: "Correção Fissura Palatina", complicacoes: [] },
        { titulo: "Correção Fissuras Oronasais", complicacoes: [] },
        { titulo: "Correção Mucocele Salivar", complicacoes: [] },
        { titulo: "Correção Sialocele", complicacoes: [] },
        { titulo: "Excisão de Tumores Orais", complicacoes: [] },
        { titulo: "Glossectomia", complicacoes: [] },
        { titulo: "Mandibulectomia Parcial", complicacoes: [] },
        { titulo: "Mandibulectomia Rostral", complicacoes: [] },
        { titulo: "Marsupialização da Rânula", complicacoes: [] },
        { titulo: "Maxilectomia Parcial", complicacoes: [] },
        { titulo: "Queiloplastia", complicacoes: [] }
    ],
    "Esôfago": [
        { titulo: "Esofagectomia Parcial", complicacoes: [] },
        { titulo: "Intussuscepção Gastroesofágica", complicacoes: [] }
    ],
    "Estômago": [
        { titulo: "Correção Torção Vôlvulo Gástrica", complicacoes: [] },
        { titulo: "Gastrojejunostomia", complicacoes: [] }
    ],
    "Fígado": [
        { titulo: "Correção Shunt P.Sistêmico", complicacoes: [] },
        { titulo: "Lobectomia Parcial", complicacoes: [] },
        { titulo: "Lobectomia Total", complicacoes: [] },
        { titulo: "Vaso Anômalo", complicacoes: [] }
    ],
    "Intestino": [
        { titulo: "Colectomia", complicacoes: [] },
        { titulo: "Colopexia", complicacoes: [] },
        { titulo: "Colostomia", complicacoes: [] },
        { titulo: "Enterectomia", complicacoes: [] },
        { titulo: "Eteroromia", complicacoes: [] },
        { titulo: "Exteropexia", complicacoes: [] },
        { titulo: "Plicatura Intestinal", complicacoes: [] }
    ],
    "Neurocirurgia": [
        { titulo: "Cirurgia da Coluna Lombo Sacra", complicacoes: [] },
        { titulo: "Cirurgia da Coluna Toraco Lombar", complicacoes: [] },
        { titulo: "Cirurgia de Coluna Cervical", complicacoes: [] },
        { titulo: "Correção de Fraturas ou Luxações de Coluna Cervical", complicacoes: [] }
    ],
    "Olhos e Anexos": [
        { titulo: "Conjuntivas", complicacoes: ["Edema", "Eritema", "Infecção", "Inflamação", "Recidiva", "Seroma", "Úlcera"] },
        { titulo: "Enucleação", complicacoes: ["Deiscência", "Edema", "Hemorragia", "Infecção", "Inflamação"] },
        { titulo: "Palpebrais", complicacoes: ["Ceratoconjuntivite", "Deiscência", "Desalinhamento Palpebral", "Despigmentação", "Ectóprio", "Edema", "Entrópio", "Eritrema", "Hemorragia", "Recidiva", "Seca", "Secreção", "Triquíase", "Úlcera"] }
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