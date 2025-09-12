import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import formStyles from '../../styles/Form.module.scss'; // Ensure styles exist

interface FormData {
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  linked_discussion: string;
}

export default function SubmissionForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/articles', {
        title: data.title,
        authors: data.authors,
        source: data.source,
        pubyear: data.pubyear,
        doi: data.doi,
        claim: 'Test-Driven Development', // Assuming TDD for now; adjust per dropdown
        evidence: data.linked_discussion,
      });
      console.log('Article submitted:', response.data);
      reset(); // Clear form after submission
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
      <input {...register('title')} placeholder="Title" required />
      <p>
        <input {...register('authors')} placeholder="Authors" required />
      </p>
      <p>
        <input {...register('source')} placeholder="Source" required />
      </p>
      <p>
        <input {...register('pubyear')} placeholder="Publication Year" type="number" required />
      </p>
      <p>
        <input {...register('doi')} placeholder="DOI" />
      </p>
      <select {...register('linked_discussion')} required>
        <option value="">Select SE practice...</option>
        <option value="Strong support">TDD - Strong support</option>
        <option value="Weak support">TDD - Weak support</option>
        <option value="Weak against">TDD - Weak against</option>
      </select>
      <input type="submit" value="Submit Article" />
    </form>
  );
}