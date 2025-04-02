const express = require("express");
const app = express();

app.use(express.json());

const user = require('./routes/user.routes');
const userProduct = require('./routes/user.products.routes')
const auth = require('./routes/auth.routes')

app.use('/api/auth', auth)  //auth --> κληρρωνομει οτι εχουμε στο αρχειο μας ./routes/auth.routes οπου κανουμε module.exports = router;
app.use('/api/users', user)
app.use('/api/user-product', userProduct)


module.exports = app