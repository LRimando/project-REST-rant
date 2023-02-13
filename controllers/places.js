const router = require('express').Router()
const db = require('../models')

const router = require('express').Router()

router.get('/', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then((places) => {
        console.log(place.comments)
        res.render('places/show', {places})
    })
    .catch(err) => {
        console.log('err', err)
        res.render('error404')
    })
  res.send('GET /places stub')
})

router.post('/:id/comment', (req, res) => {
    console.log (req.body)
    db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
        place.comments.push(comment.id)
        place.save()
        .then(() => {
          res.redirect(`/places/${req.params.id}`)
        })
      })
      .catch(err => {
        res.render('error404')
      })
      // TODO:Create comment 
    })
    .catch (err => {
      res.render('error404')
    })
    if (req.body.rant) {
      req.body.rant = true 
    }
    else {
      req.body.rant = false
    }
    res.send('GET/places/:id/comment stub')
    .then() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError')
        let message = 'validation Error:'
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        // TODO: Find all validation errors
        res.render('places/new', {message})
    }
    else {
      res.render('error404')
       }
    })
  res.send('POST /places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
