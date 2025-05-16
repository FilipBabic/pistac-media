import Link from 'next/link';
import { useTranslations } from 'next-intl';

import blogs from '@/data/blogs.json';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/app/components/PageLayout';

export default function BlogPage() {
  const t = useTranslations('blog');

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
        <h1 className="mb-6 text-4xl font-bold text-white">Blog</h1>
        {blogs.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="bg-primary-100 mb-4 transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-green-700">
                  {t(`${post.slug}.title`)}
                </h2>
                <p className="py-4 text-sm text-gray-400">{post.date}</p>
                <p className="text-base">{t(`${post.slug}.description`)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
