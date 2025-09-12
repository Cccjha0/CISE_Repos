import { Model } from 'mongoose';
import { Article, ArticleDocument } from './articles.schema';
export declare class ArticlesService {
    private articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    findAll(): Promise<Article[]>;
    create(article: Article): Promise<Article>;
    findOne(id: string): Promise<Article | null>;
}
