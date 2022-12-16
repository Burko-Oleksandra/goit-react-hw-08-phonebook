import React from 'react';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/userMenu';

export default function AppBar() {
  return (
    <div>
      <Navigation />
      <UserMenu />
    </div>
  );
}
