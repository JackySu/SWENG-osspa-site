import React from 'react';
import PropTypes from 'prop-types';
import Asciidoctor from 'asciidoctor.js/dist/browser/asciidoctor';

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
        console.log("result-->"+result);
        var filteredhtml = convertedhtml.replace(pattern,"<li><a href=\""+window.location+"#");
        console.log("filteredhtml-->"+filteredhtml);
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