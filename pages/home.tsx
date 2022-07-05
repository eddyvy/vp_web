import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('HOME', 'en')

export const getStaticProps = page.getStaticProps
export default page.NextPage
