// apex-grid-factory.ts

import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import type { EventName } from '@lit-labs/react';
import {
  ApexFilteringEvent,
  ApexFilteredEvent,
  ApexGrid,
  ColumnConfiguration,
  FilterExpressionTree,
  SortExpression,
} from 'apex-grid';

ApexGrid.register();

function createApexGridWrapper<T extends object>() {
  return createComponent({
    tagName: 'apex-grid',
    elementClass: ApexGrid<T>,
    react: React,
    events: {
      onSorting: 'sorting' as EventName<CustomEvent<SortExpression<T>>>,
      onSorted: 'sorted' as EventName<CustomEvent<SortExpression<T>>>,
      onFiltering: 'filtering' as EventName<CustomEvent<ApexFilteringEvent<T>>>,
      onFiltered: 'filtered' as EventName<CustomEvent<ApexFilteredEvent<T>>>,
    },
  });
}

export default createApexGridWrapper