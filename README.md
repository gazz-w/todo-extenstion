# To-do list Extension

Uma extensão simples e eficaz para o Google Chrome que permite gerenciar uma lista de tarefas. Adicione novas tarefas, marque como concluídas e exclua-as quando desejar. Com um design clean e bordas arredondadas, a experiência do usuário é intuitiva e agradável.

## Índice
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades
- **Adicionar Tarefas**: Insira novas tarefas através de um campo de texto.
- **Marcar como Concluídas**: Utilize a caixa de seleção para indicar que uma tarefa foi concluída.
- **Excluir Tarefas**: Remova tarefas com um botão de exclusão dedicado.
- **Armazenamento Local**: As tarefas são salvas localmente usando `chrome.storage.local`.
- **Interface Amigável**: Design moderno com bordas arredondadas para uma experiência de usuário aprimorada.

## Pré-requisitos
- **Google Chrome**: Certifique-se de que está usando a versão mais recente do navegador.
- **Modo Desenvolvedor Ativado**: Necessário para instalar extensões não publicadas.

## Instalação
1. **Clone ou Baixe o Repositório**:
    ```bash
    git clone https://github.com/gazz-w/todo-extenstion
    ```

2. **Acesse as Extensões do Chrome**:
    Abra o Google Chrome e navegue até `chrome://extensions`.

3. **Ative o Modo Desenvolvedor**:
    No canto superior direito, ative o "Modo do desenvolvedor".

4. **Carregue a Extensão**:
    Clique em "Carregar sem compactação" e selecione a pasta `todoext`.

5. **Confirme a Instalação**:
    A extensão deve aparecer na lista de extensões, e o ícone será visível na barra de ferramentas.

## Como Usar

### Abrir a Extensão
Clique no ícone da extensão na barra de ferramentas do Chrome.

### Adicionar uma Nova Tarefa
1. Digite a tarefa no campo "Digite uma nova tarefa".
2. Clique no botão "Adicionar".

### Marcar Tarefa como Concluída
Marque a caixa de seleção ao lado da tarefa.

### Excluir uma Tarefa
Clique no botão "Excluir" correspondente à tarefa que deseja remover.

## Estrutura do Projeto
- `manifest.json`: Arquivo de configuração da extensão.
- `popup.html`: Interface da extensão.
- `popup.js`: Lógica da extensão.
- `styles.css`: Estilos de design para a interface.

## Personalização
Você pode personalizar a aparência ou funcionalidade alterando os arquivos `popup.html`, `popup.js` e `styles.css` conforme suas necessidades.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas no repositório.

## Licença
Este projeto é licenciado sob a [MIT License](LICENSE).

---

Esse README fornece todas as informações essenciais para a instalação, uso e personalização da extensão.