import * as React from 'react';

const qs = require('query-string');

import '@app/react-asciidoc/fedora.css';
import { RepublicanIconConfig } from '@patternfly/react-icons';



var ppid;



class DetailRedirect extends React.Component  {

  
  render() {
        const parsed = qs.parse(location.search);
        ppid = parsed.ppid;
        if(""==ppid || null==ppid){
            alert("Portfolio Architecture Not Found!")
            window.location.replace("/architect/portfolio");
        }
        window.location.replace("/architect/portfolio/detail/"+ppid);
      return(<div></div>);
  }
}
export { DetailRedirect};

/**<BackToTop scrollableSelector='[name="scrolling-section"]' isAlwaysVisible={true} onClick={() => {this.scrollTo("_title_top"); location.reload();}} /> */