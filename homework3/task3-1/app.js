import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './src/routes/user.router';
import swaggerInstall from './utils/swagger';

const app = express();

swaggerInstall(app);

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//配置art-template
app.engine('html', require('express-art-template'));

//配置路由
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log(
    'port is 3000\nPlease visit http://127.0.0.1:3000/swagger for API document'
  );
});
