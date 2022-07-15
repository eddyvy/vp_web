import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import Head from 'next/head'
import { Button, Paper, TextField } from '@mui/material'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
import { contactContent } from '../content/contact'
import styles from './Contact.module.css'

type ContactFormState = {
  name: string
  email: string
  message: string
}

export const Contact: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = contactContent[lang]

  const initialFormState: ContactFormState = { name: '', email: '', message: '' }
  const [ formState, setFormState ] = useState<ContactFormState>(initialFormState)
  const [ sent, setSent ] = useState<boolean>(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputName = e.target.name
    const val = e.target.value

    setFormState((prev) => ({ ...prev, [inputName]: val }))
  }

  const handleSubmit: FormEventHandler = (e) => {
    setSent(true)
  }

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name='description'></meta>
      </Head>
      <div className={styles.contactContainer}>
        <h1>{content.title}</h1>
        <form action="https://formsubmit.co/968e0e2a14aa6f2be5a91cd44b09774e" method="POST" target="_blank" onSubmit={handleSubmit}>
          <Paper className={styles.contactFormContainer}>
            <TextField
              id='contactFormNameInput'
              type='text'
              name='name'
              required
              label={content.name}
              variant='standard'
              className={styles.contactFormInput}
              onChange={handleChange}
              value={formState.name}
            />
            <TextField
              id='contactFormEmailInput'
              type='email'
              name='email'
              required
              label={content.email}
              variant='standard'
              className={styles.contactFormInput}
              onChange={handleChange}
              value={formState.email}
            />
            <TextField
              id='contactFormMessageInput'
              type='text'
              name='message'
              required
              label={content.message}
              variant='outlined'
              multiline
              rows={5}
              className={styles.contactFormInput}
              onChange={handleChange}
              value={formState.message}
            />
            <Button
              id='contactFormSubmitButton'
              variant='contained'
              type='submit'
              className={styles.contactFormButton}
            >
              {content.submitButton}
            </Button>
          </Paper>
        </form>
        { sent && <p>{content.sentMsg}</p> }
      </div>
    </PageLayout>
  )
}
