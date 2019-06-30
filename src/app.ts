import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
const app = express()


import { auth } from './routes'

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));

app.post('/signin', auth.signin)
app.post('/signup', auth.signup)

app.listen(3000, console.log('Server on Port 3000'))