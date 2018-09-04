const express=require('express');
const router=express.Router();



//things
router.get("/", (req, res) => {
  res.send({
    "Things to do": { 1: "eat", 2: "live", 3: "pray", 4: "worship" }
  });
});
//getting specific thing
router.get("/:year/:month", (req, res) => {
  //res.send(req.params);
  //
  res.send(req.query);
});

//things list
const things = [
    { id: 1, name: "Drinking" },
    { id: 2, name: "Walking" },
    { id: 3, name: "Eating" },
    { id: 4, name: "Playing" },
    { id: 5, name: "Praying" },
    { id: 6, name: "Reading" },
    { id: 7, name: "Sleeping" },
];

//fetching a thing
router.get('/:id', (req, res) => {
    let thing = things.find(c => c.id === parseInt(req.params.id));
    if (!thing) {
        res.status(404).send('You cant do anything yet');
    }
    res.send(thing);
});

//posting a thing
router.post('/', (req, res) => {
    const thing = {
        id: things.length + 1,
        name: req.body.name
    };
    things.push(thing);
    res.send(thing);
});


router.get('/', (req, res) => {
    res.send(things);
});

module.exports = router;