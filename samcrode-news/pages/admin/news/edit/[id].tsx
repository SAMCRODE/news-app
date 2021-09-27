import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import makeRequest from '../../../../api/axios';
import SaveNew from '../../../../functions/news/save';
import { New } from '../../../../models/New';
import FormNew from '../../../../components/admin/common/Form';
import * as requestFactory from '../../../../api/requestFactory';

const NewsEdit = () => {
  const router = useRouter();
  const [news, setNews] = useState<New>({
  });
  const newsId = router.query.id;

  const {save} = SaveNew((response: New) => {
    router.push(`/news/${response.Id}`)
  });

  useEffect(() => {
    if(newsId){
      makeRequest(requestFactory.getNewDetail(newsId)).then((response) => {
        if(response){
          setNews(response.post);
        }
      })
    }
  }, [newsId]);

  return (
    <FormNew
      setNews={setNews}
      news={news}
      save={save}
    />
  );
};

export default NewsEdit;
