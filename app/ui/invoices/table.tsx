import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // Mock invoice data for demo purposes (no database required)
  const allInvoices = [
    {
      id: '1',
      customer_id: '1',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
      date: '2024-01-15',
      amount: 3750,
      status: 'paid' as const,
    },
    {
      id: '2',
      customer_id: '2',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
      date: '2024-01-20',
      amount: 2500,
      status: 'pending' as const,
    },
    {
      id: '3',
      customer_id: '3',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      image_url: '/customers/hector-simpson.png',
      date: '2024-01-22',
      amount: 1250,
      status: 'paid' as const,
    },
    {
      id: '4',
      customer_id: '4',
      name: 'Emil Kowalski',
      email: 'emil@kowalski.com',
      image_url: '/customers/emil-kowalski.png',
      date: '2024-01-25',
      amount: 8456,
      status: 'pending' as const,
    },
    {
      id: '5',
      customer_id: '5',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: '/customers/amy-burns.png',
      date: '2024-01-28',
      amount: 6820,
      status: 'paid' as const,
    },
    {
      id: '6',
      customer_id: '1',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
      date: '2024-02-01',
      amount: 4200,
      status: 'pending' as const,
    },
  ];

  // Simple search filter
  const invoices = query
    ? allInvoices.filter(
        (invoice) =>
          invoice.name.toLowerCase().includes(query.toLowerCase()) ||
          invoice.email.toLowerCase().includes(query.toLowerCase())
      )
    : allInvoices;

  return (
    <div className="flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="p-4 md:p-0">
          {/* Mobile view */}
          <div className="md:hidden space-y-3">
            {invoices?.map((invoice, index) => (
              <div
                key={invoice.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full ring-2 ring-gray-200"
                        width={40}
                        height={40}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{invoice.name}</p>
                      <p className="text-xs text-gray-500">{invoice.email}</p>
                    </div>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table view */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold text-gray-700 text-left text-sm uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-gray-700 text-left text-sm uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-gray-700 text-left text-sm uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-gray-700 text-left text-sm uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-gray-700 text-left text-sm uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-gray-700 text-right text-sm uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {invoices?.map((invoice, index) => (
                <tr
                  key={invoice.id}
                  className="group hover:bg-gradient-to-r hover:from-primary-50/30 hover:to-blue-50/30 transition-all duration-200 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={invoice.image_url}
                          className="rounded-full ring-2 ring-gray-200 group-hover:ring-primary-400 transition-all duration-200"
                          width={40}
                          height={40}
                          alt={`${invoice.name}'s profile picture`}
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
                      </div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {invoice.name}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-bold text-gray-900">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex justify-end gap-2">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {invoices?.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">No invoices found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search or create a new invoice</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
