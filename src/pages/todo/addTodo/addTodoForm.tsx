import React from 'react';
import { useForm ,SubmitHandler  } from 'react-hook-form';
import { FormValues } from '../model/todo';
import { TodoService } from '../services/todo.service';
// import { yupResolver } from '@hookform/resolvers/yup';
// import schema from '../schema/addTodo';


const todoService = new TodoService();

const AddTodoForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    //  resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    todoService.userSubmit(data);
  }

  return (
     <div>
        <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName")} />
              <input {...register("lastName")} />
              <input type="email" {...register("email")} />
              <input type="submit" />
        </form>
       </div>
  );
};

export default AddTodoForm;