const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Carregando sua imagem
const img = new Image();
img.onload = () => {
    // Desenhando a imagem no canvas (ajuste as dimensões conforme necessário)
    ctx.drawImage(img, 10, 10, canvas.width, canvas.height);

    // Desenhando a camada cinza por cima
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Implementando a mecânica da raspadinha
    canvas.addEventListener('mousemove', (e) => {
        ctx.clearRect(e.offsetX - 1, e.offsetY - 1, 50, 50);
    });
};

// Definindo o caminho da imagem (ajuste para o seu caso)
img.src = 'imagens/logo.png'; // Certifique-se que o caminho está correto
