import Layout from '../../../components/Layout'
import {useRouter} from 'next/router'

export default function ClientePropCodigo(params) {
    const router = useRouter()
       return (
        <Layout tirulo="Navegacão Dinâmica">
            <span>Código = {router.query.codigo}</span><br></br>
            <span>Filial = {router.query.filia}</span>
        </Layout>
    )
    
}