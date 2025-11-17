import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

const colorMap = {
  collected: {
    bg: 'bg-gradient-to-br from-success-50 to-success-100',
    icon: 'text-success-600',
    iconBg: 'bg-success-100',
  },
  pending: {
    bg: 'bg-gradient-to-br from-warning-50 to-warning-100',
    icon: 'text-warning-600',
    iconBg: 'bg-warning-100',
  },
  invoices: {
    bg: 'bg-gradient-to-br from-primary-50 to-primary-100',
    icon: 'text-primary-600',
    iconBg: 'bg-primary-100',
  },
  customers: {
    bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
    icon: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
};

export async function CardWrapper() {
  // Mock data for demo purposes (no database required)
  const mockData = {
    numberOfInvoices: 47,
    numberOfCustomers: 28,
    totalPaidInvoices: '$45,231.89',
    totalPendingInvoices: '$12,483.00',
  };

  return (
    <>
      <Card title="Total Revenue" value={mockData.totalPaidInvoices} type="collected" />
      <Card title="Pending" value={mockData.totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={mockData.numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={mockData.numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];
  const colors = colorMap[type];

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 animate-scale-in">
      <div className={`absolute inset-0 ${colors.bg} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`${colors.iconBg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
            {Icon ? <Icon className={`h-6 w-6 ${colors.icon}`} /> : null}
          </div>
          <div className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
            {type === 'collected' ? '+12%' : type === 'pending' ? '-3%' : '+5%'}
          </div>
        </div>

        <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 tracking-tight">
          {value}
        </p>

        <div className="mt-4 flex items-center text-xs text-gray-500">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Updated 2 min ago
          </span>
        </div>
      </div>
    </div>
  );
}
