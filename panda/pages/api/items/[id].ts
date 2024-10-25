import {NextApiRequest, NextApiResponse} from 'next';
let items: any = [];

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {id} = req.query;
    const itemIndex = items.findIndex((item:any)=>item.id===Number(id));
    if(itemIndex===-1)return res.status(404).json({message:"Item not found"});
    if(req.method ==='GET'){
        return res.status(200).json(items[itemIndex]);
    }else if(req.method==='PUT'){
        items[itemIndex]={...items[itemIndex],...req.body};
        return res.status(200).json(items[itemIndex]);
    }else if(req.method ==='DELETE'){
        const removedItem =items.splice(itemIndex,1);
        return res.status(200).json(removedItem);
    }
    res.setHeader('Allow',['GET','PUT','DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}