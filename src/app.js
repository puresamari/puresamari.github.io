import 'style/base.scss'

import 'reflect-metadata';
import 'zone.js';

import { bootstrap } from 'angular2/platform/browser';
//import { LocationStrategy, PathLocationStrategry } from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';

import { AppComponent } from './app/components/app.component';

bootstrap(AppComponent, [ ROUTER_PROVIDERS ]);