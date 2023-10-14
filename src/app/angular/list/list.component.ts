import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Character } from '../types';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Character[] = [];
  constructor(private service:StarwarsService ) 
  {
    this.list = service.getList();
  }


  ngOnInit(): void {
  }

}
