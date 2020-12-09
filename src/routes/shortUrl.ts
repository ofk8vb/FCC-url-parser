import express,{Request,Response} from 'express';
import db from '../mockdb/mockdb';

const router = express.Router();

router.get('/api/shorturl/:shortUrl',(req,res)=>{
    let shortUrl =req.params.shortUrl;
    let url:string = db[parseInt(shortUrl)-1];
    if(!url){
        res.send('Not Found');
    }
    res.redirect(url!);
})

export {router as shortUrlRouter};