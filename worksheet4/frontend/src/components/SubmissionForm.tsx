import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// 定义表单数据类型，匹配后端 schema
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

  // onSubmit 使用 FormData 类型
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(process.env.BACKEND_URI + '/api/articles', {
        title: data.title,
        authors: data.authors,
        source: data.source,
        pubyear: data.pubyear,
        doi: data.doi,
        claim: data.linked_discussion, // 映射到 claim
        evidence: 'Pending', // 默认值，可根据需求调整
      });
      console.log('提交成功:', response.data);
      alert('文章提交成功！');
      reset(); // 清空表单
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交失败，请重试！');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} placeholder="Title" />
      <p>
        <input {...register('authors', { required: true })} placeholder="Authors" />
      </p>
      <p>
        <input {...register('source', { required: true })} placeholder="Source" />
      </p>
      <p>
        <input {...register('pubyear', { required: true })} placeholder="Publication Year" />
      </p>
      <p>
        <input {...register('doi')} placeholder="DOI" />
      </p>
      <select {...register('linked_discussion', { required: true })}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}