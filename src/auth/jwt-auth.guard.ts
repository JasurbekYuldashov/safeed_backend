import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}