import { GetServerSideProps, NextPage } from 'next'
import { ReactNode } from 'react'
import { Language, Translation } from '../language/types'
import { CommonRoutes } from './routes'

export type InitialPageProps = {
  lang: Language
  route: CommonRoutes
  children?: ReactNode
} & Record<string, any>

export type GetSSRBuilder<Props extends Record<string, any>> =
  (initialProps: InitialPageProps) => GetServerSideProps<Props & InitialPageProps>

export type PageProps<T = InitialPageProps> = T extends InitialPageProps ? InitialPageProps : T & InitialPageProps

export type AppRoute = {
  Component: NextPage<PageProps>
  ssrFun?: GetSSRBuilder<any>
  path: Translation<string>
}

export type AppRoutes = Record<CommonRoutes, AppRoute>
