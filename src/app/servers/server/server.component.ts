import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  id: number;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(this.id);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = parseInt(params['id']);
        this.server = this.serversService.getServer(this.id);
      }
    );
  }

}
