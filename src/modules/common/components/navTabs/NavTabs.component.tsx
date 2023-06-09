import React, { FC, useState, SyntheticEvent, useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { APP_KEYS } from '../../consts';

const navTabsOptions = [
  { label: 'Search', url: APP_KEYS.ROUTER_KEYS.ROOT },
  { label: 'Categories', url: APP_KEYS.ROUTER_KEYS.CATEGORY_LIST },
];

interface LinkTabProps {
  label: string;
  to: string;
}

const LinkTab: FC<LinkTabProps> = props => <Tab component={Link} {...props} />;

const NavTabs: FC = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (location.pathname !== '/') {
      const pageIndex = navTabsOptions.findIndex(
        i => i.url === location.pathname
      );
      setValue(pageIndex);
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
      {navTabsOptions.map((i, index) => (
        <LinkTab key={`navigation-tab-${index}`} label={i.label} to={i.url} />
      ))}
    </Tabs>
  );
};

export default NavTabs;
