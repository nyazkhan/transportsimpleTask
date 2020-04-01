import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  fromList = ['agra', 'delhi', 'assam', ' bihar', 'goa', 'haryana', 'kerala'];
  fromListCopy = ['agra', 'delhi', 'assam', ' bihar', 'goa', 'haryana', 'kerala'];
  selectedFrom = 'Chose';
  newItemFrom = '';
  addItemFromShow = true;
  toList = ['nagaland', 'odisha', 'punjab', 'sikkim', 'tamil nadu', 'telangana'];
  toListCopy = ['nagaland', 'odisha', 'punjab', 'sikkim', 'tamil nadu', 'telangana'];
  selectedTo = 'Chose';
  newItemTo = '';
  addItemToShow = true;


  constructor() { }

  ngOnInit() {

    this.stopClick();
  }

  stopClick() {
    $('#Drpdwn').on('hide.bs.dropdown', (e) => {
      if (e.clickEvent) {
        e.preventDefault();
      }
    });
  }
  startClick() {
    $('#Drpdwn').unbind('hide.bs.dropdown');

  }

  searchFromList(event, ind) {
    const val = event.target.value.toLowerCase();
    console.log(val);

    if (val && val.trim() !== '') {

      if (ind == 1) {
        this.fromList = this.fromListCopy.filter(element => {
          return element.toLowerCase().startsWith(val);

        });
      }
      if (ind == 2) {


        this.toList = this.toListCopy.filter(element => {
          return element.toLowerCase().startsWith(val);

        });
      }
    } else {
      this.toList = this.toListCopy;
      this.fromList = this.fromListCopy;
    }
  }

  remove(val) {
    if (val == 1) {
      this.newItemFrom = '';
      this.addItemFromShow = true;
    }
    if (val == 2) {
      this.newItemTo = '';
      this.addItemToShow = true;
    }
  }
  add(val) {
    if ((val == 1) && (this.newItemFrom !== '')) {
      this.fromList.push(this.newItemFrom);
      this.fromListCopy.push(this.newItemFrom);
    }

    if ((val == 2) && (this.newItemFrom !== '')) {
      this.toList.push(this.newItemTo);
      this.toListCopy.push(this.newItemTo);
    }
    this.remove(val);

  }



  setValue(item, val) {
    if (val == 1) {

      this.selectedFrom = item;
    }
    if (val == 2) {
      this.selectedTo = item;
    }
    this.startClick();
    setTimeout(() => {

      this.stopClick();
    }, 10);
  }
}
