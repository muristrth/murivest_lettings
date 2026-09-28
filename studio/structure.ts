import type { StructureResolver } from 'sanity/structure';
import { Home, Tag, Star, Clock, List } from 'lucide-react';

const TYPE = 'propertylet';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Murivest Lettings')
    .items([
      S.listItem()
        .title('To Let')
        .icon(Home)
        .child(
          S.documentTypeList(TYPE)
            .title('To Let')
            .filter('_type == $type && transactionType == "To Let"')
            .params({ type: TYPE })
            .defaultOrdering([{ field: 'listingDate', direction: 'desc' }])
        ),
      S.listItem()
        .title('For Sale')
        .icon(Tag)
        .child(
          S.documentTypeList(TYPE)
            .title('For Sale')
            .filter('_type == $type && transactionType == "For Sale"')
            .params({ type: TYPE })
            .defaultOrdering([{ field: 'listingDate', direction: 'desc' }])
        ),
      S.listItem()
        .title('Featured')
        .icon(Star)
        .child(
          S.documentTypeList(TYPE)
            .title('Featured')
            .filter('_type == $type && featured == true')
            .params({ type: TYPE })
        ),
      S.listItem()
        .title('Coming Soon / Under Offer')
        .icon(Clock)
        .child(
          S.documentTypeList(TYPE)
            .title('Coming Soon / Under Offer')
            .filter('_type == $type && availabilityStatus in ["Coming Soon", "Under Offer"]')
            .params({ type: TYPE })
        ),
      S.divider(),
      S.listItem()
        .title('All Properties')
        .icon(List)
        .child(S.documentTypeList(TYPE).title('All Properties')),
    ]);
