/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppstoreAddOutlined, ReconciliationOutlined } from '@ant-design/icons';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Flex, Typography } from 'antd';
import { useOutlet } from 'react-router-dom';

export function BasicLayout() {
  const element = useOutlet();

  return (
    <ProLayout
      layout="mix"
      siderWidth={256}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      }}
      menu={{
        request: async () => {
          return [
            {
              name: 'Untitled workspace 1',
              path: '1111',
              icon: <ReconciliationOutlined />,
            },
          ];
        },
      }}
      menuHeaderRender={(logo, title, props) => (
        <Flex justify="space-between" flex={1}>
          {!props?.collapsed && <Typography.Text>Workspaces</Typography.Text>}
          <AppstoreAddOutlined />
        </Flex>
      )}
    >
      <PageContainer>{element}</PageContainer>
    </ProLayout>
  );
}
