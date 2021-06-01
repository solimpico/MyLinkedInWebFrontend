import {Component, OnInit, ViewChild} from '@angular/core';
import {SkilService} from '../../services/skil.service';
import {Skil} from '../../model/skil';

@Component({
  selector: 'app-skil',
  templateUrl: './skil.component.html',
  styleUrls: ['./skil.component.scss']
})
export class SkilComponent implements OnInit {

  allSkil: Skil[] = [];
  newSkil: Skil = {} as Skil;

  constructor(private skilService: SkilService) { }

  ngOnInit(): void {
   this.skilService.getAllSkils().subscribe(skils => {
     this.allSkil = skils;
   });
  }
  deleteSkil(skil: Skil): void{
    this.skilService.deleteSkil(skil).subscribe(() => {
      location.reload(true);
    });
  }
  addSkil(): void{
    this.skilService.addSkil(this.newSkil).subscribe((newSkil) => {
      this.allSkil.unshift(newSkil);
    });
  }

}
