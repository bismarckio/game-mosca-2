
var altura = 0
var largura = 0
var vidas = 1
var tempo = 90

var criamosquitotempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	var criamosquitotempo = 1500
} else if(nivel === 'normal') {
	//1000
	var criamosquitotempo = 1000
} else if (nivel === 'hardcore') {
	//750
	var criamosquitotempo = 750
}
function ajustatela() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustatela()

var cronometro = setInterval(function() {
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criamosquito)
		window.location.href = 'vitoria.html'
        alert('Vitória')
	} else {
	document.getElementById('cronometro').innerHTML = tempo

	}
	
}, 1000)


function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "https://w7.pngwing.com/pngs/473/196/png-transparent-heart-spiral-heart-love-cdr-image-file-formats.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'https://www.imagensanimadas.com/data/media/197/mosca-imagem-animada-0039.gif'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

