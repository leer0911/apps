import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

import type { PageErrorMessageProps } from './Components/PageErrorMessage';
import { PageErrorMessage } from './Components/PageErrorMessage';

interface PageProps {
  children?: ReactNode;
  errorCode?: string | number;
  errorIcon?: ReactNode;
  title?: string;
  description?: string;
  cta?: ReactNode;
  errorMessages?: PageErrorMessageProps[];
}

export function Page(props: PageProps) {
  const { cta, description, errorCode, errorIcon, title } = props;

  return (
    <Container>
      {errorIcon && <Box>{errorIcon}</Box>}

      {errorCode && <Box>{errorCode}</Box>}

      {title && <Box>{title}</Box>}

      {description && <Box>{description}</Box>}

      {props.errorMessages?.map((errorMessage, idx) => (
        <PageErrorMessage data={errorMessage} key={idx} />
      ))}

      {cta}
    </Container>
  );
}
