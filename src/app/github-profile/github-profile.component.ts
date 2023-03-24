import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit{

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        console.log(params)
      })

      this.route.pathFromRoot.forEach(params => {
        console.log(params)
      })
  }

}
