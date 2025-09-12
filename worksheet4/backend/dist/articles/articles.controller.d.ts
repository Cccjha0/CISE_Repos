import { ArticlesService } from './articles.service';
import { Article } from './articles.schema';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    findAll(): Promise<Article[]>;
    create(article: Article): Promise<Article>;
    findOne(id: string): Promise<Article | null>;
}
