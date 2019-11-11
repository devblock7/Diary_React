const router = require('express').Router();
const DiaryPost = require('../models/DiaryPost');

router.route('/').get((req, res) => {
  DiaryPost.find()
    .then(diaryposts => res.json(diaryposts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newDiaryPost = new DiaryPost({
    description,
    date,
  });

  newDiaryPost.save()
  .then(() => res.json('DiaryPost added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  DiaryPost.findById(req.params.id)
    .then(diarypost => res.json(diarypost))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  DiaryPost.findByIdAndDelete(req.params.id)
    .then(() => res.json('DiaryPost deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  DiaryPost.findById(req.params.id)
    .then(diarypost => {
      diarypost.description = req.body.description;
      diarypost.date = Date.parse(req.body.date);

      diarypost.save()
        .then(() => res.json('DiaryPost updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
