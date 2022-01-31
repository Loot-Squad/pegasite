import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MOCKPEGAS } from '../mock-pegas';
import { Pega } from '../pega';
import { map } from 'rxjs/operators';
import { Pegas4addressService } from '../pegas4address.service';


@Component({
  selector: 'app-pegas',
  templateUrl: './pegas.component.html',
  styleUrls: ['./pegas.component.scss']
})
export class PegasComponent implements OnInit {
  dataSource = new MatTableDataSource<Pega>();
  displayedColumns: string[] = ['id', 'name', 'gender', 'bloodLine', 'breedCount', 'breedTimeStr', 'rentTimeStr','energy'];

  @ViewChild(MatSort, { static: false })
  sort: MatSort = new MatSort;
  @Input() walletAddress = '';
  constructor(private pegaService: Pegas4addressService) { }

  ngOnInit(): void {
    this.getPegas();
  }

  getPegas(): void {
    this.pegaService.getPegas(this.walletAddress)
    .pipe(
      map<Pega[],Pega[]>(res => res.map(pega =>  pega = this.PegaBreedDate(pega)))
    )
    .subscribe(res => {
      // Use MatTableDataSource for paginator
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    });
  }

  PegaBreedDate(pega: Pega): Pega {
    
    let lastBreedDate = new Date();
    lastBreedDate.setTime(pega.lastBreedTime*1000)
    let bornDate = new Date();
    bornDate.setTime(pega.bornTime*1000)
    let breedTimeDiff = 0
    let dateNow = new Date();

    let coolDown = this.getCoolDownToBreed(pega.bloodLine)


    let breedDate = new Date();
    // calc breed time
    if(pega.breedCount === 0){
      bornDate.setDate(bornDate.getUTCDate() + 4)
      breedTimeDiff = dateNow.getTime() - bornDate.getTime()
      if(breedTimeDiff > 0){
        pega.breedTimeStr = "Now"
      }else{
        pega.breedTimeStr = bornDate.toLocaleString();
      }
      
    }else{
      lastBreedDate.setUTCDate(lastBreedDate.getUTCDate() + coolDown)
      breedTimeDiff = dateNow.getTime() - lastBreedDate.getTime()
      if(breedTimeDiff > 0){
        pega.breedTimeStr = "Now"
      }else{
        pega.breedTimeStr = lastBreedDate.toLocaleString();
      }
    }

    bornDate.setTime(pega.bornTime*1000)
    // calc rent
    if (pega.rentTimeEnd != 0){
      pega.rentTimeStr = "Rented"
    }else{
      bornDate.setUTCDate(bornDate.getUTCDate() + coolDown)
      let rentTimeDiff = dateNow.getTime() - bornDate.getTime()
      if(rentTimeDiff > 0){
        pega.rentTimeStr = "Now"
      }else{
        pega.rentTimeStr = bornDate.toLocaleString();
      }
    }

    return pega
  }

  getCoolDownToBreed(bloodLine: string):number {
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
}
