const express = require('express')
const app = express()
// const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bycrypt = require('bcryptjs')
const saltRounds = 10
// const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const apiRouter = require('./src/routes/rajaongkir.api')

app.use(express.json())
app.use(cors(
    {
        origin: ['http://localhost:3000'],
        methods: ['GET','POST','PUT'],
        credentials: true
    }
))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    key: 'userId',
    secret: 'evania',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24,
    }
}))
app.use('/ongkir', apiRouter)

app.get("/", (req, res) => {
    res.json({message : 'evania-api'})
})

//Import order routes
const orderRoutes = require('./src/routes/order_pickup.route')
//Create order routes
app.use('/api/v1/order-pickup', orderRoutes)

const database = require('./config/db.config')

app.post('/register', (req,res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password

    bycrypt.hash(password,saltRounds,(err, hash) => {
        if(err){
            console.log(err)
        }
        database.query(
            "INSERT INTO user (name, email, phone, password) VALUES (?,?,?,?)",
            [name, email, phone, hash],
            (err, result) => {
                console.log(err)
        }
        )
    })
    
})

app.post('/registerAdmin', (req,res) => {
    const email = req.body.email
    const password = req.body.password

    bycrypt.hash(password,saltRounds,(err, hash) => {
        if(err){
            console.log(err)
        }
        database.query(
            "INSERT INTO admin (email, password) VALUES (?,?)",
            [email, hash],
            (err, result) => {
                console.log(err)
        }
        )
    })
    
})


app.get('/login', (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

app.get('/loginAdmin', (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
        console.log(req.session.user)
    }else{
        res.send({loggedIn: false})
    }
})

// Middleware user
const verifyJWTUser = (req, res, next) => {
    const token = req.headers['x-access-token']

    if(!token){
        res.send('we need a token')
    }else{
        jwt.verify(token, 'jwtSecret', (err,decoded) => {
            if(err) {
                res.json({ auth: false, message : ' You failed to authenticate'})
            }else{
                req.userId = decoded.id
                next()
            }
        })
    }
}
// Middleware admin
const verifyJWTAdmin = (req, res, next) => {
    const token = req.headers['x-access-token']

    if(!token){
        res.send('we need a token')
    }else{
        jwt.verify(token, 'jwtSecret', (err,decoded) => {
            if(err) {
                res.json({ auth: false, message : ' You failed to authenticate'})
            }else{
                req.userId = decoded.id
                next()
            }
        })
    }
}

app.get('/isUserAuth', verifyJWTUser, (req, res) => {
    res.send('You are authenticated!')
})

app.get('/isAdminAuth', verifyJWTAdmin, (req, res) => {
    res.send('You are authenticated as Admin!')
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    database.query(
        'SELECT * FROM user WHERE email = ?;',
        email,
        (err, result) => {
            if(err){
                res.send({err: err})
            }
            if (result.length > 0) {
                bycrypt.compare(password, result[0].password, (error, response) =>{
                    if(response){
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 3000,
                        })
                        req.session.user = result

                        res.json({auth: true, token: token, result: result})
                    }else {
                        res.send({auth: false, message : 'Wrong combination !'})
                    }
                })
            } else {
                res.send({auth: false, message: 'user dont exist' })
            }
        }
    )
})

app.post('/loginAdmin', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    database.query(
        'SELECT * FROM admin WHERE email = ?;',
        email,
        (err, result) => {
            if(err){
                res.send({err: err})
            }
            if (result.length > 0) {
                bycrypt.compare(password, result[0].password, (error, response) =>{
                    if(response){
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result

                        res.json({auth: true, token: token, result: result})
                    }else {
                        res.send({auth: false, message : 'Wrong combination !'})
                    }
                })
            } else {
                res.send({auth: false, message: 'user dont exist' })
            }
        }
    )
})

// Environment
app.listen(3001, () => {
    console.log('Running on port 3001')
})