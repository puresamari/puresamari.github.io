import 'reflect-metadata';
import 'zone.js';

import { bootstrap, Title } from 'angular2/platform/browser';

import { AppComponent } from './components/app.component';

bootstrap(AppComponent, [ Title ]);