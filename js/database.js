/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = [
    [ // ECI
        { name: "Algoritmos e Programação", credits: 5, code: "COS110", semester: 1, category: 1, workload: 90},
        { name: "Int. a Eng. Comp. e Informação", credits: 2, code: "COS111", semester: 1, category: 1, workload: 30},
        { name: "Circuitos Lógicos", credits: 5, code: "EEL280", semester: 1, workload: 90},
        { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1, workload: 90},
        { name: "Física I", credits: 4, code: "FIT112", semester: 1, workload: 60},
        { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1, category: 1, workload: 30},
        { name: "Linguagens de Programação", credits: 5, code: "EEL670", semester: 2, category: 1, workload: 90},
        { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1, workload: 60},
        { name: "Sistemas Digitais", credits: 5, code: "EEL480", semester: 2, requirements: [2], category: 1, workload: 90},
        { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: ["MAC118"], category: 1, workload: 60},
        { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [3, 4], category: 1, workload: 60},
        { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [4, 5], category: 1, workload: 30},
        { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2, category: 4, workload: 30},
        { name: "Estruturas de Dados", credits: 5, code: "COS231", semester: 3, requirements: [0], category: 1, workload: 75},
        { name: "Teoria da Computação", credits: 4, code: "EEL881", semester: 3, category: 1, workload: 60},
        { name: "Arquitetura de Computadores", credits: 5, code: "EEL580", semester: 3, category: 1, workload: 75},
        { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [9], category: 1, workload: 60},
        { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [4, 9], category: 1, workload: 60},
        { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [11], category: 1, workload: 30},
        { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 3, category: 4, workload: 30},
        { name: "Teoria dos Grafos", credits: 4, code: "COS242", semester: 4, requirements: [13], category: 1, workload: 60},
        { name: "Estatística e Mod. Probabilísticos", credits: 4, code: "COE241", semester: 4, category: 1, workload: 60},
        { name: "Computadores e Sociedade", credits: 4, code: "COS471", semester: 4, category: 1, workload: 60},
        { name: "Cálculo IV", credits: 4, code: "MAC248", semester: 4, requirements: [9], category: 1, workload: 60},
        { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [17], category: 1, workload: 60},
        { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [18], category: 1, workload: 30},
        { name: "Banco de Dados", credits: 4, code: "EEL871", semester: 5, category: 1, workload: 75},
        { name: "Lógica Matemática", credits: 4, code: "COS351", semester: 5, category: 1, workload: 60},
        { name: "Álg. Linear Computacional", credits: 4, code: "COC473", semester: 5, requirements: [7, 16], category: 1, workload: 60},
        { name: "Redes de Computadores I", credits: 4, code: "EEL878", semester: 5, category: 1, workload: 75},
        { name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 5, category: 1, workload: 75},
        { name: "Química Experimental", credits: 2, code: "IQG112", semester: 5, category: 1, workload: 60},
        { name: "Otimização", credits: 4, semester: 6, code: "COS360", requirements: [0, ,7, 16], category: 1, workload: 60},
        { name: "Inteligência Computacional", credits: 4, code: "COC361", semester: 6, category: 1, workload: 60},
        { name: "Engenharia de Software", credits: 4, code: "EEL873", semester: 6, category: 1, workload: 75},
        { name: "Redes de Computadores II", credits: 4, code: "EEL879", semester: 6, category: 1, workload: 60},
        { name: "Telecomunic.", credits: 4, code: "COE363", semester: 6, category: 1, workload: 60},
        { name: "Programação Avançada", credits: 4, code: "EEL418", semester: 7, requirements: [13, 6], category: 1, workload: 75},
        { name: "Computação de Alto Desempenho", credits: 3, code: "COC472", semester: 7, category: 1, workload: 75},
        { name: "Sistemas Distribuídos", credits: 4, code: "COS470", semester: 7, category: 1, workload: 60},
        { name: "Gestão do Conhecimento", credits: 4, code: "COP232", semester: 7, category: 1, workload: 60},
        { name: "Computação Gráfica", credits: 4, code: "EEL882", semester: 7, category: 1, workload: 75},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1, category: 2, workload: 120},
        { name: "Construção de Banco de Dados", credits: 4, code: "COS480", semester: 8, requirements: [26], category: 1, workload: 60},
        { name: "Empreend. I", credits: 4, code: "COP364", semester: 8, category: 1, workload: 60},
        { name: "Qualidade de Software", credits: 4, code: "COS482", semester: 8, requirements: [34], category: 1, workload: 60},
        { name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8, category: 1, workload: 180},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1, category: 2, workload: 120},
        { name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 9, category: 1, workload: 160},
        { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1, category: 2, workload: 240},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1, category: 2, workload: 120},
        { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1, category: 3, workload: 120},
        { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405},
        { name: "Química EE", credits: 4, semester: 4, code: "IQG111", category: 1, workload: 60},
    ],
    [ // Eletrônica e Computação
        // Primeiro período
        { name: "Computação I", credits: 5, semester: 1, code: "EEL170", category: 1, workload: 60},
        { name: "Química EE", credits: 4, semester: 1, code: "IQG111", category: 1, workload: 60},
        { name: "Cálculo I", credits: 6, semester: 1, code: "MAC118", category: 1, workload: 90},
        { name: "Física I", credits: 4, semester: 1, code: "FIT112", category: 1, workload: 60},
        { name: "Física Experimental I", credits: 1, semester: 1, code: "FIS111", category: 1, workload: 30},
        { name: "História da Tecnologia", credits: 2, semester: 1, code: "EEI206", category: 1, workload: 30},
        // Segundo período
        { name: "Computação II", credits: 5, semester: 2, code: "EEL270", requirements: [0], category: 1, workload: 60},
        { name: "Álgebra Linear II", credits: 4, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Cálculo II", credits: 4, semester: 2, code: "MAC238", requirements: ["MAC118"], category: 1, workload: 60},
        { name: "Física II", credits: 4, semester: 2, code: "", requirements: [2,3], category: 1, workload: 60},
        { name: "Física Experimental II", credits: 1, semester: 2, code: "", requirements: [3,4], category: 1, workload: 30},
        { name: "Circuitos Lógicos", credits: 5, semester: 2, code: "EEL280", category: 1, workload: 60},
        { name: "Engenharia e Meio Ambiente", credits: 2, semester: 2, code: "EEH210", category: 1, workload: 30},
        // Terceiro período
        { name: "Sistemas Lineares I", credits: 5, semester: 3, code: "EEL350", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Métodos Mat. em Eng. Eletrônica", credits: 4, semester: 3, code: "EEL356", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Cálculo III", credits: 4, semester: 3, code: "MAC238", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física III", credits: 4, semester: 3, code: "FIM230", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física Experimental III", credits: 1, semester: 3, code: "FIN231", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Sistemas Projetivos", credits: 4, semester: 3, code: "EEG105", requirements: [0, 7, 16], category: 1, workload: 60},
        // Quarto período
        { name: "Algoritmos e Estrutura de Dados", credits: 5, semester: 4, code: "EEL470", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Circuitos Elétricos I", credits: 5, semester: 4, code: "EEL420", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletrônica I", credits: 3, semester: 4, code: "EEL315", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física IV", credits: 4, semester: 4, code: "FIM240", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física Experimental IV", credits: 1, semester: 4, code: "FIN241", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Sistemas Digitais", credits: 5, semester: 4, code: "EEL480", requirements: [0, 7, 16], category: 1, workload: 60},
        // Quinto período
        { name: "Sistemas Lineares II", credits: 5, semester: 5, code: "EEL555", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Circuitos Elétricos II", credits: 5, semester: 5, code: "EEL525", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletrônica II", credits: 5, semester: 5, code: "EEL410", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Teoria Eletromagnética II", credits: 5, semester: 5, code: "EEL535", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Arquitetura de Computadores", credits: 5, semester: 5, code: "EEL580", requirements: [0, 7, 16], category: 1, workload: 60},
        // Sexto período
        { name: "Comunicações I", credits: 5, semester: 6, code: "EEL640", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Controle Linear I", credits: 5, semester: 6, code: "EEL660", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletrônica III", credits: 5, semester: 6, code: "EEL515", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Modelos Probabilísticos em Eng.", credits: 4, semester: 6, code: "EEL630", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Linguagens de Programação", credits: 5, semester: 6, code: "EEL670", requirements: [0, 7, 16], category: 1, workload: 60},
        // Sétimo período
        { name: "Comunicações II", credits: 5, semester: 7, code: "EEL740", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Controle Linear II", credits: 5, semester: 7, code: "EEL760", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletônica IV", credits: 5, semester: 7, code: "EEL615", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Processamento de Sinais", credits: 5, semester: 7, code: "EEL711", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Projeto Integrado", credits: 1, semester: 7, code: "EELX00", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Sistemas Operacionas", credits: 5, semester: 7, code: "EEL770", requirements: [0, 7, 16], category: 1, workload: 60},
        // Oitavo período
        { name: "Conversão de Energia", credits: 5, semester: 8, code: "EEE387", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Instrum.e Técnicas de Medidas", credits: 5, semester: 8, code: "EEL710", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Projeto de Graduação", credits: 4, semester: 8, code: "EEWX00", requirements: [0, 7, 16], category: 1, workload: 60},
        // Nono período
        { name: "Economia A", credits: 4, semester: 9, code: "EEI312", requirements: [0, 7, 16], category: 1, workload: 60},
        // Décimo período
        { name: "Organização das Indústrias", credits: 4, semester: 10, code: "EEI321", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Estágio Obrigatório", credits: 2, semester: 10, code: "EEWU00", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405}
    ]
]
