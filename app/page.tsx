import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, SparklesIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Header */}
      <div className="w-full px-6 py-4 md:px-12">
        <div className="flex h-16 items-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 shadow-lg">
          <AcmeLogo />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex grow flex-col gap-8 px-6 py-12 md:flex-row md:px-12 md:py-20">
        <div className="flex flex-col justify-center gap-8 md:w-2/5">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm animate-slide-down">
            <SparklesIcon className="h-4 w-4" />
            Modern Dashboard Experience
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Welcome to <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Acme</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl md:leading-relaxed">
              A beautiful, modern dashboard built with Next.js 15, featuring stunning UI/UX with TailwindCSS.
              Manage your business with style and efficiency.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <ChartBarIcon className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Real-time Analytics</p>
                <p className="text-sm text-gray-600">Track your business metrics instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-100">
                <UserGroupIcon className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Customer Management</p>
                <p className="text-sm text-gray-600">Manage customers and invoices effortlessly</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row animate-scale-in">
            <Link
              href="/dashboard"
              className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/50 transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <span>View Dashboard</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-primary-500 hover:bg-gray-50 hover:shadow-md"
            >
              <span>Log in</span>
            </Link>
          </div>

          {/* Learn More Link */}
          <p className="text-sm text-gray-500">
            Built with the{' '}
            <a
              href="https://nextjs.org/learn/"
              className="font-semibold text-primary-600 hover:text-primary-700 underline decoration-primary-300 underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Learn Course
            </a>
            {' '}by Vercel
          </p>
        </div>

        {/* Preview Images */}
        <div className="relative flex items-center justify-center md:w-3/5 animate-slide-up">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

            {/* Images */}
            <div className="relative rounded-2xl shadow-2xl">
              <Image
                src="/hero-desktop.png"
                width={1000}
                height={760}
                className="hidden rounded-2xl md:block"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <Image
                src="/hero-mobile.png"
                width={560}
                height={620}
                className="block rounded-2xl md:hidden"
                alt="Screenshot of the dashboard project showing mobile version"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-8 md:px-12">
        <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 shadow-sm">
          <p className="text-sm text-gray-600">© 2024 Acme. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </main>
  );
}
