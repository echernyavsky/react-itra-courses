import { Select, SelectItem } from "@nextui-org/react";
import locales from "../shared/localization/locales.ts";
import { useContext } from "react";
import GlobalContext, {
  GlobalContextType,
} from "../shared/contexts/GlobalContext.tsx";
import localStorageKeys from "../shared/constants/localStorageKeys.ts";

const localeOptions = [
  {
    id: locales.EN,
    text: "English",
  },
  {
    id: locales.ES,
    text: "Espanol",
  },
  {
    id: locales.PL,
    text: "Polska",
  },
  {
    id: locales.RU,
    text: "Русский",
  },
  {
    id: locales.BY,
    text: "Беларуская",
  },
];

export default function LocalePicker() {
  const { locale, setLocale } = useContext(GlobalContext) as GlobalContextType;

  const onSelectionChange = (items: any) => {
    setLocale(items.anchorKey);
    localStorage.setItem(localStorageKeys.LOCALE, items.anchorKey);
  };

  return (
    <Select
      label="Select locale"
      className="max-w-xs"
      onSelectionChange={onSelectionChange}
      value={locale}
    >
      {localeOptions.map((it) => (
        <SelectItem key={it.id} value={it.id}>
          {it.text}
        </SelectItem>
      ))}
    </Select>
  );
}
