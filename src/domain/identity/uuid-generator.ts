import crypto from 'crypto';

export default class UuidGenerator {
  static create() {
    return crypto.randomUUID();
  }
}
