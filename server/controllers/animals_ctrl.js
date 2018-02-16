module.exports = {
    get_animals: (req, res) => {
        const db = req.app.get('db');

        db.get_animals().then(response => {
            console.log('ctrl', response);
            res.status(200).send(response);
        })
    },
    get_details: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_details([id]).then(response => {
            res.status(200).send(response);
        })
    },
    create_animal: (req, res) => {
        const db = req.app.get('db');
        const {name, url, weight} = req.body;

        db.create_animal([name, url, weight]).then(resp => {
            res.status(200).send(resp);
        })
    }
}