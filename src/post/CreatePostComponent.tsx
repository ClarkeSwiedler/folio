import React, { useState } from 'react';
import { Paper, Typography, Button, Grid } from '@material-ui/core';
import BlogPost from './BlogPost';

interface CreatePostProps {
  onPostCreated: (post: BlogPost ) => void;
}

export function CreatePost(props: CreatePostProps) {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handlePostCreate = () => {

  }

  
}