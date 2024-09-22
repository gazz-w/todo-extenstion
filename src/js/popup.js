document.addEventListener('DOMContentLoaded', () => {
    const novaTarefaInput = document.getElementById('novaTarefa');
    const adicionarTarefaButton = document.getElementById('adicionarTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    // Função para carregar tarefas salvas
    function carregarTarefas() {
        chrome.storage.local.get(['tarefas'], (result) => {
            const tarefas = result.tarefas || [];
            tarefas.forEach((tarefa) => {
                adicionarTarefaNaLista(tarefa.texto, tarefa.concluida);
            });
        });
    }

    // Função para salvar tarefas
    function salvarTarefas() {
        const tarefas = [];
        const itensDaLista = listaTarefas.querySelectorAll('li');
        itensDaLista.forEach((item) => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            const texto = item.querySelector('span').textContent;
            tarefas.push({ texto: texto, concluida: checkbox.checked });
        });
        chrome.storage.local.set({ tarefas: tarefas });
    }

    // Função para adicionar tarefa na lista visual
    function adicionarTarefaNaLista(texto, concluida) {
        const li = document.createElement('li');
        li.className = 'tarefa';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = concluida;

        const span = document.createElement('span');
        span.textContent = texto;

        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Excluir';
        botaoDeletar.className = 'botaoDeletar';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botaoDeletar);
        listaTarefas.appendChild(li);

        // Eventos
        checkbox.addEventListener('change', salvarTarefas);
        botaoDeletar.addEventListener('click', () => {
            listaTarefas.removeChild(li);
            salvarTarefas();
        });
    }

    // Evento para adicionar nova tarefa
    adicionarTarefaButton.addEventListener('click', () => {
        const textoTarefa = novaTarefaInput.value.trim();
        if (textoTarefa) {
            adicionarTarefaNaLista(textoTarefa, false);
            salvarTarefas();
            novaTarefaInput.value = '';
        }
    });

    // Carrega as tarefas ao iniciar
    carregarTarefas();
});
