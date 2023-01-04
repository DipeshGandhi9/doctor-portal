import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';

import { SharedComponentRoutingModule } from './shared-component-routing.module';
import { TableComponent } from './table/table.component';
import { BlankComponent } from './blank/blank.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    TableComponent,
    BlankComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentRoutingModule,
    MegaMenuModule,
    SidebarModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    BlankComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
})
export class SharedComponentModule {}
