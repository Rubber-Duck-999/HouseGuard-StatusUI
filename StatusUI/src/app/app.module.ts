import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlarmEventComponent } from './alarm-event/alarm-event.component';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FaultComponent } from './faults/fault.component';
import { MotionComponent } from './motion/motion.component';
import { HardwareComponent } from './hardware/hardware.component';
import { AccessComponent } from './access/access.component';
import { DeviceComponent } from './device/device.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlarmEventComponent,
    FaultComponent,
    MotionComponent,
    HardwareComponent,
    AccessComponent,
    DeviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
