const router = require('express').Router()

const Solver = require('../entity/solver')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello World !'
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  let solver = new Solver()

  solver.addFact(req.body.sideNumber+"_COTES")
  solver.addFact(req.body.numberParallelSide+"_COTES_PARALLELES")
  solver.addFact(req.body.numberSideSameLength+"_COTES_EGAUX")

  res.render('result', {
    title: 'Hello World !',
    result: solver.solve()
  })
})

module.exports = router
