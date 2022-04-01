import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
    console.log(`Server running on http://localhost:${PORT} 🚀`);
  } catch (err) {
    console.error(err);
  }
}
bootstrap();
