import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 shadow-sm',
        {
          'bg-gradient-to-r from-warning-100 to-warning-200 text-warning-700 border border-warning-300': status === 'pending',
          'bg-gradient-to-r from-success-100 to-success-200 text-success-700 border border-success-300': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          <ClockIcon className="w-4 h-4" />
          Pending
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          <CheckIcon className="w-4 h-4" />
          Paid
        </>
      ) : null}
    </span>
  );
}
