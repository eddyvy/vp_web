import { BuildCommonPage } from '../src/common/CommonPage'

const page = BuildCommonPage('LEGAL_ADVICE', 'es')

export const getStaticProps = page.getStaticProps
export default page.NextPage
