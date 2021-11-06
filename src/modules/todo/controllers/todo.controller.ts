import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";

import { CreateDto, UpdateDto } from "./dto";

@Controller("rest/todo")
export class TodoController {
  @Get()
  getAllActions(): string {
    return "getAllActions!";
  }

  @Post()
  saveAction(@Body() todo: CreateDto): CreateDto {
    return todo;
  }

  @Put(":id")
  updateAction(@Param("id") id: string, @Body() todo: UpdateDto): UpdateDto {
    console.log("Search by id", id);
    console.log(todo, "saved");
    return todo;
  }

  @Get(":id")
  getOneAction(@Param("id") id: string): string {
    return "Get One Action" + id;
  }

  @Delete(":id")
  deleteAction(@Param("id") id: string): string {
    return "Delete Action by id= " + id;
  }
}
