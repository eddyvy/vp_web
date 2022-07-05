export type Translation<T> = Record<Language, T>

// Available languages at this App
export type Language = Extract<AllPossibleLanguages,
  'es' |
  'en'
>

// ISO 639-1 table
export type AllPossibleLanguages =
  'af' |
  'am' |
  'ar' |
  'az' |
  'be' |
  'bg' |
  'bn' |
  'bs' |
  'ca' |
  'cs' |
  'cy' |
  'da' |
  'de' |
  'dv' |
  'en' |
  'es' |
  'et' |
  'eu' |
  'fa' |
  'fi' |
  'fr' |
  'gl' |
  'el' |
  'ha' |
  'he' |
  'hi' |
  'hr' |
  'hu' |
  'hy' |
  'is' |
  'it' |
  'id' |
  'ja' |
  'ka' |
  'kk' |
  'km' |
  'ko' |
  'ku' |
  'ky' |
  'lt' |
  'lv' |
  'mk' |
  'ml' |
  'mn' |
  'ms' |
  'nb' |
  'nl' |
  'nn' |
  'no' |
  'pl' |
  'ps' |
  'pt' |
  'ro' |
  'ru' |
  'sd' |
  'sk' |
  'sl' |
  'so' |
  'sq' |
  'sr' |
  'sv' |
  'sw' |
  'ta' |
  'tg' |
  'th' |
  'tr' |
  'tt' |
  'ug' |
  'uk' |
  'ur' |
  'uz' |
  'zh' |
  'vi'
