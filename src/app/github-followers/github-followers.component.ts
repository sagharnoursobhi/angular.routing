import { Component, OnInit } from '@angular/core';


type FollowersType = {
  name: string,
  id: number
}

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent {

  listOfFollowers: FollowersType[] = [ 
    { name: 'Sara', id: 1 }, 
    { name: 'Stephan', id: 2 }, 
    { name: 'Jack', id: 3 }, 
    { name: 'Jeorge', id: 4 }
  ]

}
