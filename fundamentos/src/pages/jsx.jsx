
export default function Jsx() {
    const a = 4
    const b = 3 
    console.log(a * b)

    const obj = {
        nome: 'João',
        idade: 30,
    }

    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo(){
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return(
        <div>
            {titulo}
            const a = 1
            const b = 3
            console.log(a * b)
            {a * b}
            
            {subtitulo()}

            <p>
                {JSON.stringify({
                    nome:'João',
                    idade: 30
                    })}
            </p>
        </div>
    )
    
}