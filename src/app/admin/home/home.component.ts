import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DietPlanService } from 'src/app/services/diet-plan.service';
import { FooditemsService } from 'src/app/services/fooditems.service';
// export interface User{
//   "Food": String,
//   "Measure": String,
//   "Grams": Number,
//   "Calories": Number,
//   "Protein": Number,
//   "Fat": Number,
//   "Sat.Fat": Number,
//   "Fiber": Number,
//   "Carbs": Number,
//   "Category": String
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gdata:any;
  searchText:any;
  constructor(private cs:FooditemsService, private dietPlanService: DietPlanService,private matSnackBar: MatSnackBar ){
   
    this.getProducts()
  }

  removeItem(id: any){
    this.dietPlanService.removeDietPlan(id).subscribe(res =>{
      this.matSnackBar.open(`product removed from plan`,'Ok',{duration: 3000});
      this.getProducts()

    });}

    getProducts(){
      this.gdata = this.cs.getProducts().subscribe({
        next: (data:any) => this.gdata = data,
        error:()=>this.gdata = []
      })
    }
  }


