import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  parentRouteId: number;
   sub: any;

  constructor(private router: Router,    private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.router)
    // this.sub = this.router.routerState.parent(this.route)
    //   .params.subscribe(params => {
    //     this.parentRouteId = +params["id"];
    //   });
  }

}
