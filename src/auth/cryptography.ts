import crypto = require('crypto');


export function encrypt(text: any): string {

  const algorithm = 'aes-256-ctr';
  const password = 'd6F3Efeq';



  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}

export function decrypt(text: any): string {

  const algorithm = 'aes-256-ctr';
  const password = 'd6F3Efeq';

  var decipher = crypto.createDecipher(algorithm, password)
  var dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8');
  return dec;
}

