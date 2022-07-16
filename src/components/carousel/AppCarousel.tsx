import { FC, useState } from 'react'
import Image from 'next/image'
import { SxProps, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import styles from './AppCarousel.module.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

type Props = {
  images: {
    label: string
    imgPath: string
  }[]
}

export const AppCarousel: FC<Props> = ({ images }) => {
  const theme = useTheme()
  const [ activeStep, setActiveStep ] = useState<number>(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  const carouselContainer: SxProps = {
    minWidth: '300px',
    width: '30vw',
    marginBottom: '4rem',
  }

  const carouselImgContainer: SxProps = {
    overflow: 'hidden',
    maxHeight: '60vh',
  }

  return (
    <Box sx={carouselContainer}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
        }}
      >
        <h3 className={styles.imageHeadText} >
          {images[activeStep].label}
        </h3>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Paper sx={carouselImgContainer}>
                <Image
                  src={step.imgPath}
                  alt={step.label}
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  objectPosition='center top'
                />
              </Paper>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='medium'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='medium' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  )
}
