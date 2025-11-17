'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 group">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-xl border-2 border-gray-200 bg-white py-3 pl-12 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-primary-600 transition-colors duration-200" />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
        <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded border border-gray-200">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
