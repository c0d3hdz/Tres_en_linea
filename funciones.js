let tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]
let jugador = 'X' //Turno inicial
const elemento = document.getElementById('turnos')
const mensaje = 'Turno de: '+ jugador
elemento.textContent = mensaje
let i = 0
let tabla = []

function marcar(row, col) {
    if (tablero[row][col] === '') {
        tablero[row][col] = jugador
        const cell = document.getElementsByClassName('cell')[row * 3 + col]
        cell.innerText = jugador

        if (ganador()) {
            const casillas_ganadoras = getcasillas_ganadoras()
            for (let i = 0; i < casillas_ganadoras.length; i++) {
                casillas_ganadoras[i].classList.add('winner')//coloca las casillas ganadoras la clase winer para darles el color verde
            }
            setTimeout(function () {
                if (getcasillas_ganadoras()) {
                    alert('¡' + jugador + ' ha ganado!')
                    limpiar()
                    winer = turno
                    i++
                    const tabla = winer

                    const lista = document.getElementById('tabla')
                    const nuevali = document.createElement('li')

                    nuevali.textContent = 'Ganador ronda ' + i + ': ' + tabla[tabla.length - 1]
                    lista.appendChild(nuevali)
                    elemento.textContent = 'Turno de: X'
                }
            }, 200)
        } else {
            jugador = jugador === 'X' ? 'O' : 'X'
            turno = jugador
            const mensaje = 'Turno de: ' + turno
            elemento.textContent = mensaje
        }
    }
}

function limpiar() {
    tablero = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]

    const cells = document.getElementsByClassName('cell')
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = ''
        cells[i].classList.remove('winner')
    }
    elemento.textContent = 'Turno de: X'
}

function ganador() {
    for (let row = 0; row < 3; row++) {
        if (tablero[row][0] === jugador && tablero[row][1] === jugador && tablero[row][2] === jugador) {
            return true
        }
    }
    for (let col = 0; col < 3; col++) {
        if (tablero[0][col] === jugador && tablero[1][col] === jugador && tablero[2][col] === jugador) {
            return true
        }
    }

    if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) {
        return true
    }

    if (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador) {
        return true
    }

    return false
}

function getcasillas_ganadoras() {
    const casillas_ganadoras = []

    for (let row = 0; row < 3; row++) {
        if (tablero[row][0] === jugador && tablero[row][1] === jugador && tablero[row][2] === jugador) {
            casillas_ganadoras.push(document.getElementsByClassName('cell')[row * 3 + 0])
            casillas_ganadoras.push(document.getElementsByClassName('cell')[row * 3 + 1])
            casillas_ganadoras.push(document.getElementsByClassName('cell')[row * 3 + 2])
            break
        }
    }

    for (let col = 0; col < 3; col++) {
        if (tablero[0][col] === jugador && tablero[1][col] === jugador && tablero[2][col] === jugador) {
            casillas_ganadoras.push(document.getElementsByClassName('cell')[0 * 3 + col])
            casillas_ganadoras.push(document.getElementsByClassName('cell')[1 * 3 + col])
            casillas_ganadoras.push(document.getElementsByClassName('cell')[2 * 3 + col])
            break
        }
    }

    if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) {
        casillas_ganadoras.push(document.getElementsByClassName('cell')[0])
        casillas_ganadoras.push(document.getElementsByClassName('cell')[4])
        casillas_ganadoras.push(document.getElementsByClassName('cell')[8])
    }

    if (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador) {
        casillas_ganadoras.push(document.getElementsByClassName('cell')[2])
        casillas_ganadoras.push(document.getElementsByClassName('cell')[4])
        casillas_ganadoras.push(document.getElementsByClassName('cell')[6])
    }

    return casillas_ganadoras
}
// c0d3hdz-------------------------------------------------------------------------------------------------------------------------
