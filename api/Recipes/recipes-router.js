const express = require('express');
const router = express.Router()
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next)=>{
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})



// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "Something inside the recipes router went wrong",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;