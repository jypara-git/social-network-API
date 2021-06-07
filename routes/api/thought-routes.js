const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
// const { route } = require('./user-routes');

router 
    .route('/')
    .get(getAllThought)
    

router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .post(createThought);

router 
    .route('/:thoughtId')
    .delete(removeThought);

router
    .route('/reactions/:thoughtId')
    .put(addReaction);

router 
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;