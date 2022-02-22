import React from 'react';
import PropTypes from 'prop-types';
import Asciidoctor from 'asciidoctor.js/dist/browser/asciidoctor';
import { NimblrIcon } from '@patternfly/react-icons';

//video::rPQoq7ThGAU[youtube]
//<iframe width="560" height="315" src="https://www.youtube.com/embed/XXXX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
export default class Asciidoc extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.string.isRequired,
    };

    static defaultProps = {
        outerTagName: 'div',
    };

    render() {
        const { outerTagName: Component, className, style } = this.props;
        const asciidoctor = Asciidoctor();
        let convertedhtml= asciidoctor.convert(this.props.children)+"";
        let pattern = /<li><a href=\"#/g;
        let result = pattern.test(convertedhtml);
        //console.log("result-->"+result);
        
        var filteredhtml = convertedhtml.replace(pattern,"<li><a href=\""+window.location+"#");

        filteredhtml = filteredhtml.replace(pattern, "")
        //let youtubepattern = /video::(\w+)\[youtube\]/g;
        
        //Replace video::XXXX[youtube]
        filteredhtml=filteredhtml.replace('video::','<div class="youtubeframe"><p><iframe src="https://www.youtube.com/embed/');
        filteredhtml=filteredhtml.replace('[youtube]','" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></p></div>');
           
        //console.log("filteredhtml-->"+filteredhtml);
        return (
            
            <Component
                className={className}
                style={style}
                dangerouslySetInnerHTML={{ __html: filteredhtml }}
            />
        );
    }
}
export { Asciidoc };