export default function handler(req, res){


    if(req.method === "GET"){
        handlerGet(req, res)
    }else{
        res.status(405).send()
    }
    
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33
    })

    
}