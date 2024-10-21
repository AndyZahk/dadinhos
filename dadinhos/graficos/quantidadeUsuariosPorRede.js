async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados);
    
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS ('--bg-color'),
        paper_bgcolor: getCSS ('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: getCSS('--pimary-color'),
                size: 30,
                font: getCSS(--font)
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont:
        }
    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Ploty.newPlot(grafico,data)
    
    }
    
    quantidadeUsuariosPorRede();