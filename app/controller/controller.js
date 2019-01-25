import * as model from '../db/db';
import jwt from 'jsonwebtoken';
import verify from '../verify/verify';

export const postUser = (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password,
        about: req.body.about,
    };

    model.userDetails.push(user);
    res.status(200).send(user);
}

export const getUser = (req, res) => {
    jwt.verify(req.token,'mysecretkey', (err, data) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message: 'post created',
                my: model.userDetails
            })
        }
    })
    // res.status(200).send(model.userDetails);
}

export const login = (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password,
      };
    const username = model.userDetails.filter(c => c.password === user.password);
    if(username.length == 0){
        res.status(400).send('no user by that name');
    }else {
        jwt.sign({user:user}, 'mysecretkey', (err, token) => {
            res.json({
                token : token,
                message: 'you successfully logged in'
            });
        });
        
    } 
};