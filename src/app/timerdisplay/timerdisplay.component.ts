import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timerdisplay',
  templateUrl: './timerdisplay.component.html',
  styleUrls: ['./timerdisplay.component.scss']
})
export class TimerdisplayComponent implements OnInit {
  @Input() bornTime!: string;
  @Input() lastBreedTime!: string;
  @Input() bloodLine!: string;
  @Input() breedCount!: string;
  readyToBreed: string | undefined
  readyToRent: string | undefined
  constructor() { }

  ngOnInit(): void {
    let lastBreedDate = new Date();
    lastBreedDate.setTime(+this.lastBreedTime*1000)
    let bornDate = new Date();
    bornDate.setTime(+this.bornTime*1000)
    let breedTimeDiff = 0
    let dateNow = new Date();

    let coolDown = getCoolDownToBreed(this.bloodLine)

    if(+this.breedCount === 0){
      bornDate.setUTCDate(bornDate.getUTCDate() + 4)
      breedTimeDiff = dateNow.getTime() - bornDate.getTime()
      if(breedTimeDiff > 0){
        this.readyToBreed = "Now"
      }else{
        this.readyToBreed = bornDate.toLocaleString();
      }
      
    }else{
      lastBreedDate.setUTCDate(lastBreedDate.getUTCDate() + coolDown)
      breedTimeDiff = dateNow.getTime() - lastBreedDate.getTime()
      if(breedTimeDiff > 0){
        this.readyToBreed = "Now"
      }else{
        this.readyToBreed = lastBreedDate.toLocaleString();
      }
      
    }


    this.readyToRent =  breedTimeDiff.toString()

  }

}
function getCoolDownToBreed(bloodLine: string):number {
  if(bloodLine === "Hoz"){
    return 1;
  }else if (bloodLine === "Campona" ) {
    return 2;
  }else if (bloodLine === "Klin") {
    return 3;
  }else if (bloodLine === "Zan") {
    return 4;
  } else {
    return 0
  }
}

