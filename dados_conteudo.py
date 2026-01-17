MODULO_ATALHOS = [
    {
        "id": 1,
        "titulo": "Atalho do 'Copiador'",
        "pergunta": "Qual combinação de teclas é usada para COPIAR um item selecionado?",
        "alternativas": ["Ctrl + Z", "Ctrl + C", "Ctrl + A", "Shift + Enter"],
        "resposta_correta": "Ctrl + C",
        "dica": "Lembre-se: 'C' é a letra de Copiar. Use isso para ser mais rápido!",
        "imagem": "atalho_copiar.png" # Usaremos isso no HTML
    },
    {
        "id": 2,
        "titulo": "Atalho do 'Voltador'",
        "pergunta": "Qual combinação de teclas desfaz a última coisa que você fez?",
        "alternativas": ["Ctrl + V", "Ctrl + Y", "Ctrl + Z", "Ctrl + A"],
        "resposta_correta": "Ctrl + Z",
        "dica": "Se você apagar algo sem querer, o 'Z' te ajuda a voltar no tempo.",
        "imagem": "atalho_desfazer.png"
    }
]
# ==========================================================
# ARQUIVO: dados_conteudo.py (Completo - Parte 1/3)
# ==========================================================

MODULO_HARDWARE = [
    {
        "id": 101,
        "titulo": "O Cérebro do Computador (CPU)",
        "pergunta": "Qual peça é a responsável por pensar e fazer os cálculos?",
        "alternativas": ["Teclado", "Monitor", "CPU", "Mouse"],
        "resposta_correta": "CPU",
        "explicacao_didatica": "A CPU (Central Processing Unit) é o cérebro! Ela recebe comandos e processa as informações rapidamente.",
        "imagem": "cpu.png"
    },
    {
        "id": 102,
        "titulo": "As Entradas do Monitor (Hertz)",
        "pergunta": "O que significa 'Hertz' (Hz) quando olhamos o monitor?",
        "alternativas": ["O tamanho da tela", "A quantidade de cores", "A frequência com que a imagem é atualizada", "O brilho máximo"],
        "resposta_correta": "A frequência com que a imagem é atualizada",
        "explicacao_didatica": "O Hertz (Hz) é a 'velocidade de atualização'. Quanto mais Hz, mais a imagem é atualizada por segundo, deixando o movimento mais fluido e real!",
        "imagem": "monitor_hz.png"
    },
    {
        "id": 103,
        "titulo": "Portas USB: Os Conectores",
        "pergunta": "Qual dispositivo é mais comum conectar em uma porta USB?",
        "alternativas": ["Cabo de energia da tomada", "Mangueira de água", "Pendrive para salvar arquivos", "Cabo de internet principal"],
        "resposta_correta": "Pendrive para salvar arquivos",
        "explicacao_didatica": "A USB (Universal Serial Bus) é uma porta padrão para conectar acessórios como pendrives, mouses e teclados.",
        "imagem": "usb_portas.png"
    }
]
# ==========================================================
# ARQUIVO: dados_conteudo.py (Completo - Parte 2/3)
# ==========================================================

MODULO_BITS = [
    {
        "id": 201,
        "titulo": "O que é um Bit?",
        "pergunta": "Qual é a menor e mais básica informação que o computador consegue entender?",
        "alternativas": ["Um Byte", "Um Bit", "Um Megabyte", "Um Chip"],
        "resposta_correta": "Um Bit",
        "explicacao_didatica": "Um Bit é a menor informação digital possível, ele só pode ser 0 ou 1, como um interruptor de luz: ligado (1) ou desligado (0).",
        "imagem": "bit.png"
    },
    {
        "id": 202,
        "titulo": "A Linguagem Binária",
        "pergunta": "Na linguagem Binária, o que o número '1' representa?",
        "alternativas": ["Computador desligado", "Luz apagada", "Informação ligada / Verdadeiro", "Um erro"],
        "resposta_correta": "Informação ligada / Verdadeiro",
        "explicacao_didatica": "O Binário é a linguagem secreta do computador, onde 1 significa 'ligado' e 0 significa 'desligado'. Toda informação é feita combinando 0s e 1s.",
        "imagem": "binario.png"
    }
]
# ==========================================================
# ARQUIVO: dados_conteudo.py (Completo - Parte 3/3 - Agrupamento)
# ==========================================================

# ... (MODULO_HARDWARE, MODULO_ATALHOS, MODULO_BITS definidos acima) ...

CONTEUDO_GERAL = {
    "hardware": MODULO_HARDWARE,
    "atalhos": MODULO_ATALHOS,
    "bits": MODULO_BITS
}