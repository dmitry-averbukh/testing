import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EbayListingHealper';
  temp: String;
  meas: String;
  shippingTime: String;
  inc: number;
  finalText: String;
  stateOption: String;


  constructor() {
    this.temp = '\n \n \n Look description !\n \n Look measurements on last photo !\n \n Bargaining possible !\n \n Follow this item !\n \n I immediately answer any offers and questions!\n \n \n Before you throw the product in, make sure you want to buy this product!\n \n Also, before leaving any feedback, or you do not like something, write better to me, I immediately answer all questions, and solve all problems regarding the product.\n \n \n Description :\n \n \n Condition : \n \n';
    this.inc = 0.39370078740157477;
    this.meas = '\n \n Measurements :\n \n \n'
    this.finalText = '...';
    this.shippingTime = '\n \n Look photos carefully!\n' +
      '\n' +
      'After buying look all photos and carefully reed description,it is very important!\n' +
      '\n' +
      '\n' +
      'Shipping time :\n' +
      '\n' +
      '\n' +
      'Shipping to UK,US,EU,Asia : 7-21 days,with tracking number.\n' +
      '\n' +
      'Shipping to Canada,Australia,Africa : 21-40 days,with tracking number.\n' +
      '\n' +
      '\n' +
      'Please, after you received the item, leave positive feedback,thanks';
    this.stateOption = 'штаны';
  }

  @ViewChild('headerInput') header: ElementRef | undefined;
  @ViewChild('conditionInput') condition: ElementRef | undefined;
  @ViewChild('shoulders') shoulders: ElementRef | undefined;
  @ViewChild('chest') chest: ElementRef | undefined;
  @ViewChild('length') length: ElementRef | undefined;
  @ViewChild('sleeve') sleeve: ElementRef | undefined;
  @ViewChild('out') out: ElementRef | undefined;

  ready() {
    const header = this.header?.nativeElement.value;
    const condition = this.condition?.nativeElement.value;
    const shl = this.shoulders?.nativeElement.value;
    const chs = this.chest?.nativeElement.value;
    const lng = this.length?.nativeElement.value;
    const sle = this.sleeve?.nativeElement.value;
    const out = this.out?.nativeElement.value;


    var shlInc: number = +shl * this.inc;
    var chsInc: number = +chs * this.inc;
    var lngInc: number = +lng * this.inc;
    var sleINC: number = +sle * this.inc;
    var outINC: number = +out * this.inc;

    if (this.stateOption === 'верхняя'){
      var a:String = 'Waist: ';
      var b:String = 'Long: ';
      var c:String = 'Inseam: ';
      var d:String = 'Front Rise: ';
      var e:String = 'Leg Opening:';
    } else {
      var a:String = 'Shoulders: ';
      var b:String = 'Chest: ';
      var c:String = 'Length: ';
      var d:String = 'Sleeve: ';
      var e:String = '';

    }

    var measurements: string = a + shl + ' cm/ ' + shlInc.toFixed(2) + ' inc.\n'
      + b +chs + ' cm/ ' + chsInc.toFixed(2) + ' inc.\n'
      + c +lng + ' cm/ ' + lngInc.toFixed(2) + ' inc.\n'
      + d +sle + ' cm/ ' + sleINC.toFixed(2) + ' inc.\n'
    if (this.stateOption === 'верхняя'){
      measurements = measurements + e + out + ' cm/ ' + outINC.toFixed(2) + ' inc.\n'
    }

    this.finalText = header + this.temp + condition + this.meas + measurements + this.shippingTime;
  }

  copyMessage(thisGoesToClipboard: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    // @ts-ignore
    selBox.value = this.finalText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  changeStateOption() {
    this.stateOption === 'штаны'? this.stateOption = 'верхняя': this.stateOption='штаны';
  }
}
