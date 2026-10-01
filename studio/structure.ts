import type { StructureResolver } from 'sanity/structure';
import { Home, Tag, Star, Clock, List } from 'lucide-react';

const TYPE = 'propertylet';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Murivest Lettings')
    .items([
      
      S.divider(),
      S.listItem()
        .title('All Properties')
        .icon(List)
        .child(S.documentTypeList(TYPE).title('All Properties')),
    ]);
