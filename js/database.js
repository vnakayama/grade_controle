/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = [
    [
      // Primeiro período
      {"name": "Algoritmos e Programa\u00e7\u00e3o", "credits": 5, "code": "COS110", "semester": 1, "workload": 90, "requirements": []},
      {"name": "Introd \u00e0 Eng de Controle e Aut", "credits": 2, "code": "COE100", "semester": 1, "workload": 30, "requirements": []},
      {"name": "Quimica EE", "credits": 4, "code": "IQG111", "semester": 1, "workload": 60, "requirements": []},
      {"name": "C\u00e1lculo Difer e Integral I", "credits": 6, "code": "MAC118", "semester": 1, "workload": 90, "requirements": []},
      {"name": "F\u00edsica I - A", "credits": 4, "code": "FIT112", "semester": 1, "workload": 60, "requirements": []},
      {"name": "F\u00edsica Experimental I", "credits": 1, "code": "FIS111", "semester": 1, "workload": 30, "requirements": []},
      {"name": "L\u00f3gica Matem\u00e1tica", "credits": 5, "code": "COS230", "semester": 1, "workload": 75, "requirements": []},
      // Segundo período
      {"name": "Circuitos Logicos", "credits": 5, "code": "EEL280", "semester": 2, "workload": 90, "requirements": []},
      {"name": "Desenho de Engenharia", "credits": 4, "code": "EEG110", "semester": 2, "workload": 75, "requirements": []},
      {"name": "Linguagens de Programacao", "credits": 5, "code": "EEL670", "semester": 2, "workload": 90, "requirements": []},
      {"name": "C\u00e1lculo Diferen e Integral II", "credits": 4, "code": "MAC128", "semester": 2, "workload": 60, "requirements": ["MAC118", "MAW111", "MAC114", "MAW126", "MAW121", "MAE111", "MCG115"]},
      {"name": "F\u00edsica II - A", "credits": 4, "code": "FIT122", "semester": 2, "workload": 60, "requirements": ["FIT113", "MAC118", "MAC114", "FIT111", "MAC106", "MAC113", "EEW110", "FIS112", "FIT112", "MAE111"]},
      {"name": "F\u00edsica Experimental II", "credits": 1, "code": "FIS121", "semester": 2, "workload": 30, "requirements": ["EEW111", "FIT113", "FIT111", "FIW121", "EEW110", "FIS112", "FIT112", "FIS111"]},
      // Terceiro período
      {"name": "Metodos Mat em Eng Eletronica", "credits": 4, "code": "EEL356", "semester": 3, "workload": 60, "requirements": ["MAC128", "MAE121"]},
      {"name": "\u00c1lgebra Linear II", "credits": 4, "code": "MAE125", "semester": 3, "workload": 60, "requirements": []},
      {"name": "Mecanica I", "credits": 4, "code": "EEA212", "semester": 3, "workload": 60, "requirements": ["MAC123", "MAC124", "MAC128", "MAE121"]},
      {"name": "C\u00e1lculo Diferen e Integral III", "credits": 4, "code": "MAC238", "semester": 3, "workload": 60, "requirements": ["MAW116", "MAW231", "MAC123", "MAE121", "MAC128", "MAC124", "MAE992", "MCG234"]},
      {"name": "Fisica III - A", "credits": 4, "code": "FIM230", "semester": 3, "workload": 60, "requirements": ["FIT113", "MAW116", "MAW231", "MAC123", "MAE121", "FIT111", "MAC128", "FIW121", "EEW110", "FIS112", "FIT112", "MAC124", "MAE992"]},
      {"name": "F\u00edsica Experimental III", "credits": 1, "code": "FIN231", "semester": 3, "workload": 30, "requirements": ["EEW121", "FIS121", "EQW111", "EQE112"]},
      {"name": "Atividades Acad. Opt. Humanas", "credits": 2, "semester": 3, "category": 4, "workload": 30},
      // Quarto período
      {"name": "Arquitetura de Computadores", "credits": 5, "code": "EEL580", "semester": 4, "workload": 75, "requirements": []},
      {"name": "Sinais e Sistemas", "credits": 5, "code": "COE350", "semester": 4, "workload": 75, "requirements": []},
      {"name": "Estat\u00edstica e Mod. Probabilist", "credits": 4, "code": "COE241", "semester": 4, "workload": 60, "requirements": []},
      {"name": "Circuitos Eletricos em CC", "credits": 4, "code": "EEE321", "semester": 4, "workload": 60, "requirements": ["MAW116", "MAW231", "MAC123", "MAE121", "MAC128", "FIM230", "MAC124", "MAW112"]},
      {"name": "F\u00edsica IV - a", "credits": 4, "code": "FIM240", "semester": 4, "workload": 60, "requirements": ["FIM231", "FIW241", "FIN231", "FIM230"]},
      {"name": "F\u00edsica Experimental IV", "credits": 1, "code": "FIN241", "semester": 4, "workload": 30, "requirements": ["FIN231"]},
      // Quinto período
      {"name": "Modelagem de Sistem Din\u00e2micos", "credits": 5, "code": "COE240", "semester": 5, "workload": 75, "requirements": ["COE350"]},
      {"name": "Lab Circuitos El\u00e9tricos I", "credits": 1, "code": "EEE322", "semester": 5, "workload": 30, "requirements": ["EEE321"]},
      {"name": "Eletr\u00f4nica I C", "credits": 4, "code": "EEL338", "semester": 5, "workload": 60, "requirements": ["EEE321"]},
      {"name": "Matem\u00e1tica Computacional", "credits": 5, "code": "COC351", "semester": 5, "workload": 75, "requirements": ["MAE125", "MAC118", "MAE111"]},
      {"name": "Processos de Fabrica\u00e7\u00e3o", "credits": 4, "code": "COM352", "semester": 5, "workload": 75, "requirements": []},
      {"name": "Engenharia e Meio Ambiente", "credits": 2, "code": "EEH210", "semester": 5, "workload": 30, "requirements": []},
      // Sexto período
      {"name": "Introdu\u00e7\u00e3o \u00e0 Otimiza\u00e7\u00e3o", "credits": 4, "code": "COM361", "semester": 6, "workload": 75, "requirements": ["MAC238", "MAE231"]},
      {"name": "Control e Instrum de Processos", "credits": 4, "code": "EQE487", "semester": 6, "workload": 60, "requirements": []},
      {"name": "Eletronica II C", "credits": 4, "code": "EEL438", "semester": 6, "workload": 60, "requirements": ["EEL338", "EEE333"]},
      {"name": "Controle Realimentado", "credits": 4, "code": "COE360", "semester": 6, "workload": 75, "requirements": ["COE350", "COC351"]},
      {"name": "Lab Eletr\u00f4nica I C", "credits": 1, "code": "EEL339", "semester": 6, "workload": 30, "requirements": ["EEE322", "EEL338", "EEE333"]},
      {"name": "Redes de Computadores I", "credits": 4, "code": "EEL878", "semester": 6, "workload": 75, "requirements": []},
      // Sétimo período
      {"name": "Sensores e Atuadores I", "credits": 4, "code": "COE471", "semester": 7, "workload": 75, "requirements": ["EEL315", "EEL338"]},
      {"name": "Automa\u00e7\u00e3o Industrial", "credits": 4, "code": "EEE643", "semester": 7, "workload": 60, "requirements": ["COE360", "EEE451", "EEL760"]},
      {"name": "Processamento de Sinais", "credits": 5, "code": "EEL711", "semester": 7, "workload": 75, "requirements": ["EEL555", "EEL525", "COE240", "EEL362", "COE350", "EEL483"]},
      {"name": "Controle Avan\u00e7ado", "credits": 4, "code": "COE470", "semester": 7, "workload": 75, "requirements": ["COE360"]},
      {"name": "Lab Eletr\u00f4nica II C", "credits": 1, "code": "EEL439", "semester": 7, "workload": 30, "requirements": ["EEL438", "EEL339", "EEE438", "EEE334"]},
      {"name": "Planejam de Proc e Fabric Ind", "credits": 5, "code": "COP473", "semester": 7, "workload": 75, "requirements": []},
      {"name": "Planej e Avalia\u00e7\u00e3o de Projetos", "credits": 3, "code": "EQE486", "semester": 7, "workload": 45, "requirements": []},
      // Oitavo período
      {"name": "Sensores e Atuadores II", "credits": 4, "code": "COE481", "semester": 8, "workload": 75, "requirements": ["EEE321"]},
      {"name": "Robotica e Automacao", "credits": 4, "code": "EEL855", "semester": 8, "workload": 60, "requirements": ["COE360", "EEL483", "EEL760"]},
      {"name": "Inst.Automacao Ind de Processo", "credits": 3, "code": "EQE026", "semester": 8, "workload": 60, "requirements": []},
      {"name": "Controle em Tempo Real", "credits": 4, "code": "COE480", "semester": 8, "workload": 75, "requirements": ["COE360"]},
      {"name": "Lab de Automa\u00e7\u00e3o e Controle", "credits": 2, "code": "COE482", "semester": 8, "workload": 75, "requirements": ["COE360"]},
      {"name": "Sist.de Controle Nao Lineares", "credits": 4, "code": "EEL856", "semester": 8, "workload": 60, "requirements": ["COE360", "EEL660"]},
      {"name": "Engenharia de Processos", "credits": 4, "code": "EQE489", "semester": 8, "workload": 60, "requirements": []},
      // Nono período
      {"name": "Est\u00e1gio Obrigat\u00f3rio", "credits": 2, "code": "EEWU00", "semester": 9, "workload": 160, "requirements": []},
      {"name": "Economia A", "credits": 4, "code": "EEI312", "semester": 9, "workload": 60, "requirements": []},
      {"name": "Projeto de Gradua\u00e7\u00e3o", "credits": 4, "code": "EEWX00", "semester": 9, "workload": 180, "requirements": []},
      {"name": "Atividades Acad. Optativas", "credits": 4, "semester": 9, "step": 1, "category": 2, "workload": 60},
      {"name": "Atividades Acad. Livre Escolha", "credits": 4, "semester": 9, "step": 1, "category": 3, "workload": 60},
      // Décimo período
      {"name": "Organização das Indústrias", "credits": 4, "semester": 10, "code": "EEI321", "category": 1, "workload": 60},
      {"name": "Atividades Acad. Optativas", "credits": 4, "semester": 10, "step": 1, "category": 2, "workload": 60},
      {"name": "Atividades Acad. Livre Escolha", "credits": 4, "semester": 10, "step": 1, "category": 3, "workload": 60},
      {"name": "Atividades Acad. Opt. Humanas", "credits": 2, "semester": 10, "category": 4, "workload": 30},]
]
