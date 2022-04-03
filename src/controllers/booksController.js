import books from '../models/Books.js'

class BooksController{
    
  static getBooks = (req, res) => {    
    books.find()
    .populate('author')
    .exec((err, books) => {
      res.status(200).json(books)
    })
  }

  static insertBooks = (req, res) => {  
    let book = new books(req.body)
    
    book.save((err) =>{
      if(err){
        res.status(500).send({ message: `${err.message} - Falha ao cadastrar livro.`})
      }else{
         res.status(201).send(book.toJSON())
      } 
    })
  }

  static updateBooks = (req, res) => {
    
    let id = req.params.id

    books.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
      if(!err){
        res.status(201).send({ message: 'Livro alterado com sucesso!'})
      }else{
        res.status(500).send({ message: `${err.message} - Falha ao alterar livro.`})
      }
    })
  }

  static getBooksById = (req, res) => {
    
    let id = req.params.id

    books.findById(id)
    .populate('author', 'name') 
    .exec((err, books) =>{
      if(!err){
        res.status(200).send(books)
      }else{
        res.status(400).send({ message: `${err.message} - Falha ao encontrar livro, id não localizado.`})
      }
    })
  }

  static deleteBooks = (req, res) => {
    
    let id = req.params.id

    books.findByIdAndDelete(id, (err) =>{
      if(!err){
        res.status(200).send({ message: 'Livro removido com sucesso'})
      }else{
        res.status(400).send({ message: `${err.message} - Falha ao remover livro`})
      }
    })
  }

  static getBooksByPublishingCompany= (req, res) => {
    const publishing_company = req.query.publishing_company

    livros.find({'publishing_company': publishing_company}, {}, (err, books) => {
      res.status(200).send(books);

    })
  }
}

export default BooksController