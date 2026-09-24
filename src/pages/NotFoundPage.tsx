import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for does not exist." path="/404" noindex />
      <div className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="font-serif text-8xl text-gold-300 mb-6">404</div>
          <h1 className="font-serif text-3xl text-ivory-50 mb-4">Page not found</h1>
          <p className="text-ivory-200/60 leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link to="/" className="btn-gold">
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
