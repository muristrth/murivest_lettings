import { Studio } from 'sanity';
import config from '../../studio/sanity.config';

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', maxHeight: '100dvh', overflow: 'hidden' }}>
      <Studio config={config} />
    </div>
  );
}
