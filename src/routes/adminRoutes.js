const express = require('express');
const {MongoClient} = require('mongodb');
const debug =require('debug')('app:adminRoutes');

const adminRouter = express.Router();
const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Leo Tolstoy',
    read: false

  },
  {
    title: 'Les Miserable',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'The Time machine',
    genre: 'Science Fiction',
    author: 'Wells',
    read: false
  },
  {
    title: 'A journey into the centre of the earth',
    genre: 'science Fiction',
    author: 'henry Kuttner',
    read: false
  },
  {
    title: 'The wind in willows',
    genre: 'fantasy',
    author: 'Grahame',
    read: false
  }


];
function router(nav){
 adminRouter.route('/')
  .get((req,res)=>{
    const url ='mongodb://localhost:27017';
    const dbName = 'LibraryApp';
  (async function mongo(){
    let client;
     try{
     client = await MongoClient.connect(url);
     debug('connected to server');
     const db = client.db(dbName);

    const response = await db.collection ('books').insertMany(books);    
    res.json(response);
  }
     catch(err){
     debug(err.stack);
     }
  client.close();
  }());

  });
  return adminRouter;
}

module.exports =router;