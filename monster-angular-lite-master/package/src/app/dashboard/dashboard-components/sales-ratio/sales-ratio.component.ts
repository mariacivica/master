import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  plotOptions: ApexPlotOptions | any;
};

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html'
})
export class SalesRatioComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;

  constructor() {
    this.salesChartOptions = {
      series: [
        {
          name: "2022",
          data: [80, 99, 50, 30, 10, 50, 30, 30, 40, 5, 30, 15],
        },
        {
          name: "2023",
          data: [90, 90, 98, 60, 50, 40, 60, 60, 80, 88, 40, 0],
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 265,
        type: 'bar',
        toolbar: {
          show: false
        },
        stacked: false,
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          barHeight: '70%',
          borderRadius: 5,
        },
      },
      colors: ["#FFAD32", "#FF5038", "#333333"],
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      grid: {
        strokeDashArray: 3,
      },
      markers: {
        size: 3
      },
      xaxis: {
        categories: [
          "Ingeniería de Datos",
          "Análisis de Datos",
          "Front-end",
          "Back-end",
          "IA",
          "x",
          "x",
          "x",
          "x",
          "x",
          "x",
          "x"
        ],
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }

  ngOnInit(): void {
  }

}
