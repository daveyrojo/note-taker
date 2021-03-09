//readNotes ... 
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const storedNotes = [{
        getNotes: async() => {
            try {
                const notes = await readFile(`db.json`);
                return JSON.parse(notes);
            } catch(err) {
                console.error(err);
            }
        }
    },
    {
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