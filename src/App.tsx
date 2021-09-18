import React, {FC} from 'react';
import { Col } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { ToTopOutlined } from '@ant-design/icons'
import { Globalstyle, WrapperRow, WrapperBackTop } from './style';
import RouterList from './router';
import Header from './commons/header';
import Footer from './commons/footer';
import Side from './commons/side';
import { Store } from './store';

const App: FC = () => (
  <div className="App">
    <Globalstyle />
    <BrowserRouter>
        <Header />
        <WrapperRow justify="center">
          <Store>
            <Col className="main-left" xs={24} sm={24} md={24} lg={17} xl={14} xxl={11}>
              <RouterList />
            </Col>
            <Col className="main-right" xs={0} sm={0} md={0} lg={6} xl={5} xxl={4}>
              <Side />
            </Col>
          </Store>
        </WrapperRow>
        <Footer />
    </BrowserRouter>
    <WrapperBackTop>
      <ToTopOutlined />
    </WrapperBackTop>
  </div>
)

export default App;
