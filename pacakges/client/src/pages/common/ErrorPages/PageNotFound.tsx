import { Button, Result } from 'antd';

import { BACK_TO_HOMEPAGE, BASE_URL, createMessage, PAGE_NOT_FOUND } from '@/constants';
import { useLinkTo } from '@/hooks';

export function PageNotFound() {
  const { linkTo } = useLinkTo();

  return (
    <Result
      status="404"
      title={createMessage(PAGE_NOT_FOUND)}
      subTitle="Either this page doesn't exist, or you don't have access to this page"
      extra={<Button onClick={() => linkTo(BASE_URL)}>{createMessage(BACK_TO_HOMEPAGE)}</Button>}
    />
  );
}
