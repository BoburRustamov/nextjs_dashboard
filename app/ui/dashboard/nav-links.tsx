"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'group relative flex h-[48px] grow items-center justify-center gap-3 rounded-lg p-3 text-sm font-medium transition-all duration-200 md:flex-none md:justify-start md:p-3 md:px-4',
              {
                'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50 scale-105': isActive,
                'bg-white/50 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-md': !isActive,
              },
            )}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full md:block hidden"></div>
            )}
            <LinkIcon className={clsx(
              'w-6 transition-transform duration-200',
              {
                'scale-110': isActive,
                'group-hover:scale-110': !isActive,
              }
            )} />
            <p className="hidden md:block font-semibold">{link.name}</p>
            {!isActive && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-200"></div>
            )}
          </Link>
        );
      })}
    </>
  );
}
