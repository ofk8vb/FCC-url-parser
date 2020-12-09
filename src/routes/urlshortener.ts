import express,{Request,Response} from 'express';
import {body,validationResult} from 'express-validator';
import db from '../mockdb/mockdb';


const router = express.Router();

router.post('/api/shorturl/new'
,[
    body('url').isURL()
],
(req:Request,res:Response)=>{
    const valResult:any = validationResult(req);
    const hasErrors = !valResult.isEmpty();
    if(hasErrors){
        res.json({error:'invalid url'});
    }
    let shorturl = db.length+1;
    db.push(req.body.url);
    res.json({original_url:req.body.url,short_url: shorturl});
})

export {router as UrlShortenerRouter};