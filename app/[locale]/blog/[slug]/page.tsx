import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import blogs from '@/data/blogs.json';
import PageLayout from '@/app/components/PageLayout';

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const t = await getTranslations('blog');

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        <h1 className="text-4xl font-bold text-white">{t(`${slug}.title`)}</h1>
        <p className="text-sm text-gray-600">{blog.date}</p>

        {blog.images?.length > 0 && (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {blog.images.map((src, idx) => (
              <div
                key={idx}
                className="relative h-64 w-full overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={src}
                  alt={`Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-lg leading-relaxed text-gray-700">
          {t.rich(`${slug}.excerpt`, {
            p: (chunks) => <p className="my-4">{chunks}</p>,
            b: (chunks) => <b>{chunks}</b>,
            h: (chunks) => <h4 className="text-bold text-white">{chunks}</h4>,
          })}
        </div>
      </div>
    </PageLayout>
  );
}
