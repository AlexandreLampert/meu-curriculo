
/* INTERAÇÃO 1 — FORMULÁRIO DE CONTATO */
const form = document.getElementById('formContato');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const resultado = document.getElementById('resultadoContato');
        const saudacao = document.getElementById('saudacao');

        // Verifica se os campos foram preenchidos
        if (!nome || !email) {
            alert('Por favor, preencha seu nome e e-mail.');
            return;
        }

        // Atualiza a saudação no início da página
        saudacao.innerText =
            `Olá, ${nome}! Obrigado por visitar meu portfólio.`;

        // Exibe a confirmação na página
        resultado.innerText =
            `Obrigado pelo contato, ${nome}! Seus dados foram preenchidos com sucesso.`;

        // Exibe uma mensagem de boas-vindas
        alert(`Obrigado pelo contato, ${nome}!`);

        // Limpa os campos do formulário
        form.reset();
    });
}


/* INTERAÇÃO 2 — MOSTRAR OU OCULTAR INFORMAÇÕES */
const botaoResumo = document.getElementById('btnResumo');
const resumo = document.getElementById('resumoExtra');

if (botaoResumo && resumo) {
    botaoResumo.addEventListener('click', function () {

        // Verifica se as informações estão ocultas
        const estaOculto = resumo.hidden;

        // Alterna entre mostrar e ocultar
        resumo.hidden = !estaOculto;

        // Atualiza o texto e o estado acessível do botão
        if (estaOculto) {
            botaoResumo.innerText = 'Ocultar informações';
            botaoResumo.setAttribute('aria-expanded', 'true');
        } else {
            botaoResumo.innerText = 'Mostrar mais informações';
            botaoResumo.setAttribute('aria-expanded', 'false');
        }
    });
}
