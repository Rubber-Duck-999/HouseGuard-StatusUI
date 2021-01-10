import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlarmEventComponent } from './alarm-event/alarm-event.component';
import { AccessComponent } from './access/access.component';
import { FaultComponent } from './faults/fault.component';
import { HardwareComponent } from './hardware/hardware.component';
import { MotionComponent } from './motion/motion.component';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: AlarmEventComponent },
  { path: 'access', component: AccessComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'faults', component: FaultComponent },
  { path: 'hardware', component: HardwareComponent },
  { path: 'motion', component: MotionComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
