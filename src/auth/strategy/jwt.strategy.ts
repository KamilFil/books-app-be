import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

export interface JwtPayload {
  jwtToken: string;
}

function cookieExtrator(req: any): null | string {
  return req && req.cookies ? req.cookies?.jwtToken ?? null : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtrator,
      secretOrKey: 'dwadwd2d121d1d2d12dd21d 21d12d21d1221d1d12d12d12d',
    });
  }

  async validate(payload: JwtPayload, done: (err, user) => void) {
    if (!payload && !payload.jwtToken) {
      return done(new UnauthorizedException(), false);
    }

    const user = User.findOne({ where: { logginTokenId: payload.jwtToken } });

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}
