import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-50">
      <div className="w-full flex-none md:w-72">
        <SideNav />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto md:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
        {children}
      </div>
    </div>
  );
}