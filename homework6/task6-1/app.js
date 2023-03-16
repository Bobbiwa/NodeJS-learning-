import express from 'express';
import bodyParser from 'body-parser';
import { expressjwt } from 'express-jwt';
import cors from 'cors';
import userRouter from './src/routes/user.router';
import groupRouter from './src/routes/group.router';
import swaggerInstall from './utils/swagger';

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
    secret: 'hello',
    algorithms: ['HS256'],
  }).unless({
    path: ['/user/login'],
  })
);

//handle error的中间件
app.use((err, req, res, next) => {
  if (err.code === 'credentials_bad_format') {
    res.status(401).json({ status: 401, message: err.code });
  }
  if (err.code === 'invalid_token') {
    res.status(403).json({ status: 403, message: err.code });
  }
});

// 配置cors
app.use(cors())

//配置路由
app.use('/user', userRouter);
app.use('/group', groupRouter);

app.listen(3000, () => {
  console.log(
    'port is 3000\nPlease visit http://127.0.0.1:3000/swagger for API document'
  );
});
