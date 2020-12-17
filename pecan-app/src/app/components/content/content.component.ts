import { Component,  OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TreeDataService } from '../../services/tree-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements  OnInit {
  
  nodeData: {} = {}; 
  showData: boolean = false;
  constructor(private dataService: TreeDataService) { 
    dataService.nodeData$.subscribe(data => {
      if(typeof data === 'string') {
        this.showData = false;
      } else {
        this.showData = true;
        this.nodeData = data;
      }

    })
  }

  ngOnInit() {
    
  }

}
