const CONTEUDO_GERAL = {
    "hardware": [
        { titulo: "O Gabinete", imagem: "https://images.unsplash.com/photo-1751374156944-aa91dee48408?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O **Gabinete** é a 'caixa' que protege as peças principais. Muita gente chama de CPU, mas a CPU é só uma pecinha lá dentro!", pergunta: "Qual é o nome da 'caixa' que guarda as peças internas do computador?", alternativas: ["Monitor", "Gabinete", "Teclado", "Impressora"], resposta: "Gabinete", link: "https://pt.wikipedia.org/wiki/Gabinete_de_computador" },
        { titulo: "O Mouse", imagem: "https://images.unsplash.com/photo-1681857779472-4045012e111c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O mouse nos permite interagir com o que vemos na tela através de um cursor (a setinha).", pergunta: "Qual peça usamos para mover a setinha na tela e clicar nos ícones?", alternativas: ["Mouse", "Caixa de som", "Webcam", "HD"], resposta: "Mouse", link: "https://pt.wikipedia.org/wiki/Rato_(informática)" },
        { titulo: "O Monitor", imagem: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O monitor é a nossa janela para o mundo digital. Ele mostra as imagens processadas pelo computador.", pergunta: "Onde as imagens, vídeos e textos aparecem para a gente ver?", alternativas: ["Gabinete", "Mouse", "Monitor", "Teclado"], resposta: "Monitor", link: "https://pt.wikipedia.org/wiki/Monitor_de_vídeo" },
        { titulo: "Memória RAM", imagem: "https://images.unsplash.com/photo-1669480380756-f82b044e8144?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "A RAM é como uma mesa de trabalho: quanto maior a mesa, mais coisas você faz ao mesmo tempo sem travar.", pergunta: "Qual peça ajuda o computador a deixar vários programas abertos ao mesmo tempo?", alternativas: ["Placa de Vídeo", "Memória RAM", "Ventilador", "Botão de ligar"], resposta: "Memória RAM", link: "https://pt.wikipedia.org/wiki/Memória_de_acesso_aleatório" },
        { titulo: "Armazenamento (HD/SSD)", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.kingston.com%2Fkingston%2Fhero%2Fktc-articles-hdd-vs-ssd-hero-lg.jpg&f=1&nofb=1&ipt=215ace409bd78e04bff23b422c98a1cdef2998067f979e9743554cf78914791c", texto_aula: "O HD ou SSD funciona como um armário seguro, guardando fotos e jogos mesmo com o PC desligado.", pergunta: "Onde ficam guardados seus arquivos permanentemente?", alternativas: ["Processador", "Mouse", "HD ou SSD", "Tomada"], resposta: "HD ou SSD", link: "https://pt.wikipedia.org/wiki/Disco_rígido" },
        { titulo: "Velocidade: SSD vs HD", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdsentinel.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F06%2Fssd-vs-hdd-speed-test.jpg&f=1&nofb=1&ipt=4532e92fd80339be70783511c6be9d8c79c34537af9cc226ad77fab225ccd56b", texto_aula: "O **HD** usa discos que giram (mais lento). O **SSD** usa chips eletrônicos (muito mais rápido!).", pergunta: "Se você quer que seu computador ligue em poucos segundos, qual peça é a melhor?", alternativas: ["HD", "SSD", "Teclado", "Gabinete"], resposta: "SSD", link: "https://pt.wikipedia.org/wiki/Unidade_de_estado_sólido" },
        { titulo: "Cuidado com o HD", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fbroken-hard-disk-drive-hdd-picture-id152172248%3Fk%3D6%26m%3D152172248%26s%3D612x612%26w%3D0%26h%3DmmMLQGOGs1r8YCaP1I6M2SnFq4XxYAFuLsxbvrPRR78%3D&f=1&nofb=1&ipt=d8ed4ccd89bb50419908e834522ef648993e94922642e14e3e6615a584c796bb", texto_aula: "O HD é sensível a impactos porque tem um disco físico girando lá dentro.", pergunta: "Por que devemos ter cuidado ao bater ou balançar um PC com HD?", alternativas: ["Ele esquenta a mão", "O disco interno pode riscar", "Ele gasta pilha", "Ele é de vidro"], resposta: "O disco interno pode riscar", link: "https://pt.wikipedia.org/wiki/Disco_rígido" },
        { titulo: "A Mesa vs O Chefe", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F08%2F01%2F34%2F31%2F1000_F_801343190_ILDwp0Kq8ELt331OExANTMIuNSyJIHNz.jpg&f=1&nofb=1&ipt=7461661deba8e22bf7003c9e5d04d9a3873a89ad2108327ab89caadf9c1ae222", texto_aula: "O **Processador (CPU)** é o chefe. Mas ele precisa da **RAM** (a mesa) para espalhar as tarefas.", pergunta: "Se o 'chefe' é rápido, mas o PC trava com muitas abas, o que está faltando?", alternativas: ["Espaço no HD", "Memória RAM", "Monitor novo", "Mouse rápido"], resposta: "Memória RAM", link: "https://pt.wikipedia.org/wiki/Unidade_central_de_processamento" },
        { titulo: "Entrada de Dados", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpcacademia.com%2Fwp-content%2Fuploads%2F2021%2F08%2FQue-son-los-dispositivos-de-entrada-Ejemplos-de-dispositivos-de-entrada-basicos.jpg&f=1&nofb=1&ipt=3f79b366aec11c7f550cceb6c7b4a226e4bbe00132329f845a7719a98bc6d442", texto_aula: "Dispositivos de **Entrada** enviam ordens PARA DENTRO do computador.", pergunta: "Para enviar uma foto de um papel para dentro do PC, você usa um:", alternativas: ["Monitor", "Scanner", "Caixa de Som", "Mouse"], resposta: "Scanner", link: "https://pt.wikipedia.org/wiki/Digitalizador" },
        { titulo: "Saída de Dados", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvidabytes.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fperifericos-de-salida-1.jpg&f=1&nofb=1&ipt=4c0614e685c7c34c97ce973ca916ef66752ec8b30b21d7bf2b0aae7232c53c53", texto_aula: "Dispositivos de **Saída** mostram ou entregam o resultado PARA FORA do computador.", pergunta: "Qual peça o computador usa para que possamos ouvir uma música?", alternativas: ["Webcam", "Teclado", "Caixa de Som", "Microfone"], resposta: "Caixa de Som", link: "https://pt.wikipedia.org/wiki/Periférico_de_saída" },
        { titulo: "Placa-Mãe", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F64%2F170564-050-7A0A86A2%2Fmotherboard-for-computer.jpg&f=1&nofb=1&ipt=bfdf208982eca48bf7ad021fae667a16422d63adfd35e4132fec450d80e5b47c", texto_aula: "A Placa-Mãe é como uma cidade cheia de estradas que ligam todas as peças.", pergunta: "Por onde a informação viaja para ir do Processador até o HD?", alternativas: ["Ventilador", "Estradas da Placa-Mãe", "Cabo de energia", "Tela"], resposta: "Estradas da Placa-Mãe", link: "https://pt.wikipedia.org/wiki/Placa-mãe" },
        { titulo: "Placa de Vídeo", imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800", texto_aula: "A Placa de Vídeo é o 'artista' especializado em desenhar gráficos pesados e jogos.", pergunta: "Quem é o responsável por desenhar gráficos realistas de jogos?", alternativas: ["Fonte", "Placa de Vídeo", "Teclado", "Scanner"], resposta: "Placa de Vídeo", link: "https://pt.wikipedia.org/wiki/Placa_de_vídeo" },
        { titulo: "Fonte de Energia", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplatformuploads.s3.amazonaws.com%2Fmedia%2F14135%2F14350%2F16206762074406707.png%3FExpires%3D1983343168%26AWSAccessKeyId%3DAKIAJOIWZCRTROUA2YMQ%26Signature%3Dmc3n9vuKg8pmHEwbsEIiPdIt6iM%253D&f=1&nofb=1&ipt=5c73c679e38486515b379cac04c130ccfa08fae8180590655147d8192a1440ac", texto_aula: "A Fonte transforma a energia forte da tomada em energia suave para as peças.", pergunta: "O que acontece se ligarmos as peças direto na tomada sem a Fonte?", alternativas: ["Fica mais rápido", "As peças podem queimar", "Monitor muda de cor", "Nada"], resposta: "As peças podem queimar", link: "https://pt.wikipedia.org/wiki/Fonte_de_alimentação" },
        { titulo: "Resfriamento (Cooler)", imagem: "https://images.unsplash.com/photo-1613483187636-c2024013d54a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "Pensar esquenta! O Cooler esfria o Processador para ele não travar.", pergunta: "Por que ouvimos um barulho de ventilador dentro do PC em jogos pesados?", alternativas: ["Som do jogo", "Cooler esfriando as peças", "HD rodando", "Limpeza de poeira"], resposta: "Cooler esfriando as peças", link: "https://pt.wikipedia.org/wiki/Cooler" },
        { titulo: "Tamanho dos Arquivos", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.brainly.com.br%2Fimage%2Frs%3Afill%2Fw%3A1080%2Fq%3A75%2Fplain%2Fhttps%3A%2F%2Fpt-static.z-dn.net%2Ffiles%2Fdbe%2F867b7faf9f18ae5dbd4ac09d591fed47.png&f=1&nofb=1&ipt=8ebcc767655a6d3f6c9e4bfd1b754e3dee2e8bc91ff2cdd84a80c9e779a53e3e", texto_aula: "Arquivos grandes ocupam Gigabytes (GB). Letras pequenas ocupam Bytes.", pergunta: "Qual desses arquivos ocupa mais espaço em um pendrive?", alternativas: ["Uma letra", "Uma foto", "Um filme longo", "Ícone do mouse"], resposta: "Um filme longo", link: "https://pt.wikipedia.org/wiki/Gigabyte" },
        { titulo: "Cabos de Vídeo", imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.idownloadblog.com%2Fwp-content%2Fuploads%2F2013%2F09%2FHDMI-cable-image-001.jpg&f=1&nofb=1&ipt=a41f2c3086e3c7f4c398fa331a61c03b18c4898fd3d921a81361cbe448a84734", texto_aula: "O HDMI leva som e imagem em alta definição em um único cabo.", pergunta: "Qual cabo usar para ver filme na TV com som e imagem juntos?", alternativas: ["Cabo de Força", "Cabo VGA", "Cabo HDMI", "Cabo de Impressora"], resposta: "Cabo HDMI", link: "https://pt.wikipedia.org/wiki/HDMI" },
        { titulo: "O Pendrive", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.iee-NtdRPpJndNAP-dN6XQHaEd%3Fpid%3DApi&f=1&ipt=6ac14229f1f6b6616b70d042fa16c332023fc5cbbb8c153f25534cf42a083f2b", texto_aula: "O Pendrive é como uma mochila para arquivos que você leva no bolso.", pergunta: "Por que o pendrive é útil no dia a dia?", alternativas: ["PC liga mais rápido", "Carrega arquivos para outros lugares", "Substitui monitor", "Limpa vírus"], resposta: "Carrega arquivos para outros lugares", link: "https://pt.wikipedia.org/wiki/Unidade_flash_USB" },
        { titulo: "Poeira e Calor", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.howtogeekimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2024%2F03%2Fshutterstock_1831873726.jpg&f=1&nofb=1&ipt=e8357b048e87032c1a12e99fb065923d7dc91996a2218f1d805517abbcd109c8", texto_aula: "A poeira entope as saídas de ar, causando 'febre' no computador.", pergunta: "O que acontece se acumular muita poeira dentro do gabinete?", alternativas: ["Ganha memória", "Fica silencioso", "Esquenta e trava", "Monitor fica bonito"], resposta: "Esquenta e trava", link: "https://pt.wikipedia.org/wiki/Manutenção_preventiva" },
        { titulo: "Hardware vs Software", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F66%2F7a%2Fc7%2F667ac7b388f9869892f239f83fa6e610.jpg&f=1&nofb=1&ipt=531f6a610289198a918edb844e2559a4158f0662f5024e006a2c6797e17ee833", texto_aula: "Hardware é o que você toca. Software é o programa. Hardware é o que você chuta, Software é aquilo que te faz querer chutar! Se o mouse mexe, o Hardware está bem, mas o programa (Software) pode ter travado.", pergunta: "Se o mouse mexe mas o jogo travou, onde está o problema?", alternativas: ["No Hardware", "No Software", "Na tomada", "No gabinete"], resposta: "No Software", link: "https://pt.wikipedia.org/wiki/Software" },
        { titulo: "Biometria", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.tecnoblog.net%2Fwp-content%2Fuploads%2F2020%2F03%2Fcelular-xiaomi-digital-lcd-1.png&f=1&nofb=1&ipt=8ab325e3c868b1692cc8e54d5948581e28919571e894e3019ce77dcfb7d47cf8", texto_aula: "Sensores biométricos reconhecem sua digital ou rosto para segurança.", pergunta: "O leitor biométrico serve para:", alternativas: ["Tirar fotos", "Identificar o dono pelo corpo", "Aumentar volume", "Imprimir papel"], resposta: "Identificar o dono pelo corpo", link: "https://pt.wikipedia.org/wiki/Biometria" }
    ],
    "atalhos": [
        { titulo: "Ctrl + C", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F220%2Foriginal%2F3d-rendering-ctrl-and-c-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=99e89c634f2a7a2cd6785c9982c115c9e6ed5b3e7a8c92780e78d4ebed80b5b5", texto_aula: "O comando **Copiar** (Ctrl + C) tira uma 'foto' de um texto ou arquivo para a memória.", pergunta: "Qual é a função do atalho Ctrl + C no computador?", alternativas: ["Colar", "Copiar", "Apagar", "Imprimir"], resposta: "Copiar", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Ctrl + V", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F218%2Foriginal%2F3d-rendering-ctrl-and-v-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=4800fb926e47bb006545eefaf6b08d0163a7abc489c4e16fd41f4f3f0ea31220", texto_aula: "O comando **Colar** (Ctrl + V) entrega o que você copiou no lugar novo.", pergunta: "O que deve apertar para que a frase copiada apareça em outro lugar?", alternativas: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Alt + Tab"], resposta: "Ctrl + V", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Ctrl + Z", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F215%2Foriginal%2F3d-rendering-ctrl-and-z-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=c1da098ac86d4b46a25329beaa6aec9f2682141eae67f9e2db0b9457beb8de85", texto_aula: "O **Ctrl + Z** é a sua máquina do tempo: ele desfaz o último erro cometido.", pergunta: "O que acontece se você apagar algo sem querer e apertar Ctrl + Z?", alternativas: ["O PC desliga", "O erro é desfeito", "O arquivo some", "Abre o Google"], resposta: "O erro é desfeito", link: "https://pt.wikipedia.org/wiki/Control-Z" },
        { titulo: "Ctrl + X", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fctrl-x-shortcut-button-3d-rendering_697471-68.jpg%3Fw%3D2000&f=1&nofb=1&ipt=ebd45accf0848bc0d4782e0ce779b43fddc2ea3f3bc572faecb3eb6934c213f4", texto_aula: "O **Recortar** (Ctrl + X) remove o original para movê-lo para outro lugar.", pergunta: "Se quer MOVER um arquivo sumindo com ele do lugar antigo, use:", alternativas: ["Ctrl + X", "Ctrl + C", "Ctrl + P", "Ctrl + A"], resposta: "Ctrl + X", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Ctrl + A", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F211%2Foriginal%2F3d-rendering-ctrl-and-a-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=58c444d7ddfbec2598c6f3c6dbb205fa6f6a3032c8c2a5f78e16c607e4426878", texto_aula: "O **Ctrl + A** seleciona TUDO o que está na tela de uma vez só.", pergunta: "Para que serve o Ctrl + A em um documento de texto?", alternativas: ["Apagar tudo", "Selecionar todo o conteúdo", "Abrir arquivo", "Aumentar letra"], resposta: "Selecionar todo o conteúdo", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Alt + Tab", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Ftab-alt-key-combination-keyboard-control-computer-shortcut-laptop-functional-input-device-peripheral-enter-text-typing-type-hotkeys-layout-language-qwerty-vector-illustration_727385-8734.jpg%3Fw%3D740&f=1&nofb=1&ipt=1478fbb6289056a43556e3dbb48298ef1e37fd526870886ba769f26e03cf225a", texto_aula: "O **Alt + Tab** permite pular rapidamente entre janelas abertas.", pergunta: "Qual atalho usamos para trocar entre programas já abertos?", alternativas: ["F5", "Alt + Tab", "Windows + D", "Ctrl + P"], resposta: "Alt + Tab", link: "https://pt.wikipedia.org/wiki/Alt-Tab" },
        { titulo: "Windows + D", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXPLtt-3NW8w%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d0551e44a4cfbad02851c224a790e4190c1666ff3be4d7d5a34b4f1d8aacfc8d", texto_aula: "O **Windows + D** esconde todas as janelas para mostrar a Área de Trabalho.", pergunta: "O que acontece se apertar a tecla Windows junto com a letra D?", alternativas: ["Abre o Disco", "Mostra a Área de Trabalho", "Desliga o PC", "Deleta tudo"], resposta: "Mostra a Área de Trabalho", link: "https://pt.wikipedia.org/wiki/Tecla_Windows" },
        { titulo: "Salvar", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fcombinacion-teclas-ctrl-s-icono-linea-automatizacion-productividad-optimizacion-flujo-trabajo-tareas-solo-clic-eficiencia-software-computadora-icono-lineal-vectorial-negocios-publicidad_727385-7718.jpg&f=1&nofb=1&ipt=a63fe9110108656a0ba924b352e255b9d871fcf6778027a1570ca0de18f306f7", texto_aula: "Use **Ctrl + S** (ou Ctrl + B no Word) para não perder seu trabalho se a luz acabar.", pergunta: "Por que é importante apertar Ctrl + S várias vezes no trabalho?", alternativas: ["Para acelerar o PC", "Para garantir que fique guardado", "Para mudar a cor", "Para imprimir"], resposta: "Para garantir que fique guardado", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Alt + F4", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frmarketingdigital.com%2Fwp-content%2Fuploads%2F2021%2F05%2Falt_f4_keyboard_combination-8719701.jpg&f=1&nofb=1&ipt=188c3dd70e06a2766b2dda6e0034b9741205d95053288c146a1941f4f2142d27", texto_aula: "O **Alt + F4** dá a ordem para fechar o programa imediatamente.", pergunta: "O que o computador faz quando você aperta Alt + F4?", alternativas: ["Abre ajuda", "Fecha o programa aberto", "Aumenta o brilho", "Reinicia"], resposta: "Fecha o programa aberto", link: "https://pt.wikipedia.org/wiki/Alt-F4" },
        { titulo: "F5", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Felectronic-collection-detail-computer-key-f5-picture-id652385032%3Fk%3D6%26m%3D652385032%26s%3D612x612%26w%3D0%26h%3DEoz4psyCr6DY2eMBVkIBVXJHV-tICSfjYJlbDylMPI8%3D&f=1&nofb=1&ipt=84fee02946f5403b09bddd4c1868a4c1b210672af31d3cba49fe709596531655", texto_aula: "A tecla **F5** manda o navegador recarregar a página com dados novos.", pergunta: "Qual tecla você aperta para atualizar uma página da internet?", alternativas: ["F1", "F5", "F12", "Esc"], resposta: "F5", link: "https://pt.wikipedia.org/wiki/F5" },
        { titulo: "Ctrl + F", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fctrl-f-shortcut-button-3d-rendering_697471-56.jpg&f=1&nofb=1&ipt=b002b2504c94ebbc945dd2df34604f579fd93735511877eb542d5d4d7f892ece", texto_aula: "O **Ctrl + F** abre uma caixinha para achar palavras no meio de um textão.", pergunta: "Para que serve o comando Ctrl + F?", alternativas: ["Fechar tudo", "Encontrar uma palavra", "Formatar texto", "Fazer café"], resposta: "Encontrar uma palavra", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Ctrl + P", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fcombinacion-teclas-ctrl-p-icono-linea-aumentar-eficiencia-programable-mejora-productividad-automatizacion-icono-lineal-vectorial-negocios-publicidad_727385-7787.jpg&f=1&nofb=1&ipt=8e8c8ddddcbd4d75e88e6954a9788b36e36618154a126aa9fc702b6d8636dbe6", texto_aula: "O **Ctrl + P** envia seu documento direto para a impressora.", pergunta: "Qual atalho devemos usar para imprimir um desenho?", alternativas: ["Ctrl + I", "Ctrl + P", "Ctrl + Alt", "Alt + P"], resposta: "Ctrl + P", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Ctrl + T", imagem: "nova-aba.png", texto_aula: "O **Ctrl + T** abre uma nova aba no navegador para você ver outro site.", pergunta: "O que acontece quando você aperta Ctrl + T no navegador?", alternativas: ["Fecha o site", "Abre uma nova aba", "Troca de usuário", "Tira print"], resposta: "Abre uma nova aba", link: "https://pt.wikipedia.org/wiki/Navegação_por_abas" },
        { titulo: "Ctrl + Shift + T", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgmedia.larepublica.pe%2F640x377%2Flarepublica%2Fmigration%2Fimages%2FCUAMYQDER5ACFEL2EW7TFZ37BU.webp&f=1&nofb=1&ipt=1856835081132c846e617eca3775eccfc193e9d5a0e65243094209b18e1df6bd", texto_aula: "Este atalho 'salva-vidas' reabre a última aba que você fechou sem querer.", pergunta: "Fechou um site por erro e quer que ele volte? Aperte:", alternativas: ["Ctrl + Shift + T", "Alt + F4", "Ctrl + Z", "F5"], resposta: "Ctrl + Shift + T", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "O Zoom", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcitizenside.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fhow-to-zoom-in-or-out-with-your-keyboard-1690626545.png&f=1&nofb=1&ipt=bd14a5fbcd429389460a55a986bddc5fbe3ad715c0bfd09d27178bcdfca6b13d", texto_aula: "Segure **Ctrl** e aperte **+** para aumentar ou **-** para diminuir a tela.", pergunta: "Como você aumenta as letras de um site se estiverem pequenas?", alternativas: ["Gritando com o PC", "Ctrl e tecla de mais (+)", "F5", "Windows + D"], resposta: "Ctrl e tecla de mais (+)", link: "https://pt.wikipedia.org/wiki/Zoom_(informática)" },
        { titulo: "Windows + L", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmovilforum.com%2Fwp-content%2Fuploads%2F2025%2F07%2FWindows-L.png&f=1&nofb=1&ipt=d17c4c9efaf65e3af1289ffb7d3e6cd4fc871370ada4d46ac03263c46edabf1d", texto_aula: "O **Windows + L** tranca seu computador com senha instantaneamente.", pergunta: "Jeito mais rápido de bloquear o PC ao sair de perto:", alternativas: ["Desligar o monitor", "Windows + L", "Alt + F4", "Ctrl + Alt + Del"], resposta: "Windows + L", link: "https://pt.wikipedia.org/wiki/Tecla_Windows" },
        { titulo: "Windows + E", imagem: "https://pplware.sapo.pt/wp-content/uploads/2015/10/Quick_Access_Capa.jpg", texto_aula: "O **Windows + E** abre o Explorador de Arquivos para achar suas pastas.", pergunta: "O que o atalho Windows + E faz no seu computador?", alternativas: ["Abre E-mail", "Abre o explorador de pastas", "Exclui arquivos", "Edita fotos"], resposta: "Abre o explorador de pastas", link: "https://pt.wikipedia.org/wiki/Explorador_de_Arquivos" },
        { titulo: "Ctrl + Alt + Del", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F05%2F44%2F73%2F74%2F1000_F_544737461_D5nao4gxnm12z6rYZBPn4quSkg6aPf8q.jpg&f=1&nofb=1&ipt=96301dfc1a005127962b82992d0f6f0994cee1348935f6c9c347c7254e415f6b", texto_aula: "O comando de emergência para quando nada mais responde.", pergunta: "Qual combinação ajuda se um programa 'congelar'?", alternativas: ["Esc + F1", "Ctrl + Alt + Del", "Ctrl + C + V", "Alt + Tab"], resposta: "Ctrl + Alt + Del", link: "https://pt.wikipedia.org/wiki/Control-Alt-Delete" },
        { titulo: "Shift + Delete", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fkeyboard-ctrl-alt-207337559.jpg&f=1&nofb=1&ipt=74a6843521ce3809eee00092babd67e8017402d4b04a9504c1fbca9ec11d7101", texto_aula: "O **Shift + Delete** apaga para sempre, sem passar pela lixeira.", pergunta: "Diferença de apagar com 'Shift + Delete':", alternativas: ["Muda a cor", "Apaga sem ir para a lixeira", "Faz cópia", "Protege arquivo"], resposta: "Apaga sem ir para a lixeira", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Print Screen", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftt-hardware.com%2Fwp-content%2Fuploads%2F2023%2F06%2Ftouche-decran-dimpression-prtsc-768x461.png&f=1&nofb=1&ipt=bf67d24f2fa20fa94f50f1314e0fbc0b4e2ffba2650699460ee6da6d6935b154", texto_aula: "A tecla **PrtSc** (Ou Win+Shift+S) tira uma foto de tudo o que está no seu monitor.", pergunta: "Como capturar uma imagem de tudo o que aparece na tela agora?", alternativas: ["Usando celular", "Apertando PrtSc", "Ctrl + P", "F5"], resposta: "Apertando PrtSc", link: "https://pt.wikipedia.org/wiki/Print_screen" }
    ],
    "bits": [
        { titulo: "O que é um Bit?", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gcflearnfree.org%2Fcontent%2F5be310a59fcfff1378ff8923_11_07_2018%2Fbinary_bit.jpg&f=1&nofb=1&ipt=382fbc0bc5c0c28c3cb39c60411b8ecaeaf2abfeeef4009c392e5a36871aa21b", texto_aula: "O **Bit** é a menor unidade: 1 (aceso/verdadeiro) ou 0 (apagado/falso).", pergunta: "De acordo com o texto, o que um Bit pode representar?", alternativas: ["Letras A a Z", "Nomes", "Cores", "Ligado (1) ou Desligado (0)"], resposta: "Ligado (1) ou Desligado (0)", link: "https://pt.wikipedia.org/wiki/Bit" },
        { titulo: "O que é um Byte?", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F99%2Fde%2Fda%2F99dedac2407b07f8bba0a0fa1c4044b1.jpg&f=1&nofb=1&ipt=d6332f882928be19c0ba906c1cdc5be38b9ef10221310cdb6b46a46eaf8ed6dc", texto_aula: "O computador junta **8 Bits** para formar um **Byte**, que representa uma letra.", pergunta: "Quantos Bits formam um Byte completo?", alternativas: ["8", "2", "10", "100"], resposta: "8", link: "https://pt.wikipedia.org/wiki/Byte" },
        { titulo: "Código Binário", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slashgear.com%2Fimg%2Fgallery%2Fbinary-code-explained-what-it-is-and-why-computers-depend-on-it%2Fl-intro-1696987023.jpg&f=1&nofb=1&ipt=3c69462aea2494ef175de4bc7cba389b036c383cc8c6a031ab5ef742482be5f5", texto_aula: "O computador só usa 0 e 1. Chamamos isso de língua secreta dos computadores.", pergunta: "Por que o sistema é chamado de 'Binário'?", alternativas: ["Porque é rápido", "Porque usa 10 números", "Porque usa só dois símbolos (0 e 1)", "Porque é difícil"], resposta: "Porque usa só dois símbolos (0 e 1)", link: "https://pt.wikipedia.org/wiki/Sistema_binário" },
        { titulo: "Sim ou Não", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F018%2F842%2F768%2Flarge_2x%2Frealistic-right-and-wrong-yes-or-no-approved-or-declined-3d-button-acceptance-rejection-and-attention-symbols-3d-render-illustration-free-png.png&f=1&nofb=1&ipt=d219201c66f2b335dcc88338acfdcce24b745d593f3ae6aaa0ebc362f50dbdb2", texto_aula: "Na lógica, o Bit 1 é **Verdadeiro** e o Bit 0 é **Falso**. Tudo é Sim ou Não!", pergunta: "Se algo na lógica do computador não é 'Verdadeiro', o que ele é?", alternativas: ["Talvez", "Falso", "Quase sim", "Erro"], resposta: "Falso", link: "https://pt.wikipedia.org/wiki/Lógica_booleana" },
        { titulo: "Código Fonte e Compilador", imagem: "https://asimov.academy/wp-content/uploads/2023/12/algoritmo-de-compras.png", texto_aula: "O **Código Fonte** é o texto que escrevemos. O **Compilador** é o tradutor que transforma esse texto para a língua que o computador entende.", pergunta: "Qual é a função do Compilador de acordo com o texto?", alternativas: ["Imprimir o código", "Apagar erros", "Mudar a fonte", "Traduzir o código para o computador"], resposta: "Traduzir o código para o computador", link: "https://pt.wikipedia.org/wiki/Compilador" },
        { titulo: "Algoritmos", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasimov.academy%2Fwp-content%2Fuploads%2F2023%2F12%2Falgoritmo-de-compras.png&f=1&nofb=1&ipt=917393ecda4685dbb5b80bb0a5ec077e5be0fa3b46d07a5d0d99ab476f92b392", texto_aula: "Um **Algoritmo** é uma lista de passos (receita) para o computador seguir.", pergunta: "Se um programador cria um Algoritmo, ele está criando o quê?", alternativas: ["Uma lista de instruções passo a passo", "Um hardware novo", "Um desenho", "Uma senha"], resposta: "Uma lista de instruções passo a passo", link: "https://pt.wikipedia.org/wiki/Algoritmo" },
        { titulo: "Pixels", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Freal-computer-pixels-zoom-computer-pixels-pixel-display-red-blue-green-black-zoom-128939415.jpg&f=1&nofb=1&ipt=cb0603f63e192044910291f1d896b67802441943265043d36dc51e8b99ab2253", texto_aula: "Imagens são feitas de milhares de pontinhos coloridos chamados **Pixels**.", pergunta: "Do que é formada a imagem que vemos no monitor?", alternativas: ["De tinta", "De luz solar", "De milhares de pontos (Pixels)", "De vidro"], resposta: "De milhares de pontos (Pixels)", link: "https://pt.wikipedia.org/wiki/Pixel" },
        { titulo: "O Processamento", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fec%2F17%2Fe8%2Fec17e8da8a3cf65d43210be9c38b23b4.jpg&f=1&nofb=1&ipt=059b84d38d324f49de0dd24e4bc889cccbcc063bdc2cefffd3e798314be2cc1d", texto_aula: "O caminho é: Entrada (ordem) -> Processamento (pensar) -> Saída (resultado).", pergunta: "O que é o 'Processamento' na prática?", alternativas: ["Digitar no teclado", "Desligar", "Ver a imagem na tela", "O PC entender e calcular a ordem"], resposta: "O PC entender e calcular a ordem", link: "https://pt.wikipedia.org/wiki/Processamento_de_dados" },
        { titulo: "Memória Volátil", imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-q5zc-6suMzQ%2FVYXgb2qz4xI%2FAAAAAAAAAB8%2FPZCh9LpG1TU%2Fs1600%2FVOLATIL.jpg&f=1&nofb=1&ipt=83c16e07ad93a276ba2269dd533d057d2e2d859de8fddd91d66a0a2dadeea623", texto_aula: "A RAM esquece tudo sem energia. Por isso ela é chamada de **Volátil**.", pergunta: "O que ocorre com a RAM se o PC for desligado da tomada?", alternativas: ["As informações somem", "Guarda tudo", "O PC explode", "Fica mais rápida"], resposta: "As informações somem", link: "https://pt.wikipedia.org/wiki/Memória_volátil" },
        { titulo: "Bugs", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shakebugs.com%2Fwp-content%2Fuploads%2F2022%2F11%2FHow-to-efficiently-prevent-software-bugs-in-your-product.png&f=1&nofb=1&ipt=59843d68f865ac483b416f64d41be84df22dd3c793c443ec08644b3bcc9b8757", texto_aula: "Um **Bug** é um erro na lógica do programa que faz ele funcionar mal.", pergunta: "O que significa encontrar um 'Bug' no sistema?", alternativas: ["Um inseto de verdade", "Vírus", "Um novo recurso", "Um erro ou falha no programa"], resposta: "Um erro ou falha no programa", link: "https://pt.wikipedia.org/wiki/Erro_de_software" },
        { titulo: "IA", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.businessempresarial.com.pe%2Fwp-content%2Fuploads%2F2023%2F09%2FFoto-IA-scaled.jpg&f=1&nofb=1&ipt=91a10e398ce7d065e75c39026a20f4e1bbd50ee5f601581ac105ecdb13965e8a", texto_aula: "A Inteligência Artificial imita o cérebro e aprende com exemplos.", pergunta: "Principal diferença de uma IA para um programa comum:", alternativas: ["Capacidade de aprender com exemplos", "Ela é mais cara", "Ela usa teclado", "Não precisa de luz"], resposta: "Capacidade de aprender com exemplos", link: "https://pt.wikipedia.org/wiki/Inteligência_artificial" },
        { titulo: "A Internet", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felucabista.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fglobal-internet-thumbnail.jpg&f=1&nofb=1&ipt=841e774d66ea6896c92486e5dd09fe1465f95df205186b299382642a8b23246f", texto_aula: "Internet é uma rede mundial de computadores trocando Bits.", pergunta: "O que acontece ao abrir um site?", alternativas: ["O PC cria o site na hora", "O monitor acende", "Troca dados com outro PC via rede", "Nada"], resposta: "Troca dados com outro PC via rede", link: "https://pt.wikipedia.org/wiki/Internet" },
        { titulo: "Wi-Fi", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphoneworks.net.au%2Fwp-content%2Fuploads%2F2021%2F01%2FWifi.jpg&f=1&nofb=1&ipt=1ce31c7e259dca0f39e37f62c49ae40ddd404460b22b0b4f265b00eb7ee04a5b", texto_aula: "O Wi-Fi usa ondas de rádio invisíveis para levar os Bits pelo ar.", pergunta: "Como a informação chega ao celular sem fios?", alternativas: ["Por mágica", "Pela luz da lâmpada", "Pelo som", "Ondas de rádio invisíveis"], resposta: "Ondas de rádio invisíveis", link: "https://pt.wikipedia.org/wiki/Wi-Fi" }
    ]
};

// ==========================================
// LÓGICA DO QUIZ ATUALIZADA COM REVISÃO
// ==========================================

let estado = {
    categoriaAtual: null,
    indiceAtual: 0,
    pontuacao: 0,
    mostrandoAula: true,
    historico: [] // <--- Guardará as respostas para a revisão
};

function iniciarModulo(categoria) {
    estado.categoriaAtual = categoria;
    estado.indiceAtual = 0;
    estado.pontuacao = 0;
    estado.historico = [];
    estado.mostrandoAula = true;

    document.getElementById('selecao-categoria').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    renderizarEtapa();
}

function renderizarEtapa() {
    const perguntaData = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];
    const container = document.getElementById('quiz-container');

    if (estado.mostrandoAula) {
        container.innerHTML = `
            <h2>${perguntaData.titulo}</h2>
            <img src="${perguntaData.imagem}" alt="Imagem da aula" class="img-aula">
            <p class="texto-aula">${perguntaData.texto_aula}</p>
            <button onclick="estado.mostrandoAula = false; renderizarEtapa();">Entendi! Ir para o desafio</button>
        `;
    } else {
        container.innerHTML = `
            <h3>DESAFIO: ${perguntaData.pergunta}</h3>
            <div class="alternativas">
                ${perguntaData.alternativas.map(alt => `
                    <button class="btn-alt" onclick="verificarResposta('${alt}')">${alt}</button>
                `).join('')}
            </div>
        `;
    }
}

function verificarResposta(escolha) {
    const perguntaData = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];
    const acertou = (escolha === perguntaData.resposta);

    // Salva no histórico para mostrar depois
    estado.historico.push({
        pergunta: perguntaData.pergunta,
        escolhaUsuario: escolha,
        respostaCorreta: perguntaData.resposta,
        correto: acertou,
        link: perguntaData.link
    });

    if (acertou) {
        alert("Correto! Muito bem.");
        estado.pontuacao++;
    } else {
        alert("Ops, não foi dessa vez!");
    }

    estado.indiceAtual++;
    estado.mostrandoAula = true;

    if (estado.indiceAtual < CONTEUDO_GERAL[estado.categoriaAtual].length) {
        renderizarEtapa();
    } else {
        finalizarModulo();
    }
}

function finalizarModulo() {
    const total = CONTEUDO_GERAL[estado.categoriaAtual].length;
    const container = document.getElementById('quiz-container');

    container.innerHTML = `
        <h2>Módulo Concluído!</h2>
        <p>Você acertou ${estado.pontuacao} de ${total} perguntas.</p>
        <button onclick="mostrarRevisao()">Revisar minhas respostas</button>
        <button onclick="location.reload()" style="background-color: #666;">Voltar ao Início</button>
    `;
}

function mostrarRevisao() {
    const container = document.getElementById('quiz-container');
    let htmlRevisao = `<h2>Revisão do Desafio</h2><div class="lista-revisao">`;

    estado.historico.forEach((item, i) => {
        htmlRevisao += `
            <div class="item-revisao" style="border-bottom: 1px solid #ccc; padding: 10px; text-align: left; color: ${item.correto ? 'green' : 'red'}">
                <p><strong>${i+1}. ${item.pergunta}</strong></p>
                <p>Sua resposta: ${item.escolhaUsuario} ${item.correto ? '✅' : '❌'}</p>
                ${!item.correto ? `<p style="color: blue">A correta era: ${item.respostaCorreta}</p>` : ''}
                <a href="${item.link}" target="_blank">Saber mais (Wikipedia)</a>
            </div>
        `;
    });

    htmlRevisao += `</div><br><button onclick="location.reload()">Sair da Revisão</button>`;
    container.innerHTML = htmlRevisao;
}

// ==========================================
// LÓGICA DO QUIZ (PARTE QUE FAZ FUNCIONAR)
// ==========================================

let estado = {
    categoriaAtual: null,
    indiceAtual: 0,
    pontuacao: 0,
    mostrandoAula: true
};

function iniciarModulo(categoria) {
    estado.categoriaAtual = categoria;
    estado.indiceAtual = 0;
    estado.pontuacao = 0;
    estado.mostrandoAula = true;

    document.getElementById('selecao-categoria').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    renderizarEtapa();
}

function renderizarEtapa() {
    const perguntaData = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];
    const container = document.getElementById('quiz-container');

    if (estado.mostrandoAula) {
        // Renderiza a aula
        container.innerHTML = `
            <h2>${perguntaData.titulo}</h2>
            <img src="${perguntaData.imagem}" alt="Imagem da aula" class="img-aula">
            <p class="texto-aula">${perguntaData.texto_aula}</p>
            <button onclick="estado.mostrandoAula = false; renderizarEtapa();">Entendi! Ir para o desafio</button>
        `;
    } else {
        // Renderiza o quiz
        container.innerHTML = `
            <h3>DESAFIO: ${perguntaData.pergunta}</h3>
            <div class="alternativas">
                ${perguntaData.alternativas.map(alt => `
                    <button class="btn-alt" onclick="verificarResposta('${alt}')">${alt}</button>
                `).join('')}
            </div>
        `;
    }
}

function verificarResposta(escolha) {
    const perguntaData = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];
    if (escolha === perguntaData.resposta) {
        alert("Correto! Muito bem.");
        estado.pontuacao++;
    } else {
        alert("Ops, não foi dessa vez! A resposta correta era: " + perguntaData.resposta);
    }

    estado.indiceAtual++;
    estado.mostrandoAula = true;

    if (estado.indiceAtual < CONTEUDO_GERAL[estado.categoriaAtual].length) {
        renderizarEtapa();
    } else {
        finalizarModulo();
    }
}

function finalizarModulo() {
    const total = CONTEUDO_GERAL[estado.categoriaAtual].length;
    document.getElementById('quiz-container').innerHTML = `
        <h2>Módulo Concluído!</h2>
        <p>Você acertou ${estado.pontuacao} de ${total} perguntas.</p>
        <button onclick="location.reload()">Voltar ao Início</button>
    `;
}
