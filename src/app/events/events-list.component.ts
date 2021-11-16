import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService} from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

declare let toastr: { success: (arg0: any) => void; }

@Component({
  template: `
    <div>
      <h1>Upcoming</h1>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)= "handleThumbnailClick(event.name)"[event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `

})
export class EventListComponent implements OnInit{
  events:any | undefined

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
  }
}
