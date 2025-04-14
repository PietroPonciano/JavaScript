const array = [
    'cacau', 'caimo', 'caqui', 'jambo', 'pequi', 'amora', 'limão', 'mamão', 'manga',
    'água', 'aluno', 'amigo', 'arroz', 'barco', 'bolsa', 'bomba', 'carro', 'chuva',
    'clube', 'corpo', 'costa', 'crime', 'dente', 'disco', 'dólar', 'drama', 'festa',
    'filme', 'força', 'forma', 'grupo', 'homem', 'hotel', 'ideia', 'irmão', 'juízo',
    'lápis', 'livro', 'lugar', 'marca', 'massa', 'metal', 'metro', 'minas', 'moeda',
    'moral', 'morte', 'motor', 'mundo', 'nariz', 'navio', 'nível', 'noite',
    'abacaxi', 'caderno', 'futuro', 'solido', 'oculos', 'jornal', 'chave', 'bola',
    'olho', 'pessoa', 'amigo', 'energia', 'branco', 'tigre', 'azul', 'banana', 
    'gato', 'cachorro', 'dinheiro', 'teatro', 'relógio', 'escola', 'janela', 
    'lua', 'estrela', 'floresta', 'médico', 'pneu', 'computador', 'palavra', 
    'festa', 'verão', 'outubro', 'melancia', 'coração', 'perceber', 'refrigerante',
    'arco', 'antigo', 'relacionamento', 'herói', 'milagre', 'progresso', 'viajar',
    'universo', 'oceano', 'cavalo', 'grande', 'água', 'macaco', 'cavalo', 'caminho',
    'vaca', 'relógio', 'anjo', 'felicidade', 'carro', 'nuvem', 'pessoa', 'animado',
    'relacionamento', 'esperança', 'raiz', 'flor', 'casa', 'amor', 'certeza', 'banco'
];

const indiceAleatorio = Math.floor(Math.random() * array.length);
const elementoSorteado = array[indiceAleatorio];
const elementoSeparado = elementoSorteado.split('');

let progresso = new Array(elementoSorteado.length).fill('_'); 
let letrasErradas = [];
let letrasCorretas = [];
let letrasNoLugarErrado = []; 
document.getElementById('palavraSorteada').innerText = elementoSorteado;

function atualizar() {
    window.location.reload(); 
}

function enviar() {
    let palavra = document.getElementById('palavra').value.toLowerCase();
    let palavraSep = palavra.split('');

    
    if (palavra.length !== elementoSorteado.length) {
        document.getElementById('tentativas').innerText = `A palavra deve ter ${elementoSorteado.length} letras.`;
        document.getElementById('tentativas').style.color = 'orange';
        return;
    }

    
    if (elementoSorteado === palavra) {
        document.getElementById('tentativas').innerText = 'Você acertou!';
        document.getElementById('tentativas').style.color = 'green';
        return;
    }

    
    for (let i = 0; i < elementoSeparado.length; i++) {
        if (elementoSeparado[i] === palavraSep[i]) {
            progresso[i] = elementoSeparado[i]; 
            letrasCorretas.push(elementoSeparado[i]); 
        } else if (elementoSorteado.includes(palavraSep[i]) && !letrasCorretas.includes(palavraSep[i]) && !letrasNoLugarErrado.includes(palavraSep[i])) {
           
            letrasNoLugarErrado.push(palavraSep[i]);
        } else if (!letrasErradas.includes(palavraSep[i])) {
            letrasErradas.push(palavraSep[i]); 
        }
    }

    
    const unicasErradas = [...new Set(letrasErradas)];
    document.getElementById('erradas').innerText = `Letras posicionadas erradas: ${unicasErradas.join(', ')}`;

    
    const unicasNoLugarErrado = [...new Set(letrasNoLugarErrado)];
    document.getElementById('erradasLugarErrado').innerText = `Contem as letras: ${unicasNoLugarErrado.join(', ')}`;

    
    let resultadoHTML = '';
    for (let i = 0; i < progresso.length; i++) {
        if (progresso[i] !== '_') {
            resultadoHTML += `<span style="color: green;">${progresso[i]}</span>`; 
        } else {
            resultadoHTML += `<span style="color: red;">_-</span>`; 
        }
    }

    
    document.getElementById('tentativas').innerHTML = resultadoHTML;
    document.getElementById('palavra').value = ''; 
}
