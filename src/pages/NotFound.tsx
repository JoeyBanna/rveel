import React from 'react';
import { Section } from '../components/ui/Section';
import { LinkButton } from '../components/ui/Button';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <Section className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-32">
      <h1 className="text-9xl font-extrabold text-gray-900 dark:text-white">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-gray-200">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="mt-8">
        <LinkButton to="/" icon={<Home size={18} />}>
          Back to Home
        </LinkButton>
      </div>
    </Section>
  );
}