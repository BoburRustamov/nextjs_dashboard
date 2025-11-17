import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';

export default async function LatestInvoices() {
  // Mock invoice data for demo purposes (no database required)
  const latestInvoices = [
    {
      id: '1',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
      amount: '$3,750.00',
    },
    {
      id: '2',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
      amount: '$2,500.00',
    },
    {
      id: '3',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      image_url: '/customers/hector-simpson.png',
      amount: '$1,250.00',
    },
    {
      id: '4',
      name: 'Emil Kowalski',
      email: 'emil@kowalski.com',
      image_url: '/customers/emil-kowalski.png',
      amount: '$8,456.00',
    },
    {
      id: '5',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: '/customers/amy-burns.png',
      amount: '$6,820.00',
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col justify-between rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-sm px-6 divide-y divide-gray-100">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 group animate-slide-up',
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div className="relative">
                    <Image
                      src={invoice.image_url}
                      alt={`${invoice.name}'s profile picture`}
                      className="mr-4 rounded-full ring-2 ring-gray-200 group-hover:ring-primary-400 transition-all duration-200"
                      width={40}
                      height={40}
                    />
                    <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900 md:text-base group-hover:text-primary-600 transition-colors">
                      {invoice.name}
                    </p>
                    <p className="text-xs text-gray-500 sm:text-sm truncate">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <p className="truncate text-sm font-bold text-gray-900 md:text-base">
                    {invoice.amount}
                  </p>
                  <span className="text-xs text-gray-400 font-medium">Invoice #{i + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between pt-6 px-2">
          <div className="flex items-center">
            <ArrowPathIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-600 font-medium">Updated just now</h3>
          </div>
          <button className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            View All →
          </button>
        </div>
      </div>
    </div>
  );
}
