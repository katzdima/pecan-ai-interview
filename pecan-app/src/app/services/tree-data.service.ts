import { Injectable } from '@angular/core';
import { ResConnectionItem, ResDatabaseItem, ResSchemaItem, ResTableItem, ResColumnItem } from './tree-data.model';
import { Observable, of as observableOf, BehaviorSubject, Subject } from 'rxjs';
import { TreeData } from './tree-data.model';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  constructor() { }

  _dataChange = new BehaviorSubject<TreeData[]>([]);
  private nodeDataSource = new Subject<string>();
  nodeData$ = this.nodeDataSource.asObservable();

  setNodeData(Data) {
    this.nodeDataSource.next(Data);
  }

  getConnections(): Observable<ResConnectionItem> {
    return observableOf ({
      connections: [
        {
          Id: 11,
          Name: 'first connection',
          Children: []
        },
        {
          Id: 12,
          Name: 'second connection',
          Children: []
        }
      ]
    });
  }

  getDatabase(connectionId: number): Observable<ResDatabaseItem> {
    return observableOf ({
      databases: [
        {
          Id: 21,
          Name: 'first database',
          Children: []
        },
        {
          Id: 22,
          Name: 'second database',
          Children: []
        }
      ]
    });
  }

  getSchema(databaseId: number): Observable<ResSchemaItem> {
    return observableOf ({
      schemas: [
        {
          Id: 31,
          Name: 'first schema',
          Children: []
        },
        {
          Id: 32,
          Name: 'second schema',
          Children: []
        }
      ]
    });
  }

  getTable(schemaId: number): Observable<ResTableItem> {
    return observableOf ({
      tables: [
        {
          Id: 41,
          Name: 'first table',
          Children: []
        },
        {
          Id: 42,
          Name: 'second table',
          Children: []
        }
      ]
    });
  }

  getColumn(tableId: number): Observable<ResColumnItem> {
    return observableOf ({
      columns: [
        {
          Id: 51,
          Name: 'first column',
          Children: [],
          Data: {
            Header: 'first header',
            Rows: ['first data', 'second data', 'third data'],
          }
        },
        {
          Id: 52,
          Name: 'second column',
          Children: [],
          Data: {
            Header: 'second header',
            Rows: ['first data', 'second data', 'third data'],
          }
        }
      ]
    });
  }
}
