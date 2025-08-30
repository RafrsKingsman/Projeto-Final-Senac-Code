document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        if (usuario === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Aqui, você pode adicionar a lógica de autenticação.
        // Exemplo: Enviar os dados para um servidor.
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);

        alert('Tentativa de login realizada! (Confira o console para mais detalhes)');
    });
});