require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = require('./models');

// Posts Router
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

// Comments Router
const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);

// Users Router
const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

// Likes Router
const likeRouter = require('./routes/Likes');
app.use('/likes', likeRouter);


db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server running on port 3001");
    });
})
.catch((err) => {
    console.log(err);
});
