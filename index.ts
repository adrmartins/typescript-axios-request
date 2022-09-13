import axios from 'axios';
import * as https from 'https';

const call = async () => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
    {
      httpsAgent,
    }
  );

  console.log(data);
};

call();
