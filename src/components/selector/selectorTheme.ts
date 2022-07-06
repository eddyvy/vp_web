import { ThemeConfig } from 'react-select'

export const selectorTheme: ThemeConfig = (oldTheme) => ({
  ...oldTheme,
  colors: {
    ...oldTheme.colors,
    primary: '#f2cb2c',
    primary75: '#f2cb2c',
    primary50: '#f2cb2c',
    primary25: '#f2cb2c',
    neutral0: '#f5f8fa',
    neutral5: '#f5f8fa',
    neutral10: '#f5f8fa',
    neutral20: '#f5f8fa',
    neutral30: '#f5f8fa',
    neutral40: '#f5f8fa',
    neutral50: '#f3f3f3',
    neutral60: '#f3f3f3',
    neutral70: '#e3e3e3',
    neutral80: '#f3f3f3',
    neutral90: '#f5f5f5',
  },
})

const oldselectorTheme: ThemeConfig = (oldTheme) => ({
  ...oldTheme,
  colors: {
    ...oldTheme.colors,
    primary: '#9D8860',
    primary75: '#7e6e4d',
    primary50: '#b69961',
    primary25: '#ecc67e',
    neutral0: '#131313',
    neutral5: '#101010',
    neutral10: '#101010',
    neutral20: '#101010',
    neutral30: '#2f2f2f',
    neutral40: '#2f2f2f',
    neutral50: '#f3f3f3',
    neutral60: '#f3f3f3',
    neutral70: '#e3e3e3',
    neutral80: '#f3f3f3',
    neutral90: '#f5f5f5',
  },
})
