import app from './src/app'
import mongoose from './src/db';
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
    mongoose.connect('mongodb://localhost:27017/todoapp', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("Connected to the database")
    }).catch((e: any) => {
        console.log("Error connecting to the DB")
        console.log(e.message)
    })
})