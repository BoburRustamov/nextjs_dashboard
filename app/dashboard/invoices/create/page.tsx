import { ArrowLeftIcon, UserCircleIcon, CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function CreateInvoicePage() {
  // Mock customer data for dropdown
  const customers = [
    { id: '1', name: 'Delba de Oliveira', email: 'delba@oliveira.com', image_url: '/customers/delba-de-oliveira.png' },
    { id: '2', name: 'Lee Robinson', email: 'lee@robinson.com', image_url: '/customers/lee-robinson.png' },
    { id: '3', name: 'Hector Simpson', email: 'hector@simpson.com', image_url: '/customers/hector-simpson.png' },
    { id: '4', name: 'Emil Kowalski', email: 'emil@kowalski.com', image_url: '/customers/emil-kowalski.png' },
    { id: '5', name: 'Amy Burns', email: 'amy@burns.com', image_url: '/customers/amy-burns.png' },
  ];

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Invoice</h1>
        <p className="text-gray-600">Fill in the details to create a new invoice</p>
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200 text-gray-900 bg-white hover:border-gray-300"
                  required
                >
                  <option value="">Choose a customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name} - {customer.email}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Select the customer for this invoice</p>
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
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-success-500 focus:ring-4 focus:ring-success-100 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400 hover:border-gray-300"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Enter the invoice amount in USD</p>
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-warning-500 focus:ring-4 focus:ring-warning-100 outline-none transition-all duration-200 text-gray-900 hover:border-gray-300"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">When is this invoice due?</p>
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
                      defaultChecked
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

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-semibold text-gray-700 block">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Add invoice notes or description..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400 resize-none hover:border-gray-300"
                />
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
                Create Invoice
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar - Preview & Tips */}
        <div className="space-y-6">
          {/* Preview Card */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 animate-slide-up">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice Preview</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Customer:</span>
                <span className="font-semibold text-gray-900">Not selected</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-success-600">$0.00</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Status:</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-warning-100 text-warning-700 rounded-full text-xs font-semibold">
                  Pending
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Due Date:</span>
                <span className="font-semibold text-gray-900">Not set</span>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border border-primary-100 p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Quick Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Double-check the customer details before creating</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Set a realistic due date for payment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Add descriptions for better record keeping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>You can edit invoices later if needed</span>
              </li>
            </ul>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-success-100 flex items-center justify-center">
                  <span className="text-success-700 font-bold text-sm">6</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">Paid This Month</p>
                  <p className="text-xs text-gray-500">$28,450.00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-warning-100 flex items-center justify-center">
                  <span className="text-warning-700 font-bold text-sm">3</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">Pending</p>
                  <p className="text-xs text-gray-500">$8,920.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
