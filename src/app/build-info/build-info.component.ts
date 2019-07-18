import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VERSION } from '../../environments/version';
declare var require: any;

export interface Dependency {
  name : string,
  link : string,
  version : string,
  icon : string
}

@Component({
  selector: 'app-build-info',
  templateUrl: './build-info.component.html',
  styleUrls: ['./build-info.component.css']
})
export class BuildInfoComponent implements OnInit {
  dependencies : Dependency[];
  buildInfo : Dependency[];

  constructor(private title : Title) { 
    this.title.setTitle('Jaxon Wright - Build Info');
  }

  ngOnInit() {
    this.dependencies = [{name: 'Angular', version: require('@angular/core/package.json').version, link: 'https://www.npmjs.com/package/@angular/core', icon: 'fab fa-angular'},
                         {name: 'Angular Material', version: require('@angular/material/package.json').version, link: 'https://www.npmjs.com/package/@angular/material', icon: 'fab fa-angular'},
                         {name: 'RxJS', version: require('rxjs/package.json').version, link: 'https://www.npmjs.com/package/rxjs', icon: 'fab fa-js'},
                         {name: 'TypeScript', version: require('typescript/package.json').version, link: 'https://www.npmjs.com/package/typescript', icon: 'fas fa-code'},
                         {name: 'Font Awesome', version: '5.4.2', link: 'https://www.fontawesome.com', icon: 'fab fa-font-awesome'},
                         {name: 'Bootstrap', version: '4.1.3', link: 'https://www.bootstrap.com', icon: 'fas fa-bold'}];
    
    this.buildInfo = [{name: 'Hash', version: VERSION.hash, link: `https://github.com/JaxonWright/jaxonwright.com/commit/${VERSION.hash}`, icon: 'fas fa-hashtag'},
                      {name: 'Date', version: VERSION.date, link: '', icon: 'fas fa-calendar'}]

  }

}