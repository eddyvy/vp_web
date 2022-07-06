import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('SERVICES', 'es')

export const getStaticProps = page.getStaticProps
export default page.NextPage
