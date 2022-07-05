import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('ABOUT', 'en')

export const getStaticProps = page.getStaticProps
export default page.NextPage
