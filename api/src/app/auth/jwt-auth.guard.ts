import { TokenStorageService } from '@/app/auth/token-storage.service';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private tokenStorageService: TokenStorageService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['access_token'];
    
    if (err || !user || this.tokenStorageService.isTokenInvalidated(token)) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}