import React, { createContext, useState } from 'react';
import { IUser } from '../types/UserInterface';

interface IUserContext {
  user?: IUser;
  goal: number;
  setGoal: React.Dispatch<React.SetStateAction<number>>;
}

const GOAL = 2000;
const USER = {
  name: "Bruno Henrique da Silva Mosko",
  photo: "https://media.licdn.com/dms/image/C5103AQFGrGw9gVmiUw/profile-displayphoto-shrink_800_800/0/1517448507429?e=1679529600&v=beta&t=z8KDd-V52163AGkvCzdMZYCTo8c290ZYvjBLR4cninw",
}

export const UserContext = createContext<IUserContext>({
  goal: GOAL,
  setGoal: () => {},
  user: USER,
});

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProviderProps> = ({children}) => {
  const [user] = useState<IUser>(USER);
  const [goal, setGoal] = useState<number>(GOAL);
  
  return (
    <UserContext.Provider value={{goal, setGoal, user}}>
      {children}
    </UserContext.Provider>
  );
};