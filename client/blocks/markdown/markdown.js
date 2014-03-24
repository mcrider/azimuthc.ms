
Template.markdown = Template.markdown || {};
Template.markdown.rendered = function() {

}

Template.markdown.label = 'Portfolio Item';
Template.markdown.description = 'Markdown ';

var fields = [{
      name: 'contents',
      type: 'textarea',
      label: 'Contents'
    }];

// This important method hooks the template into the CMS
Azimuth.registry.blockTemplate({
  name: 'markdown',
  label: 'markdown Item',
  fields: fields
});
