import { FC } from 'react'
import Head from 'next/head'
import { Button, Paper, TextField } from '@mui/material'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
import { contactContent } from '../content/contact'
import styles from './Contact.module.css'

export const Contact: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = contactContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
      </Head>
      <div className={styles.contactContainer}>
        <h1>{content.title}</h1>
        <Paper className={styles.contactFormContainer}>
          <TextField
            id="outlined"
            label={content.name}
            variant="standard"
            className={styles.contactFormInput}
          />
          <TextField
            id="outlined"
            label={content.email}
            variant="standard"
            className={styles.contactFormInput}
          />
          <TextField
            id="outlined"
            label={content.message}
            variant="outlined"
            multiline
            rows={5}
            className={styles.contactFormInput}
          />
          <Button
            variant="contained"
            className={styles.contactFormButton}
          >
            {content.submitButton}
          </Button>
        </Paper>
      </div>
    </PageLayout>
  )
}
