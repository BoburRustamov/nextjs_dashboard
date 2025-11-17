import Image from 'next/image';
import { MagnifyingGlassIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Search from '@/app/ui/search';

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  // Mock customer data
  const allCustomers = [
    {
      id: '1',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      phone: '+1 (555) 123-4567',
      image_url: '/customers/delba-de-oliveira.png',
      total_invoices: 12,
      total_pending: '$3,750.00',
      total_paid: '$15,200.00',
      status: 'active',
    },
    {
      id: '2',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      phone: '+1 (555) 234-5678',
      image_url: '/customers/lee-robinson.png',
      total_invoices: 8,
      total_pending: '$2,500.00',
      total_paid: '$12,800.00',
      status: 'active',
    },
    {
      id: '3',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      phone: '+1 (555) 345-6789',
      image_url: '/customers/hector-simpson.png',
      total_invoices: 15,
      total_pending: '$1,250.00',
      total_paid: '$22,400.00',
      status: 'active',
    },
    {
      id: '4',
      name: 'Emil Kowalski',
      email: 'emil@kowalski.com',
      phone: '+1 (555) 456-7890',
      image_url: '/customers/emil-kowalski.png',
      total_invoices: 6,
      total_pending: '$8,456.00',
      total_paid: '$9,200.00',
      status: 'pending',
    },
    {
      id: '5',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      phone: '+1 (555) 567-8901',
      image_url: '/customers/amy-burns.png',
      total_invoices: 10,
      total_pending: '$6,820.00',
      total_paid: '$18,900.00',
      status: 'active',
    },
    {
      id: '6',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      phone: '+1 (555) 678-9012',
      image_url: '/customers/balazs-orban.png',
      total_invoices: 5,
      total_pending: '$0.00',
      total_paid: '$7,500.00',
      status: 'active',
    },
  ];

  // Filter customers based on search query
  const customers = query
    ? allCustomers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(query.toLowerCase()) ||
          customer.email.toLowerCase().includes(query.toLowerCase())
      )
    : allCustomers;

  return (
    <div className="w-full animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customers</h1>
        <p className="text-gray-600">Manage and view all your customer information</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Search placeholder="Search customers by name or email..." />
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Total Customers</p>
          <p className="text-3xl font-bold text-gray-900">{customers.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Active Customers</p>
          <p className="text-3xl font-bold text-success-600">
            {customers.filter((c) => c.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-900">$86K</p>
        </div>
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Avg. Invoices</p>
          <p className="text-3xl font-bold text-gray-900">9.3</p>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer, index) => (
          <div
            key={customer.id}
            className="group bg-white rounded-xl shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300 overflow-hidden animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={customer.image_url}
                    alt={customer.name}
                    width={64}
                    height={64}
                    className="rounded-full ring-4 ring-white group-hover:ring-primary-200 transition-all duration-200"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      customer.status === 'active' ? 'bg-success-500' : 'bg-warning-500'
                    }`}
                  ></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-primary-600 transition-colors">
                    {customer.name}
                  </h3>
                  <p className="text-sm text-gray-600 capitalize">{customer.status}</p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  <a
                    href={`mailto:${customer.email}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors truncate"
                  >
                    {customer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{customer.phone}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">{customer.total_invoices}</p>
                  <p className="text-xs text-gray-600">Invoices</p>
                </div>
                <div className="text-center p-3 bg-warning-50 rounded-lg">
                  <p className="text-lg font-bold text-warning-700">{customer.total_pending}</p>
                  <p className="text-xs text-gray-600">Pending</p>
                </div>
                <div className="text-center p-3 bg-success-50 rounded-lg">
                  <p className="text-lg font-bold text-success-700">{customer.total_paid}</p>
                  <p className="text-xs text-gray-600">Paid</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {customers.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl shadow-soft border border-gray-100">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">No customers found</h3>
          <p className="text-gray-500 text-sm">Try adjusting your search query</p>
        </div>
      )}
    </div>
  );
}