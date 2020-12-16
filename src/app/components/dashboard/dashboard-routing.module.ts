import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { Limitedpartner20Component} from './limitedpartner20/limitedpartner20.component'
import { Limitedpartner21Component} from './limitedpartner21/limitedpartner21.component';
import { Limitedpartner22Component} from './limitedpartner22/limitedpartner22.component';
import { Limitedpartner23Component} from './limitedpartner23/limitedpartner23.component';
import { Limitedpartner24Component} from './limitedpartner24/limitedpartner24.component';
import { Limitedpartner25Component} from './limitedpartner25/limitedpartner25.component';

// import { LP01Q2Component} from './LP01Q2-2020/LP01Q2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: "Default",
          breadcrumb: "Default"
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: "E-commerce",
          breadcrumb: "E-commerce"
        }
      },
      {
        path: 'university',
        component: UniversityComponent,
        data: {
          title: "University",
          breadcrumb: "University"
        }
      },
      {
        path: 'bitcoin',
        component: BitcoinComponent,
        data: {
          title: "Crypto",
          breadcrumb: "Crypto"
        }
      },
      {
        path: 'server',
        component: ServerComponent,
        data: {
          title: "Server",
          breadcrumb: "Server"
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      },
      {
        path: 'limitedpartner01',
        component: Limitedpartner01Component,
        data: {
          title: "limitedpartner01",
          breadcrumb: "limitedpartner01"
        }
      },
      {
        path: 'limitedpartner02',
        component: Limitedpartner02Component,
        data: {
          title: "limitedpartner02",
          breadcrumb: "limitedpartner02"
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      },
      {
        path: 'limitedpartner01',
        component: Limitedpartner01Component,
        data: {
          title: "limitedpartner01",
          breadcrumb: "limitedpartner01"
        }
      },
      {
        path: 'limitedpartner02',
        component: Limitedpartner02Component,
        data: {
          title: "limitedpartner02",
          breadcrumb: "limitedpartner02"
        }
      },
      {
        path: 'limitedpartner03',
        component: Limitedpartner03Component,
        data: {
          title: "limitedpartner03",
          breadcrumb: "limitedpartner03"
        }
      },
      {
        path: 'limitedpartner02',
        component: Limitedpartner02Component,
        data: {
          title: "limitedpartner02",
          breadcrumb: "limitedpartner02"
        }
      },
      {
        path: 'limitedpartner04',
        component: Limitedpartner04Component,
        data: {
          title: "limitedpartner04",
          breadcrumb: "limitedpartner04"
        }
      },
      {
        path: 'limitedpartner05',
        component: Limitedpartner05Component,
        data: {
          title: "limitedpartner05",
          breadcrumb: "limitedpartner05"
        }
      },
      {
        path: 'limitedpartner06',
        component: Limitedpartner06Component,
        data: {
          title: "limitedpartner06",
          breadcrumb: "limitedpartner06"
        }
      },
      {
        path: 'limitedpartner07',
        component: Limitedpartner07Component,
        data: {
          title: "limitedpartner07",
          breadcrumb: "limitedpartner07"
        }
      },
      {
        path: 'limitedpartner08',
        component: Limitedpartner08Component,
        data: {
          title: "limitedpartner08",
          breadcrumb: "limitedpartner08"
        }
      },
      {
        path: 'limitedpartner09',
        component: Limitedpartner09Component,
        data: {
          title: "limitedpartner09",
          breadcrumb: "limitedpartner09"
        }
      },
      {
        path: 'limitedpartner10',
        component: Limitedpartner10Component,
        data: {
          title: "limitedpartner10",
          breadcrumb: "limitedpartner10"
        }
      },   {
        path: 'limitedpartner11',
        component: Limitedpartner11Component,
        data: {
          title: "limitedpartner11",
          breadcrumb: "limitedpartner11"
        }
      },   {
        path: 'limitedpartner12',
        component: Limitedpartner12Component,
        data: {
          title: "limitedpartner12",
          breadcrumb: "limitedpartner12"
        }
      },   {
        path: 'limitedpartner13',
        component: Limitedpartner13Component,
        data: {
          title: "limitedpartner13",
          breadcrumb: "limitedpartner13"
        }
      },  
       {
        path: 'limitedpartner14',
        component: Limitedpartner14Component,
        data: {
          title: "limitedpartner14",
          breadcrumb: "limitedpartner14"
        }
      },
      {
        path: 'limitedpartner15',
        component: Limitedpartner15Component,
        data: {
          title: "limitedpartner15",
          breadcrumb: "limitedpartner15"
        }
      },
      
      {
        path: 'limitedpartner16',
        component: Limitedpartner16Component,
        data: {
          title: "limitedpartner16",
          breadcrumb: "limitedpartner16"
        }
      },
      {
        path: 'limitedpartner17',
        component: Limitedpartner17Component,
        data: {
          title: "limitedpartner17",
          breadcrumb: "limitedpartner17"
        }
      },
      {
        path: 'limitedpartner18',
        component: Limitedpartner18Component,
        data: {
          title: "limitedpartner18",
          breadcrumb: "limitedpartner18"
        }
      },
      {
        path: 'limitedpartner19',
        component: Limitedpartner19Component,
        data: {
          title: "limitedpartner19",
          breadcrumb: "limitedpartner19"
        }
      },
      {
        path: 'limitedpartner20',
        component: Limitedpartner20Component,
        data: {
          title: "limitedpartner20",
          breadcrumb: "limitedpartner20"
        }
      },
      {
        path: 'limitedpartner21',
        component: Limitedpartner21Component,
        data: {
          title: "limitedpartner21",
          breadcrumb: "limitedpartner21"
        }
      },
      {
        path: 'limitedpartner22',
        component: Limitedpartner22Component,
        data: {
          title: "limitedpartner22",
          breadcrumb: "limitedpartner22"
        }
      },
      {
        path: 'limitedpartner23',
        component: Limitedpartner23Component,
        data: {
          title: "limitedpartner23",
          breadcrumb: "limitedpartner23"
        }
      },
      {
        path: 'limitedpartner24',
        component: Limitedpartner24Component,
        data: {
          title: "limitedpartner24",
          breadcrumb: "limitedpartner24"
        }
      },
      {
        path: 'limitedpartner25',
        component: Limitedpartner25Component,
        data: {
          title: "limitedpartner25",
          breadcrumb: "limitedpartner25"
        }
      },

     
      // {
      //   path: 'LP01Q2',
      //   component: LP01Q2Component,
      //   data: {
      //     title: "LP01Q2",
      //     breadcrumb: "LP01Q2"
      //   }
      // },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
