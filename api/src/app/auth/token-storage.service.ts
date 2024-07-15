import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenStorageService {
  private invalidatedTokens: Set<string> = new Set();

  invalidateToken(token: string): void {
    this.invalidatedTokens.add(token);
  }

  isTokenInvalidated(token: string): boolean {
    return this.invalidatedTokens.has(token);
  }

  // Optionally, implement a method to clean up expired tokens
  removeExpiredTokens(): void {
    // Implementation depends on how you store token expiration
  }
}