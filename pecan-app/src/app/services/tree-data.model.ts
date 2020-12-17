export interface ColumnData {
    Header: string;
    Rows: string[];
}

export interface TreeData {
    Id: number;
    Name: string;
    Data?: ColumnData;
    Children: TreeData[];
  }
  
  export interface DialogData {
    Name: string;
    Component: string;
  }

export interface ResConnectionItem {
    connections: TreeData[];
}

export interface ResDatabaseItem {
    databases: TreeData[];
}

export interface ResSchemaItem {
    schemas: TreeData[];
}

export interface ResTableItem {
    tables: TreeData[];
}

export interface ResColumnItem {
    columns: TreeData[];
}