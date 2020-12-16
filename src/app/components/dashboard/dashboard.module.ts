import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CountToModule } from 'angular-count-to';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { Limitedpartner01Component} from './limitedPartner01/limitedpartner01.component';
import { Limitedpartner02Component} from './limitedpartner02/limitedpartner02.component';
import { Limitedpartner03Component} from './limitedpartner03/limitedpartner03.component';
import { Limitedpartner04Component} from './limitedpartner04/limitedpartner04.component';

import { Limitedpartner05Component} from './limitedpartner05/limitedpartner05.component';
import { Limitedpartner06Component} from './limitedpartner06/limitedpartner06.component';
import { Limitedpartner07Component} from './limitedpartner07/limitedpartner07.component';
import { Limitedpartner08Component} from './limitedpartner08/limitedpartner08.component';
import { Limitedpartner09Component} from './limitedpartner09/limitedpartner09.component';
import { Limitedpartner10Component} from './limitedpartner10/limitedpartner10.component';
import { Limitedpartner11Component} from './limitedpartner11/limitedpartner11.component';
import { Limitedpartner12Component} from './limitedpartner12/limitedpartner12.component';
import { Limitedpartner13Component} from './limitedpartner13/limitedpartner13.component';
import { Limitedpartner14Component} from './limitedpartner14/limitedpartner14.component';
import { Limitedpartner15Component} from './limitedpartner15/limitedpartner15.component';



import { Limitedpartner16Component} from './limitedpartner16/limitedpartner16.component';
import { Limitedpartner17Component} from './limitedpartner17/limitedpartner17.component';
import { Limitedpartner18Component} from './limitedpartner18/limitedpartner18.component';
import { Limitedpartner19Component} from './limitedpartner19/limitedpartner19.component';
import { Limitedpartner20Component} from './limitedpartner20/limitedpartner20.component';
import { Limitedpartner21Component} from './limitedpartner21/limitedpartner21.component';
import { Limitedpartner22Component} from './limitedpartner22/limitedpartner22.component';
import { Limitedpartner23Component} from './limitedpartner23/limitedpartner23.component';
import { Limitedpartner24Component} from './limitedpartner24/limitedpartner24.component';
import { Limitedpartner25Component} from './limitedpartner25/limitedpartner25.component';


import { LP01Q12020Component} from './LP01Q12020/LP01Q12020.component';
// import { LP01Q32020Component} from './LP01Q22020/LP01Q22020.component';
// import { LP01Q22020Component} from './LP01Q32020/LP01Q32020.component';
// import { LP01Q42020Component} from './LP01Q42020/LP01Q420202.component';

// import { LP02Q1Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP02Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP02Q3Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP02Q4Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP03Q1Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP03Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP03Q3Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP03Q4Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP04Q1Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP04Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP04Q3Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP04Q4Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP112Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP112Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP11Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP11Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';



// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';



// import { LP01Q2Component} from './LP01Q2-2020/LP01Q2.component';

import { Uploadcomponent} from './upload/upload.component';

@NgModule({
  declarations: [
    DefaultComponent, 
    ECommerceComponent, 
    UniversityComponent, 
    BitcoinComponent, 
    ServerComponent, 
    ProjectComponent,
    Limitedpartner01Component,
    Limitedpartner02Component,
    Limitedpartner03Component,
    Limitedpartner04Component,
    Limitedpartner05Component,
    Limitedpartner06Component,
    Limitedpartner07Component,
    Limitedpartner08Component,
    Limitedpartner09Component,
    Limitedpartner10Component,
    Limitedpartner11Component,
    Limitedpartner12Component,
    Limitedpartner13Component,
    Limitedpartner14Component,

    Uploadcomponent,
    LP01Q12020Component

  

  ],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    ChartistModule,
    ChartsModule,
    CountToModule,
    DashboardRoutingModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class DashboardModule { }
