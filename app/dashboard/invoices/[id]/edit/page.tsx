import { ArrowLeftIcon, UserCircleIcon, CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function EditInvoicePage({ params }: { params: { id: string } }) {
  // Mock customer data
  const customers = [
    { id: '1', name: 'Delba de Oliveira', email: 'delba@oliveira.com' },
    { id: '2', name: 'Lee Robinson', email: 'lee@robinson.com' },
    { id: '3', name: 'Hector Simpson', email: 'hector@simpson.com' },
    { id: '4', name: 'Emil Kowalski', email: 'emil@kowalski.com' },
    { id: '5', name: 'Amy Burns', email: 'amy@burns.com' },
  ];

  // Mock invoice data - find by ID
  const invoiceData = {
    '1': { customer_id: '1', amount: 3750, status: 'paid', date: '2024-01-15' },
    '2': { customer_id: '2', amount: 2500, status: 'pending', date: '2024-01-20' },
    '3': { customer_id: '3', amount: 1250, status: 'paid', date: '2024-01-22' },
    '4': { customer_id: '4', amount: 8456, status: 'pending', date: '2024-01-25' },
    '5': { customer_id: '5', amount: 6820, status: 'paid', date: '2024-01-28' },
    '6': { customer_id: '1', amount: 4200, status: 'pending', date: '2024-02-01' },
  };

  const invoice = invoiceData[params.id as keyof typeof invoiceData];

  if (!invoice) {
    notFound();
  }

  const selectedCustomer = customers.find((c) => c.id === invoice.customer_id);

  return (
    <div className="w-full animate-fade-in">
      {/* Header with Back Button */}
      <div className="mb-8">
        <Link
          href="/dashboard/invoices"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors mb-4"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Invoices
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Invoice #{params.id}</h1>
        <p className="text-gray-600">Update invoice details and status</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <form className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Invoice Details</h2>
            </div>

            {/* Form Body */}
            <div className="p-6 space-y-6">
              {/* Customer Selection */}
              <div className="space-y-2">
                <label htmlFor="customer" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <UserCircleIcon className="h-5 w-5 text-primary-600" />
                  Select Customer
                </label>
                <select
                  id="customer"
                  name="customerId"
                  defaultValue={invoice.customer_id}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200 text-gray-900 bg-white hover:border-gray-300"
                  required
                >
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name} - {customer.email}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div className="space-y-2">
                <label htmlFor="amount" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CurrencyDollarIcon className="h-5 w-5 text-success-600" />
                  Invoice Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-lg font-semibold">$</span>
                  </div>
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    defaultValue={invoice.amount}
                    className="w-full pl-8 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-success-500 focus:ring-4 focus:ring-success-100 outline-none transition-all duration-200 text-gray-900 hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Due Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CalendarIcon className="h-5 w-5 text-warning-600" />
                  Due Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  defaultValue={invoice.date}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-warning-500 focus:ring-4 focus:ring-warning-100 outline-none transition-all duration-200 text-gray-900 hover:border-gray-300"
                  required
                />
              </div>

              {/* Invoice Status */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block mb-3">Invoice Status</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative flex items-center p-4 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-primary-500 transition-all duration-200 group">
                    <input
                      type="radio"
                      name="status"
                      value="pending"
                      className="sr-only peer"
                      defaultChecked={invoice.status === 'pending'}
                    />
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-warning-500 peer-checked:border-warning-500 peer-checked:bg-warning-500 flex items-center justify-center transition-all">
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Pending</p>
                        <p className="text-xs text-gray-500">Payment pending</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-warning-50 opacity-0 peer-checked:opacity-100 -z-10 transition-opacity"></div>
                  </label>

                  <label className="relative flex items-center p-4 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-primary-500 transition-all duration-200 group">
                    <input
                      type="radio"
                      name="status"
                      value="paid"
                      className="sr-only peer"
                      defaultChecked={invoice.status === 'paid'}
                    />
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-success-500 peer-checked:border-success-500 peer-checked:bg-success-500 flex items-center justify-center transition-all">
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Paid</p>
                        <p className="text-xs text-gray-500">Payment received</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-success-50 opacity-0 peer-checked:opacity-100 -z-10 transition-opacity"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Form Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-4">
              <Link
                href="/dashboard/invoices"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/50 hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Update Invoice
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar - Current Details */}
        <div className="space-y-6">
          {/* Current Details Card */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 animate-slide-up">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Invoice ID:</span>
                <span className="font-semibold text-gray-900">#{params.id}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Customer:</span>
                <span className="font-semibold text-gray-900">{selectedCustomer?.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-success-600">${invoice.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    invoice.status === 'paid'
                      ? 'bg-success-100 text-success-700'
                      : 'bg-warning-100 text-warning-700'
                  }`}
                >
                  {invoice.status === 'paid' ? 'Paid' : 'Pending'}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Due Date:</span>
                <span className="font-semibold text-gray-900">{invoice.date}</span>
              </div>
            </div>
          </div>

          {/* Warning Card */}
          <div className="bg-gradient-to-br from-warning-50 to-orange-50 rounded-xl border border-warning-200 p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-warning-900 mb-3">⚠️ Important</h3>
            <ul className="space-y-2 text-sm text-warning-800">
              <li className="flex items-start gap-2">
                <span className="text-warning-600 font-bold">•</span>
                <span>Changes will be saved immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warning-600 font-bold">•</span>
                <span>Customer will be notified of updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warning-600 font-bold">•</span>
                <span>Status changes affect payment tracking</span>
              </li>
            </ul>
          </div>

          {/* Action History */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Actions</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Invoice Created</p>
                  <p className="text-xs text-gray-500">{invoice.date}</p>
                </div>
              </div>
              {invoice.status === 'paid' && (
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-success-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Payment Received</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
