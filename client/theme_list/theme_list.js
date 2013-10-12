// Accompanying JS file for the page template.
// Describes the page's metadata and actions.
Template.theme_list = Template.theme_list || {};

Template.theme_list.label = 'Theme List';
Template.theme_list.description = 'Theme list page';

// This important method hooks the template into the CMS
registry.pageTemplate({name: 'theme_list', label: 'Theme listing page'})
