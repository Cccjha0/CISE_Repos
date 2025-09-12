import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './articles.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().lean().exec(); // 添加 .lean()
  }

  async create(article: Article): Promise<Article> {
    const createdArticle = new this.articleModel(article);
    return createdArticle.save();
  }

  async findOne(id: string): Promise<Article | null> {
    return this.articleModel.findById(id).lean().exec(); // 可选：也添加 .lean()
  }
}