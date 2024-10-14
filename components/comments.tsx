import prisma from '@/lib/db';
import { format } from 'date-fns';
import { FC } from 'react';

interface CommentsProps {
  postId: string;
}
const Comments: FC<CommentsProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      author: true,
    },
  });

  return (
    <di
