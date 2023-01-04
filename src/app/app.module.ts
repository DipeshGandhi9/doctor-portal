import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
// import { QuillModule } from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './component/patients/patients.component';
import { ConsultingComponent } from './component/opd/consulting.component';
import { PatientDetailsComponent } from './component/patients/patient-details/patient-details.component';
import { ConsultingDetailsComponent } from './component/opd/consulting-details/consulting-details.component';
import { StoreModule } from './store';
import { DataStoreService } from './global-provider/data-store/data-store.service';
import { LoginComponent } from './authorization/login/login.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    ConsultingComponent,
    PatientDetailsComponent,
    ConsultingDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    NgbModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    StoreModule,
    // QuillModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
  })
  ],
  providers: [DataStoreService,MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
