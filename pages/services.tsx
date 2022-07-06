import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('SERVICES', 'en')

export const getStaticProps = page.getStaticProps
export default page.NextPage
