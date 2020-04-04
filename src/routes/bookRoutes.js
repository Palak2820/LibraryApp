const express = require('express');

const bookRouter = express.Router();

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

bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'bookListView',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        title: 'Library',
        books
      }
    );
  });

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render(
      'bookView',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        title: 'Library',
        book: books[id],
      }
    );
    res.send('hello single books');
  });

module.exports = bookRouter;
