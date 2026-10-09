import { useParams } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader } from '@/components/ui';

/**
 * /people/:slug. No people data source exists yet (and none is invented), so
 * every profile resolves to a clear "not published" state and is noindex.
 */
export default function PeopleProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Profile', path: `/people/${slug ?? ''}` },
  ];
  return (
    <>
      <Seo
        title="Team Profile | Murivest Lettings, Nairobi"
        description="This Murivest Lettings team profile is not published. Individual profiles are not available on this site yet; contact the team to speak with the right person."
        path={`/people/${slug ?? ''}`}
        breadcrumbs={crumbs}
        noindex
      />
      <PageHero label="People" title="Profile not published" subtitle="Individual team profiles are not available on this site yet." breadcrumbs={crumbs} />
      <section className="section-padding py-14 bg-ivory-50">
        <div className="max-w-3xl">
          <SectionHeader title="Speak to the team" />
          <p className="text-stone-600 leading-relaxed">
            To reach someone about a requirement, use the contact page and your enquiry will be routed to the right person.
          </p>
        </div>
      </section>
      <CtaBand
        title="Speak to Murivest Lettings"
        description="Tell us what you need and our team will respond."
        primaryLabel="Contact Murivest Lettings"
        primaryLink="/contact"
        secondaryLabel="Meet the team"
        secondaryLink="/people"
      />
    </>
  );
}
