
const add = require('./add')
const read = require('./read')
const write = require('./write')
const del = require('./del')
const present = require('./present')
const update = require('./update')

//get user input
const data  = process.argv

var note = {}

if (data[2] == 'add') {
    //Build Object
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
        }
    //Get old note value
        var oldNote = read()
    //Add note to note.txt
        add(note, oldNote)
    }  
           if (data[2] == 'read') {
             present(read())
           }

            if (data[2] == "delete") {
                const id = data[3]
                const oldNote = read()
                const del = require('./del')
            //delete an item from note array
                del(id,oldNote);
                console.log(read())
           }
           var note = {}
    
           if (data[2] === 'update') {
            let note = {
                id: data[3],
                title: data[4],
                body: data[5]
            }

            var oldNote = read()
            update(note, oldNote)
            console.log(update);
        
           }