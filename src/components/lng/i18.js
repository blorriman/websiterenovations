import i18next from "i18next"
import moment from "moment"
import en from "./i18en.json"
import fr from "./i18fr.json"

i18next.init({
  fallbackLng: "en",
  interpolation: {
    // React already does escaping
    escapeValue: false,
    format: function(value, format, lng) {
      if (format === "uppercase") return value.toUpperCase()
      if (value instanceof Date) return moment(value).format(format)
      return value
    },
  },
  lng: "en", // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources: {
    en: en,
    fr: fr,
  },
})

export default i18next
