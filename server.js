// Set up express
const express = require('express')
const app = express()

// Hashing and salting passwords
const bcrypt = require('bcrypt')

// Passport for authentication
const passport = require('passport')

// Allows us to use PUT and DELETE methods
const methodOverride = require('method-override');


// Display flash messages
const flash = require('express-flash')

// Allows us to store data between requests
const session = require('express-session')


// Set up passport
const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

// Users data
const users = []

// Set up view engine
app.set('view-engine', 'pug')

// Parse urlencoded data
app.use(express.urlencoded({ extended: false }))

// Set up flash messages
app.use(flash())

// Set up session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Set up passport
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'));

// Home page
app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.pug', { name: req.user.name })
})

// Login page
app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.pug')
})

// Login
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

// Register page
app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.pug')
})

// Register
app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        // Add the user to the users array
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        // Redirect to the login page
        res.redirect('/login')
    } catch {
        // If there's an error, redirect back to the register page
        res.redirect('/register')
    }
    console.log(req.body)
})

// Logout
app.delete('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err) }

        // Redirect to the login page
        res.redirect('/login')
    })
})

// Check if the user is authenticated
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    // If not authenticated, redirect to the login page
    res.redirect('/login')
}

// Check if the user is not authenticated
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // If authenticated, redirect to the home page
        return res.redirect('/')
    }
    // This function is a middleware that checks if a user is authenticated before allowing them to access a route.
    // If the user is authenticated, it calls the next middleware in the chain.
    // If the user is not authenticated, it redirects them to the login page.
    next()
}
// Start the server
app.listen(3000);