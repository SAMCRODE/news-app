import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SaveNew from '../../../../functions/news/save';
import { New } from '../../../../models/New';
import FormNew from '../../../../components/admin/common/Form';

const NewsCreate = () => {
  const router = useRouter();
  const [news, setNews] = useState<New>({
  });
  const { save } = SaveNew((response: New) => {
    router.push(`/news/${response.Id}`);
  });

  return (
    <FormNew
      setNews={setNews}
      news={news}
      save={save}
    />
  );
};

export default NewsCreate;
