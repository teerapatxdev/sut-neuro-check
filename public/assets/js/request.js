async function Fetch({
  method = 'GET',
  path,
  data = null,
  isBasic = null,
  token = null,
}) {
  try {
    const url = `${path}`;
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: method,
      body:
        method === 'PATCH' || method === 'POST' || method === 'DELETE'
          ? JSON.stringify(data)
          : null,
    });
    const dataResponse = await res.json();
    if (dataResponse.code === 401) {
      localStorage.clear();
    }
    return dataResponse;
  } catch (error) {
    return { res: null, message: error };
  }
}
