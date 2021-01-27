import connect from '../../utils/database' 

export default async (req,res) => {



    if ( req.method === "POST" ){
        const {name, email, username} = req.body
        
        if(!name || !email || !username){
            res.status(400).json({error: 'Missing Body Parameter'})
            return
        }
        
        const { db } = await connect()
 
        const response = await db.collection('users').insertOne({
            name, email, username
        })

        res.status(200).json(response.ops[0])

    } else {
        
        res.status(400).json({error: name})
    }

    

    
}