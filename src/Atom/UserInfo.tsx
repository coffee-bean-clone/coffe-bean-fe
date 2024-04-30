import { atom } from 'jotai';
import { UserDataType } from '../util/UserDataType';

export const UserInfo = atom<UserDataType | null>(null);
