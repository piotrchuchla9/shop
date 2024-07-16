import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { loginUser, LoginCredentials, LoginResponse } from './auth';

export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginCredentials, unknown> => {
  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: loginUser,
  });
};