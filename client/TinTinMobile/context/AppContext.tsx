
import { IAccount, IGetAccount } from '@/types/backend';
import React, { createContext, useContext, useState } from 'react';



interface AppContextType {
    theme: string,
    setTheme: (theme: string) => void,
    user: IGetAccount | null,
    setUser: (user: IGetAccount | null) => void,
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');
  const [user, setUser] = useState<IGetAccount | null>(null);

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
