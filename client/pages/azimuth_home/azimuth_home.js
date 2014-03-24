//  ______     ______     __     __    __     __  __     ______   __  __
// /\  __ \   /\___  \   /\ \   /\ "-./  \   /\ \/\ \   /\__  _\ /\ \_\ \
// \ \  __ \  \/_/  /__  \ \ \  \ \ \-./\ \  \ \ \_\ \  \/_/\ \/ \ \  __ \
//  \ \_\ \_\   /\_____\  \ \_\  \ \_\ \ \_\  \ \_____\    \ \_\  \ \_\ \_\
//   \/_/\/_/   \/_____/   \/_/   \/_/  \/_/   \/_____/     \/_/   \/_/\/_/
//
// azimuth-core/client/azimuth_home/azimuth_home.js
//
// Metadata and settings definition for the work page template.
//

Template.azimuth_home = Template.azimuth_home || {};
Template.azimuth_home.label = 'home';
Template.azimuth_home.description = 'Homepage';

// This important method hooks the template into the CMS
Azimuth.registry.pageTemplate({
  name: 'azimuth_home',
  label: 'Home page for azimuthc.ms'
});