import authors from '../models/Author.js'

class AuthorsController{
    
  static getAuthors = (req, res) => {
        
      authors.find((err,authors) => {
          res.status(200).json(authors)
        })
  }

  static insertAuthors = (req, res) => {
    
    let author = new authors(req.body)
    
    author.save((err) =>{
      if(err){
        res.status(500).send({ message: `${err.message} - Falha ao cadastrar autor.`})
      }else{
         res.status(201).send(author.toJSON())
      } 
    })
  }

  static updateAuthors = (req, res) => {
    
    let id = req.params.id

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
      if(!err){
        res.status(201).send({ message: 'Autor alterado com sucesso!'})
      }else{
        res.status(500).send({ message: `${err.message} - Falha ao alterar Autor.`})
      }
    })
  }

  static getAuthorsById = (req, res) => {
    
    let id = req.params.id

    authors.findById(id, (err, authors) =>{
      if(!err){
        res.status(200).send(authors)
      }else{
        res.status(400).send({ message: `${err.message} - Falha ao encontrar autor, id não localizado.`})
      }
    })
  }

  static deleteAuthors = (req, res) => {
    
    let id = req.params.id

    authors.findByIdAndDelete(id, (err) =>{
      if(!err){
        res.status(200).send({ message: 'Autor removido com sucesso'})
      }else{
        res.status(400).send({ message: `${err.message} - Falha ao remover autor`})
      }
    })
  }
}

export default AuthorsController