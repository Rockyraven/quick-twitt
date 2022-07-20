import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {elon, profile, tanay} from '../../assets'
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
    password: "adarshBalika123",
    email: "adarshbalika@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Learning web Development at @neogCamp`,
    userphoto: profile,
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Mask",
    username: "elon_mask",
    password: "Elon_mask",
    email: "elon@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `I never give up`,
    userphoto: elon,
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanay@123",
    password: "Tanay@123",
    email: "tany23@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `The best view comes after the hardest climb`,
    userphoto: tanay,
  },
];
