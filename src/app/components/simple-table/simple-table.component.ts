import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElement } from 'src/app/app.component';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class SimpleTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() dataSource: PeriodicElement[] = [];
}
