/* ==========================================================
   PROJETO: Mestre da Informática
   DESENVOLVEDOR: Fernando Fernandes Leite de Oliveira
   INSTITUIÇÃO: Uninter | ANO: 2026
   ========================================================== */

const CONTEUDO_GERAL = {
    "hardware": [
        { titulo: "O Gabinete", imagem: "https://images.unsplash.com/photo-1751374156944-aa91dee48408?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O **Gabinete** é como uma casa protetora para as peças do computador. Ele guarda tudo seguro, como uma caixa forte cheia de partes importantes!", pergunta: "Qual dessas coisas ajuda a proteger as peças internas do computador, como uma casa?", alternativas: ["Monitor", "Gabinete", "Teclado", "Impressora"], resposta: "Gabinete", link: "https://pt.wikipedia.org/wiki/Gabinete_de_computador" },
        { titulo: "O Mouse", imagem: "https://images.unsplash.com/photo-1681857779472-4045012e111c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O mouse é um amigo que ajuda você a apontar e clicar nas coisas na tela, movendo uma flechinha mágica chamada cursor.", pergunta: "Qual objeto você usa para mover a flechinha na tela e escolher ícones?", alternativas: ["Mouse", "Caixa de som", "Webcam", "HD"], resposta: "Mouse", link: "https://pt.wikipedia.org/wiki/Rato_(informática)" },
        { titulo: "O Monitor", imagem: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O monitor é como uma janela grande onde você vê tudo o que o computador cria, como desenhos, vídeos e letras.", pergunta: "Onde aparecem as imagens e palavras para você olhar no computador?", alternativas: ["Gabinete", "Mouse", "Monitor", "Teclado"], resposta: "Monitor", link: "https://pt.wikipedia.org/wiki/Monitor_de_vídeo" },
        { titulo: "Memória RAM", imagem: "https://images.unsplash.com/photo-1669480380756-f82b044e8144?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "A RAM é como uma mesa grande onde o computador organiza suas tarefas. Se a mesa for pequena, fica bagunçado e lento!", pergunta: "Qual peça ajuda o computador a trabalhar com muitos programas ao mesmo tempo sem ficar lento?", alternativas: ["Placa de Vídeo", "Memória RAM", "Ventilador", "Botão de ligar"], resposta: "Memória RAM", link: "https://pt.wikipedia.org/wiki/Memória_de_acesso_aleatório" },
        { titulo: "Armazenamento (HD/SSD)", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.kingston.com%2Fkingston%2Fhero%2Fktc-articles-hdd-vs-ssd-hero-lg.jpg&f=1&nofb=1&ipt=215ace409bd78e04bff23b422c98a1cdef2998067f979e9743554cf78914791c", texto_aula: "O HD ou SSD é como um baú secreto onde ficam guardados seus jogos e fotos, mesmo quando o computador está desligado. O SSD é mais rápido, como um corredor veloz!", pergunta: "Onde o computador guarda suas fotos e jogos para sempre?", alternativas: ["Processador", "Mouse", "HD ou SSD", "Tomada"], resposta: "HD ou SSD", link: "https://pt.wikipedia.org/wiki/Disco_rígido" },
        { titulo: "Velocidade: SSD vs HD", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fbroken-hard-disk-drive-hdd-picture-id152172248%3Fk%3D6%26m%3D152172248%26s%3D612x612%26w%3D0%26h%3DmmMLQGOGs1r8YCaP1I6M2SnFq4XxYAFuLsxbvrPRR78%3D&f=1&nofb=1&ipt=d8ed4ccd89bb50419908e834522ef648993e94922642e14e3e6615a584c796bb", texto_aula: "O HD usa discos que giram devagar, como uma tartaruga. O SSD é rápido como um coelho, ligando o computador em segundos!", pergunta: "Se você quer que o computador ligue super rápido, qual dessas peças é a melhor escolha?", alternativas: ["HD", "SSD", "Teclado", "Gabinete"], resposta: "SSD", link: "https://pt.wikipedia.org/wiki/Unidade_de_estado_sólido" },
        { titulo: "Cuidado com o HD", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fbroken-hard-disk-drive-hdd-picture-id152172248%3Fk%3D6%26m%3D152172248%26s%3D612x612%26w%3D0%26h%3DmmMLQGOGs1r8YCaP1I6M2SnFq4XxYAFuLsxbvrPRR78%3D&f=1&nofb=1&ipt=d8ed4ccd89bb50419908e834522ef648993e94922642e14e3e6615a584c796bb", texto_aula: "O HD tem um disco delicado que gira dentro dele. Se bater ou sacudir, pode riscar e quebrar, como um prato de vidro!", pergunta: "Por que devemos ser cuidadosos ao mexer no computador com HD, evitando batidas?", alternativas: ["Ele esquenta a mão", "O disco interno pode riscar", "Ele gasta pilha", "Ele é de vidro"], resposta: "O disco interno pode riscar", link: "https://pt.wikipedia.org/wiki/Disco_rígido" },
        { titulo: "A Mesa vs O Chefe", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F08%2F01%2F34%2F31%2F1000_F_801343190_ILDwp0Kq8ELt331OExANTMIuNSyJIHNz.jpg&f=1&nofb=1&ipt=7461661deba8e22bf7003c9e5d04d9a3873a89ad2108327ab89caadf9c1ae222", texto_aula: "O Processador é o chefe esperto que pensa rápido. Mas ele precisa da RAM, como uma mesa grande, para organizar tudo sem confusão.", pergunta: "Se o chefe é rápido, mas o computador trava com muitas janelas abertas, o que pode estar faltando?", alternativas: ["Espaço no HD", "Memória RAM", "Monitor novo", "Mouse rápido"], resposta: "Memória RAM", link: "https://pt.wikipedia.org/wiki/Unidade_central_de_processamento" },
        { titulo: "Entrada de Dados", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpcacademia.com%2Fwp-content%2Fuploads%2F2021%2F08%2FQue-son-los-dispositivos-de-entrada-Ejemplos-de-dispositivos-de-entrada-basicos.jpg&f=1&nofb=1&ipt=3f79b366aec11c7f550cceb6c7b4a226e4bbe00132329f845a7719a98bc6d442", texto_aula: "Dispositivos de entrada mandam informações para dentro do computador, como enviar uma foto de um papel para a tela.", pergunta: "Qual aparelho você usa para mandar uma foto de um papel para dentro do computador?", alternativas: ["Monitor", "Scanner", "Caixa de Som", "Mouse"], resposta: "Scanner", link: "https://pt.wikipedia.org/wiki/Digitalizador" },
        { titulo: "Saída de Dados", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvidabytes.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fperifericos-de-salida-1.jpg&f=1&nofb=1&ipt=4c0614e685c7c34c97ce973ca916ef66752ec8b30b21d7bf2b0aae7232c53c53", texto_aula: "Dispositivos de saída mostram ou entregam o resultado para fora, como ouvir música saindo do computador.", pergunta: "Qual peça faz o computador tocar música para você ouvir?", alternativas: ["Webcam", "Teclado", "Caixa de Som", "Microfone"], resposta: "Caixa de Som", link: "https://pt.wikipedia.org/wiki/Periférico_de_saída" },
        { titulo: "Placa-Mãe", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F64%2F170564-050-7A0A86A2%2Fmotherboard-for-computer.jpg&f=1&nofb=1&ipt=bfdf208982eca48bf7ad021fae667a16422d63adfd35e4132fec450d80e5b47c", texto_aula: "A Placa-Mãe é como uma cidade com muitas ruas conectando todas as peças, para elas conversarem entre si.", pergunta: "Por onde as informações viajam dentro do computador, como ruas em uma cidade?", alternativas: ["Ventilador", "Estradas da Placa-Mãe", "Cabo de energia", "Tela"], resposta: "Estradas da Placa-Mãe", link: "https://pt.wikipedia.org/wiki/Placa-mãe" },
        { titulo: "Placa de Vídeo", imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800", texto_aula: "A Placa de Vídeo é a artista que desenha gráficos incríveis e jogos cheios de cores e movimentos.", pergunta: "Quem no computador é responsável por criar imagens bonitas e realistas nos jogos?", alternativas: ["Fonte", "Placa de Vídeo", "Teclado", "Scanner"], resposta: "Placa de Vídeo", link: "https://pt.wikipedia.org/wiki/Placa_de_vídeo" },
        { titulo: "Fonte de Energia", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplatformuploads.s3.amazonaws.com%2Fmedia%2F14135%2F14350%2F16206762074406707.png%3FExpires%3D1983343168%26AWSAccessKeyId%3DAKIAJOIWZCRTROUA2YMQ%26Signature%3Dmc3n9vuKg8pmHEwbsEIiPdIt6iM%253D&f=1&nofb=1&ipt=5c73c679e38486515b379cac04c130ccfa08fae8180590655147d8192a1440ac", texto_aula: "A Fonte transforma a energia forte da tomada em energia suave e segura para as peças, como um transformador mágico.", pergunta: "O que protege as peças do computador da energia forte da tomada?", alternativas: ["As peças podem queimar", "Fonte", "Monitor muda de cor", "Nada"], resposta: "Fonte", link: "https://pt.wikipedia.org/wiki/Fonte_de_alimentação" },
        { titulo: "Resfriamento (Cooler)", imagem: "https://images.unsplash.com/photo-1613483187636-c2024013d54a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", texto_aula: "O Cooler é como um ventilador que sopra ar fresco para o Processador não ficar quente demais e parar de funcionar.", pergunta: "Por que ouvimos um barulho de vento dentro do computador quando jogamos muito?", alternativas: ["Som do jogo", "Cooler esfriando as peças", "HD rodando", "Limpeza de poeira"], resposta: "Cooler esfriando as peças", link: "https://pt.wikipedia.org/wiki/Cooler" },
        { titulo: "Tamanho dos Arquivos", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.brainly.com.br%2Fimage%2Frs%3Afill%2Fw%3A1080%2Fq%3A75%2Fplain%2Fhttps%3A%2F%2Fpt-static.z-dn.net%2Ffiles%2Fdbe%2F867b7faf9f18ae5dbd4ac09d591fed47.png&f=1&nofb=1&ipt=8ebcc767655a6d3f6c9e4bfd1b754e3dee2e8bc91ff2cdd84a80c9e779a53e3e", texto_aula: "Arquivos grandes, como filmes, ocupam muito espaço, medido em Gigabytes. Arquivos pequenos, como letras, ocupam pouco.", pergunta: "Qual desses arquivos precisa de mais espaço para guardar no computador?", alternativas: ["Uma letra", "Uma foto", "Um filme longo", "Ícone do mouse"], resposta: "Um filme longo", link: "https://pt.wikipedia.org/wiki/Gigabyte" },
        { titulo: "Cabos de Vídeo", imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.idownloadblog.com%2Fwp-content%2Fuploads%2F2013%2F09%2FHDMI-cable-image-001.jpg&f=1&nofb=1&ipt=a41f2c3086e3c7f4c398fa331a61c03b18c4898fd3d921a81361cbe448a84734", texto_aula: "O cabo HDMI é como um super cabo que leva imagem e som juntos em alta qualidade, perfeito para assistir filmes na TV.", pergunta: "Qual cabo você usa para conectar o computador à TV e ver filme com som e imagem?", alternativas: ["Cabo de Força", "Cabo VGA", "Cabo HDMI", "Cabo de Impressora"], resposta: "Cabo HDMI", link: "https://pt.wikipedia.org/wiki/HDMI" },
        { titulo: "O Pendrive", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.iee-NtdRPpJndNAP-dN6XQHaEd%3Fpid%3DApi&f=1&ipt=6ac14229f1f6b6616b70d042fa16c332023fc5cbbb8c153f25534cf42a083f2b", texto_aula: "O Pendrive é como uma mochilinha pequena que você leva no bolso, cheia de arquivos para compartilhar em outros lugares.", pergunta: "Por que o pendrive é útil para levar arquivos de um computador para outro?", alternativas: ["PC liga mais rápido", "Carrega arquivos para outros lugares", "Substitui monitor", "Limpa vírus"], resposta: "Carrega arquivos para outros lugares", link: "https://pt.wikipedia.org/wiki/Unidade_flash_USB" },
        { titulo: "Poeira e Calor", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.howtogeekimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2024%2F03%2Fshutterstock_1831873726.jpg&f=1&nofb=1&ipt=e8357b048e87032c1a12e99fb065923d7dc91996a2218f1d805517abbcd109c8", texto_aula: "A poeira entra no computador e bloqueia o ar, fazendo ele esquentar como se estivesse com febre.", pergunta: "O que acontece se muita poeira acumular dentro do gabinete do computador?", alternativas: ["Ganha memória", "Fica silencioso", "Esquenta e trava", "Monitor fica bonito"], resposta: "Esquenta e trava", link: "https://pt.wikipedia.org/wiki/Manutenção_preventiva" },
        { titulo: "Hardware vs Software", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F66%2F7a%2Fc7%2F667ac7b388f9869892f239f83fa6e610.jpg&f=1&nofb=1&ipt=531f6a610289198a918edb844e2559a4158f0662f5024e006a2c6797e17ee833", texto_aula: "Hardware é o que você pode tocar, como o mouse. Software é o programa invisível que faz as coisas acontecerem.", pergunta: "Se o mouse funciona, mas o jogo não abre, onde pode estar o problema?", alternativas: ["No Hardware", "No Software", "Na tomada", "No gabinete"], resposta: "No Software", link: "https://pt.wikipedia.org/wiki/Software" },
        { titulo: "Biometria", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.tecnoblog.net%2Fwp-content%2Fuploads%2F2020%2F03%2Fcelular-xiaomi-digital-lcd-1.png&f=1&nofb=1&ipt=8ab325e3c868b1692cc8e54d5948581e28919571e894e3019ce77dcfb7d47cf8", texto_aula: "Sensores biométricos reconhecem coisas únicas do seu corpo, como a impressão digital, para manter as coisas seguras.", pergunta: "Para que serve um sensor biométrico no computador?", alternativas: ["Tirar fotos", "Identificar o dono pelo corpo", "Aumentar volume", "Imprimir papel"], resposta: "Identificar o dono pelo corpo", link: "https://pt.wikipedia.org/wiki/Biometria" }
    ],
    "atalhos": [
        { titulo: "Ctrl + C", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F220%2Foriginal%2F3d-rendering-ctrl-and-c-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=99e89c634f2a7a2cd6785c9982c115c9e6ed5b3e7a8c92780e78d4ebed80b5b5", texto_aula: "O atalho **Copiar** (Ctrl + C) tira uma cópia invisível do texto selecionado, como uma fotocópia.", pergunta: "Qual atalho você usa para fazer uma cópia do texto que selecionou?", alternativas: ["Colar", "Copiar", "Apagar", "Imprimir"], resposta: "Copiar", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Ctrl + V", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F218%2Foriginal%2F3d-rendering-ctrl-and-v-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=4800fb926e47bb006545eefaf6b08d0163a7abc489c4e16fd41f4f3f0ea31220", texto_aula: "O atalho **Colar** (Ctrl + V) coloca a cópia que você fez em um novo lugar, como colar um papel.", pergunta: "Depois de copiar, qual atalho faz o texto aparecer no lugar novo?", alternativas: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Alt + Tab"], resposta: "Ctrl + V", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Ctrl + Z", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F215%2Foriginal%2F3d-rendering-ctrl-and-z-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=c1da098ac86d4b46a25329beaa6aec9f2682141eae67f9e2db0b9457beb8de85", texto_aula: "O **Ctrl + Z** é como um botão de voltar no tempo, desfazendo o último erro que você cometeu.", pergunta: "Se você apagou algo por engano, qual atalho pode trazer de volta?", alternativas: ["O PC desliga", "O erro é desfeito", "O arquivo some", "Abre o Google"], resposta: "O erro é desfeito", link: "https://pt.wikipedia.org/wiki/Control-Z" },
        { titulo: "Ctrl + X", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fctrl-x-shortcut-button-3d-rendering_697471-68.jpg%3Fw%3D2000&f=1&nofb=1&ipt=ebd45accf0848bc0d4782e0ce779b43fddc2ea3f3bc572faecb3eb6934c213f4", texto_aula: "O **Recortar** (Ctrl + X) corta o texto do lugar antigo e o prepara para colar em outro, como mover uma folha.", pergunta: "Qual atalho corta o texto do lugar antigo para mover para outro?", alternativas: ["Ctrl + X", "Ctrl + C", "Ctrl + P", "Ctrl + A"], resposta: "Ctrl + X", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Ctrl + A", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F222%2F211%2Foriginal%2F3d-rendering-ctrl-and-a-keyboard-keys-isolated-png.png&f=1&nofb=1&ipt=58c444d7ddfbec2598c6f3c6dbb205fa6f6a3032c8c2a5f78e16c607e4426878", texto_aula: "O **Ctrl + A** seleciona tudo o que está na tela, como escolher todos os brinquedos de uma vez.", pergunta: "Qual atalho seleciona todo o conteúdo de um documento de texto?", alternativas: ["Apagar tudo", "Selecionar todo o conteúdo", "Abrir arquivo", "Aumentar letra"], resposta: "Selecionar todo o conteúdo", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Alt + Tab", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Ftab-alt-key-combination-keyboard-control-computer-shortcut-laptop-functional-input-device-peripheral-enter-text-typing-type-hotkeys-layout-language-qwerty-vector-illustration_727385-8734.jpg%3Fw%3D740&f=1&nofb=1&ipt=1478fbb6289056a43556e3dbb48298ef1e37fd526870886ba769f26e03cf225a", texto_aula: "O **Alt + Tab** permite trocar rapidamente entre janelas abertas, como mudar de canal na TV.", pergunta: "Qual atalho ajuda a pular entre programas que estão abertos no computador?", alternativas: ["F5", "Alt + Tab", "Windows + D", "Ctrl + P"], resposta: "Alt + Tab", link: "https://pt.wikipedia.org/wiki/Alt-Tab" },
        { titulo: "Windows + D", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXPLtt-3NW8w%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d0551e44a4cfbad02851c224a790e4190c1666ff3be4d7d5a34b4f1d8aacfc8d", texto_aula: "O **Windows + D** esconde todas as janelas e mostra a Área de Trabalho, como limpar a mesa.", pergunta: "O que acontece quando você aperta a tecla Windows junto com a letra D?", alternativas: ["Abre o Disco", "Mostra a Área de Trabalho", "Desliga o PC", "Deleta tudo"], resposta: "Mostra a Área de Trabalho", link: "https://pt.wikipedia.org/wiki/Tecla_Windows" },
        { titulo: "Salvar (Ctrl + S)", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fcombinacion-teclas-ctrl-s-icono-linea-automatizacion-productividad-optimizacion-flujo-trabajo-tareas-solo-clic-eficiencia-software-computadora-icono-lineal-vectorial-negocios-publicidad_727385-7718.jpg&f=1&nofb=1&ipt=a63fe9110108656a0ba924b352e255b9d871fcf6778027a1570ca0de18f306f7", texto_aula: "Use **Ctrl + S** para salvar seu trabalho, assim não perde nada se a luz acabar.", pergunta: "Por que é bom apertar Ctrl + S várias vezes enquanto trabalha?", alternativas: ["Para acelerar o PC", "Para garantir que fique guardado", "Para mudar a cor", "Para imprimir"], resposta: "Para garantir que fique guardado", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Alt + F4", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frmarketingdigital.com%2Fwp-content%2Fuploads%2F2021%2F05%2Falt_f4_keyboard_combination-8719701.jpg&f=1&nofb=1&ipt=188c3dd70e06a2766b2dda6e0034b9741205d95053288c146a1941f4f2142d27", texto_aula: "O **Alt + F4** fecha o programa que está aberto na frente, como fechar uma porta.", pergunta: "O que o computador faz quando você aperta Alt + F4?", alternativas: ["Abre ajuda", "Fecha o programa aberto", "Aumenta o brilho", "Reinicia"], resposta: "Fecha o programa aberto", link: "https://pt.wikipedia.org/wiki/Alt-F4" },
        { titulo: "F5 (Atualizar)", imagem: "https://imgs.search.brave.com/nFqaK1Qkf9uYyrDcof26QXLuiuS1mO96r07DWFOpR28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg0LzM1LzU0/LzM2MF9GXzI4NDM1/NTQ0OF92U3pFcFk5/ZGZLTDYxd2dON0lH/MkROVWJNS2ZKSVpC/My5qcGc", texto_aula: "A tecla **F5** recarrega a página da internet, como dar um refresh para ver coisas novas.", pergunta: "Qual tecla você aperta para recarregar uma página na internet?", alternativas: ["F1", "F5", "F12", "Esc"], resposta: "F5", link: "https://pt.wikipedia.org/wiki/F5" },
        { titulo: "Ctrl + F", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fctrl-f-shortcut-button-3d-rendering_697471-56.jpg&f=1&nofb=1&ipt=b002b2504c94ebbc945dd2df34604f579fd93735511877eb542d5d4d7f892ece", texto_aula: "O **Ctrl + F** abre uma busca para encontrar palavras escondidas no texto.", pergunta: "Para que serve o atalho Ctrl + F?", alternativas: ["Fechar tudo", "Encontrar uma palavra", "Formatar texto", "Fazer café"], resposta: "Encontrar uma palavra", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Ctrl + P", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fcombinacion-teclas-ctrl-p-icono-linea-aumentar-eficiencia-programable-mejora-productividad-automatizacion-icono-lineal-vectorial-negocios-publicidad_727385-7787.jpg&f=1&nofb=1&ipt=8e8c8ddddcbd4d75e88e6954a9788b36e36618154a126aa9fc702b6d8636dbe6", texto_aula: "O **Ctrl + P** abre as opções para imprimir, como mandar uma cópia para o papel.", pergunta: "Qual atalho você usa para abrir a janela de impressão?", alternativas: ["Ctrl + I", "Ctrl + P", "Ctrl + Alt", "Alt + P"], resposta: "Ctrl + P", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Ctrl + T", imagem: "nova-aba.png", texto_aula: "O **Ctrl + T** abre uma nova aba no navegador, como abrir uma nova página em um livro.", pergunta: "O que acontece quando você aperta Ctrl + T no navegador?", alternativas: ["Fecha o site", "Abre uma nova aba", "Troca de usuário", "Tira print"], resposta: "Abre uma nova aba", link: "https://pt.wikipedia.org/wiki/Navegação_por_abas" },
        { titulo: "Ctrl + Shift + T", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgmedia.larepublica.pe%2F640x377%2Flarepublica%2Fmigration%2Fimages%2FCUAMYQDER5ACFEL2EW7TFZ37BU.webp&f=1&nofb=1&ipt=1856835081132c846e617eca3775eccfc193e9d5a0e65243094209b18e1df6bd", texto_aula: "Este atalho reabre a última aba que você fechou por engano, como um truque de mágica.", pergunta: "Se fechou uma aba por erro, qual atalho a traz de volta?", alternativas: ["Ctrl + Shift + T", "Alt + F4", "Ctrl + Z", "F5"], resposta: "Ctrl + Shift + T", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Zoom (+/-)", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcitizenside.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fhow-to-zoom-in-or-out-with-your-keyboard-1690626545.png&f=1&nofb=1&ipt=bd14a5fbcd429389460a55a986bddc5fbe3ad715c0bfd09d27178bcdfca6b13d", texto_aula: "Segure **Ctrl** e use **+** ou **-** para aumentar ou diminuir o tamanho das coisas na tela.", pergunta: "Como você faz as letras de um site ficarem maiores se estiverem pequenas?", alternativas: ["Gritando com o PC", "Ctrl e tecla de mais (+)", "F5", "Windows + D"], resposta: "Ctrl e tecla de mais (+)", link: "https://pt.wikipedia.org/wiki/Zoom_(informática)" },
        { titulo: "Windows + L", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmovilforum.com%2Fwp-content%2Fuploads%2F2025%2F07%2FWindows-L.png&f=1&nofb=1&ipt=d17c4c9efaf65e3af1289ffb7d3e6cd4fc871370ada4d46ac03263c46edabf1d", texto_aula: "O **Windows + L** bloqueia o computador rapidamente, como trancar a porta.", pergunta: "Qual é a maneira mais rápida de bloquear o computador quando você sai?", alternativas: ["Desligar o monitor", "Windows + L", "Alt + F4", "Ctrl + Alt + Del"], resposta: "Windows + L", link: "https://pt.wikipedia.org/wiki/Tecla_Windows" },
        { titulo: "Windows + E", imagem: "https://pplware.sapo.pt/wp-content/uploads/2015/10/Quick_Access_Capa.jpg", texto_aula: "O **Windows + E** abre a pasta dos arquivos, como abrir um armário cheio de pastas.", pergunta: "O que o atalho Windows + E faz?", alternativas: ["Abre E-mail", "Abre o explorador de pastas", "Exclui arquivos", "Edita fotos"], resposta: "Abre o explorador de pastas", link: "https://pt.wikipedia.org/wiki/Explorador_de_Arquivos" },
        { titulo: "Ctrl + Alt + Del", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F05%2F44%2F73%2F74%2F1000_F_544737461_D5nao4gxnm12z6rYZBPn4quSkg6aPf8q.jpg&f=1&nofb=1&ipt=96301dfc1a005127962b82992d0f6f0994cee1348935f6c9c347c7254e415f6b", texto_aula: "O comando **Ctrl + Alt + Del** é para emergências, quando um programa para de responder.", pergunta: "Qual combinação ajuda quando um programa congela e não responde?", alternativas: ["Esc + F1", "Ctrl + Alt + Del", "Ctrl + C + V", "Alt + Tab"], resposta: "Ctrl + Alt + Del", link: "https://pt.wikipedia.org/wiki/Control-Alt-Delete" },
        { titulo: "Shift + Delete", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fkeyboard-ctrl-alt-207337559.jpg&f=1&nofb=1&ipt=74a6843521ce3809eee00092babd67e8017402d4b04a9504c1fbca9ec11d7101", texto_aula: "O **Shift + Delete** apaga o arquivo direto, sem passar pela lixeira, como jogar fora sem reciclar.", pergunta: "O que é diferente ao apagar com Shift + Delete?", alternativas: ["Muda a cor", "Apaga sem ir para a lixeira", "Faz cópia", "Protege arquivo"], resposta: "Apaga sem ir para a lixeira", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Print Screen", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftt-hardware.com%2Fwp-content%2Fuploads%2F2023%2F06%2Ftouche-decran-dimpression-prtsc-768x461.png&f=1&nofb=1&ipt=bf67d24f2fa20fa94f50f1314e0fbc0b4e2ffba2650699460ee6da6d6935b154", texto_aula: "A tecla **PrtSc** tira uma foto da tela inteira, como uma câmera invisível.", pergunta: "Como você captura uma imagem de tudo que está na tela agora?", alternativas: ["Usando celular", "Apertando PrtSc", "Ctrl + P", "F5"], resposta: "Apertando PrtSc", link: "https://pt.wikipedia.org/wiki/Print_screen" }
    ],
    "bits": [
        { titulo: "Unidade Fundamental (Bit)", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gcflearnfree.org%2Fcontent%2F5be310a59fcfff1378ff8923_11_07_2018%2Fbinary_bit.jpg&f=1&nofb=1", texto_aula: "O **Bit** é a menor peça de informação no computador, como um tijolinho que constrói tudo.", pergunta: "Qual é a menor unidade de informação que o computador usa?", alternativas: ["Byte", "Bit", "Hertz", "Pixel"], resposta: "Bit", link: "https://pt.wikipedia.org/wiki/Bit" },
        { titulo: "Composição de Bytes", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F99%2Fde%2Fda%2F99dedac2407b07f8bba0a0fa1c4044b1.jpg&f=1&nofb=1", texto_aula: "Um **Byte** é feito de 8 bits juntos, como um pacote de tijolinhos para medir memória.", pergunta: "Quantos bits formam um Byte?", alternativas: ["4 bits", "10 bits", "8 bits", "16 bits"], resposta: "8 bits", link: "https://pt.wikipedia.org/wiki/Byte" },
        { titulo: "Sistema Binário", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slashgear.com%2Fimg%2Fgallery%2Fbinary-code-explained-what-it-is-and-why-computers-depend-on-it%2Fl-intro-1696987023.jpg&f=1&nofb=1", texto_aula: "O computador fala em Sistema Binário, só com 0 e 1, como uma linguagem secreta de números.", pergunta: "Qual linguagem o processador entende diretamente?", alternativas: ["Alto Nível", "Linguagem de Máquina", "ASCII", "Humana"], resposta: "Linguagem de Máquina", link: "https://pt.wikipedia.org/wiki/Sistema_binário" },
        { titulo: "Lógica Booleana", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F018%2F842%2F768%2Flarge_2x%2Frealistic-right-and-wrong-yes-or-no-approved-or-declined-3d-button-acceptance-rejection-and-attention-symbols-3d-render-illustration-free-png.png&f=1&nofb=1", texto_aula: "Na Lógica Booleana, 1 é Verdadeiro e 0 é Falso, como sim e não.", pergunta: "No sistema binário, o número 0 geralmente significa qual coisa?", alternativas: ["Verdadeiro", "Nulo", "Falso", "Ativo"], resposta: "Falso", link: "https://pt.wikipedia.org/wiki/Lógica_booleana" },
        { titulo: "Conectividade Wi-Fi", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphoneworks.net.au%2Fwp-content%2Fuploads%2F2021%2F01%2FWifi.jpg&f=1&nofb=1", texto_aula: "O Wi-Fi manda bits pelo ar usando ondas de rádio, como mensagens invisíveis.", pergunta: "Como os bits viajam na rede Wi-Fi?", alternativas: ["Luz", "Ondas de rádio", "Cabos", "Vácuo"], resposta: "Ondas de rádio", link: "https://pt.wikipedia.org/wiki/Wi-Fi" },
        { titulo: "Sistemas Operacionais", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.9N4YTNKpXAgHyuQ-deFSXwHaC3%3Fpid%3DApi&f=1&ipt=04f68ff39253f889f744412d541a731323e561121bbf868676be47dc924ab7b6", texto_aula: "O SO cuida do hardware e deixa você usar o computador facilmente.", pergunta: "Qual a função principal do Sistema Operacional?", alternativas: ["Criar bits", "Gerir recursos e processos", "Aumentar bateria", "Limpar o disco"], resposta: "Gerir recursos e processos", link: "https://pt.wikipedia.org/wiki/Sistema_operativo" },
        { titulo: "Cloud Computing", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.iTQNLfCTywigkJa-2LAW7AHaHa%3Fpid%3DApi&f=1&ipt=e17d12a1ae97aab2ca9fe08ee60696e594d8dcf66b7c95b99436d4485ab0ee29", texto_aula: "A Nuvem guarda bits em servidores distantes, acessíveis pela internet.", pergunta: "Onde ficam os dados salvos na 'Nuvem'?", alternativas: ["No monitor", "Em servidores remotos", "No teclado", "No HD local"], resposta: "Em servidores remotos", link: "https://pt.wikipedia.org/wiki/Computação_em_nuvem" },
        { titulo: "Algoritmos", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasimov.academy%2Fwp-content%2Fuploads%2F2023%2F12%2Falgoritmo-de-compras.png&f=1&nofb=1", texto_aula: "Um algoritmo é uma receita de passos para resolver problemas.", pergunta: "O que define um algoritmo na programação?", alternativas: ["Uma imagem", "Uma sequência de passos lógicos", "Um hardware", "Um vírus"], resposta: "Uma sequência de passos lógicos", link: "https://pt.wikipedia.org/wiki/Algoritmo" },
        { titulo: "Pixels e Matriz", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Freal-computer-pixels-zoom-computer-pixels-pixel-display-red-blue-green-black-zoom-128939415.jpg&f=1&nofb=1", texto_aula: "Pixels são os pontinhos que formam imagens na tela, como ladrilhos coloridos.", pergunta: "Qual é a menor parte que compõe uma imagem no monitor?", alternativas: ["Bit", "Pixel", "Voxel", "Byte"], resposta: "Pixel", link: "https://pt.wikipedia.org/wiki/Pixel" },
        { titulo: "Memória RAM", imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-q5zc-6suMzQ%2FVYXgb2qz4xI%2FAAAAAAAAAB8%2FPZCh9LpG1TU%2Fs1600%2FVOLATIL.jpg&f=1&nofb=1", texto_aula: "A RAM perde os bits quando desliga, como uma memória temporária.", pergunta: "O que acontece com a RAM ao desligar o PC?", alternativas: ["Salva no HD", "Dados são eliminados", "Fica rápida", "Nada"], resposta: "Dados são eliminados", link: "https://pt.wikipedia.org/wiki/Memória_volátil" },
        { titulo: "Software Bugs", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shakebugs.com%2Fwp-content%2Fuploads%2F2022%2F11%2FHow-to-efficiently-prevent-software-bugs-in-your-product.png&f=1&nofb=1", texto_aula: "Um bug é um erro no código que faz o programa agir estranho.", pergunta: "O que é um 'Bug' no computador?", alternativas: ["Um inseto", "Uma falha no código", "Um hardware", "Uma senha"], resposta: "Uma falha no código", link: "https://pt.wikipedia.org/wiki/Erro_de_software" },
        { titulo: "Inteligência Artificial", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.businessempresarial.com.pe%2Fwp-content%2Fuploads%2F2023%2F09%2FFoto-IA-scaled.jpg&f=1&nofb=1", texto_aula: "A IA aprende com dados para imitar ações humanas.", pergunta: "Característica principal de um sistema de IA?", alternativas: ["Sem eletricidade", "Aprender com dados", "Sem CPU", "Mecânico"], resposta: "Aprender com dados", link: "https://pt.wikipedia.org/wiki/Inteligência_artificial" },
        { titulo: "Internet", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felucabista.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fglobal-internet-thumbnail.jpg&f=1&nofb=1", texto_aula: "A Internet conecta computadores pelo mundo para trocar bits.", pergunta: "O que é a Internet tecnicamente?", alternativas: ["Um software", "Rede global de computadores", "Um monitor", "Um satélite"], resposta: "Rede global de computadores", link: "https://pt.wikipedia.org/wiki/Internet" },
        { titulo: "Diretórios", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.e-tinet.com%2Fwp-content%2Fuploads%2F2019%2F12%2FEstrutura-de-diret%25C3%25B3rios-do-Linux-.jpg&f=1&nofb=1&ipt=1832e8b1202c3a06beeaa282b903b1c6ba0dca8190cedea5f9bd186c23477909", texto_aula: "Pastas organizam arquivos, como gavetas em um armário.", pergunta: "Para que servem os diretórios?", alternativas: ["Limpar RAM", "Organizar arquivos", "Aumentar clock", "Trocar IP"], resposta: "Organizar arquivos", link: "https://pt.wikipedia.org/wiki/Diretório" },
        { titulo: "Código Fonte", imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fstatic.meupc.net%2Fwp%2F1%2F2021%2F04%2Fpagina-codigo-fonte.jpg&f=1&nofb=1&ipt=f68c7f265cea60d8a45a920297a6dc3e8fca42e84fbbd5bf277695e143070556", texto_aula: "Código fonte é o texto que programadores escrevem antes de virar programa.", pergunta: "O que é o código fonte?", alternativas: ["O hardware", "Texto escrito pelo programador", "A caixa do PC", "O cabo"], resposta: "Texto escrito pelo programador", link: "https://pt.wikipedia.org/wiki/Código_fonte" },
        { titulo: "Segurança", imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvalidcertificadora.com.br%2Fcdn%2Fshop%2Farticles%2Fcriptografia.jpg%3Fv%3D1717692577&f=1&nofb=1&ipt=1e83e166fae9faeb850e25a894f092efd9876dbbc83c271c5adbd4acddea8c0d", texto_aula: "Criptografia protege dados com códigos secretos.", pergunta: "Função da criptografia?", alternativas: ["Aumentar o volume", "Dificultar acesso a dados pessoais", "Mudar cor do monitor", "Desligar o computador"], resposta: "Dificultar acesso a dados pessoais", link: "https://pt.wikipedia.org/wiki/Senha" },
        { titulo: "Cursor", imagem: "https://i.pinimg.com/1200x/fe/71/6a/fe716a50632c64e783567c66764fd7e5.jpg", texto_aula: "O cursor é a seta que aponta na tela para interagir.", pergunta: "Como se chama o indicador do mouse?", alternativas: ["Link", "Cursor", "Janela", "Botão"], resposta: "Cursor", link: "https://pt.wikipedia.org/wiki/Cursor_(informática)" },
        { titulo: "Upload/Download", imagem: "https://imgs.search.brave.com/PZdCII7man-pRx_ddk1Uwx5_udCzQPZs0v2_9DfShhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nY2ZsZWFybmZy/ZWUub3JnL2NvbnRl/bnQvNTU3ODUzYmQz/MTdmYWEzMTYwOTZi/ZWY4XzA2XzEwXzIw/MTUvaW50cm9faW1h/Z2V2Mi5wbmc", texto_aula: "Upload envia bits para o servidor, download recebe.", pergunta: "Enviar arquivo para o servidor chama-se:", alternativas: ["Download", "Upload", "Delete", "Print"], resposta: "Upload", link: "https://pt.wikipedia.org/wiki/Download" },
        { titulo: "Vírus de Computador", imagem: "https://imgs.search.brave.com/Xtjl5zmLErLcsZm0XUOuH3K6FJRO-c10T09nY14nx5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NzYyNzA3OS92ZWN0/b3IvY3liZXJhdHRh/Y2stY29tcHV0ZXIt/dmlydXNlcy1pbnRl/cm5ldC1waGlzaGlu/Zy1oYWNraW5nLWVy/cm9ycy1kZXRlY3Rl/ZC1zZWFyY2gtYW5k/LWZpbmQtYnVncy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VzAycVhOWHJsRWJ2/UkxhdTJNZnNleTRr/bDVCaHQwWHNCczBl/MWQ1TWJCQT0", texto_aula: "Vírus são programas ruins que podem danificar arquivos ou roubar informações, como bichinhos invisíveis que fazem bagunça.", pergunta: "O que é um vírus no computador?", alternativas: ["Um jogo divertido", "Um programa ruim", "Uma imagem bonita", "Um som legal"], resposta: "Um programa ruim", link: "https://pt.wikipedia.org/wiki/Vírus_de_computador" },        { titulo: "CPU/Processador", imagem: "https://imgs.search.brave.com/5se17zPyhax4z3FwuBizWQ2wwAxbfMPn7zCAKKPc7ZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYW5k/LWluc3RhbGxpbmct/Y3B1LXByb2Nlc3Nv/ci1tb3RoZXJib2Fy/ZC1zb2NrZXQtY29t/cHV0ZXItdXBncmFk/ZS1jbG9zZS11cC1y/ZXByZXNlbnRpbmct/dGVjaG5vbG9neS1k/aWdpdGFsLTQwOTky/NDE3My5qcGc", texto_aula: "A CPU calcula com bits de instruções.", pergunta: "Qual componente processa instruções binárias?", alternativas: ["Teclado", "CPU", "Gabinete", "Webcam"], resposta: "CPU", link: "https://pt.wikipedia.org/wiki/Unidade_central_de_processamento" }
    ]
};

// --- LÓGICA DO SISTEMA ---

let estado = {
    aluno: { nome: "", escola: "", idade: "" },
    categoriaAtual: null,
    indiceAtual: 0,
    pontuacao: 0,
    mostrandoAula: true,
    historico: []
};

// Função para embaralhar alternativas
function embaralhar(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function irParaModulos() {
    const n = document.getElementById('nome-usuario').value;
    const e = document.getElementById('escola-usuario').value;
    const i = document.getElementById('idade-usuario').value;

    if (!n || !e || !i) return alert("Fernando, preencha todos os campos!");

    estado.aluno = { nome: n, escola: e, idade: i };
    document.getElementById('tela-cadastro').classList.add('hidden');
    document.getElementById('selecao-categoria').classList.remove('hidden');
}

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
    const container = document.getElementById('quiz-container');
    const dados = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];

    if (estado.mostrandoAula) {
        container.innerHTML = `
            <h2>${dados.titulo}</h2>
            <img src="${dados.imagem}" class="img-aula" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" onerror="this.src='https://via.placeholder.com/500x300?text=Imagem+Indisponível'">
            <div class="texto-explicativo">
                <p>${dados.texto_aula.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            </div>
            <br>
            <button class="botao-principal" onclick="estado.mostrandoAula = false; renderizarEtapa();">Fazer Desafio</button>
        `;
    } else {
        // Embaralha as alternativas antes de mostrar
        const alternativasFinal = embaralhar([...dados.alternativas]);

        container.innerHTML = `
            <h3>${dados.pergunta}</h3>
            <div class="alternativas">
                ${alternativasFinal.map(alt => `
                    <button class="btn-alt" onclick="verificarResposta('${alt}')">${alt}</button>
                `).join('')}
            </div>
        `;
    }
}

function verificarResposta(escolha) {
    const dados = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];
    const acertou = (escolha === dados.resposta);

    estado.historico.push({
        pergunta: dados.pergunta,
        suaResposta: escolha,
        correta: dados.resposta,
        status: acertou
    });

    if (acertou) {
        estado.pontuacao++;
        estado.indiceAtual++;
        estado.mostrandoAula = true;

        if (estado.indiceAtual < CONTEUDO_GERAL[estado.categoriaAtual].length) {
            renderizarEtapa();
        } else {
            finalizarQuiz();
        }
    } else {
        // Mostrar mensagem de erro e explicação
        const container = document.getElementById('quiz-container');
        container.innerHTML = `
            <h3>Ops! Você errou.</h3>
            <p><strong>Sua resposta:</strong> ${escolha}</p>
            <p><strong>Resposta correta:</strong> ${dados.resposta}</p>
            <div class="texto-explicativo">
                <p>${dados.texto_aula.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            </div>
            <br>
            <button class="botao-principal" onclick="estado.indiceAtual++; estado.mostrandoAula = true; renderizarEtapa();">Próxima Pergunta</button>
        `;
    }
}

function finalizarQuiz() {
    const container = document.getElementById('quiz-container');
    const total = CONTEUDO_GERAL[estado.categoriaAtual].length;
    const nota = (estado.pontuacao / total) * 10;

    container.innerHTML = `
        <h2>Parabéns, ${estado.aluno.nome}!</h2>
        <p>Você concluiu o módulo de ${estado.categoriaAtual.toUpperCase()}.</p>
        <div class="resultado-box">
            <p>Acertos: <strong>${estado.pontuacao}</strong> de ${total}</p>
            <p>Sua Nota: <strong>${nota.toFixed(1)}</strong></p>
        </div>

        <div class="beneficios-box" style="background: #21262d; padding: 20px; border-radius: 10px; margin: 20px 0; border: 1px solid #30363d;">
            <h4>🚀 Por que aprender Informática?</h4>
            <ul style="text-align: left; font-size: 0.9rem; color: #8b949e; list-style: none;">
                <li>✅ Abre portas para muitos empregos divertidos e criativos.</li>
                <li>✅ O mercado de tecnologia cresce rápido e contrata muitas pessoas.</li>
                <li>✅ Ajuda a resolver problemas de forma lógica e inteligente.</li>
                <li>✅ Paga bem e permite trabalhar de casa ou viajar.</li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; color: #58a6ff;">"Aprender computação é como ganhar um superpoder para o futuro!"</p>
            <p style="margin-top: 15px; color: #f85149;">Gostou? Compartilhe com seus amigos! Copie este link: <input type="text" value="${window.location.href}" readonly style="width: 100%; background: #0d1117; color: #c9d1d9; border: 1px solid #30363d; padding: 5px; border-radius: 5px;"></p>
        </div>

        <button class="botao-modulo" onclick="mostrarRevisao()">Ver Revisão de Erros</button>
        <button class="botao-principal" onclick="location.reload()">Escolher Outro Módulo</button>

        <div id="revisao-detalhada" class="hidden" style="margin-top: 30px;"></div>
    `;
}

function mostrarRevisao() {
    const div = document.getElementById('revisao-detalhada');
    div.classList.remove('hidden');
    div.innerHTML = `<h3>Revisão do Desafio</h3>` + estado.historico.map((h, index) => `
        <div class="lista-revisao" style="border-bottom: 1px solid #30363d; padding: 10px; text-align: left;">
            <p><strong>${index + 1}. ${h.pergunta}</strong></p>
            <p style="color: ${h.status ? '#2ea043' : '#f85149'}">Sua: ${h.suaResposta}</p>
            ${!h.status ? `<p style="color: #58a6ff">Correta: ${h.correta}</p>` : ''}
        </div>
    `).join('');
}
