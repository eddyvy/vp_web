import { GetStaticProps, NextPage } from 'next'
import { PageProps } from './types'
import { CommonRoutes, allRoutes } from './routes'
import { Language } from '../language/types'

export const BuildCommonPage = (route: CommonRoutes, lang: Language) => {
  const { Component, ssrFun } = allRoutes[route]

  const getStaticProps: GetStaticProps<PageProps> = () => ({
    props: {
      lang,
      route,
    },
  })

  const NextPage: NextPage<PageProps> = Component

  return (ssrFun)
    ? {
      NextPage,
      getServerSideProps: ssrFun({ lang, route }),
    }
    : {
      NextPage,
      getStaticProps,
    }
}
