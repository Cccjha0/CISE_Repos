import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // 加载环境变量

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.FRONTEND, credentials: true }); // 允许前端访问
  const port = process.env.PORT || 5000;
  await app.listen(port, () => console.log(`服务器运行在端口 ${port}`));
}
bootstrap();