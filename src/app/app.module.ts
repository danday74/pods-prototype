import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgOptimizedImage } from '@angular/common'
import { SavePodsModalModule } from './modules/save-pods-modal/save-pods-modal.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage,
    SavePodsModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
