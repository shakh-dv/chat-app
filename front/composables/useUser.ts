import type { User } from '~/types/user';

export function useUser(): Promise<User> {
    return useService('users', {auth: true}).get<User>('me').exec();
}
