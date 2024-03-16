import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule  } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    SplitButtonModule,
    ToolbarModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
