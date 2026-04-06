import React from 'react';

export interface MenuItem {
  title: string;
  url: string;
  children?: MenuItem[];
}
