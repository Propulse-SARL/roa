import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { NgxChartsModule, Color, ScaleType, LegendPosition, ColorHelper } from '@swimlane/ngx-charts';
import { DimensionParentService } from '../../../dimension-parent.service';

@Component({
  selector: 'app-performences',
  imports: [
    CommonModule,
    NgxChartsModule,
  ],
  templateUrl: './performences.component.html',
  styleUrl: './performences.component.scss'
})

export class PerformencesComponent implements AfterViewInit {


  @ViewChild('chart1', { static: true }) chart1!: ElementRef;
  @ViewChild('chart2', { static: true }) chart2!: ElementRef;
  @ViewChild('chart3', { static: true }) chart3!: ElementRef;
  private chartResize = inject(DimensionParentService);

  view1: [number, number] =[0, 0];
  view2: [number, number] =[0, 0];
  view3: [number, number] =[0, 0];

  objectifsData = [
    {
      name: 'Objectifs',
      series: [
        { name: 'Semaine 1', value: 62 },
        { name: 'Semaine 2', value: 43 },
        { name: 'Semaine 3', value: 54 },
        { name: 'Semaine 4', value: 97 },
        { name: 'Semaine 5', value: 47 }
      ]
    }
  ];

  tachesData = [
    {name: 'Développement', value: 45},
    {name: 'Marketing', value: 25},
    {name: 'Design', value: 30},
  ]

  activitiesData = [
    { name: 'Lun', value: 8 },
    { name: 'Mar', value: 7 },
    { name: 'Mer', value: 6 },
    { name: 'Jeu', value: 8 },
    { name: 'Ven', value: 5 },
  ]
  ngAfterViewInit(): void {
    this.updateViews();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateViews();
  }

  updateViews() {
    this.view1 = this.chartResize.getViewDimensions(this.chart1);
    this.view2 = this.chartResize.getViewDimensions(this.chart2);
    this.view3 = this.chartResize.getViewDimensions(this.chart3);
  }

  colorScheme: Color = {
    name: 'Custom Scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#008B1DFF', '#6d8d1c', '#274754', '#e8c468']
  };
  activitiesColorScheme: Color = {
    name: 'Activities Scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#008B1DFF']
  }

  getColor(name: string){
    const color = new ColorHelper(this.colorScheme, ScaleType.Ordinal, this.tachesData.map(d => d.name),this.colorScheme);
    return color.getColor(name);
  }

  yAxisTickFormating = (value: number) => `${value}%`
  legendPosition: LegendPosition = LegendPosition.Below;

}
