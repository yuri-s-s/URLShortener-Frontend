import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlShortenerService } from 'src/app/shared/services/url-shortener.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit {

  urlId: string | null = "";

  shortenedUrl!: string;

  originalUrl!: string;

  clicksQtd!: number; 

  highcharts = Highcharts;

  chartOptions: any;

  constructor(public urlShortenerService :UrlShortenerService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('url');

    let clicks;

    this.urlShortenerService.urlDetails(this.urlId).subscribe(
      (data) => {

        this.shortenedUrl = data.shortenedUrl;
        this.originalUrl = data.originalUrl;
        this.clicksQtd = data.clicksQtd;

        clicks = data.clicks.map( (c: any) => {

          const date = new Date(c["createdAt"]);

          return `${date.getDate()} of ${date.getMinutes() + 1}`;

        })

        const reducedClicks: [] = clicks.reduce((cnt: any, cur: any) => 
        (cnt[cur] = cnt[cur] + 1 || 1, cnt), {})

        let arraykeys: any = []
        let arrayValues: any = []

        Object.entries(reducedClicks).map((click)=> {
          arraykeys.push(click[0]);
          arrayValues.push(click[1]);
          
        })

        this.details(arraykeys, arrayValues);

      }

    )


  }

  details(arraykeys: any, arrayValues: any) {

    this.chartOptions = {  
      colors: ['#000000'],
      plotOptions: {scatter: {
        marker: {
          lineColor: "#fffff",
          radius: 20

        }
      },} ,
      chart: {
        type: "line",
        zoomType: 'xy',
      },
      title: {
        text: "Numero de clicks"
      },
      xAxis:{
        categories: arraykeys,
      },
      yAxis: {          
        title:{
            text:"Clicks"
        },


      },
      credits: {
        enabled: false
    },
      series: [{
          data: arrayValues,    
       }],        
      
    };
    
  }


}
