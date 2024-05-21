import { Component, Inject, Input, OnInit, Output, output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Category } from '../category';
import { EventEmitter } from 'stream';
import { MatError } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';


export interface DialogData {
  actionName: string;
}

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [MaterialModule, MatError, MatCommonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})

export class CategoryFormComponent implements OnInit{

  public categoryForm!: FormGroup;
  public emitForm: boolean = false;
  //public editedData: any;
  //public editTableForm !: Category;
  //public isFormReady = true;

  @Input() public actionName = 'Fixo';
  @Input() public editableCategory!: Category;

  
  positionFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);

  constructor(public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ){

    if(data.actionName != null) {
        this.actionName = data.actionName
    }
  };

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      position: [this.editableCategory != null ? this.editableCategory.position : '', Validators.required],
      name: [this.editableCategory != null ? this.editableCategory.name :'', Validators.required],
      weight: this.editableCategory != null ? this.editableCategory.weight : '',
      symbol: this.editableCategory != null ? this.editableCategory.symbol : '',
      });

      //this.isFormReady = true;
  }

  
public clickCancelar () {
this.dialogRef.close(false)   
}

public clickSalvar () {
  if (this.categoryForm.valid) {
    
    console.log(this.categoryForm.value)

    // Obtenha os dados do formulário
    const dadosAtualizados : Category = this.categoryForm.value;

    console.log("clickSalvar acionado")

    // Emita os dados atualizados de volta ao componente pai
    this.dialogRef.close(dadosAtualizados);
    }
  }
}
