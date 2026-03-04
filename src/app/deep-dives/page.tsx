import type { Metadata } from 'next';
import ViewTransitionLink from '@/components/ViewTransitionLink';
import TrackedExternalLink from '@/components/TrackedExternalLink';
import { getDeepDives } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Deep Dives - Rohit Ramaprasad',
  description: 'Technical deep dives and learning notes on machine learning, computer vision, and AI concepts.',
};

export default function DeepDivesPage() {
  const deepDives = getDeepDives();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Deep Dives
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Notes from my learning on different concepts!
        </p>

        {deepDives.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Tuned!
            </h2>
          </div>
        ) : (
          <div className="space-y-8">
            {deepDives.map((dive) => (
              <article
                key={dive.slug}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-2">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(dive.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {dive.type === 'medium' && dive.link ? (
                    <TrackedExternalLink
                      href={dive.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      eventCategory="deep_dive"
                      eventLabel={`medium_${dive.slug}`}
                    >
                      {dive.title}
                      <span className="inline-block ml-2 text-sm">
                        <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </TrackedExternalLink>
                  ) : (
                    <ViewTransitionLink
                      href={`/deep-dives/${dive.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      eventCategory="deep_dive"
                      eventLabel={dive.slug}
                    >
                      {dive.title}
                    </ViewTransitionLink>
                  )}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {dive.description}
                </p>

                {dive.tags && dive.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
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

                {dive.type === 'medium' && dive.link ? (
                  <TrackedExternalLink
                    href={dive.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                    eventCategory="deep_dive"
                    eventLabel={`medium_${dive.slug}`}
                  >
                    Read on Medium
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </TrackedExternalLink>
                ) : (
                  <ViewTransitionLink
                    href={`/deep-dives/${dive.slug}`}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                    eventCategory="deep_dive"
                    eventLabel={dive.slug}
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </ViewTransitionLink>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
