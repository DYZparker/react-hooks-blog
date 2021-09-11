import React, {FC} from 'react';
import {Button, Col} from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Globalstyle, WrapperRow, WrapperBackTop } from './style';

const App: FC = () => (
  <div className="App">
    <Globalstyle />
    <BrowserRouter>
      {/* <Store> */}
        {/* <Header /> */}
        <WrapperRow justify="center">
          <Col className="main-left" xs={24} sm={24} md={24} lg={17} xl={11}>
            {/* <RouterList /> */}
            <div className="App">
              <Button type="primary">Button</Button>
            </div>
          </Col>
          <Col className="main-right" xs={0} sm={0} md={0} lg={6} xl={4}>
            {/* <Sider /> */}
          </Col>
        </WrapperRow>
        {/* <Footer /> */}
      {/* </Store> */}
    </BrowserRouter>
    <WrapperBackTop>
      {/* <ToTopOutlined /> */}
    </WrapperBackTop>
  </div>
)

export default App;
