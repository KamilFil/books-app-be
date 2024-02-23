import * as crypto from "crypto";

export const hashPwd = (pass: string): string => {

    const hash = crypto.createHmac('sha512', '21e12d122x12x21c2x213 x32132213x213x123x213x')
    hash.update(pass)

    return hash.digest('hex');
}