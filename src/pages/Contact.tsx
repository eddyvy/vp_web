import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import Head from 'next/head'
import { Button, Paper, SxProps, TextField } from '@mui/material'
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

  const initialFormState: ContactFormState = {
    name: '',
    email: '',
    message: '',
  }
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

  const contactFormContainer: SxProps = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    maxWidth: '500px',
    minWidth: '350px',
    width: '30vw',
  }

  const contactFormInput: SxProps = {
    margin: '1rem 0',
    width: '70%',
  }

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`VP | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
      </Head>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>{content.title}</h1>
        <form
          action="https://formsubmit.co/a30749f33496a6bb14c1750cf9b5591e"
          method="POST"
          target="_blank"
          onSubmit={handleSubmit}
        >
          <Paper sx={contactFormContainer}>
            <TextField
              id="contactFormNameInput"
              type="text"
              name="name"
              required
              label={content.name}
              variant="standard"
              sx={contactFormInput}
              onChange={handleChange}
              value={formState.name}
            />
            <TextField
              id="contactFormEmailInput"
              type="email"
              name="email"
              required
              label={content.email}
              variant="standard"
              sx={contactFormInput}
              onChange={handleChange}
              value={formState.email}
            />
            <TextField
              id="contactFormMessageInput"
              type="text"
              name="message"
              required
              label={content.message}
              variant="outlined"
              multiline
              rows={5}
              sx={contactFormInput}
              onChange={handleChange}
              value={formState.message}
            />
            <Button
              id="contactFormSubmitButton"
              variant="contained"
              type="submit"
              sx={{
                color: '#f5f8fa',
                fontWeight: 550,
              }}
            >
              {content.submitButton}
            </Button>
          </Paper>
        </form>
        {sent && <p>{content.sentMsg}</p>}
      </div>
    </PageLayout>
  )
}
