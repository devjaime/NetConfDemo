import {Component} from '@angular/core';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent {
  progressInfoData = [
    {
      title: 'Beneficio de hoy',
      value: 572900,
      activeProgress: 70,
      description: 'Mejor que la semana pasada (70%)',
    },
    {
      title: 'Nuevos pedidos',
      value: 6378,
      activeProgress: 30,
      description: 'Mejor que la semana pasada (30%)',
    },
    {
      title: 'Nuevos comentarios',
      value: 200,
      activeProgress: 55,
      description: 'Mejor que la semana pasada (55%)',
    },
  ];
}
