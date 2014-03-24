//  ______     ______     __     __    __     __  __     ______   __  __
// /\  __ \   /\___  \   /\ \   /\ "-./  \   /\ \/\ \   /\__  _\ /\ \_\ \
// \ \  __ \  \/_/  /__  \ \ \  \ \ \-./\ \  \ \ \_\ \  \/_/\ \/ \ \  __ \
//  \ \_\ \_\   /\_____\  \ \_\  \ \_\ \ \_\  \ \_____\    \ \_\  \ \_\ \_\
//   \/_/\/_/   \/_____/   \/_/   \/_/  \/_/   \/_____/     \/_/   \/_/\/_/
//
// azimuth-core/client/docs/docs.js
//
// Metadata and settings definition for the work page template.
//

Template.docs = Template.docs || {};
Template.docs.label = 'docs';
Template.docs.description = 'Documentation page';

// This important method hooks the template into the CMS
Azimuth.registry.pageTemplate({
  name: 'docs',
  label: 'Docs page for azimuthc.ms'
});