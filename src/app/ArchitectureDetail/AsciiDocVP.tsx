import React from 'react';
import PropTypes from 'prop-types';
import Asciidoctor from 'asciidoctor.js/dist/browser/asciidoctor';
import { NimblrIcon } from '@patternfly/react-icons';

export default class AsciidocVP extends React.PureComponent {
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


        var trimedAdoc = (this.props.children).substring(((this.props.children).indexOf("## Background")+14), (this.props.children).length-1);
        //console.log("children-->"+ trimedAdoc);
        let convertedhtml= asciidoctor.convert(trimedAdoc)+"";
        let pattern = /<li><a href=\"#/g;
        //let result = pattern.test(convertedhtml);
        //console.log("result-->"+result);
        
        var filteredhtml = convertedhtml.replace(pattern,"<li><a href=\""+window.location+"#");

        filteredhtml = filteredhtml.replace(pattern, "")
        //let youtubepattern = /video::(\w+)\[youtube\]/g;
        
        //Replace video::XXXX[youtube]
        filteredhtml=filteredhtml.replace('video::','<div class="youtubeframe"><p><iframe src="https://www.youtube.com/embed/');
        filteredhtml=filteredhtml.replace('[youtube]','" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></p></div>');
           
        let imgpattern = /\[!\[.*\]\(.*\)/g;
        let result = filteredhtml.match(imgpattern);
        for(var i=0;result!=null&&i<result.length; i++ ){

            let linkresult = result[i].replace(/\]\(<a href=(.*)\)/g,"");
            var imagelocation=linkresult.replace(/\[!\[.*\]\(/g,''); 
            var newImagelocation=imagelocation.replace(/\)/g,'');    
            newImagelocation=newImagelocation.replace('"','');  
            newImagelocation=newImagelocation.replace('..','');  
            
            var imagehtml = '<img src="https://github.com/hybrid-cloud-patterns/docs/raw/gh-pages'+newImagelocation+'" class="asciidoc-img" />';
   
            filteredhtml=filteredhtml.replace(result[i],imagehtml);
        }
        filteredhtml=filteredhtml.replace("&lt;iframe","<iframe class='_doc_iframe'");
        filteredhtml=filteredhtml.replace("iframe&lt;","iframe>");
        
        
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
export { AsciidocVP };