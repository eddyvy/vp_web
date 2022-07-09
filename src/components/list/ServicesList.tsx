import { List, ListItem, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import { FC } from 'react'

const ServiceItem: FC<{ content: string }> = ({ content }) => {
  return (
    <motion.li
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        y: { stiffness: 1000, velocity: -100 },
      }}
    >
      {content}
    </motion.li>
  )
}

const services = [ 'Best Place', 'Best Service', 'Best All' ]

export const ServicesList: FC = () => {
  return (
    <List>
      {services.map((s, idx) => (
        <ListItem key={idx}>
          <ListItemText
            primary={s}
            secondary={s}
          />
        </ListItem>
      ))}
    </List>
  )
}
