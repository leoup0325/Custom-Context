import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const STORED_KEY = "song";

interface SettingsContextValueInterface {
  index: number;
  currentSong?: string | null;
}

interface SettingsContextInterface {
  value: SettingsContextValueInterface | null;
  updateValue: (index: number) => void;
}

const SettingsContext = React.createContext<SettingsContextInterface | null>(
  null
);

export function SettingsContextProvider(props: PropsWithChildren<{}>) {
  const [value, setValue] = useState<SettingsContextValueInterface | null>(
    () => {
      const storedValue = localStorage.getItem(STORED_KEY);
      try {
        return JSON.parse(storedValue || "") as SettingsContextValueInterface;
      } catch (e) {
        return null;
      }
    }
  );

  const updateValue = (index: number) => {
    setValue({
      ...value,
      index,
    });
  };

  useEffect(() => {
    if (value) {
      localStorage.setItem(STORED_KEY, JSON.stringify(value));
    }
  }, [value]);

  return <SettingsContext.Provider value={{ value, updateValue }} {...props} />;
}

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettingsContext must be inside a SettingsContextProvider with a value"
    );
  }

  return context;
};
