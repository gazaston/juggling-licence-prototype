const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-trick', function (req, res) {

  let canJuggle = req.session.data['how-many-balls']

  if (canJuggle === 'None - I cannot juggle') {
    res.redirect('/cant-juggle')
  } else {
    res.redirect('/juggling-trick')
  }
})

module.exports = router
