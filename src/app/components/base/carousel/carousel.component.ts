// import { Component, OnInit } from '@angular/core';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.scss'],
//   providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
// })
// export class CarouselComponent implements OnInit {

//   showNavigationArrows = false;
//   showNavigationIndicators = false;
//   images = ['assets/images/c1.jpg','assets/images/c2.jpg','assets/images/c3.jpg']

//   constructor(config: NgbCarouselConfig) {
//     // customize default values of carousels used by this component tree
//     config.showNavigationArrows = true;
//     config.showNavigationIndicators = true;
//     // customize default values of carousels used by this component tree
//     config.interval = 10000;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//   }

//   ngOnInit() { }

// }



import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {GroceryItem} from 'src/models/grocery-item';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Item } from 'src//models/item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent  {
showNavigationArrows = false;
  showNavigationIndicators = false;

  images = ['assets/images/c1.jpg','assets/images/c2.jpg','assets/images/c3.jpg']


  createItem = '';
groceryItemsDoc: AngularFirestoreDocument<Item>;
groceryItems: Observable<GroceryItem[]>;
showLoginUserInputForm = false;
showCreateUserInputForm = false;

constructor(public afs: AngularFirestore, config: NgbCarouselConfig, public afAuth: AngularFireAuth) {
  
  
  config.showNavigationArrows = true;
  config.showNavigationIndicators = true;
  // customize default values of carousels used by this component tree
  config.interval = 10000;
  config.wrap = false;
  config.keyboard = false;
  config.pauseOnHover = false;

  this.afAuth.auth.onAuthStateChanged(user => {
    if (user) {
      // show email in welcome message
      // this.email = user.email;
      // call method that selects all items when user is authenticated
      this.selectItems(user.uid);
    }
  });
}

// async is not necessary here, but using it to control event loop
async addItem() {
  const id = this.afs.createId();
  const groceryItem: GroceryItem = {
    value: this.createItem,
    id: id
  };

  await this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').doc(id).set(groceryItem)
    .then(() => {
        // when successful clear input field value here
        this.createItem = '';
    })
    .catch((error) => {
      alert(error);
    });
}

// async is not necessary here, but using it to control event loop
async deleteItem(groceryItem: GroceryItem) {
  await this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').doc(groceryItem.id).delete()
    .catch((error) => { alert(error); });
}

selectItems(uid: string) {
  this.groceryItemsDoc = this.afs.doc<Item>('user/' + uid);
  this.groceryItems = this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').valueChanges();
  // // turn on logging if you want to see how the requests are sent
  // this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').auditTrail().subscribe(console.log);
}
}