import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {profile} from '../../assets'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Rocky",
    lastName: "Kumar",
    username: "rockyraven#5213",
    userphoto: profile,
    password: "adarshBalika123",
    email: "adarshbalika@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Learning web Development at @neogCamp`
  },
];
