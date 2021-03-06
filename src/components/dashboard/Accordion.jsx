import * as React from 'react';

import { Alert, Box, IconButton, Stack } from '@mui/material';
import { add, remove } from '../../redux/slices/questions';
import { useDispatch, useSelector } from 'react-redux';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';

const ExpandMoreIcon = <Icon icon='flat-color-icons:expand' />;

export default function SimpleAccordion() {
  const questions = useSelector((state) => state.questions.value);
  const dispatch = useDispatch();
  console.log({ questions });

  const handleDelete = (pos) => {
    dispatch(remove({ pos }));
  };

  return questions.length > 0 ? (
    <div>
      {questions.map((q, i) => (
        <Accordion sx={{ p: 1 }} key={i}>
          <AccordionSummary expandIcon={ExpandMoreIcon}>
            <Typography variant='h6' sx={{ flexGrow: 1 }} component='h6'>
              # {i} - {q.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            {q.options.map((opt, _i) => (
              <p key={_i}>
                <span
                  style={{
                    marginRight: '.5rem',
                    display: 'inline-block',
                    width: '1rem',
                  }}
                >
                  {_i + 1})
                </span>

                {opt}
              </p>
            ))}
            <Stack direction='row' sx={{ alignItems: 'center' }}>
              <Typography
                sx={{ flexGrow: 1, fontWeight: 'bold' }}
                variant='body1'
              >
                Correct Answer : Option {q.correctAnswer}
              </Typography>
              {/* <IconButton>
                <Icon icon='clarity:edit-solid' />
              </IconButton> */}
              <IconButton onClick={() => handleDelete(i)}>
                <Icon icon='fluent:delete-20-filled' />
              </IconButton>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  ) : (
    <Alert severity='info' sx={{ maxWidth: 480 }}>
      No questions added.
    </Alert>
  );
}
