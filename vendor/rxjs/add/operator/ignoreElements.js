import { Observable } from '../../Observable';
import { ignoreElements } from '../../operator/ignoreElements';
Observable.prototype.ignoreElements = ignoreElements;
