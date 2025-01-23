import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/base/base.component';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import {AppLogger} from '../../../../../../utility/common-functions';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})

export class HierarchyComponent extends BaseComponent implements OnInit {
  // Angular Variables
  @ViewChild('fruitInput') fruitInput: ElementRef;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  hierarchyForm: FormGroup;

  // Data  Variables
  teams = [];
  allTeams: any[] = [];

  // Other Variables
  filteredFruits: Observable<any[]>;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createHierarchyForm();
    this.initializationMethod();
  }

  // Initialization Method
  initializationMethod() {
    this.teams = ['Sales Support India'];
    this.allTeams = ['Sales Support India', 'IT Development', 'IT Maintenance'];

    this.filteredFruits = this.hierarchyForm.get('team_id').valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this.filter(fruit) : this.allTeams.slice()));
  }

  // create hierarchy Form
  createHierarchyForm() {
    this.hierarchyForm = this._fb.group({
      designation_id: new FormControl(''),
      service_id: new FormControl(''),
      team_id: new FormControl(''),
      parent_user_id: new FormControl('')
    });
  }

  // Events
  onSubmitHierarchyForm(formParams, isValid) {
    if (isValid) {
      AppLogger(formParams);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our team
    if ((value || '').trim()) {
      this.teams.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.hierarchyForm.get('team_id').setValue(null);
  }

  remove(fruit: any): void {
    const index = this.teams.indexOf(fruit);
    if (index >= 0) {
      this.teams.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allTeams.filter(fruit =>
      fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.teams.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.hierarchyForm.get('team_id').setValue(null);
  }
}
