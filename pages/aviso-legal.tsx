import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('DISCLAIMER', 'es')

export const getStaticProps = page.getStaticProps
export default page.NextPage
