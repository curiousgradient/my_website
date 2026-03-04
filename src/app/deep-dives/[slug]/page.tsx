import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ViewTransitionLink from '@/components/ViewTransitionLink';
import { getDeepDiveBySlug, getDeepDives } from '@/lib/markdown';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export async function generateStaticParams() {
  const deepDives = getDeepDives();
  return deepDives.map((dive) => ({
    slug: dive.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dive = getDeepDiveBySlug(slug);
  if (!dive) return {};
  return {
    title: `${dive.title} - Rohit Ramaprasad`,
    description: dive.description,
  };
}

export default async function DeepDivePage({ params }: PageProps) {
  const { slug } = await params;
  const dive = getDeepDiveBySlug(slug);

  if (!dive) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <ViewTransitionLink
          href="/deep-dives"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Deep Dives
        </ViewTransitionLink>

        {/* Post header */}
        <header className="mb-8">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(dive.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {dive.title}
          </h1>
          {dive.description && (
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {dive.description}
            </p>
          )}
          {dive.tags && dive.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {dive.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <MarkdownRenderer content={dive.content} />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <ViewTransitionLink
            href="/deep-dives"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Deep Dives
          </ViewTransitionLink>
        </footer>
      </article>
    </div>
  );
}
