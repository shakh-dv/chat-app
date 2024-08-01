import {User} from '@prisma/client';

export type GetAllUsersDTOResult = Omit<User, 'password'>[];
