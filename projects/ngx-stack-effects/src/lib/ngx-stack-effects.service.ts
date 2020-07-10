import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface StackerStatus {
  hoverIndex: number;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NgxStackEffectsService {
  public hoverIndex: number;
  public activation: Subject<StackerStatus> = new Subject<StackerStatus>();
  public elementSelected: Subject<HTMLElement> = new Subject<HTMLElement>();

  constructor() { }
}
