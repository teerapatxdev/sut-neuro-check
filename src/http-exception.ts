import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = 400;
    try {
      status = exception.getStatus();
    } catch (error) {}
    response.status(status).json({
      status: status,
      message: exception.message,
    });
  }
}
