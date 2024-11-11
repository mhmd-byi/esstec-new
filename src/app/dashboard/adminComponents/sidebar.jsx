import React, { useEffect } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import esstecLogo from '@/assets/images/esstec-logo.svg';
import { useRouter } from 'next/navigation';

export const SidebarWithLogo = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const hasWindow = typeof window !== 'undefined';
  const router = useRouter();
  const handleLogout = () => {
    hasWindow && localStorage.setItem('isAuthenticated', false);
    router.push('/');
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[25rem] p-4 text-text-primary border-2 border-text-primary">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Image src={esstecLogo} className="w-full" alt="logo" />
      </div>
      <List className='space-y-6'>
        <ListItem onClick={() => router.push('/dashboard/editMenu')}>
          <Typography color="blue-gray" className="mr-auto font-normal px-4 py-2">
            Project
          </Typography>
        </ListItem>
        <ListItem>
          <Typography color="blue-gray" className="mr-auto font-normal px-4 py-2">
            Menu Details
          </Typography>
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal px-4 py-2">
            Settings
          </Typography>
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal px-4 py-2">
            Logout
          </Typography>
        </ListItem>
      </List>
    </Card>
  );
};
