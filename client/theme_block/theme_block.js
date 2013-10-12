// Accompanying JS file for the default page template.
// Describes the page's metadata and actions.
Template.theme_block = Template.theme_block || {};

Template.theme_block.label = 'Theme Block';
Template.theme_block.description = 'A basic content block that takes up half a row';

// This important method hooks the template into the CMS
registry.blockTemplate({name: 'theme_block', label: 'Theme Block'})