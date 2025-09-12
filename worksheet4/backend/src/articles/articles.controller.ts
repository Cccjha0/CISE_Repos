import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './articles.schema';

@Controller('api/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Post()
  async create(@Body() article: Article): Promise<Article> {
    return this.articlesService.create(article);
  }

  // Optional: @Get(':id') for single article (from Worksheet 2, step 14)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article | null> {
    return this.articlesService.findOne(id);  // Add findOne to service if needed
  }
}