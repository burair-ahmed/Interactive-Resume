// lib/fontawesome.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS automatically
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library
library.add(fab, faFacebookF, faTwitter, faInstagram, faLinkedin);
