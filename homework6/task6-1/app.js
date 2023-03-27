import express from 'express';
import bodyParser from 'body-parser';
import { expressjwt } from 'express-jwt';
import cors from 'cors';
import userRouter from './src/routes/user.router';
import groupRouter from './src/routes/group.router';
import swaggerInstall from './utils/swagger';
import * as dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;

const app = express();

swaggerInstall(app);

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//配置art-template
app.engine('html', require('express-art-template'));

//token权限认证
app.use(
  expressjwt({
    secret: process.env.SECRET,
    algorithms: ['HS256'],
  }).unless({
    path: ['/user/login'],
  })
);

//handle error的中间件
// app.use((err, req, res, next) => {
//   console.log(err.code);
//   if (err.code === 'credentials_required') {
//     res.status(401).json({ status: 401, message: err.code });
//   }
//   if (err.code === 'invalid_token') {
//     res.status(403).json({ status: 403, message: err.code });
//   }
// });

// 配置cors
app.use(cors());

//配置路由
app.use('/user', userRouter);
app.use('/group', groupRouter);

app.listen(PORT, () => {
  console.log(
    `port is ${PORT}\nPlease visit http://127.0.0.1:3000/swagger for API document`
  );
});

export default app;
