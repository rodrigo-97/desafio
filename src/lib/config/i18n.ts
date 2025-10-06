import pt_br from "@/lib/i18n/pt-br.json";
import { I18n } from "i18n-js";

const i18n = new I18n({
  pt_br,
});

i18n.defaultLocale = "pt_br";
i18n.locale = "pt_br";

export const t = i18n.t.bind(i18n);
