import * as React from 'react';

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
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={ExpandMoreIcon}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
