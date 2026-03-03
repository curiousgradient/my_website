import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  isExternal?: boolean;
  thumbnail?: string;
}

export default function ProjectCard({ title, description, link, tags = [], isExternal = false, thumbnail }: ProjectCardProps) {
  const CardContent = () => (
    <>
      {thumbnail && (
        <div className="relative w-[calc(100%+3rem)] -ml-6 h-32 md:h-36 mb-4 -mt-6 rounded-t-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
          View project
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );

  if (!link) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardContent />
      </div>
    );
  }

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <Link
      href={link}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <CardContent />
    </Link>
  );
}
