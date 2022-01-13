import { FormValues } from "../model/todo";

const axios = require('axios');

export class TodoService {
    userSubmit = (data :FormValues) => {
      console.log(data);
    }
}
