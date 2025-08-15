import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DimensionParentService {

  getViewDimensions(element: ElementRef): [number, number]{
    const width = element.nativeElement.offsetWidth;
    const height = element.nativeElement.offsetHight;
    return [width, height]
  }
}
