import { Injectable } from '@nestjs/common';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { Response } from 'express';
import { hashPwd } from '../utils/hashPwd';
import { User } from 'src/users/entities/user.entity';
import { v4 as uuid } from 'uuid';
import { JwtPayload } from './strategy/jwt.strategy';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private async createToken(loginTokenId: string): Promise<{
    accessToken: string;
    expiresIn: string | number;
  }> {
    const payload: JwtPayload = { jwtToken: loginTokenId };
    const expiresIn = 60 * 60;
    const accessToken = sign(
      payload,
      'dwadwd2d121d1d2d12dd21d 21d12d21d1221d1d12d12d12d',
      {
        expiresIn,
      },
    );

    return {
      accessToken,
      expiresIn,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;

    do {
      token = uuid();
      userWithThisToken = await User.findOneBy({ logginTokenId: token });
    } while (!!userWithThisToken);

    user.logginTokenId = token;
    await user.save();

    return token;
  }

  async login(req: LoginUserDto, res: Response) {
    try {
      const user = await User.findOne({
        where: {
          username: req.username,
          password: hashPwd(req.password),
        },
      });

      if (!user) {
        return res.json({ error: 'Invalid login data', status: 404 });
      }

      const token = await this.createToken(await this.generateToken(user));

      return res
        .cookie('jwtToken', token.accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
          domain: 'localhost',
        })
        .json({ loginSuccess: true, token: token.accessToken });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async user(user: User, res: Response) {
    try {
      const userRes = await User.findOneBy({ username: user.username });
      if (!userRes) {
        return res.json({ isSuccess: false });
      }
      return res.json(userRes);
    } catch (e) {
      return res.json(e.message);
    }
  }

  async logout(user: User, res: Response) {
    try {
      user.logginTokenId = null;
      await user.save();

      res.clearCookie('jwtToken', {
        secure: false,
        domain: 'localhost',
        httpOnly: false,
      });
      return res.json({ logoutSucces: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}
