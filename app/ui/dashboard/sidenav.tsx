import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-4 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200">
      <Link
        className="mb-6 flex h-20 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:h-24"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* User Profile Section */}
      <div className="hidden md:flex items-center p-4 mb-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="relative">
          <UserCircleIcon className="h-12 w-12 text-gray-400" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-semibold text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500">john@acme.com</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
          <BellIcon className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full"></span>
        </button>
      </div>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block"></div>

        {/* Sign Out Button */}
        <form>
          <button className="group flex h-[48px] w-full items-center justify-center gap-3 rounded-lg bg-white/50 p-3 text-sm font-medium text-gray-600 hover:bg-danger-50 hover:text-danger-600 transition-all duration-200 hover:shadow-md md:flex-none md:justify-start md:p-3 md:px-4 border border-transparent hover:border-danger-200">
            <PowerIcon className="w-6 group-hover:scale-110 transition-transform duration-200" />
            <div className="hidden md:block font-semibold">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
