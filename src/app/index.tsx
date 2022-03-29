import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import { Footer } from '@app/AppLayout/Footer';
import { BackToTop } from '@patternfly/react-core';
const App: React.FunctionComponent = () => (
  <Router basename="/architect/portfolio">
    <AppLayout>
      <AppRoutes />
    </AppLayout>
    <BackToTop isAlwaysVisible className='back_to_top'/>
    <Footer/>
    
  </Router>
);

export default App;
