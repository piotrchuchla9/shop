import { Injectable } from '@nestjs/common';

interface Token {
  value: string;
  expiration: number | null;
}

@Injectable()
export class TokenStorageService {
  private invalidatedTokens: Set<Token> = new Set();

  invalidateToken(token: string, expiresInSeconds?: number): void {
    const expiration = expiresInSeconds ? Date.now() + expiresInSeconds * 1000 : null;
    this.invalidatedTokens.add({ value: token, expiration });
  }

  isTokenInvalidated(token: string): boolean {
    this.removeExpiredTokens();
    return Array.from(this.invalidatedTokens).some(t => t.value === token);
  }

  removeExpiredTokens(): void {
    const now = Date.now();
    this.invalidatedTokens.forEach(token => {
      if (token.expiration && token.expiration <= now) {
        this.invalidatedTokens.delete(token);
      }
    });
  }
}