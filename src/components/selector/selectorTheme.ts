import { ThemeConfig } from 'react-select'

export const selectorTheme: ThemeConfig = (oldTheme) => ({
  ...oldTheme,
  colors: {
    ...oldTheme.colors,
    primary: '#f2bf08',
    primary75: '#f5d151',
    primary50: '#f5d151',
    primary25: '#f5d151',
    neutral0: '#f5f8fa',
    neutral5: '#f5f8fa',
    neutral10: '#f5f8fa',
    neutral20: '#f5f8fa',
    neutral30: '#f5f8fa',
    neutral40: '#2f2f2f',
    neutral50: '#2f2f2f',
    neutral60: '#101010',
    neutral70: '#101010',
    neutral80: '#101010',
    neutral90: '#131313',
  },
})
