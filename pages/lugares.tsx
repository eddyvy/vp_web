import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('LOCATIONS', 'es')

export const getStaticProps = page.getStaticProps
export default page.NextPage
