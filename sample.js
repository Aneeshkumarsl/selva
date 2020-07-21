function getSelectRule(element, index, array) { 
   return (element.value === paymentmthd.value); 
} 
          
var ruleRoute = fields[0].rule.filter(getSelectRule); 
console.log("ruleRoute  : " + ruleRoute );



s = fields[0].rule.filter(rule => rule.value === paymentmthd.value)

html -------------------------------------------------------

 <ng-container *ngFor="let message of messages; let i = index" #message>
      <div long-press (onLongPress)="onLongPress(i,messages)" 
        class="chat-area"
        [ngClass]="{
          from: message.author === 'bot',
          to: message.author === 'user'
        }"
      >
        {{ message.content }}
        <!-- <input type = "radio"  *ngIf="activeIndex == i ? true : false"/> -->
        <mat-checkbox *ngIf="enableCheckBox" class="checkboxStyle" value="{{message.content}}"  (change)="onCheckboxChange(message,$event)"></mat-checkbox>
        <div *ngIf="message.Image !== '' &&  message.fileType === 'image' ">
          <img [src]="message.Image" style="width: 100%;
          height: auto;" alt="Preview" (click)="openModal($event,message.imageName, message.Image)"  />
      </div>
      <div *ngIf="message.fileType === 'application'">
        <img src="https://image.flaticon.com/icons/svg/281/281760.svg" style="width: 35px;" />
        <p>{{message.imageName}}</p>
      </div>
        <div class="timeStamp">
          <span class="messageDate">{{
            message.timeStamp | date: "dd/MM/yyyy"
          }}</span>
          <span class="messageTime">{{
            message.timeStamp | date: "h:mm a"
          }}</span>
        </div>
      </div>
    </ng-container>

-------------------------------------------------------------------------end

ts

 activeIndex: any;
  onLongPress(i: any, value: any) {
    console.log("dddd", i, value);
    this.activeIndex = value.length;
    if (this.activeIndex === this.messages.length) {
      this.enableCheckBox = true;
      console.log("anus", value.length, value.length - 1);
    }
    // else {
    // this.enableCheckBox = false
    // }
    console.log(value.length, "aaaaa");
  }

