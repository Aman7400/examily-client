import * as React from 'react';

import { Box, IconButton, Stack } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';

const ExpandMoreIcon = <Icon icon='flat-color-icons:expand' />;

export default function SimpleAccordion() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Accordion sx={{ p: 1 }} key={i}>
          <AccordionSummary expandIcon={ExpandMoreIcon}>
            <Typography variant='h6' sx={{ flexGrow: 1 }} component='h6'>
              # {i} - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              A voluptates maxime rerum, magni facilis dignissimos totam? Magnam
              quisquam excepturi nam dolores cupiditate reiciendis nostrum qui
              ratione quaerat ipsam! Reiciendis, labore.
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <p>Opt1</p>
            <p>opt2</p>
            <p>opt3</p>
            <p>opt4</p>
            <Stack direction='row' sx={{ alignItems: 'center' }}>
              <Typography sx={{ flexGrow: 1 }} variant='body1'>
                Correct Answer : Opt1
              </Typography>
              <IconButton>
                <Icon icon='clarity:edit-solid' />
              </IconButton>
              <IconButton>
                <Icon icon='fluent:delete-20-filled' />
              </IconButton>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
