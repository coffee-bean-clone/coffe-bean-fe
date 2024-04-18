import { atom } from 'jotai';
import { UserDataType } from '../type/UserDataType';

export const UserInfo = atom<UserDataType | null>(null);
