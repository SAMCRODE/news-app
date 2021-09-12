import { New } from '../../models/New';
import * as requestFactory from '../../api/requestFactory';
import makeAuthedRequest from '../../api/authRequest';

export default function SaveNew(onSave: any) {
  const save = (obj: New) => {
    makeAuthedRequest(requestFactory.saveNews(obj)).then((response) => {
        if(response){
            onSave(response.news)
        }
    })
  };

  return { save };
}
