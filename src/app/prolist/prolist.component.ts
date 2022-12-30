import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProList } from './../Model/Prolist.model';
import { prolistService } from './../prolist.service';

@Component({
  selector: 'app-prolist',
  templateUrl: './prolist.component.html',
  styleUrls: ['./prolist.component.css']
})
export class ProlistComponent {
  pform!: FormGroup;
  pmodelobj: ProList = new ProList();
  showadd !: boolean;
  showupdate!: boolean;
  searchtext: string = '';
  plistdata: ProList[] = [];
  constructor(private prolistservice: prolistService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pform = this.fb.group({
      ProductId: [''],
      ProductCode: [''],
      ProductName: [''],
      Category: [''],
      Price: ['']
    })
    this.getvldata();
  }

  clickadddata() {
    this.pform.reset();
    this.showadd = true;
    this.showupdate = false;
  }

  getvldata() {
    this.prolistservice.getvlist().subscribe(res => {
      this.plistdata = res;
    })
  }

  postvlist() {
    this.pmodelobj.ProductId = this.pform.value.ProductId;
    this.pmodelobj.ProductCode = this.pform.value.ProductCode;
    this.pmodelobj.ProductName = this.pform.value.ProductName;
    this.pmodelobj.Category = this.pform.value.Category;
    this.pmodelobj.Price = this.pform.value.Price;
    this.prolistservice.addvlist(this.pmodelobj).subscribe(res => {
      console.log(res);
      alert("Data saved Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.pform.reset();
      this.getvldata();
    },
      err => {
        alert("Something Went Wrong");
      }
    )
  }

  deletelistdata(item:number) {
    this.prolistservice.deletevlist(item).subscribe(res => {
      alert("Data deleted Successfully");
    })
    this.getvldata();
  }

  onedit(data:ProList) {
    this.showadd = false;
    this.showupdate = true;
    this.pmodelobj.ProductId = data.ProductId;
    this.pform.controls['ProductCode'].setValue(data.ProductCode);
    this.pform.controls['ProductName'].setValue(data.ProductName);
    this.pform.controls['Category'].setValue(data.Category);
    this.pform.controls['Price'].setValue(data.Price);

  }

  onupdatelist() {
    this.pmodelobj.ProductCode = this.pform.value.ProductCode;
    this.pmodelobj.ProductName = this.pform.value.ProductName;
    this.pmodelobj.Category = this.pform.value.Category;
    this.pmodelobj.Price = this.pform.value.Price;
    this.prolistservice.updatevlist( this.pmodelobj.ProductId , this.pmodelobj).subscribe(res => {
      alert("Data Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.pform.reset();
      this.getvldata();
    })
  }

  key: string ='';
  reverse :boolean = false;
  sort(key:any){
    this.key=key;
    this.reverse =!this.reverse
    {} this.reverse;
  }
}
