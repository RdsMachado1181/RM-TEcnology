
/* javascript criado para veificação do banco de dados dos dados que e inserido pelo usuario*/  
<script>
        document.getElementById('login-form").addEventListener('submit'), function(event) 
            event.preventDefault(); // Impede o envio do formulário

            // Dados de login fictícios para validação
            const validEmail = 'email';
            const validPassword = 'senha';

            // Obter valores dos campos de entrada
            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Verificar se os dados estão corretos
            if (username === validEmail && password === validPassword) {
                alert('Login bem-sucedido!')
                // Redirecionar para outra página ou realizar outra ação
                // window.location.href = 'pagina_de_destino.html';
            } else {
                document.getElementById('errorMessage').style.display = 'block'
            };
         
      
    </script>
