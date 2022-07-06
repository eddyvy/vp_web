import type { FC } from 'react'
import Image from 'next/image'
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'
import Select from 'react-select'
import { Language } from '../../language/types'
import { selectorTheme } from './selectorTheme'

type LanguageSelectorOption = { value: Language, label: JSX.Element }

type Props = {
  defaultLang: Language
  onLanguageSelected: (lang: Language) => void
} & StateManagerProps

export const LanguageSelector: FC<Props> = ({ defaultLang, onLanguageSelected, ...props }) => {
  const flagHeight = 30
  const flagWidth = 30

  const langSelectorOptions: LanguageSelectorOption[] = [
    {
      value: 'en',
      label: <Image src="/icons/gb.svg" alt={'en'} height={flagHeight} width={flagWidth} />,
    },
    {
      value: 'es',
      label: <Image src="/icons/es.svg" alt={'es'} height={flagHeight} width={flagWidth} />,
    },
    // {
    //   value: 'de',
    //   label: <Image src="/icons/de.svg" alt={'de'} height={flagHeight} width={flagWidth} />,
    // },
  ]

  const defaultOption = langSelectorOptions.find((opt) => opt.value === defaultLang)

  const onLangChange = (optSelected: LanguageSelectorOption) => {
    onLanguageSelected(optSelected.value)
  }

  return (
    <Select
      id={'languageSelector'}
      instanceId={'languageSelector'}
      options={langSelectorOptions}
      defaultValue={defaultOption}
      onChange={onLangChange as (v: unknown) => void}
      components={{ DropdownIndicator: null }}
      isSearchable={false}
      theme={selectorTheme}
      {...props}
    />
  )
}
