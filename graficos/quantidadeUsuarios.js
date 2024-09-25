import { getCSS, tickconfig } from "./common.js"

async function QuantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        x: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: `bar`,
        marker: {
            color: getCSS('--primary-color')
        }
    ]
   }
    
