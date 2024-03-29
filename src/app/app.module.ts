import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgOptimizedImage } from '@angular/common'
import { SavePodsModalModule } from './modules/save-pods-modal/save-pods-modal.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CreatePodModalModule } from './modules/create-pod-modal/create-pod-modal.module'
import { InitService } from './services/init.service'
import { ToastrModule } from 'ngx-toastr'

const initApp = (initService: InitService) => {
  return (): Promise<boolean> => {
    return initService.init()
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage,
    SavePodsModalModule,
    CreatePodModalModule,
    ToastrModule.forRoot({
      timeOut: 8000,
      progressBar: true,
      enableHtml: true
    })
  ],
  providers: [
    InitService,
    {provide: APP_INITIALIZER, useFactory: initApp, deps: [InitService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
