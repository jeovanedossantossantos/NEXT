import Link from "next/link"
import Navegador from "../components/Navegador"
export default function Inicio() {
    return (
        <div style={{
           
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            heigth: '100vh',
            
        }}>
            <Navegador texto ="Estiloso" destino='/estiloso'></Navegador>
            <Navegador texto="JSX"  destino='/jsx'></Navegador>
            <Navegador texto="App" destino='/app' cor='crimson'></Navegador>
            <Navegador texto="Navegação #01" destino='/navegacao' cor='crimson'></Navegador>
            <Navegador texto="Navegação #02" destino='/clientes/sp/123' cor='crimson'></Navegador>
            <Navegador texto="Navegação #03" destino='/estado' cor='crimson'></Navegador>
        </div>
        )
    
}