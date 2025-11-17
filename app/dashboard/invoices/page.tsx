import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Search from '@/app/ui/search';
import InvoicesTable from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  const totalPages = 1; // Mock data - single page for demo

  return (
    <div className="w-full animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoices</h1>
          <p className="text-gray-600">Manage and track all your invoices in one place</p>
        </div>
        <Link
          href="/dashboard/invoices/create"
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/50 transition-all duration-200 hover:shadow-xl hover:scale-105"
        >
          <PlusIcon className="h-5 w-5" />
          Create Invoice
        </Link>
      </div>

      <div className="mb-6">
        <Search placeholder="Search invoices by customer, email, or amount..." />
      </div>

      <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
          <InvoicesTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}