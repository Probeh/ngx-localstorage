import { NgModule } from '@angular/core';
import { NgxStorageRoutingModule } from './ngx-localstorage.routing';
import { NgxStorageComponent } from './ngx-storage.component';

@NgModule({
  imports: [ NgxStorageRoutingModule ],
  declarations: [ NgxStorageComponent ],
  exports: [ NgxStorageComponent ],
})
export class NgxStorageModule { }
