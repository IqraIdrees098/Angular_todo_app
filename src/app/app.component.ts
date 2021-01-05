import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "my-first-app";
  todos: Todo = [];
  name = "";
  editable = false;
  addButton = "add";
  editableIndex = "";

  Add(){
    if(this.editable == true){
      const TodosList: Todo = {
        name: this.name,
        editable: this.editable
      }
      this.todos.splice(this.editableIndex,1,TodosList);
      this.addButton = "Add";
      this.editable = false;

    }
    else{
      const TodosList: Todo = {
        name: this.name,
        editable: this.editable
      }
      this.todos.splice(0,0,TodosList);
      this.name ="";
    }
   
  }
  Delete(index){
    this.todos.splice(index,1);
  }
  Edit(item, index){
    this.editable = true;
    this.addButton ="Update";
    this.name = item;
    this.editableIndex = index;
  }
 
}
