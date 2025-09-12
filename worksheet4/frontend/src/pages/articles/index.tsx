import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import SortableTable from '../../components/table/SortableTable';

interface ArticlesInterface {
  id: string;
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
}

interface BackendArticle {
  _id: string;
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
}

type ArticlesProps = {
  articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: 'title', label: 'Title' },
    { key: 'authors', label: 'Authors' },
    { key: 'source', label: 'Source' },
    { key: 'pubyear', label: 'Publication Year' },
    { key: 'doi', label: 'DOI' },
    { key: 'claim', label: 'Claim' },
    { key: 'evidence', label: 'Evidence' },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      <SortableTable headers={headers} data={articles} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ArticlesProps> = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/articles');
    const articles: ArticlesInterface[] = response.data.map((article: BackendArticle) => ({
      id: article._id?.toString() || '',
      title: article.title || '',
      authors: article.authors || '',
      source: article.source || '',
      pubyear: article.pubyear || '',
      doi: article.doi || '',
      claim: article.claim || '',
      evidence: article.evidence || '',
    }));

    return { props: { articles } };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { props: { articles: [] } };
  }
};

export default Articles;