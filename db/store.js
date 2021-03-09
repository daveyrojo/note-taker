//readNotes ... 
const fs = require('fs');


const storedNotes = [{
        writeNotes: async() => {
            try {
                const newNote = await writeFileAsync(`db.jason`, JSON.stringify(data));
            } catch (err) {
                console.error(err);
            }
        }
    },
    {
        deleteNotes: async() => {

        }
    }];

module.exports = storedNotes;