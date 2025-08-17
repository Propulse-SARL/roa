import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild, viewChild } from '@angular/core';
import { Color, ColorHelper, LegendPosition, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { DimensionParentService } from '../../../dimension-parent.service';
@Component({
  selector: 'app-performance',
  imports: [NgxChartsModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss'
})
export class PerformanceComponent implements AfterViewInit {

  @ViewChild('chart1', { static: true }) chart1!: ElementRef;
  @ViewChild('chart2', { static: true }) chart2!: ElementRef;
  view1: [number, number] = [0, 0]
  view2: [number, number] = [0, 0]
  private chartResize = inject(DimensionParentService);

  objectifQuotidienData = [
    { name: 'Terminé', value: 52 },
    { name: 'Inachevé', value: 18 }
  ]

  ngAfterViewInit(): void {
    this.view1 = this.chartResize.getViewDimensions(this.chart1);
    this.view2 = this.chartResize.getViewDimensions(this.chart2);
  }

  @HostListener('window:resize')
  onResize() {
    this.view1 = this.chartResize.getViewDimensions(this.chart1);
    this.view2 = this.chartResize.getViewDimensions(this.chart2);
  }
  objectifsHebdomadairesData = [
    {
      name: 'Objectifs hebdomadaire',
      series: [
        { name: "sem 1", value: 3 },
        { name: "sem 2", value: 5 },
        { name: "sem 3", value: 2 },
        { name: "sem 4", value: 6 },
      ]
    }
  ]

  legendPos: LegendPosition = LegendPosition.Below;
  colorScheme: Color = {
    name: 'Custom Scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#008B1DFF', '#6d8d1c', '#274754', '#e8c468']
  };

  getColor(name: string) {
    const color = new ColorHelper(this.colorScheme, ScaleType.Ordinal, this.objectifQuotidienData.map(d => d.name), this.colorScheme);
    return color.getColor(name);
  }
}
