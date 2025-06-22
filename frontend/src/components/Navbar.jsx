import React from 'react';

import { useAuthStore } from '../store/useAuthStore.js';

// Navbar for all pages containing settings, logout option
const Navbar = () => {

  const { authUser } = useAuthStore();

  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
