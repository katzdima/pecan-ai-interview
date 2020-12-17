import { TreeFunctionService } from './services/tree-function.service';
import { TreeDataService } from './services/tree-data.service';
import { TreeData, ColumnData, ResConnectionItem, ResDatabaseItem, ResSchemaItem, ResTableItem, ResColumnItem } from './services/tree-data.model';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { of as observableOf } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'app-pecan';
  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;

  constructor(
    private dataService: TreeDataService,
    private service: TreeFunctionService,
  ) {}

  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService._dataChange.subscribe(
      data => (this.nestedDataSource.data = data)
    );
    this.dataService.getConnections().subscribe((res: ResConnectionItem) => (this.nestedDataSource.data = res.connections));
  }

  private _getChildren = (node: TreeData) => observableOf(node.Children);
  hasNestedChild = (_: number, nodeData: TreeData) => nodeData.Children.length > 0;

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = null;
    this.nestedDataSource.data = data;
  }

  addNode(node: TreeData) {
    node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    this.nestedDataSource.data.push(node);
  }

  addChildNode(childrenNodeData) {
    childrenNodeData.node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    childrenNodeData.currentNode.Children.push(childrenNodeData.node);
    this.refreshTreeData();
  }

  deleteNode(nodeToBeDeleted: TreeData) {
    const deletedElement: TreeData = this.service.findFatherNode(nodeToBeDeleted.Id, this.nestedDataSource.data);
    let elementPosition: number;
    if (window.confirm('Are you sure you want to delete ' + nodeToBeDeleted.Name + '?' )) {
        if (deletedElement[0]) {
          deletedElement[0].Children.splice(deletedElement[1], 1);
        } else {
          elementPosition = this.service.findPosition(nodeToBeDeleted.Id, this.nestedDataSource.data);
          this.nestedDataSource.data.splice(elementPosition, 1);
      }
      this.refreshTreeData();
    }
  }

  fetchNodeData(node: TreeData) {
    const level = this.service.findNodeLevel(node.Id, this.nestedDataSource.data, 0);
    switch(level) { 
      case 0: { 
        this.dataService.getDatabase(node.Id).subscribe((res: ResDatabaseItem) => {
          node.Children = res.databases;
        }); 
        break; 
      } 
      case 1: { 
        this.dataService.getSchema(node.Id).subscribe((res: ResSchemaItem) => {
          node.Children = res.schemas;
        }); 
        break; 
      }
      case 2: { 
        this.dataService.getTable(node.Id).subscribe((res: ResTableItem) => {
          node.Children = res.tables;
        }); 
        break; 
      }
      case 3: { 
        this.dataService.getColumn(node.Id).subscribe((res: ResColumnItem) => {
          node.Children = res.columns;
        }); 
        break; 
      }
      case 4: { 
        if(node.Data) {
          this.dataService.setNodeData(node.Data);
        } else {
          this.dataService.setNodeData('Data restricted');
        }
        break; 
      }
    }
    this.refreshTreeData();
  }

  isColumnNode(node) {
    const level = this.service.findNodeLevel(node.Id, this.nestedDataSource.data, 0);
    return level !== 4;
  }
}
